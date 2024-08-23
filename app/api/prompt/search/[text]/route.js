import Prompt from "@model/prompt";
import { connectDB } from "@utils/database";

export const GET = async (req, { params }) => {
    try {
        await connectDB();

        // Extract search text from query parameters
        const searchText = params.text;

        console.log(searchText);
        

        // Create a case-insensitive regex pattern
        const regex = new RegExp(searchText, "i");

        // Find prompts that match the regex in the desired fields
        const prompts = await Prompt.find({
            $or: [
                { prompt: { $regex: regex } },
                { tag: { $regex: regex } },
            ]
        }).populate("creator");

        console.log(prompts);
        

        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch prompt!", { status: 500 });
    }
};
