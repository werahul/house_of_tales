"use client"

import React, { useState } from 'react';

const CapturedTales = () => {
    const [selectedCouple, setSelectedCouple] = useState('Aditya & Riya');

    const couples = [
        'Aditya & Riya',
        'Maitri & Mihir',
        'Priyank & Dwisha',
        'Vikas & Sapna',
    ];

    return (
        <div className="px-10 py-20">
            <h2 className="text-[47px] mirage text-[#34291E] text-center mb-8">CAPTURED TALES</h2>

            {/* Tag Buttons */}
            <div className="flex justify-between px-44 gap-4 mb-[50px]">
                {couples.map((couple) => (
                    <button
                        key={couple}
                        onClick={() => setSelectedCouple(couple)}
                        className={`text-[21px]  redHat text-[#34291E] ${selectedCouple === couple
                            ? 'font-bold '
                            : 'font-normal'
                            }`}
                    >
                        {couple}
                    </button>
                ))}
            </div>

            {/* Content Sections */}
            <div className="relative">
                {selectedCouple === 'Aditya & Riya' && (
                    <div>
                        <div className="">
                            <img src="/Images/AdityaAndRiya.png" alt="" />
                        </div>
                    </div>
                )}

                {selectedCouple === 'Maitri & Mihir' && (
                    <div>
                        <div className="">
                            <img src="/Images/MaitriAndMihir.png" alt="" />
                        </div>
                    </div>
                )}

                {selectedCouple === 'Priyank & Dwisha' && (
                    <div>
                        <div className="">
                            <img src="/Images/PriyankAndDwisha.png" alt="" />
                        </div>
                    </div>
                )}

                {selectedCouple === 'Vikas & Sapna' && (
                    <div>
                        <div className="">
                            <img src="/Images/VikasAndSapna.png" alt="" />
                        </div>
                    </div>
                )}


            </div>
        </div>
    );
};

export default CapturedTales;
