'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  quote: string;
  authorSig: string;
  location?: string;
}

const useScreenWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Your photography was amazing. Every moment felt so natural and real. The photos turned out better than we imagined, and you made us feel super comfortable. Can’t wait to have you at our future celebrations.",
    authorSig: "/Images/nehaSig.svg"
  },
  {
    quote:
      "Such an energetic team! Everyone was full of energy and worked together effortlessly. The shoot was smooth, professional, and exactly what we hoped for. Thank you for making the entire experience so easy, enjoyable, and fun!",
    authorSig: "/Images/priyankSig.svg"
  },
  {
    quote:
      "We booked them for our entire wedding, including the pre-wedding shoot, and they nailed it! Super friendly and professional. Our families were so happy with the photos and videos they captured everything beautifully.",
    authorSig: "/Images/prachiSig.svg"
  },
  {
    quote:
      "Our wedding was full of love and joy, and they captured that feeling so well. Nothing felt forced. The photos feel genuine and warm so many real moments we’ll always cherish. Thank you for everything!",
    authorSig: "/Images/vikasSig.svg"
  },
  {
    quote:
      "Watching our wedding film felt like reliving the day. The video was beautiful, emotional, and full of joy. They captured every detail with such care. It truly felt like watching our own love story unfold.",
    authorSig: "/Images/vidishaSig.svg"
  },
  {
    quote:
      "We had them for our pre-wedding and wedding day, and they were incredible throughout. The pre-wedding was super fun and relaxed, and the wedding coverage was just as smooth. The final photos and videos are stunning!",
    authorSig: "/Images/unnati.svg"
  },
];

const Testimonials: React.FC = () => {
  const screenWidth = useScreenWidth();

  // Determine testimonials per page based on screen width
  let testimonialsPerPage = 3;
  if (screenWidth < 768) {
    testimonialsPerPage = 1;
  } else if (screenWidth < 1024) {
    testimonialsPerPage = 2;
  }

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const visibleTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="lg:pt-[144px] md:pt-20 pt-[80px] lg:pb-[104px] pb-20 md:px-10 px-5 max-container">
      <h2 className="lg:text-[47px] text-[32px] mirage text-[#777461] text-center mb-12">
        LOVE, TOLD BY THEM
      </h2>

      <motion.div
        key={currentPage}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {visibleTestimonials.map((t, index) => (
          <motion.div
            key={index}
            className="bg-[#E1DED3] p-6 rounded-md shadow-md space-y-5"
            variants={cardVariants}
          >
            <img src="/Images/qoutImg.png" alt="quote" className='lg:w-10 lg:h-10 w-[34px] h-[34px]' />
            <p className="text-sm leading-relaxed text-[#47463A]">{t.quote}</p>
            <img src={t.authorSig} alt="Signature" />
          </motion.div>
        ))}
      </motion.div>

      {/* Dots */}
      <div className="flex justify-center mt-10 space-x-1">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`w-[8px] cursor-pointer h-[8px] rounded-full transition-all duration-300 ${index === currentPage ? 'bg-[#34291E]' : 'bg-[#C1BFB7]'}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
