"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen w-full flex flex-col items-center justify-between overflow-hidden bg-[#0a0a0a] text-white selection:bg-purple-500/30 py-8 md:py-12">

            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/20 opacity-30 blur-[120px] rounded-full" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-20" />
                <div className="absolute bottom-0 inset-x-0 h-[300px] bg-gradient-to-t from-black to-transparent" />

                {/* Stars/Dust (Simulated) */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
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
            <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full max-w-5xl mx-auto mt-[-40px]">

                {/* Main Visual */}
                <div className="relative flex flex-col items-center justify-center">

                    {/* Top Spot Light */}
                    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 h-64 bg-white/10 blur-[80px] rounded-full pointer-events-none" />

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative z-10 w-[350px] md:w-[500px] aspect-[4/5] md:aspect-square mb-[-60px]"
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
                    <div className="relative z-20 text-center -mt-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] font-display"
                        >
                            MAXWELL CHAN
                        </motion.h1>

                        {/* Reflection/Glow Text Effect under the main text - visual only */}
                        <h1
                            className="text-5xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-t from-white/10 to-transparent absolute top-full left-0 right-0 transform -scale-y-100 opacity-30 select-none pointer-events-none blur-sm font-display"
                            aria-hidden="true"
                        >
                            MAXWELL CHAN
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-8 text-lg md:text-xl text-white/50 font-light max-w-xl mx-auto leading-relaxed"
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
