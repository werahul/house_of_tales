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

  const navItems = [
    { name: "About", id: "about" },
    { name: "Weddings", id: "weddings" },
    { name: "Services", id: "services" },
    { name: "Contact Us", id: "contact-us" },
    { name: "FAQs", id: "faqs" },
  ];

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 110; // Height of your navbar
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    // Close mobile menu if open
    setIsOpen(false);
  };

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
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-10 navPadding h-[110px] pt-5 max-container">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-start justify-start lg:space-x-2">
                <Image
                  src="/Images/hotLogo.svg"
                  width={290}
                  height={110}
                  alt="House of Tales Logo"
                  className=" cursor-pointer lg:block hidden"
                  quality={100}
                  onClick={() => scrollToSection("hero")}
                />
                <Image
                  src="/Images/hotLogo.png"
                  width={160}
                  height={110}
                  alt="House of Tales Logo"
                  className=" cursor-pointer lg:hidden"
                  quality={100}
                  onClick={() => scrollToSection("hero")}
                />
              </div>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex space-x-8 text-[16px] font-medium text-[#34291E]">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="hover:text-[#34291E] hover:font-bold transition-all duration-200 cursor-pointer"
                  >
                    {item.name}
                  </button>
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
                    rel="noopener noreferrer"
                    className="bg-[#3B2E22] w-[146px] h-[52px] text-white flex items-center justify-center text-[16px] rounded-md hover:bg-[#271f17] cursor-pointer transition-colors duration-200"
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
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="fixed top-0 right-0 h-full w-[50%] sm:w-[60%] bg-[#EAE7D8] z-50 shadow-lg px-0 pt-28 text-[18px] text-[#34291E] space-y-4 lg:hidden font-normal"
              >
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block hover:text-black transition duration-300 border-b border-[#e6d4c2] px-5 pb-1 opacity-75 w-full text-left"
                  >
                    {item.name}
                  </button>
                ))}

                <div className="px-5 pt-10 ">
                  <a
                    href="https://www.instagram.com/houseoftalesco?igsh=djhnbjdvY3h0ZnBw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative w-6 h-6 group cursor-pointer lg:hidden">
                      <img
                        src="/Images/instaIcon.svg"
                        alt="Instagram Icon"
                        className="absolute inset-0 w-6 h-6 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
                      />
                     
                    </div>
                  </a>
                  <div className="lg:hidden pt-4">
                    <a
                      href="https://wa.me/919106507703"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#3B2E22] w-full h-[52px] text-white flex items-center justify-center text-[16px] rounded-md hover:bg-[#271f17] cursor-pointer transition-colors duration-200"
                    >
                      Get In Touch
                    </a>
                  </div>
                </div>

                {/* Mobile Menu Close Button */}
                <button
                  className="lg:hidden text-gray-700 absolute right-5 top-10"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={24} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
