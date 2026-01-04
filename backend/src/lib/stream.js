import { ENV } from "./env";
import {StreamChat} from "stream-chat"

const apiKey= ENV.STREAM_API_KEY;
const apiSecret=ENV.STREAM_API_SECRET;
if(!apiKey|| !apiSecret)
{
    console.error("Stream api key or Api Secret is Missing !");
}

export const  chatClient =StreamChat.getInstance(apiKey,apiSecret);

export const upsertStreamUser = async (userData)=>{
    try {
        await chatClient.upsertUser(userData)
        console.log("Stream user upserted successfully",userData);
    } catch (error) {
        console.error("Error Upserting Stream User",error)
    }
}

export const deleteStreamUser =async (userId)=>{
    try {
        await chatClient.deleteUser(userId);
        console.log("User Deleted Successful",userId)
    } catch (error) {
        console.error("Error Deleting the Stream User");
    }
}


// todo add another methode generate token 