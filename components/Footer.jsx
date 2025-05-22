import React from "react";
// import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#777461] text-[#E1DED3] py-10 px-6 md:px-16 redHat">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        {/* Logo */}
        <div className="mb-6 md:mb-0">
          <img
            src="/Images/footerLogo.png"
            alt="House Of Tales Logo"
            className=""
          />
        </div>

        {/* Navigation */}
        <nav className="space-x-10 text-[16px]">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#weddings" className="hover:underline">
            Weddings
          </a>
          <a href="#services" className="hover:underline">
            Services
          </a>
          <a href="#contact" className="hover:underline">
            Contact Us
          </a>
          <a href="#faqs" className="hover:underline">
            FAQs
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-6 md:mt-0">
          <a
            href="https://www.instagram.com/houseoftalesco?igsh=djhnbjdvY3h0ZnBw"
            className="hover:text-white"
          >
            <div className="relative w-6 h-6 group cursor-pointer">
              {/* Outline Icon (default) */}
              <img
                src="/Images/instaIcon.svg"
                alt="Instagram Icon"
                className="absolute inset-0 w-[28px] h-[28px] transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
              />

              {/* Filled Icon (on hover) */}
              <img
                src="/Images/instaIconFilled.svg"
                alt="Instagram Icon Filled"
                className="absolute inset-0 w-[28px] h-[28px] transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </div>
          </a>
          <a href="#" className="hover:text-white">
            <div className="relative w-6 h-6 group cursor-pointer">
              {/* Outline Icon (default) */}
              <img
                src="/Images/fb.svg"
                alt="Instagram Icon"
                className="absolute inset-0 w-[28px] h-[28px] transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
              />

              {/* Filled Icon (on hover) */}
              <img
                src="/Images/fbFilled.svg"
                alt="Instagram Icon Filled"
                className="absolute inset-0 w-[28px] h-[28px] transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </div>
          </a>
          <a
            href="mailto:heyhouseoftales@gmail.com"
            className="hover:text-white"
          >
            <div className="relative w-6 h-6 group cursor-pointer">
              {/* Outline Icon (default) */}
              <img
                src="/Images/mail.svg"
                alt="Instagram Icon"
                className="absolute inset-0 w-[28px] h-[28px] transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
              />

              {/* Filled Icon (on hover) */}
              <img
                src="/Images/mailFilled.svg"
                alt="Instagram Icon Filled"
                className="absolute inset-0 w-[28px] h-[28px] transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </div>
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#a8a69f] pt-4 text-center text-[14px] text-[#E1DED3] font-light">
        © Copyright {currentYear}. All Rights Reserved by House Of Tales
      </div>
    </footer>
  );
};

export default Footer;
