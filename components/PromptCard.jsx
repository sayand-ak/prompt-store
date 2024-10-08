"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
    const { data: session } = useSession();
    const pathName = usePathname();
    const router = useRouter();
    const [copied, setCopied] = useState("");

    const handleProfileClick = () => {

        if (post.creator._id === session?.user.id) return router.push("/profile");

        router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
    };

    const handleCopy = () => {
        setCopied(post.prompt);
        navigator.clipboard.writeText(post.prompt);
        setTimeout(() => setCopied(false), 3000);
    };

    return (
        <div className='prompt_card'>
            <div className='flex justify-between items-start gap-5'>
                <div
                    className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
                    onClick={handleProfileClick}
                >
                    <Image
                        src={post.creator.image}
                        alt='user_image'
                        width={40}
                        height={40}
                        className='rounded-full object-contain'
                    />

                    <div className='flex flex-col'>
                        <h3 className='font-satoshi font-semibold text-white'>
                            {post.creator.username}
                        </h3>
                        <p className='font-inter text-sm text-white'>
                            {post.creator.email}
                        </p>
                    </div>
                </div>

                <div className='copy_btn' onClick={handleCopy}>
                    <Image
                        src={
                            copied === post.prompt
                                ? "/assets/icons/tick.svg"
                                : "/assets/icons/copy.svg"
                        }
                        alt={copied === post.prompt ? "tick_icon" : "copy_icon"}
                        width={15}
                        height={15}
                    />
                </div>
            </div>

            <p className='my-4 font-satoshi text-sm text-white truncate-paragraph'>
                {post.prompt}
            </p>

            <p
                className='absolute bottom-6 font-inter text-sm light_violet_gradient cursor-pointer font-semibold'
                onClick={() => handleTagClick && handleTagClick(post.tag)}
            >
                #{post.tag}
            </p>

            {session?.user.id === post.creator._id && pathName === "/profile" && (
                <div className='mt-5 flex-end gap-10 border-t text-white pt-3'>
                    <p
                        className='font-inter text-sm text-purple-400 cursor-pointer font-semibold'
                        onClick={handleEdit}
                    >
                        Edit
                    </p>
                    <p
                        className='font-inter text-sm orange_gradient cursor-pointer'
                        onClick={handleDelete}
                    >
                        Delete
                    </p>
                </div>
            )}
        </div>
    );
};

export default PromptCard;

