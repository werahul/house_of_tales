"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: "/Images/wedding.png", alt: "Wedding" },
  { src: "/Images/preWedding.png", alt: "Pre-Wedding" },
  { src: "/Images/Engagements.png", alt: "Engagements" },
  { src: "/Images/SpecialEvents.png", alt: "Special Events" },
  { src: "/Images/CustomPackage.png", alt: "Custom Package" },
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
    <div className=" overflow-hidden py-20 font-sans">
      {/* Top Section */}
      <div className="pb-10 px-10 relative">
        <h2 className="mirage lg:text-[47px] uppercase text-[#34291E] mb-2">
          The Experience We Provide
        </h2>
        <p className="text-[18px] lg:text-[21px] text-[#777461] mb-6">
          From Ahmedabad, with heart – to wherever your tale unfolds
        </p>
        <button className="w-[134px] h-[48px] border-[#413326] bg-transparent hover:bg-[#271f17] border rounded-[8px] text-[#413326] mb-10 hover:text-white cursor-pointer">
          Get In Touch
        </button>

        <img src="/Images/bridsVec2.png" alt="Brids" className="absolute right-5 -top-20 w-[400px]" />
      </div>

      {/* Scroll Container */}
      <div ref={containerRef}>
        {/* Desktop horizontal scroll */}
        <div className="hidden lg:flex overflow-x-hidden space-x-6 px-0">
          {/* Make sure there's no margin or padding here */}
          {images.map((img, i) => (
            <div
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              className="min-w-[519px] h-[519px] overflow-hidden first:ml-0"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Mobile view: Vertical stack */}
        <div className="grid lg:hidden grid-cols-1 gap-6 px-10">
          {images.map((img, i) => (
            <div key={i} className="w-full h-[400px] overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceWeProvideGsap;
