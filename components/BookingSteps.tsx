"use client"

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
      'We learn your story, style preferences, and vision– share photography references if you have any!',
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

const getBorderClasses = (index: number) => {
  const base = "p-8 sm:p-12 md:p-16";
  const isLastColumn = (index + 1) % 3 === 0;
  const isLastRow = index >= 3;
  return `${base} ${!isLastColumn ? "border-r" : ""} ${!isLastRow ? "border-b" : ""}`;
};

// Framer Motion variants for animation
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

const BookingSteps: React.FC = () => {
  return (
    <div className="py-20 md:px-10">
      <h2 className="text-[47px] mirage text-[#34291E] text-center mb-8">
        FROM BOOKING TO BEAUTIFUL MOMENTS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`group transition-all duration-300 border-[#52514C] ${getBorderClasses(index)} bg-transparent hover:bg-[#777461]`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            custom={index}
          >
            <h3 className="font-bold text-[16px] leading-[24px] mb-2 text-center redHat text-[#47463A] group-hover:text-white">
              {step.title}
            </h3>
            <p className="font-normal text-center text-[16px] leading-[24px] redHat text-[#47463A] group-hover:text-white">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BookingSteps;
