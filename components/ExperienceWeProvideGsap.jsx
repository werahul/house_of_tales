"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const videos = [
  {
    src: "https://res.cloudinary.com/djyfs0b0i/video/upload/v1749129986/wedding_yrmih6.mp4",
    label: "Wedding",
    des: "Full-day coverage capturing every emotion and ritual with warmth and authenticity.",
    poster: "/Posters/wed.png",
  },
  {
    src: "https://res.cloudinary.com/djyfs0b0i/video/upload/v1749129972/preWedding_zl7zul.mp4",
    label: "Pre-Weddings",
    des: "A relaxed, creative shoot reflecting your chemistry, style, and unique love tale.",
    poster: "/Posters/pre.png",
  },
  {
    src: "https://res.cloudinary.com/djyfs0b0i/video/upload/v1749129963/engagement_qrbn2t.mp4",
    label: "Engagements",
    des: "Candid and elegant frames celebrating the joy and love of your special moment.",
    poster: "/Posters/eg.png",
  },
  {
    src: "https://res.cloudinary.com/djyfs0b0i/video/upload/v1749129983/specialEvents_o8wr2w.mp4",
    label: "Special Events",
    des: "From haldi to sangeet, we capture the spirit of every heartfelt celebration.",
    poster: "/Posters/se.png",
  },
  {
    src: "https://res.cloudinary.com/djyfs0b0i/video/upload/v1749129976/customPackages_oveshz.mp4",
    label: "Custom Packages",
    des: "Looking for something more personal? We offer tailored packages made just for you.",
    poster: "/Posters/cp.png",
  },
];

const ExperienceWeProvideGsap = () => {
  const scrollSectionRef = useRef(null);
  const itemRefs = useRef([]);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isIOS, setIsIOS] = useState(false);

  // Reduced gap between items from 130px to 60px
  const GAP_SIZE = 60;
  const CARD_WIDTH = 519;

  // Use framer-motion's scroll utilities with improved configuration
  const { scrollYProgress } = useScroll({
    target: scrollSectionRef,
    offset: ["start start", "end end"],
  });

  // Calculate the total width with reduced gap
  const totalWidth =
    videos.length * CARD_WIDTH + (videos.length - 1) * GAP_SIZE;

  useEffect(() => {
    // Set window width after component mounts (client-side only)
    setWindowWidth(window.innerWidth);

    // Detect iOS devices
    const detectIOS = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    };

    setIsIOS(detectIOS());

    // Handle window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // iOS video playback workaround
    if (detectIOS()) {
      const handleUserInteraction = () => {
        document.querySelectorAll("video").forEach((video) => {
          // Only attempt to play videos with data-loaded="true"
          if (video.getAttribute("data-loaded") === "true") {
            video.play().catch((e) => {
              console.log("iOS video play error:", e);
            });
          }
        });
      };

      // Add event listeners for user interaction
      ["touchstart", "click"].forEach((event) => {
        document.addEventListener(event, handleUserInteraction, { once: true });
      });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (detectIOS()) {
        ["touchstart", "click"].forEach((event) => {
          document.removeEventListener(event, () => {}, { once: true });
        });
      }
    };
  }, []);

  // Transform the scroll progress to x-position - only calculated after window is available
  const rawX = useTransform(
    scrollYProgress,
    [0, 1],
    windowWidth ? [-totalWidth + windowWidth - 140, 0] : [0, 0]
  );

  // Add spring physics for smoother animation
  const x = useSpring(rawX, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Video loading handler
  const handleVideoLoad = (e) => {
    // Mark video as loaded
    e.target.setAttribute("data-loaded", "true");
  };

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
          <a href="https://wa.me/919106507703" target="_blank" rel="noreferrer">
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

      {/* Desktop Scroll Section with improved animation */}
      <div
        ref={scrollSectionRef}
        className="relative h-[calc(100vh-200px)] lg:block hidden"
      >
        <motion.div
          style={{ x }}
          className={`flex space-x-[60px] px-[calc((100vw-1300px)/2)] h-full`}
        >
          {videos.map((vid, i) => (
            <div
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              className="group relative min-w-[519px] min-h-[519px] overflow-hidden rounded-[4px]"
              onMouseEnter={(e) => {
                if (!isIOS) {
                  const video = e.currentTarget.querySelector("video");
                  if (video && video.getAttribute("data-loaded") === "true") {
                    video
                      .play()
                      .catch((err) => console.log("Play error:", err));
                  }
                }
              }}
              onMouseLeave={(e) => {
                if (!isIOS) {
                  const video = e.currentTarget.querySelector("video");
                  if (video) {
                    video.pause();
                    video.currentTime = 0;
                  }
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
                data-loaded="false"
                onLoadedData={handleVideoLoad}
                preload="metadata"
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
              autoPlay={!isIOS}
              playsInline
              loop
              data-loaded="false"
              onLoadedData={handleVideoLoad}
              preload="metadata"
              className="w-full h-full object-cover min-h-[1px] opacity-100"
              src={vid.src}
              poster={vid.poster}
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
