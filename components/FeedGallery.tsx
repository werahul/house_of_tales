"use client";

import React from "react";

interface FeedGalleryProps {
  images: string[];
}

const FeedGallery: React.FC<FeedGalleryProps> = ({ images }) => {
  return (
    <section className="w-full lg:pt-[144px] pt-16 px-0 overflow-hidden">
      <h2 className="lg:text-[47px] text-[32px] mirage text-[#777461] text-center mb-0 uppercase">
        Glimpses
      </h2>

      <div className="feed-curve-wrapper">
        {/* Top curve */}
        <div className="curve top-curve" />

        <div className="feed-scroll-wrapper">
          <div className="feed-scroll-track">
            {[...images, ...images].map((img, index) => (
              <div key={index} className="feed-item">
                <img
                  src={img}
                  alt={`Feed ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom curve */}
        <div className="curve bottom-curve" />
      </div>
    </section>
  );
};

export default FeedGallery;
