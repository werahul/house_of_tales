"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const videos = [
  {
    src: "/Videos/wedding.mp4",
    label: "Wedding",
    des: "Full-day coverage capturing every emotion and ritual with warmth and authenticity.",
  },
  {
    src: "/Videos/preWedding.mp4",
    label: "Pre-Weddings",
    des: "A relaxed, creative shoot reflecting your chemistry, style, and unique love tale.",
  },
  {
    src: "/Videos/engagement.mp4",
    label: "Engagements",
    des: "Candid and elegant frames celebrating the joy and love of your special moment.",
  },
  {
    src: "/Videos/specialEvents.mp4",
    label: "Special Events",
    des: "From haldi to sangeet, we capture the spirit of every heartfelt celebration.",
  },
  {
    src: "/Videos/customPackages.mp4",
    label: "Custom Packages",
    des: "Looking for something more personal? We offer tailored packages made just for you.",
  },
];

const ExperienceWeProvideGsap = () => {
  const containerRef = useRef();
  const itemRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;

    // Delay refresh to let layout settle
    setTimeout(() => ScrollTrigger.refresh(), 200);

    ScrollTrigger.matchMedia({
      // Mobile View: No horizontal scroll
      "(max-width: 768px)": () => {
        gsap.killTweensOf(itemRefs.current);
      },

      // Desktop View: Horizontal scroll with pinning
      "(min-width: 769px)": () => {
        gsap.fromTo(
          itemRefs.current,
          { x: 40 },
          {
            xPercent: -100 * (itemRefs.current.length - 1),
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: `+=${container.scrollWidth * 1.5}`,
              scrub: 1,
              pin: true,
              pinSpacing: true,
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
    <div className=" overflow-hidden lg:pt-[144px] pt-20">
      {/* Top Section */}
      <div className="pb-10 lg:px-10 px-5 relative max-container">
        <h2 className="mirage lg:text-[47px] text-[32px] uppercase text-[#34291E] mb-2 lg:text-left text-center">
          The Experience We Provide
        </h2>
        <p className="text-[16px] lg:text-[21px] text-[#777461] mb-6 lg:text-left text-center">
          From Ahmedabad, with heart – to wherever your tale unfolds
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

      {/* Scroll Container */}
      <div ref={containerRef}>
        {/* Desktop horizontal scroll */}
        <div className="hidden lg:flex overflow-x-hidden space-x-6 px-0">
          {videos.map((vid, i) => (
            <div
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              className="group relative min-w-[519px] h-[519px] overflow-hidden first:ml-0 rounded-[4px]"
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
              <video
                src={vid.src}
                className="w-full h-full object-cover"
                muted
                playsInline
                preload="metadata" // Only loads metadata and poster frame
              />
              <div className="absolute bottom-0 w-full redHat  text-white bg-black/10 p-4">
                <p className="text-[21px]">{vid.label}</p>
                <p className="text-[16px] leading-[24px]">{vid.des}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view: Vertical stack */}
        <div className="grid lg:hidden grid-cols-1 gap-6 lg:px-10 px-5">
          {videos.map((vid, i) => (
            <div
              key={i}
              className="group relative w-full h-[400px] overflow-hidden rounded-[4px]"
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
              <video
                src={vid.src}
                className="w-full h-full object-cover"
                muted
                playsInline
                preload="metadata"
              />
              <div className="absolute bottom-0 w-full redHat  text-white bg-black/10 p-4">
                <p className="text-[21px]">{vid.label}</p>
                <p className="text-[16px] leading-[24px]">{vid.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceWeProvideGsap;
