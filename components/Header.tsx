'use client'

import React from 'react';

const Header = () => {
    return (
        <div className="w-full lg:pt-0 pt-[110px]">
            <video
                src="/Videos/headVideoUpdated.mp4" // replace with your actual video path
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover lg:block hidden"
            />
            <video
                src="/Videos/headVideoUpdatedMobile.mp4" // replace with your actual video path
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover lg:hidden"
            />
        </div>
    );
};

export default Header;
