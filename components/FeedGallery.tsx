"use client";

import React from "react";
import { motion } from "framer-motion";
// import "./FeedGallery.css"; // External styles

interface FeedGalleryProps {
  images: string[];
}

const FeedGallery: React.FC<FeedGalleryProps> = ({ images }) => {
  const repeatedImages = [...images, ...images];

  return (
    <section className=" w-full py-16 px-4 overflow-hidden">
      <h2 className="text-[47px] mirage text-[#34291E] text-center mb-8">
        ON THE FEED
      </h2>

      <div className="feed-curve-wrapper">
        {/* Top curve */}
        <div className="curve top-curve" />

        <div className="feed-scroll-container">
          <motion.div
            className="feed-scroll-track"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear",
            }}
          >
            {repeatedImages.map((img, index) => (
              <div key={index} className="feed-item">
                <img
                  src={img}
                  alt={`Feed ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom curve */}
        <div className="curve bottom-curve" />
      </div>
    </section>
  );
};

export default FeedGallery;
