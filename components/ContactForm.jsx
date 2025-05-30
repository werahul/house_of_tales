"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Listbox } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

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
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // 🔥 This line is missing!

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        alert("Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          location: "",
          date: "",
          days: "",
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Form submit error:", error);
    } finally {
      setIsSubmitting(false); // return to normal after submit
    }
  };

  return (
    <section className="w-full md:min-h-auto min-h-screen flex lg:items-center justify-center bg-[#777461] px-4 py-20">
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
          className="lg:text-[47px] text-[32px] mirage text-[#ffffff] lg:text-center mb-4"
        >
          LET’S GET IN TOUCH
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={1}
          className="lg:text-center lg:text-[21px] text-[16px] leading-[24px] redHat mb-6 font-normal"
        >
          We aim to respond within 48 hours. If you do not hear from us{" "}
          <br className="lg:block hidden" /> or if it is an urgent inquiry,
          please call us at <strong>+91 78784 20001</strong>
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={2}
          className="flex justify-center mb-6 md:mb-10"
        >
          <img src="/Images/bridsVec.png" alt="Doves Icon" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              label: "Full Name*",
              name: "fullName",
              type: "text",
              placeholder: "Enter your full name",
            },
            {
              label: "Email Address*",
              name: "email",
              type: "email",
              placeholder: "e.g. you@example.com",
            },
            {
              label: "WhatsApp Number*",
              name: "phone",
              type: "tel",
              placeholder: "e.g. +91 9876543210",
            },
            {
              label: "Wedding Location*",
              name: "location",
              type: "text",
              placeholder: "e.g. Udaipur, India",
            },
          ].map((field, i) => (
            <motion.div key={field.name} variants={fadeUp} custom={i + 3}>
              <label className="block mb-1 lg:text-[21px] text-[16px]">
                {field.label}
              </label>
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

          <motion.div variants={fadeUp} custom={7}>
            <label className="block mb-1 text-[16px] lg:text-[21px] text-white">
              Wedding Date*
            </label>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={formData.date ? dayjs(formData.date) : null}
                onChange={(newValue) =>
                  setFormData((prev) => ({
                    ...prev,
                    date: newValue ? newValue.format("YYYY-MM-DD") : "",
                  }))
                }
                slotProps={{
                  textField: {
                    variant: "standard",
                    fullWidth: true,
                    InputProps: {
                      disableUnderline: true, // 💥 removes underline
                      sx: {
                        color: "white",
                        fontSize: "12px",
                        borderBottom: "1px solid white", // optional, or remove this line too
                        "&:hover": {
                          borderBottom: "1px solid white", // prevent hover underline
                        },
                        "&.Mui-focused": {
                          borderBottom: "1px solid white", // prevent focus underline
                        },
                      },
                    },
                    InputLabelProps: {
                      shrink: true,
                      sx: {
                        color: "white",
                      },
                    },
                  },
                  openPickerIcon: {
                    sx: {
                      color: "white", // 🤍 makes the calendar icon white
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </motion.div>

          {/* Custom Dropdown */}
          <motion.div variants={fadeUp} custom={8}>
            <label className="block mb-0 text-[16px] lg:text-[21px]">
              No. of Days*
            </label>

            <Listbox
              value={formData.days}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, days: value }))
              }
            >
              {({ open }) => (
                <div className="relative">
                  <Listbox.Button className="w-full text-left bg-transparent border-b border-white py-2 text-white flex items-center justify-between">
                    <span className="text-[12px]">
                      {formData.days || "Select number of days"}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-white ml-2 transform transition-transform duration-300 ${
                        open ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </Listbox.Button>

                  <Listbox.Options className="absolute mt-1 w-full bg-[#EFE9DC] text-[#3A3A3A] shadow-lg rounded-md py-1 z-50 focus:outline-none">
                    {dayOptions.map((day, index) => (
                      <Listbox.Option
                        key={index}
                        value={day}
                        className={({ active, selected }) =>
                          `cursor-pointer px-4 py-2 flex items-center justify-between text-sm ${
                            active ? "bg-[#c0bba9]" : ""
                          } ${selected ? "font-medium" : ""}`
                        }
                      >
                        {({ selected }) => (
                          <>
                            <span>{day}</span>
                            {selected && (
                              <Check className="w-4 h-4 text-black" />
                            )}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              )}
            </Listbox>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} custom={9} className="text-left mt-12">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-[93px] h-[48px] border border-[#EAE7D8] rounded-[8px] text-[#413326] transition-all duration-200 ease-in-out shadow-sm
    ${
      isSubmitting
        ? "bg-[#bdb9a7] text-[#413326] cursor-not-allowed"
        : "bg-[#EAE7D8] hover:border-[#271f17] hover:bg-[#271f17] hover:text-white hover:shadow-md active:scale-95"
    }
  `}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </motion.div>
      </motion.form>
    </section>
  );
};

export default ContactForm;
