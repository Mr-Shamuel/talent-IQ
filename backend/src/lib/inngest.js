import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import User from "../model/User.js";

export const inngest = new Inngest({ id: "talent-id" });

const syncUser = inngest.createFunction(
  { id: "sync-user" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    await connectDB();

    const { id, email_addresses, first_name, last_name, image_url } =
      event.data;

    const newUser = {
      clerkId: id,
      email: email_addresses[0]?.email_address,
      name: `${first_name || ""} ${last_name || ""}`,
      profileImage: image_url,
    };

    if (!newUser.email) {
      console.warn("User email is missing, skipping creation:", event.data);
      return;
    }

    console.log("Creating user:", newUser);
    await User.create(newUser);
  }
);

const deleteUserFromDB = inngest.createFunction(
  { id: "delete-user-from-db" },
  { event: "clerk/user.deleted" }, // fixed typo
  async ({ event }) => {
    await connectDB();
    const { id } = event.data;
    console.log("Deleting user with clerkId:", id);
    await User.deleteOne({ clerkId: id });
  }
);

export const functions = [syncUser, deleteUserFromDB];
