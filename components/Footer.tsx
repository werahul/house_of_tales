"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
  };

  const navItems = [
    { name: "About", id: "about" },
    { name: "Weddings", id: "weddings" },
    { name: "Services", id: "services" },
    { name: "Contact Us", id: "contact-us" },
    { name: "FAQs", id: "faqs" },
  ];

  return (
    <footer className="bg-[#777461] text-[#E1DED3] py-10 redHat">
      <div className="md:px-10 px-5 max-container">
        <div className="lg:flex flex-col md:flex-row lg:items-center lg:justify-between mb-8">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <img
              src="/Images/footerLogo.svg"
              alt="House Of Tales Logo"
              className="cursor-pointer"
              onClick={() => scrollToSection("hero")}
            />
          </div>

          {/* Navigation */}
          <nav className="md:space-x-10 text-[16px] md:flex grid grid-cols-2 md:mt-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-black hover:font-bold cursor-pointer transition-all duration-200 text-left"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex lg:space-x-2 space-x-1 mt-6 md:mt-5">
            <a
              href="https://www.instagram.com/houseoftalesco?igsh=djhnbjdvY3h0ZnBw"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <div className="relative w-8 h-8 group cursor-pointer">
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

            <a
              href="mailto:heyhouseoftales@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <div className="relative w-8 h-8 group cursor-pointer">
                {/* Outline Icon (default) */}
                <img
                  src="/Images/mail.svg"
                  alt="Mail Icon"
                  className="absolute inset-0 w-[28px] h-[28px] transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
                />

                {/* Filled Icon (on hover) */}
                <img
                  src="/Images/mailFilled.svg"
                  alt="Mail Icon Filled"
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
      </div>
    </footer>
  );
};

export default Footer;
