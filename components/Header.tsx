'use client'

import React from 'react';

const Header = () => {
    return (
        <div className="w-full">
            <video
                src="/Videos/headVideo.mp4" // replace with your actual video path
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover"
            />
        </div>
    );
};

export default Header;
