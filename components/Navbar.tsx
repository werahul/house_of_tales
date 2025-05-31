"use client";

import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const navItems = ["About", "Weddings", "Services", "Contact Us", "FAQs"];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (currentScrollY > lastScrollY.current) {
            // Scrolling down
            setShowNavbar(false);
          } else {
            // Scrolling up
            setShowNavbar(true);
          }
          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.header
          key="navbar"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="lg:bg-white/20 bg-[#EAE7D8] lg:backdrop-blur-xs shadow-md fixed top-0 left-0 w-full z-50 redHat"
        >
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-10 h-[110px] pt-5">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center justify-center lg:space-x-2">
                <Image
                  src="/Images/hotLogo.svg"
                  width={220}
                  height={110}
                  alt="House of Tales Logo"
                  className="w-[169px] lg:w-[220px] lg:h-[110px]"
                  quality={100}
                />
              </div>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex space-x-8 text-[16px] font-medium text-[#34291E]">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-black hover:font-bold"
                  >
                    {item}
                  </a>
                ))}
              </nav>

              {/* Right Section */}
              <div className="flex items-center space-x-5">
                <a
                  href="https://www.instagram.com/houseoftalesco?igsh=djhnbjdvY3h0ZnBw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative w-6 h-6 group cursor-pointer lg:block hidden">
                    <img
                      src="/Images/instaIcon.svg"
                      alt="Instagram Icon"
                      className="absolute inset-0 w-6 h-6 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
                    />
                    <img
                      src="/Images/instaIconFilled.svg"
                      alt="Instagram Icon Filled"
                      className="absolute inset-0 w-6 h-6 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                    />
                  </div>
                </a>
                <div className="lg:block hidden">
                  <a
                    href="https://wa.me/919106507703"
                    target="_blank"
                    className="bg-[#3B2E22] w-[146px] h-[52px] text-white flex items-center justify-center text-[16px] rounded-md hover:bg-[#271f17] cursor-pointer"
                  >
                    Get In Touch
                  </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                  className="lg:hidden text-gray-700"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Nav */}
          {isOpen && (
            <div className="lg:hidden text-center bg-[#EAE7D8] backdrop-blur-md px-4 py-3 space-y-2 text-[20px] text-gray-700">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
