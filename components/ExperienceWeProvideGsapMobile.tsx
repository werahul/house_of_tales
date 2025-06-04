"use client";

import React, { useEffect } from "react";

const videos = [
  {
    src: "https://ik.imagekit.io/4sivuylcu/wedding.MP4?updatedAt=1748887090322",
    label: "Wedding",
    des: "Full-day coverage capturing every emotion and ritual with warmth and authenticity.",
    poster: "/Posters/wed.png",
  },
  {
    src: "https://ik.imagekit.io/4sivuylcu/preWedding.mp4?updatedAt=1748887092913",
    label: "Pre-Weddings",
    des: "A relaxed, creative shoot reflecting your chemistry, style, and unique love tale.",
    poster: "/Posters/pre.png",
  },
  {
    src: "https://ik.imagekit.io/4sivuylcu/engagement.mp4?updatedAt=1748887092671",
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
    src: "https://ik.imagekit.io/4sivuylcu/customPackages.mp4?updatedAt=1748887092797",
    label: "Custom Packages",
    des: "Looking for something more personal? We offer tailored packages made just for you.",
    poster: "/Posters/cp.png",
  },
];

const ExperienceWeProvideGsapMobile = () => {
  // iOS touch fallback for autoplay
  useEffect(() => {
    const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isiOS) {
      const triggerPlay = () => {
        document.querySelectorAll("video").forEach((vid) => {
          const v = vid as HTMLVideoElement;
          if (v.paused) {
            v.play().catch(() => {});
          }
        });
        window.removeEventListener("touchstart", triggerPlay);
      };
      window.addEventListener("touchstart", triggerPlay);
    }
  }, []);

  return (
    <div className="lg:pb-8 lg:pt-[144px] pt-20 relative">
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

      <div className="grid lg:hidden grid-cols-1 gap-6 lg:px-10 px-5">
        {videos.map((vid, i) => (
          <div
            key={i}
            className="group relative w-full h-[400px] overflow-hidden rounded-[4px]"
          >
            <video
              muted
              autoPlay
              playsInline
              loop
              preload="auto"
              poster={vid.poster}
              className="w-full h-full object-cover min-h-[1px] opacity-100"
              src={vid.src}
            />

            <div className="absolute bottom-0 w-full h-[45%] bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none" />

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

export default ExperienceWeProvideGsapMobile;
