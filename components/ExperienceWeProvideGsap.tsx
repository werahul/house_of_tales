"use client";

import { useEffect, useRef } from "react";

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

const ExperienceWeProvide = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Constants
  const CARD_WIDTH = 519;
  const GAP = 60;
  const EXTRA_SCROLL_OFFSET = 300;

  // Calculate total horizontal width (cards + gaps)
  const totalWidth = videos.length * CARD_WIDTH + (videos.length - 1) * GAP;

  // Calculate scrollable height for vertical scroll
  const scrollableHeight = totalWidth + EXTRA_SCROLL_OFFSET;

  useEffect(() => {
    const handleScroll = () => {
      if (!outerRef.current || !stickyRef.current || !trackRef.current) return;

      const outerTop = outerRef.current.offsetTop;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const maxScrollY = outerRef.current.offsetHeight - windowHeight;
      const scrollProgress = (scrollY - outerTop) / maxScrollY;

      const totalScrollableWidth =
        trackRef.current.scrollWidth -
        stickyRef.current.clientWidth +
        EXTRA_SCROLL_OFFSET;

      if (scrollProgress >= 0 && scrollProgress <= 1) {
        trackRef.current.style.transform = `translateX(-${
          totalScrollableWidth * scrollProgress
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Heading */}
      <div className="px-6 pt-20 lg:pt-40 max-w-screen-xl mx-auto text-center lg:text-left">
        <h2 className="text-3xl lg:text-5xl mirage text-[#777461] uppercase mb-2">
          The Experience We Provide
        </h2>
        <p className="text-lg lg:text-xl text-[#777461] mb-6">
          From Ahmedabad, with heart — to wherever your tale unfolds
        </p>
        <a href="https://wa.me/+919106507703" target="_blank" rel="noreferrer">
          <button className="w-[134px] h-[48px] border border-[#413326]  bg-transparent rounded-[8px] text-[#413326] hover:bg-[#271f17] hover:text-white transition-all duration-200">
            Get In Touch
          </button>
        </a>
      </div>

      {/* Horizontal Scroll Section */}
      <div
        ref={outerRef}
        className="relative hidden lg:block"
        style={{ height: `${scrollableHeight}px` }}
      >
        <div ref={stickyRef} className="sticky top-0 h-screen overflow-hidden">
          <div
            ref={trackRef}
            className="absolute ml-[110px] top-1/2 -translate-y-1/2 left-0 flex transition-transform duration-100 ease-out px-10"
          >
            {videos.map((vid, i) => (
              <div
                key={i}
                className="relative min-w-[519px] h-[519px] mr-[60px] rounded-md overflow-hidden bg-black"
              >
                <video
                  src={vid.src}
                  poster={vid.poster}
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent py-4 px-6 text-white z-10">
                  <p className="text-lg font-medium">{vid.label}</p>
                  <p className="text-sm mt-1 w-[85%]">{vid.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Vertical Stack */}
      {/* <div className="lg:hidden grid grid-cols-1 gap-6 px-5 mt-10">
        {videos.map((vid, i) => (
          <div
            key={i}
            className="relative w-full h-[400px] rounded-[4px] overflow-hidden"
          >
            <video
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
              src={vid.src}
              poster={vid.poster}
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent z-10 p-4 text-white">
              <p className="text-lg">{vid.label}</p>
              <p className="text-sm w-[85%]">{vid.des}</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ExperienceWeProvide;
