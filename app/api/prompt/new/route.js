import Prompt from "@model/prompt";
import { connectDB } from "@utils/database"

export const POST = async (req) => {
    const { userId, prompt, tag } = await req.json();
    try {
        await connectDB();
        
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        });

        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), {status: 200});
    } catch (error) {
        return new Response("Failed to create prompt!", {status: 500});
    }

}