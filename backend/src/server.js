import experess from "express";
import { ENV } from "./lib/env.js";

const app = experess();

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "success api is up and running ", status: 200 });
});

app.listen(ENV.PORT, () => {
  console.log("listening to the port", ENV.PORT);
});
