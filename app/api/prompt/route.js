import Prompt from "@model/prompt";
import { connectDB } from "@utils/database"

export const GET = async (req) => {

    console.log("Current backend URL:", req.url);
    try {
        await connectDB();
        
        const prompts = await Prompt.find({}).populate("creator");

        return new Response(JSON.stringify(prompts), {status: 200});
    } catch (error) {
        return new Response("Failed to fetch prompt!", {status: 500});
    }

}