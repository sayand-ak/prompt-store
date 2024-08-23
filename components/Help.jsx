'use client';

import { FaQuestion } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion"



function Help() {
    const [showHelpDiv, setShowHelpDiv] = useState(false);

    return (
        <>
        <FaQuestion
            className="text-xl animate-bounce" 
            onClick={() => setShowHelpDiv(!showHelpDiv)}
        />

        {
            showHelpDiv && (
                <motion.div
                    animate={{ y: -630 }} 
                    className={`absolute w-[450px] mx-auto p-5 bg-white rounded-lg mt-10 right-0 md:right-8 z-[100px] shadow-lg`}
                >
                        <h1 class="text-xl font-bold text-gray-800 mb-6 text-center">How to Use PROMPTORA</h1>
                    <div class="border-l-4 border-violet-600 pl-4 mb-6">
                        <h2 class="text-sm font-semibold text-gray-800">Google Authentication</h2>
                        <p class="text-gray-600 text-sm mt-2">Sign in using your Google account for secure and easy access to the platform.</p>
                    </div>
                    <div class="border-l-4 border-violet-600 pl-4 mb-6">
                        <h2 class="text-sm font-semibold text-gray-800">Add a New Prompt</h2>
                        <p class="text-gray-600 text-sm mt-2">Create and tag new AI prompts to categorize and enhance searchability.</p>
                    </div>
                    <div class="border-l-4 border-violet-600 pl-4 mb-6">
                        <h2 class="text-sm font-semibold text-gray-800">Browse Prompts</h2>
                        <p class="text-gray-600 text-sm mt-2">Explore prompts created by others on the home page and discover new ideas.</p>
                    </div>
                    <div class="border-l-4 border-violet-600 pl-4 mb-6">
                        <h2 class="text-sm font-semibold text-gray-800">Search by Tag or Content</h2>
                        <p class="text-gray-600 text-sm mt-2">Find specific prompts quickly using keywords or tags to meet your AI needs.</p>
                    </div>
                    <div class="border-l-4 border-violet-600 pl-4 mb-6">
                        <h2 class="text-sm font-semibold text-gray-800">Copy Prompts for Easy Use</h2>
                        <p class="text-gray-600 text-sm mt-2">Effortlessly copy prompts to your clipboard for use in your preferred AI tool.</p>
                    </div>
                </motion.div>
            )
        }
        </>
    )
}

export default Help