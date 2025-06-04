"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "01. Where are you based and how far can you travel?",
    answer:
      "We’re based in Ahmedabad, but our passion has no boundaries! We’re ready to capture your moments anywhere in India.",
  },
  {
    question: "02. How many photographers to cover our wedding celebrations?",
    answer: "We offer flexible packages tailored to your requirements. Depending on the scale of your celebration, our team includes dedicated photographers and cinematographers to ensure every tale is beautifully captured.",
  },
  {
    question: "03. How can we book you?",
    answer: "It’s simple! Just fill out our inquiry form with a few details about your celebration, and we’ll get in touch shortly. You can also email us at heyhouseoftales@gmail.com or WhatsApp us - we’d love to hear from you!",
  },
  {
    question: "04. What are your deliverables?",
    answer: "We capture a mix of candid and contemporary photos, focusing on real, heartfelt moments shared by the couple,families, and guests. You’ll receive all your edited photos, a 3–5 minute cinematic trailer, reels (on request), and full film of your wedding and other celebrations like Haldi, Sangeet, etc.",
  },
  {
    question: "05. What is the delivery timeline?",
    answer: "You’ll get your complete set of edited photos within 20–30 days from the final day of the shoot. Wedding films take a little longer minimum around 60–70 days so we can craft a film that truly reflects your tale in a timeless, cinematic way.",
  },
  {
    question: "06. How long will my online gallery remain active for?",
    answer: "Your wedding visuals will be available for re-living and sharing for 6 months from the delivery date.",
  },
  {
    question: "07. How much do you charge and what are the payment terms?",
    answer: "Every wedding is unique, and so are our packages. Pricing depends on your specific requirements, and coverage. Once we understand your needs, we’ll share a customized quote. Payment terms: 60% at booking, 30% within two days after the wedding, and 10% at delivery.",
  },
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full  lg:pt-16 pt-0 lg:pb-[100px] pb-20 px-4"
    >
      <h2 className="lg:text-[47px] text-[32px] mirage text-[#777461] text-center mb-8">FAQS</h2>
      <div className="max-w-3xl mx-auto space-y-[30px]">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            layout
            className={`border rounded-md px-6 py-4 cursor-pointer bg-transparent border-[#d4cdbf] ${activeIndex === index ? "border-2" : "border"
              }`}
            onClick={() => toggleIndex(index)}
          >
            <div className="flex items-center justify-between">
              <h3
                className={`lg:text-[21px] text-[16px] w-[90%] lg:leading-[24px] leading-[24px] mirage antialiased ${activeIndex === index
                  ? "text-[#34291E] font-bold "
                  : "text-[#7e7e7e] font-normal"
                  }`}
              >
                {faq.question}
              </h3>
              {activeIndex === index ? (
                <div className="w-[20px] h-[20px] rounded-full border border-[#34291E] flex items-center justify-center">
                  <Minus className="w-3 h-3 text-[#34291E]" />
                </div>
              ) : (
                <div className="w-[20px] h-[20px] rounded-full border border-[#34291E] flex items-center justify-center">
                  <Plus className="w-3 h-3 text-[#34291E]" />
                </div>
              )}
            </div>

            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.p
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden text-[16px] leading-[24px] text-[#52514C] mt-2 w-[90%]"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FAQSection;
