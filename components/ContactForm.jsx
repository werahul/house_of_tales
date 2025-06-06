"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Listbox } from "@headlessui/react";
import { Check, ChevronDown, X } from "lucide-react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Image from "next/image";

// Add global styles to handle autofill
const globalStyles = `
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #777461 inset !important;
    -webkit-text-fill-color: white !important;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

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

// Toast notification animation
const toastVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

// Toast notification component
const Notification = ({ message, type, onClose }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={toastVariants}
      className={`fixed top-6 right-6 z-50 flex items-center px-4 py-3 rounded-lg shadow-lg ${
        type === "success"
          ? "bg-[#EAE7D8] text-[#413326]"
          : "bg-red-100 text-red-800"
      }`}
    >
      <div className="flex-1">{message}</div>
      <button onClick={onClose} className="ml-4 focus:outline-none">
        <X size={18} />
      </button>
    </motion.div>
  );
};

const dayOptions = ["1 Day", "2 Days", "3 Days", "4 Days", "5 Days"];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    date: "",
    endDate: "",
    days: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setNotification({
          show: true,
          message: "Message sent successfully!",
          type: "success",
        });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          location: "",
          date: "",
          endDate: "",
        });
      } else {
        setNotification({
          show: true,
          message: "Failed to send message.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Form submit error:", error);
      setNotification({
        show: true,
        message: "An error occurred. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
      // Auto-dismiss notification after 5 seconds
      setTimeout(() => {
        setNotification((prev) => ({ ...prev, show: false }));
      }, 5000);
    }
  };

  return (
    <section className="w-full md:min-h-auto min-h-screen flex lg:items-center justify-center bg-[#777461] px-4 py-20 lg:py-[100px]">
      {/* Add style tag to inject the autofill styles */}
      <style jsx global>
        {globalStyles}
      </style>

      {/* Notification Toast */}
      <AnimatePresence>
        {notification.show && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() =>
              setNotification((prev) => ({ ...prev, show: false }))
            }
          />
        )}
      </AnimatePresence>

      <motion.form
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        onSubmit={handleSubmit}
        className="max-w-4xl w-full bg-transparent text-[#EAE7D8] font-redHat"
      >
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="lg:text-[47px] text-[32px] mirage text-[#EAE7D8] lg:text-center mb-4"
        >
          LET'S GET IN TOUCH
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={1}
          className="lg:text-center lg:text-[21px] text-[16px] leading-[24px] font-redHat mb-0 font-normal text-[#D3D0C2]"
        >
          We aim to respond within 48 hours. If you do not hear from us{" "}
          <br className="lg:block hidden" /> or if it is an urgent inquiry,
          please call us at <strong>+91 78784 20001</strong>
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={2}
          className="flex justify-center -mt-10 -ml-20"
        >
          <Image
            src="/Images/contactsvg.png"
            alt="Envelope Icon"
            width={300}
            quality={100}
            height={200}
            className="scale-150 h-auto"
            priority
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-6">
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
              <label className="block mb-1 lg:text-[21px] text-[16px] text-[#EAE7D8]">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full px-0 py-2 text-[12px] border-b border-[#D3D0C2] bg-transparent outline-none text-[#D3D0C2] placeholder:text-[#D3D0C2]"
                required
              />
            </motion.div>
          ))}

          <motion.div variants={fadeUp} custom={7}>
            <label className="block mb-1 text-[16px] lg:text-[21px] text-[#D3D0C2]">
              Event Start Date*
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
                      disableUnderline: true,
                      sx: {
                        color: "#D3D0C2",
                        fontSize: "12px",
                        borderBottom: "1px solid #D3D0C2",
                        "& input": {
                          color: "#D3D0C2",
                          opacity: 1, // 💡 this affects placeholder + input text
                        },
                        "&:hover": {
                          borderBottom: "1px solid #D3D0C2",
                        },
                        "&.Mui-focused": {
                          borderBottom: "1px solid #D3D0C2",
                        },
                      },
                    },
                    InputLabelProps: {
                      shrink: true,
                      sx: {
                        color: "#D3D0C2",
                      },
                    },
                  },
                  openPickerIcon: {
                    sx: {
                      color: "#D3D0C2",
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </motion.div>
          <motion.div variants={fadeUp} custom={7}>
            <label className="block mb-1 text-[16px] lg:text-[21px] text-[#D3D0C2]">
              Event End Date*
            </label>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={formData.endDate ? dayjs(formData.endDate) : null}
                onChange={(newValue) =>
                  setFormData((prev) => ({
                    ...prev,
                    endDate: newValue ? newValue.format("YYYY-MM-DD") : "",
                  }))
                }
                slotProps={{
                  textField: {
                    variant: "standard",
                    fullWidth: true,
                    InputProps: {
                      disableUnderline: true,
                      sx: {
                        color: "#D3D0C2",
                        fontSize: "12px",
                        borderBottom: "1px solid #D3D0C2",
                        "& input": {
                          color: "#D3D0C2",
                          opacity: 1, // 💡 this affects placeholder + input text
                        },
                        "&:hover": {
                          borderBottom: "1px solid #D3D0C2",
                        },
                        "&.Mui-focused": {
                          borderBottom: "1px solid #D3D0C2",
                        },
                      },
                    },
                    InputLabelProps: {
                      shrink: true,
                      sx: {
                        color: "#D3D0C2",
                      },
                    },
                  },
                  openPickerIcon: {
                    sx: {
                      color: "#D3D0C2",
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </motion.div>

          {/* Custom Dropdown */}
          {/* <motion.div variants={fadeUp} custom={8}>
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
                  <Listbox.Button className="w-full text-left bg-transparent border-b border-[#D3D0C2] py-1 text-[#D3D0C2] flex items-center justify-between pr-2 lg:pr-0">
                    <span className="text-[12px]">
                      {formData.days || "Select number of days"}
                    </span>
                    <ChevronDown
                      size={24}
                      className={`text-[#D3D0C2] ml-2 transform transition-transform duration-300 ${
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
                            active ? "bg-[#D3D0C2]" : ""
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
          </motion.div> */}
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
