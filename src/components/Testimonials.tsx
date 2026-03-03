"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        name: "Marketing Tech Lead",
        company: "Marketing Technology",
        quote:
            "Max was amazing! We gave him a lot of freedom to work on some 'out-there' projects to optimize some workflows for the marketing technology team. He massively exceeded expectations, developing a Google Analytics tool that has the potential to save large amounts of time for teams generating marketing metrics reports. Whenever we gave him other research assignments, he completed them extremely effectively, and was able to craft comprehensive action plans and to recommend relevant resources based on the insights he gained.",
        stars: 5,
        accent: "blue",
    },
    {
        name: "Small Business Owner",
        company: "Skin Care Company",
        quote:
            "Starting a small business was definitely difficult, but working with Maxwell made it much easier. He clearly scoped out what I needed, kept costs low, and supported me throughout the implementation. Even though my operations are very hands on, he found practical ways to add automation, such as revenue controls, which reduced manual work and improved my day to day operations.",
        stars: 5,
        accent: "purple",
    },
    {
        name: "Co-Founder",
        company: "Iobyte Solutions",
        quote:
            "Max was outstanding and tackled automation tasks with impressive efficiency and creativity. He quickly grasped our technical strategy needs and delivered a solution with clean and robust code that enhanced our workflow. His dedication and quick learning make him a promising talent in automation — highly recommended for future projects!",
        stars: 5,
        accent: "emerald",
    },
];

const accentMap: Record<string, { border: string; bg: string; text: string; star: string; quote: string }> = {
    blue: { border: "border-blue-500/20", bg: "bg-blue-500/5", text: "text-blue-400", star: "text-blue-400", quote: "text-blue-500/20" },
    purple: { border: "border-purple-500/20", bg: "bg-purple-500/5", text: "text-purple-400", star: "text-purple-400", quote: "text-purple-500/20" },
    emerald: { border: "border-emerald-500/20", bg: "bg-emerald-500/5", text: "text-emerald-400", star: "text-emerald-400", quote: "text-emerald-500/20" },
    cyan: { border: "border-cyan-500/20", bg: "bg-cyan-500/5", text: "text-cyan-400", star: "text-cyan-400", quote: "text-cyan-500/20" },
    pink: { border: "border-pink-500/20", bg: "bg-pink-500/5", text: "text-pink-400", star: "text-pink-400", quote: "text-pink-500/20" },
};

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="relative w-full py-24 bg-[#0a0a0a] text-white overflow-hidden"
        >
            {/* Subtle background glow */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="w-[600px] h-[400px] rounded-full bg-blue-600/5 blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 tracking-wider uppercase">
                        Testimonials
                    </h2>
                    <div className="w-20 h-1 bg-blue-500 rounded-full" />
                    <p className="mt-6 text-slate-400 text-sm md:text-base max-w-xl leading-relaxed">
                        What the people I&apos;ve worked with have to say.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((t, index) => {
                        const a = accentMap[t.accent];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className={`group relative p-6 md:p-8 rounded-2xl border ${a.border} ${a.bg} backdrop-blur-sm transition-colors duration-300 hover:shadow-2xl flex flex-col`}
                            >
                                {/* Quote icon */}
                                <Quote
                                    className={`w-10 h-10 mb-4 ${a.quote} fill-current`}
                                    strokeWidth={0}
                                />

                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: t.stars }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${a.star} fill-current`}
                                            strokeWidth={0}
                                        />
                                    ))}
                                </div>

                                {/* Quote text */}
                                <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-8">
                                    &ldquo;{t.quote}&rdquo;
                                </p>

                                {/* Attribution */}
                                <div className="pt-6 border-t border-white/5">
                                    <div className={`text-sm font-bold ${a.text} mb-0.5`}>
                                        {t.name}
                                    </div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wider">
                                        {t.title} &bull; {t.company}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
