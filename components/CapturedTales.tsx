"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type CoupleName =
  | "Aditya & Riya"
  | "Maitri & Mihir"
  | "Priyank & Dwisha"
  | "Vikas & Sapna"
  | "Manav & Karishma";

const couples: CoupleName[] = [
  "Aditya & Riya",
  "Maitri & Mihir",
  "Priyank & Dwisha",
  "Vikas & Sapna",
  "Manav & Karishma",
];

const coupleImages: Record<CoupleName, { desktop: string; mobile: string }> = {
  "Aditya & Riya": {
    desktop: "https://res.cloudinary.com/djyfs0b0i/image/upload/v1749021097/houseoftales/ta8pchjcd6lebazgmfch.webp",
    mobile: "https://res.cloudinary.com/djyfs0b0i/image/upload/v1749021103/houseoftales/k9bjoglgc8ub7avkyq7j.png",
  },
  "Maitri & Mihir": {
    desktop: "https://res.cloudinary.com/djyfs0b0i/image/upload/v1749021105/houseoftales/jbfqyq1scingl4uzz2vv.webp",
    mobile: "https://res.cloudinary.com/djyfs0b0i/image/upload/v1749021110/houseoftales/jtpbcanzoqx3jpubhjse.png",
  },
  "Priyank & Dwisha": {
    desktop: "https://res.cloudinary.com/djyfs0b0i/image/upload/v1749021094/houseoftales/jrhoneumml7w6wkpdite.webp",
    mobile: "https://res.cloudinary.com/djyfs0b0i/image/upload/v1749021109/houseoftales/w6mlwywcloxgildghhqg.png",
  },
  "Vikas & Sapna": {
    desktop: "https://res.cloudinary.com/djyfs0b0i/image/upload/v1749021096/houseoftales/cqxn5o58pee4j7cux8ls.webp",
    mobile: "https://res.cloudinary.com/djyfs0b0i/image/upload/v1749021103/houseoftales/cyb6rchirwi4yjmhads2.png",
  },
  "Manav & Karishma": {
    desktop: "https://res.cloudinary.com/djyfs0b0i/image/upload/v1749021109/houseoftales/t77tt46q0z1avka6cvrf.webp",
    mobile: "https://res.cloudinary.com/djyfs0b0i/image/upload/v1749021104/houseoftales/s3a91flhoeasmewhh7mh.png",
  },
};

const CapturedTales = () => {
  const [selectedCouple, setSelectedCouple] = useState<CoupleName>("Aditya & Riya");
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const selectedImages = coupleImages[selectedCouple];

  // Reset image load state on couple change
  useEffect(() => {
    setIsImageLoaded(false);
  }, [selectedCouple]);

  return (
    <div className="lg:px-10 px-5 lg:pt-[144px] pt-20 max-container">
      <h2 className="lg:text-[47px] text-[32px] mirage text-[#777461] text-center lg:mb-8 mb-5">
        CAPTURED TALES
      </h2>

      {/* Couple Tags */}
      <div className="flex lg:justify-center items-center lg:gap-x-[64px] gap-x-[40px] lg:px-44 gap-4 lg:mb-[50px] mb-[30px] lg:overflow-x-hidden overflowScroll overflow-x-scroll scrollbar-hide">
        {couples.map((couple) => (
          <button
            key={couple}
            onClick={() => setSelectedCouple(couple)}
            className={`text-[21px] whitespace-nowrap cursor-pointer redHat text-[#34291E] transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:text-[#34291E] ${
              selectedCouple === couple ? "font-bold" : "font-normal"
            }`}
          >
            {couple}
          </button>
        ))}
      </div>

      {/* Image Section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCouple}
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.98 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Desktop */}
          <div className="hidden lg:block w-full relative">
            {!isImageLoaded && (
              <Skeleton height={600} className="w-full rounded-xl bg-gray-400" />
            )}
            <Image
              src={selectedImages.desktop}
              alt={`${selectedCouple} Desktop`}
              width={1920}
              height={1080}
              className={`w-full h-auto object-cover transition-opacity duration-500 ${
                isImageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setIsImageLoaded(true)}
              priority
            />
          </div>

          {/* Mobile */}
          <div className="lg:hidden w-full relative">
            {!isImageLoaded && (
              <Skeleton height={500} className="w-full rounded-xl" />
            )}
            <Image
              src={selectedImages.mobile}
              alt={`${selectedCouple} Mobile`}
              width={800}
              height={1000}
              className={`w-full h-auto object-cover transition-opacity duration-500 ${
                isImageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setIsImageLoaded(true)}
              priority
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CapturedTales;
