"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const FounderNote = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse text-center relative overflow-hidden lg:px-0 px-5  ">
      {/* Left Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="lg:w-[55%] lg:bg-[#777461] lg:pl-10 lg:pr-40 custom-pl-20 lg:pt-[144px] md-lg:h-800 "
      >
        <div className="lg:text-[#EAE7D8] text-[#34291E] lg:h-[750px] text-left max-w-[600px] mx-auto">
          <h1 className="lg:text-[61px] text-[44px] lg:leading-[73px] leading-[52px] mirage pb-5 lg:block hidden">
            FOUNDER’S NOTE
          </h1>
          <p className="font-redHat text-[16px] leading-[24px] lg:pt-0 pt-4">
            Photography has never just been a career for me- it&apos;s something
            l&apos;ve felt deeply connected to since I was a teenager. I picked
            up the camera out of curiosity, not knowing that it would slowly
            become such an important part of who I am. What started with
            capturing random moments of daily life soon turned into something I
            couldn&apos;t imagine letting go of. The feeling of freezing a real,
            unfiltered moment-the joy in someone&apos;s eyes, a laugh mid-air, a
            quiet glance that feeling stuck with me. It made me realize that
            photography wasn&apos;t just about how something looked, but how it
            felt. That&apos;s when I knew I wanted to take it seriously. I went
            on to learn the craft more deeply through formal training in
            photography and cinematography, and every step since has only made
            me fall more in love with the art of storytelling through a lens.
            <br /> <br />
            Weddings felt like the perfect space to bring that vision to life.
            They&apos;re not just big celebrations- they&apos;re full of raw
            emotion, warmth, and real connections. Through House of Tales, I
            want to document love in its truest form. The kind of tales that
            don&apos;t need filters-just honesty, heart, and a little magic.
          </p>
          <div className="flex items-end justify-end lg:pr-10 lg:pt-8 pt-4">
            <Image
              src="/Images/signature.svg"
              width={107}
              height={44}
              alt="Signature"
              className="lg:block hidden"
              quality={100}
            />
            <Image
              src="/Images/Signature2.svg"
              width={70}
              height={44}
              alt="Signature"
              className="lg:hidden"
              quality={100}
            />
          </div>
        </div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="lg:w-[45%]  lg:flex lg:items-start lg:justify-start lg:pt-[144px] lg:pl-20 founderNoteRightSection"
      >
        <div className="lg:block hidden">
          <Image
            src="/Images/fn1.webp"
            width={477}
            height={590}
            alt="Founder"
            className=""
            quality={100}
          />
        </div>
        <div className="lg:hidden pt-20">
          <h1 className="lg:text-[61px] text-[#777461] text-[44px] text-left lg:leading-[73px] leading-[52px] mirage pb-5 lg:hidden">
            FOUNDER’S <br /> NOTE
          </h1>
          <div className="md:flex md:items-start md:justify-center">
            <Image
              src="/Images/prathamImgMobile.webp"
              width={477}
              height={590}
              alt="Founder"
              className=""
              quality={100}
            />
          </div>
        </div>
      </motion.div>

      {/* Floating Image */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        className="absolute bottom-20 left-[45%]"
      >
        <Image
          src="/Images/prathamImg.webp"
          width={306}
          height={351}
          alt="Pratham"
          className="lg:block hidden"
          quality={100}
        />
      </motion.div>
    </div>
  );
};

export default FounderNote;
