'use client';

import { MagnifyingGlass } from 'react-loader-spinner';

function Loader({ dimension }) {
    return (
        <div className="relative flex flex-col justify-center items-center min-h-[40vh]">
            <MagnifyingGlass
                visible={true}
                height={dimension || "50"}
                width={dimension || "50"}
                ariaLabel="magnifying-glass-loading"
                wrapperStyle={{ position: "relative" }}
                wrapperClass="magnifying-glass-wrapper"
                glassColor="transparent"
                color="url(#gradient)" // Use an SVG gradient
            />
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "#8A2BE2", stopOpacity: 1 }} />
                        <stop offset="50%" style={{ stopColor: "#EE82EE", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "#FF69B4", stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
            </svg>
            <p className="text-gray-200">Search for prompts...</p>
        </div>
    );
}

export default Loader;
