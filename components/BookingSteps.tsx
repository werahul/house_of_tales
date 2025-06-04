"use client";

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: '1. Inquiry & Connection',
    description:
      "Get in touch with us and share your event details. We’ll respond quickly to understand your needs and vision.",
  },
  {
    title: '2. Reserve Your Date',
    description:
      'Secure your date with ease. Once confirmed, our team is fully dedicated to your celebration.',
    highlight: true,
  },
  {
    title: '3. Getting to Know You',
    description:
      'We learn your story, style preferences, and vision–share photography references if you have any!',
  },
  {
    title: '4. Creative Planning',
    description:
      'We plan everything from timelines to key moments. Need location ideas? We’ve got suggestions.',
  },
  {
    title: '5. Showtime',
    description:
      'Your big day arrives, we capture every celebration, emotion, detail, and joyful moments.',
  },
  {
    title: '6. Post-Production & Delivery',
    description:
      'Your photos and films are carefully edited with love and delivered in a digital gallery.',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Manually define border classes for each item
const getIndividualBorderClass = (index: number): string => {
  switch (index) {
    case 0:
      return "lg:border-r lg:border-b md:border-r md:border-t-0 md:border-l-0 md:border-b border-t-0 border-l-0 border-r-0 border-b";
    case 1:
      return "lg:border-r lg:border-b md:border-b md:border-t-0 md:border-r-0 border-t-0 border-l-0 border-r-0 border-b";
    case 2:
      return "lg:border-b md:border-l-0 border-t-0 border-l-0 border-r-0 border-b";
    case 3:
      return "lg:border-r lg:border-b-0 md:border-r md:border-r-0 border-t-0 border-l-0 border-r-0 border-b";
    case 4:
      return "lg:border-r md:border-b-0 md:border-l-0 border-t-0 border-l-0 border-r-0 border-b";
    case 5:
      return "md:border-b-0 md:border-r-0 border-t-0 border-l-0 border-r-0 border-b";
    default:
      return "";
  }
};

const BookingSteps: React.FC = () => {
  return (
    <div className="pt-20  lg:pt-[144px] md:px-10 px-5 max-container">
      <h2 className="lg:text-[47px] text-[32px] mirage text-[#777461] text-center md:mb-8 mb-4">
        FROM BOOKING TO BEAUTIFUL MOMENTS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:pt-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`group transition-all duration-300 p-8 sm:p-12 md:p-16 border border-[#52514C] bg-transparent hover:bg-[#777461] ${getIndividualBorderClass(index)}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            custom={index}
          >
            <h3 className="font-bold text-[16px] leading-[24px] mb-2 text-center redHat text-[#47463A] group-hover:text-white">
              {step.title}
            </h3>
            <p className="font-normal text-center text-[16px] leading-[24px] redHat text-[#47463A] group-hover:text-white lg:w-[97%]">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BookingSteps;
