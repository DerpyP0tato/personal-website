"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (

        <section id="home" className="relative z-10 h-[100svh] max-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505] text-white pt-8 md:pt-12 pb-20">

            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Simple top glow with blur - covers most of section */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[85%] bg-white/[0.01] blur-[150px]" />
                {/* Bottom gradient - matched to unified background for seamless transition */}
                <div className="absolute bottom-0 inset-x-0 h-[550px]" style={{ background: 'linear-gradient(to top, #050505 0%, rgba(5,5,5,0.8) 15%, rgba(5,5,5,0.6) 30%, rgba(5,5,5,0.4) 45%, rgba(5,5,5,0.2) 60%, rgba(5,5,5,0.1) 75%, rgba(5,5,5,0.05) 90%, transparent 100%)' }} />

                {/* Subtle noise overlay to reduce color banding */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-soft-light" />
            </div>

            {/* Top Bar */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full px-6 md:px-12 flex justify-between items-center z-20 text-xs md:text-sm font-light tracking-widest text-white/60"
            >
                <div>
                    NEW YORK, NY
                </div>
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 text-white/80 font-normal tracking-[0.2em] font-display">
                    MAXWELL CHAN
                </div>

            </motion.div>

            {/* Center Content */}
            <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full max-w-5xl mx-auto mt-[-20px]">

                {/* Main Visual */}
                <div className="relative flex flex-col items-center justify-center">

                    {/* Top Spot Light */}
                    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 h-64 bg-white/10 blur-[80px] rounded-full pointer-events-none" />

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative z-10 w-[60vw] max-w-[280px] md:w-[500px] md:max-w-[450px] aspect-[4/5] md:aspect-square mb-0 md:mb-[-60px] max-h-[40vh] md:max-h-[50vh] object-contain flex items-center justify-center"
                    >
                        <Image
                            src="/hero-image-new.png"
                            alt="Maxwell Chan"
                            fill
                            className="object-cover object-top mask-image-gradient"
                            priority
                        />

                    </motion.div>

                    {/* Check if we can do the text overlay effect */}
                    <div className="relative z-20 text-center -mt-8 md:-mt-12">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-[clamp(2rem,7vw,4.5rem)] leading-none font-bold tracking-normal text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] font-display uppercase whitespace-normal md:whitespace-nowrap"
                        >
                            MAXWELL CHAN
                        </motion.h1>

                        {/* Reflection/Glow Text Effect under the main text - visual only */}
                        <h1
                            className="text-[clamp(2rem,7vw,4.5rem)] leading-none font-bold tracking-normal text-transparent bg-clip-text bg-gradient-to-t from-white/10 to-transparent absolute top-full left-0 right-0 transform -scale-y-100 opacity-30 select-none pointer-events-none blur-sm font-display uppercase"
                            aria-hidden="true"
                        >
                            MAXWELL CHAN
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-4 md:mt-6 text-base md:text-xl text-white/50 font-light max-w-xl mx-auto leading-relaxed font-sans"
                        >
                            Strategy-driven, technically grounded
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Bottom Dock Navigation - REMOVED */}
        </section>
    );
}
