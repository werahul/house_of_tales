"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef();
  const scrollSectionRef = useRef();
  const itemRefs = useRef([]);

  useEffect(() => {
    const scrollSection = scrollSectionRef.current;
    const container = containerRef.current;

    setTimeout(() => ScrollTrigger.refresh(), 200);

    ScrollTrigger.matchMedia({
      "(max-width: 768px)": () => {
        gsap.killTweensOf(itemRefs.current);
      },

      "(min-width: 769px)": () => {
        const totalWidth =
          itemRefs.current.length * 519 + (itemRefs.current.length - 1) * 80; // 519px card + 80px gap

        gsap.fromTo(
          container,
          { x: 0 },
          {
            x: () =>
              `-${
                totalWidth -
                window.innerWidth +
                (window.innerWidth - 1368) / 2 +
                80
              }`,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: scrollSection,
              start: "top top",
              end: `+=${totalWidth}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          }
        );
      },
    });

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

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
      <div ref={scrollSectionRef} className="relative">
        <div
          ref={containerRef}
          className="hidden lg:flex space-x-[0px] px-[calc((100vw-1368px)/2)]"
        >
          {videos.map((vid, i) => (
            <div
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              className="group relative min-w-[519px] min-h-[519px] overflow-hidden rounded-[4px] ml-10"
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
                preload="auto" // <-- change from "none" to "auto"
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
    </div>
  );
};

export default ExperienceWeProvideGsap;
