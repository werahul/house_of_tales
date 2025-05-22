"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Listbox } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

const dayOptions = ["1 Day", "2 Days", "3 Days", "4 Days", "5 Days"];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    date: "",
    days: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#716C52] px-4 py-10">
      <motion.form
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        onSubmit={handleSubmit}
        className="max-w-4xl w-full bg-transparent text-white redHat"
      >
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-[47px] mirage text-[#ffffff] text-center mb-4"
        >
          LET’S GET IN TOUCH
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={1}
          className="text-center text-[21px] redHat mb-6"
        >
          We aim to respond within 48 hours. If you do not hear from us <br /> or if it is an urgent inquiry, please call us at{" "}
          <strong>+91 78784 20001</strong>
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={2}
          className="flex justify-center mb-6"
        >
          <img src="/Images/bridsVec.png" alt="Doves Icon" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "Full Name*", name: "fullName", type: "text", placeholder: "Enter your full name" },
            { label: "Email Address*", name: "email", type: "email", placeholder: "e.g. you@example.com" },
            { label: "WhatsApp Number*", name: "phone", type: "tel", placeholder: "e.g. +91 9876543210" },
            { label: "Wedding Location*", name: "location", type: "text", placeholder: "e.g. Udaipur, India" },
          ].map((field, i) => (
            <motion.div key={field.name} variants={fadeUp} custom={i + 3}>
              <label className="block mb-1 text-[21px]">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full px-0 py-2 text-[12px] border-b border-white bg-transparent outline-none text-white placeholder:text-white/70"
                required
              />
            </motion.div>
          ))}

          {/* Date Picker */}
          <motion.div variants={fadeUp} custom={7}>
            <label className="block mb-1 text-[21px]">Wedding Date*</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-0 py-2 text-[12px] border-b border-white bg-transparent outline-none text-white placeholder:text-white/70"
              style={{
                colorScheme: "dark",
              }}
            />
          </motion.div>

          {/* Custom Dropdown */}
          <motion.div variants={fadeUp} custom={8}>
            <label className="block mb-1 text-[21px]">No. of Days*</label>
            <Listbox
              value={formData.days}
              onChange={(value) => setFormData((prev) => ({ ...prev, days: value }))}
            >
              <div className="relative">
                <Listbox.Button className="w-full text-left bg-transparent border-b border-white py-2 text-white flex items-center justify-between">
                  <span className="text-[12px]">{formData.days || "Select number of days"}</span>
                  <ChevronDown size={16} className="text-white ml-2" />
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 w-full bg-[#EFE9DC] text-[#3A3A3A] shadow-lg rounded-md py-1 z-50 focus:outline-none">
                  {dayOptions.map((day, index) => (
                    <Listbox.Option
                      key={index}
                      value={day}
                      className={({ active, selected }) =>
                        `cursor-pointer px-4 py-2 flex items-center justify-between text-sm ${active ? "bg-[#c0bba9]" : ""
                        } ${selected ? "font-medium" : ""}`
                      }
                    >
                      {({ selected }) => (
                        <>
                          <span>{day}</span>
                          {selected && <Check className="w-4 h-4 text-black" />}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          custom={9}
          className="text-left mt-12"
        >
          <button
            type="submit"
            className="bg-white text-[#716C52] px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition"
          >
            Submit
          </button>
        </motion.div>
      </motion.form>
    </section>
  );
};

export default ContactForm;
