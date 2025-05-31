"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const CapturedTales = () => {
    const [selectedCouple, setSelectedCouple] = useState('Aditya & Riya');

    const couples = [
        'Aditya & Riya',
        'Maitri & Mihir',
        'Priyank & Dwisha',
        'Vikas & Sapna',
        'Manav & Karishma',
    ];

    return (
        <div className="lg:px-10 px-5 lg:pt-[144px] pt-20 max-container">
            <h2 className="lg:text-[47px] text-[32px] mirage text-[#34291E] text-center lg:mb-8 mb-5">CAPTURED TALES</h2>

            {/* Tag Buttons */}
            <div className="flex lg:justify-center items-center lg:gap-x-[64px] gap-x-[40px]  lg:px-44 gap-4 lg:mb-[50px] mb-[30px] lg:overflow-x-hidden overflow-x-scroll">
                {couples.map((couple) => (
                    <button
                        key={couple}
                        onClick={() => setSelectedCouple(couple)}
                        className={`text-[21px] whitespace-nowrap cursor-pointer redHat text-[#34291E] transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:text-black ${selectedCouple === couple ? 'font-bold' : 'font-normal'
                            }`}
                    >
                        {couple}
                    </button>
                ))}
            </div>

            {/* Content Sections */}
            <AnimatePresence mode="wait">
                {selectedCouple === 'Aditya & Riya' && (
                    <motion.div
                        key="adityaRiya"
                        initial={{ opacity: 0, y: 50, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -30, scale: 0.98 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        <img src="/Images/AdityaAndRiya.webp" alt="" className='lg:block hidden' />
                        <img src="/Images/AdityaAndRiyaMobile.jpg" alt="" className='lg:hidden w-full' />
                    </motion.div>
                )}

                {selectedCouple === 'Maitri & Mihir' && (
                    <motion.div
                        key="maitriMihir"
                        initial={{ opacity: 0, y: 50, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -30, scale: 0.98 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        <img src="/Images/MaitriAndMihir.webp" alt="" className='lg:block hidden' />
                        <img src="/Images/MaitriAndMihirMobile.jpg" alt="" className='lg:hidden w-full' />
                    </motion.div>
                )}

                {selectedCouple === 'Priyank & Dwisha' && (
                    <motion.div
                        key="priyankDwisha"
                        initial={{ opacity: 0, y: 50, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -30, scale: 0.98 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        <img src="/Images/PriyankAndDwisha.webp" alt="" className='lg:block hidden' />
                        <img src="/Images/PriyankAndDwishaMobile.jpg" alt="" className='lg:hidden w-full' />
                    </motion.div>
                )}

                {selectedCouple === 'Vikas & Sapna' && (
                    <motion.div
                        key="vikasSapna"
                        initial={{ opacity: 0, y: 50, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -30, scale: 0.98 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        <img src="/Images/VikasAndSapna.webp" alt="" className='lg:block hidden' />
                        <img src="/Images/VikasAndSapnaMobile.jpg" alt="" className='lg:hidden w-full' />
                    </motion.div>
                )}

                {selectedCouple === 'Manav & Karishma' && (
                    <motion.div
                        key="manavKarishma"
                        initial={{ opacity: 0, y: 50, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -30, scale: 0.98 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        <img src="/Images/ManavAndKarishma.webp" alt="" className='lg:block hidden' />
                        <img src="/Images/ManavAndKarishmaMobile.jpg" alt="" className='lg:hidden w-full' />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CapturedTales;
