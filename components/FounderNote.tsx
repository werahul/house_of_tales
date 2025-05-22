'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

const FounderNote = () => {
    return (
        <div className="flex text-center relative overflow-hidden">
            {/* Left Section */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="w-[55%] bg-[#777461] pl-10 pr-40 pt-28"
            >
                <div className="text-[#EAE7D8] h-[850px] text-left">
                    <h1 className="text-[61px] leading-[73px] mirage pb-5">FOUNDER’S NOTE</h1>
                    <p className="redHat text-[16px] leading-[24px]">
                        Photography has never just been a career for me- it's something l've felt deeply connected
                        to since I was a teenager. I picked up the camera out of curiosity, not knowing that it would
                        slowly become such an important part of who I am. What started with capturing random
                        moments of daily life soon turned into something I couldn't imagine letting
                        go of. The feeling of freezing a real, unfiltered moment-the joy in someone's eyes, a laugh
                        mid-air, a quiet glance that feeling stuck with me. It made me realize that photography
                        wasn't just about how something looked, but how it felt. That's when I knew I wanted to
                        take it seriously. I went on to learn the craft more deeply through formal training in
                        photography and cinematography, and every step since has only made me fall more in love
                        with the art of storytelling through a lens.

                        <br /> <br />
                        Weddings felt like the perfect space to bring that vision to life. They're not just big
                        celebrations- they're full of raw emotion, warmth, and real connections. Through House of
                        Tales, I want to document love in its truest form. The kind of tales that don't need filters-just
                        honesty, heart, and a little magic. 
                    </p>
                    <div className="flex items-end justify-end pr-10 pt-8">
                        <Image
                            src="/Images/signature.svg"
                            width={107}
                            height={44}
                            alt="Signature"
                        />
                    </div>
                </div>
            </motion.div>

            {/* Right Image Section */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true }}
                className="w-[45%]  flex items-center justify-center"
            >
                <Image
                    src="/Images/fn1.png"
                    width={477}
                    height={590}
                    alt="Founder"
                />
            </motion.div>

            {/* Floating Image */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute bottom-20 left-[45%]"
            >
                <Image
                    src="/Images/prathamImg.png"
                    width={306}
                    height={351}
                    alt="Pratham"
                />
            </motion.div>
        </div>
    );
};

export default FounderNote;
