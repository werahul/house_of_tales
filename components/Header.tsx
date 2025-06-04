"use client";

import { useEffect, useRef, useState } from "react";

const Header = () => {
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    // Load immediately on small screens, or wait for intersection on desktop
    const isMobile = window.innerWidth < 1024;

    if (isMobile) {
      setLoadVideo(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadVideo(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (desktopRef.current) observer.observe(desktopRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full lg:pt-0 pt-[110px]">
      <div ref={desktopRef} className="lg:block hidden w-full h-auto">
        {loadVideo && (
          <video
            src="https://res.cloudinary.com/djyfs0b0i/video/upload/v1748945919/Landscape_nvtfy5.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
            preload="metadata"
          />
        )}
      </div>

      <div ref={mobileRef} className="lg:hidden w-full h-auto">
        {loadVideo && (
          <video
            src="https://res.cloudinary.com/djyfs0b0i/video/upload/v1748945452/Portrait_qyobus.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
            preload="metadata"
          />
        )}
      </div>
    </div>
  );
};

export default Header;