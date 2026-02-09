"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Linkedin, ExternalLink } from "lucide-react";

// Skill Icons (using simple text/colored blocks for now to match the "Ps/Ai" look, or Lucide icons where applicable)
const techStack = [
    { name: "Microsoft Suite", color: "bg-blue-500/20 text-blue-400 border-blue-500/50" },
    { name: "Google Suite", color: "bg-green-500/20 text-green-400 border-green-500/50" },
    { name: "Python", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50" },
    { name: "Google Analytics", color: "bg-orange-500/20 text-orange-400 border-orange-500/50" },
    { name: "Lovable", color: "bg-pink-500/20 text-pink-400 border-pink-500/50" },
];

export default function About() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 bg-slate-950 text-white overflow-hidden" id="about">

            {/* Background noise/grain */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

                    {/* Left Side: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full max-w-md lg:w-1/2 flex justify-center lg:justify-end"
                    >
                        {/* Blue Glow Behind Image */}
                        <div className="absolute inset-0 bg-blue-600/30 blur-[100px] rounded-full scale-75" />

                        <div className="relative z-10 w-[300px] h-[400px] md:w-[450px] md:h-[550px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
                            {/* Using the hero image but cropped/positioned differently for now */}
                            <Image
                                src="/about-image.JPG"
                                alt="Maxwell Chan"
                                fill
                                className="object-cover object-top scale-110 hover:scale-115 transition-transform duration-700"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                        </div>
                    </motion.div>

                    {/* Right Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2 text-left"
                    >
                        <div className="mb-2 text-blue-400 font-display tracking-widest text-sm uppercase">Hello, I am</div>
                        <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-8 leading-tight">
                            Maxwell Chan
                        </h2>

                        <div className="space-y-8">

                            {/* About Me */}
                            <div>
                                <h3 className="text-xl font-bold font-display tracking-wide text-slate-200 mb-3 uppercase">About Me</h3>
                                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                    I enjoy building things that turn ideas into something useful. Much of my work lives at the intersection of technology, analytics, and strategy, where I’ve explored everything from data-driven tools and automation systems to mentorship and community platforms. I’m motivated by curiosity and a love for structured problem-solving, thinking through messy problems, breaking them down, and turning them into practical solutions. Whether I’m working on a product, a system, or a new idea, I’m most interested in building things that are thoughtful, scalable, and genuinely helpful.
                                </p>
                            </div>

                            {/* Education */}
                            <div>
                                <h3 className="text-xl font-bold font-display tracking-wide text-slate-200 mb-3 uppercase">Education</h3>
                                <div className="text-slate-300 font-medium">Binghamton University</div>
                                <div className="text-slate-500 text-sm">B.S. Business Administration & Computer Science</div>
                            </div>

                            {/* Skills */}
                            <div>
                                <h3 className="text-xl font-bold font-display tracking-wide text-slate-200 mb-3 uppercase">Skills</h3>
                                <div className="flex flex-wrap gap-3">
                                    {techStack.map((tech) => (
                                        <div
                                            key={tech.name}
                                            className={`px-4 py-2 flex items-center justify-center rounded-lg border ${tech.color} backdrop-blur-md transition-transform hover:scale-105 cursor-default`}
                                        >
                                            <span className="font-semibold text-xs md:text-sm tracking-wide">{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-4">

                                <a href="mailto:mchan30@binghamton.edu" className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:text-blue-400 transition-all">
                                    <Mail className="w-5 h-5" />
                                </a>

                                <a href="https://www.linkedin.com/in/maxwellchan1/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:text-blue-400 transition-all">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
