"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const videos = [
  {
    src: "https://ik.imagekit.io/4sivuylcu/wedding.MP4?updatedAt=1748887090322",
    label: "Wedding",
    des: "Full-day coverage capturing every emotion and ritual with warmth and authenticity.",
    poster: "/Posters/wed.png",
  },
  {
    src: "https://ik.imagekit.io/4sivuylcu/preWedding.mp4/ik-video.mp4?updatedAt=1748887092913",
    label: "Pre-Weddings",
    des: "A relaxed, creative shoot reflecting your chemistry, style, and unique love tale.",
    poster: "/Posters/pre.png",
  },
  {
    src: "https://ik.imagekit.io/4sivuylcu/engagement.mp4/ik-video.mp4?updatedAt=1748887092671",
    label: "Engagements",
    des: "Candid and elegant frames celebrating the joy and love of your special moment.",
    poster: "/Posters/eg.png",
  },
  {
    src: "https://ik.imagekit.io/4sivuylcu/specialEvents.mp4?updatedAt=1748887099815",
    label: "Special Events",
    des: "From haldi to sangeet, we capture the spirit of every heartfelt celebration.",
    poster: "/Posters/se.png",
  },
  {
    src: "https://ik.imagekit.io/4sivuylcu/customPackages.mp4/ik-video.mp4?updatedAt=1748887092797",
    label: "Custom Packages",
    des: "Looking for something more personal? We offer tailored packages made just for you.",
    poster: "/Posters/cp.png",
  },
];

const ExperienceWeProvideGsap = () => {
  const scrollSectionRef = useRef(null);
  const itemRefs = useRef([]);
  const [windowWidth, setWindowWidth] = useState(0);

  // Use framer-motion's scroll utilities
  const { scrollYProgress } = useScroll({
    target: scrollSectionRef,
    offset: ["start start", "end end"],
  });

  // Calculate the total width - similar to the original GSAP calculation
  const totalWidth = videos.length * 519 + (videos.length - 1) * 130; // 519px card + 100px gap

  useEffect(() => {
    // Set window width after component mounts (client-side only)
    setWindowWidth(window.innerWidth);

    // Handle window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Transform the scroll progress to x-position - only calculated after window is available
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    windowWidth ? [-totalWidth + windowWidth - 80, 0] : [0, 0]
  );

  return (
    <div className="overflow-hidden lg:pb-8 lg:pt-[144px] pt-20 relative">
      <div className="pb-10 px-5 lg:px-10 relative max-container">
        <h2 className="mirage lg:text-[47px] text-[32px] uppercase text-[#777461] mb-2 lg:text-left text-center">
          The Experience We Provide
        </h2>
        <p className="text-[16px] lg:text-[21px] text-[#777461] mb-6 lg:text-left text-center">
          From Ahmedabad, with heart - to wherever your tale unfolds
        </p>
        <div className="flex lg:items-start items-center lg:justify-start justify-center">
          <a href="https://wa.me/919106507703" target="_blank">
            <button className="w-[134px] h-[48px] border border-[#413326] bg-transparent rounded-[8px] text-[#413326] hover:bg-[#271f17] hover:text-white active:scale-95 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md">
              Get In Touch
            </button>
          </a>
        </div>
        <img
          src="/Images/bridsVec2.webp"
          alt="Brids"
          className="absolute right-5 -top-20 w-[400px] lg:block hidden"
        />
      </div>

      {/* Desktop Scroll Section */}
      <div
        ref={scrollSectionRef}
        className="relative h-[calc(100vh-200px)] lg:block hidden"
      >
        <motion.div
          style={{ x }}
          className="flex space-x-[100px] px-[calc((100vw-1368px)/2)] h-full"
        >
          {videos.map((vid, i) => (
            <div
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              className="group relative min-w-[519px] min-h-[519px] overflow-hidden rounded-[4px]"
              onMouseEnter={(e) =>
                e.currentTarget.querySelector("video")?.play()
              }
              onMouseLeave={(e) => {
                const video = e.currentTarget.querySelector("video");
                if (video) {
                  video.pause();
                  video.currentTime = 0;
                }
              }}
            >
              {/* Video */}
              <video
                src={vid.src}
                poster={vid.poster}
                className="w-full h-full object-cover"
                muted
                playsInline
                preload="none"
              />

              {/* Gradient Overlay */}
              <div className="absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-black/70 to-transparent z-10 pointer-events-none" />

              {/* Text over Gradient */}
              <div className="absolute bottom-0 w-full text-[#EAE7D8] px-6 pt-3 pb-4 z-20">
                <p className="text-[21px] leading-[28px]">{vid.label}</p>
                <p className="text-[16px] leading-[24px] mt-1">{vid.des}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Stack */}
      <div className="hidden grid-cols-1 gap-6 lg:px-10 px-5">
        {videos.map((vid, i) => (
          <div
            key={i}
            className="group relative w-full h-[400px] overflow-hidden rounded-[4px]"
          >
            {/* Autoplaying video on mobile */}
            <video
              muted
              autoPlay
              playsInline
              loop
              preload="auto"
              className="w-full h-full object-cover min-h-[1px] opacity-100"
              src={vid.src}
            />

            {/* Gradient Overlay */}
            <div className="absolute bottom-0 w-full h-[45%] bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none" />

            {/* Text over Gradient */}
            <div className="absolute bottom-0 w-full text-[#EAE7D8] px-4 pt-3 pb-4 z-20">
              <p className="text-[21px] leading-[28px]">{vid.label}</p>
              <p className="text-[16px] leading-[24px] mt-1">{vid.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceWeProvideGsap;
