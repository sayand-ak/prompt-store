'use client'
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
import debounce from 'lodash.debounce';
import Loader from "./Loader";
import Image from "next/image";


const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div className="mt-16 prompt_layout">
            {
                data.map((prompt) => (
                    <PromptCard
                        key={prompt._id}
                        post={prompt}
                        handleTagClick={handleTagClick}
                    />
                ))
            }
        </div>
    )
}


function Feed() {
    const [searchText, setSearchText] = useState("");
    const [allPosts, setAllPosts] = useState([]);
    const [loader, setLoader] = useState(false);

    const fetchSearchPosts = debounce(async () => {
            try {
                setLoader(true);
                const response = await fetch(`/api/prompt/search/${searchText}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                
                setAllPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoader(false);
            }
        }, 1000)

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);

        if(searchText != ""){
            fetchSearchPosts();
        }
        
    }

    const fetchPosts = async () => {
        const response = await fetch("/api/prompt");
        const data = await response.json();

        setAllPosts(data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleTagClick = (tag) => {
        setSearchText(tag);
        fetchSearchPosts();
    };

    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input
                    type="text"
                    placeholder="Search for tag or a username"
                    value={searchText}
                    onChange={handleSearchChange}
                    className="search_input peer"
                />
            </form>

            {
                !loader ? (
                    allPosts.length > 0 ? (
                        <PromptCardList
                            data={allPosts}
                            handleTagClick={handleTagClick}
                        />
                    ) : (
                        <div className="flex flex-col justify-center items-center min-h-[40vh]">
                            <iframe src="https://lottie.host/embed/947ea030-5d06-47a4-ac81-ae249c7beb88/klvhGDhvh3.json"></iframe>
                            <p className="text-gray-200">No prompt found!</p>
                        </div>
                    )
                ) : (
                    <Loader />
                )
            }
        </section>
    )
}

export default Feed;