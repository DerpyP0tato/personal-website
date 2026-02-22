"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Calendar, Briefcase, ChevronRight } from "lucide-react";

const experiences = [
    {
        company: "Maximize Consulting",
        role: "Freelance Consultant",
        period: "Aug 2025 - Present",
        description: "Serving 4 clients. Reduced data processing time by 96% by building a Python pipeline for Amazon operational data. Led product discovery and MVP development for an AI-powered mentorship platform."
    },
    {
        company: "Sullivan & Cromwell LLP",
        role: "Marketing Technology Intern",
        period: "June 2025 - Aug 2025",
        description: "Replaced a costly enterprise monitoring tool with a custom Python solution. Accelerated analytics workflows by 7x and developed a prioritized SEO improvement strategy."
    },
    {
        company: "Diversolar",
        role: "Data Management Intern",
        period: "July 2023 - Aug 2023",
        description: "Delivered a 99%+ reduction in lead processing time by redesigning workflows and building a validation pipeline. Implemented end-to-end data controls to ensure operational reliability."
    }
];

export default function Experience() {
    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center py-20 bg-[#0a0a0a] text-white overflow-hidden" id="experience">

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-display tracking-widest mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 uppercase">
                        EXPERIENCE
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        A timeline of my professional journey and the value I&apos;ve delivered to teams and projects.
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-slate-700 to-transparent md:left-1/2 md:-ml-px" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 md:-ml-2 w-10 h-10 md:w-4 md:h-4 flex items-center justify-center">
                                    <div className="w-4 h-4 rounded-full bg-purple-500 border-2 border-[#0a0a0a] shadow-[0_0_10px_rgba(168,85,247,0.5)] z-20" />
                                </div>

                                {/* Content Card */}
                                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                                    <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                                        <div className="flex items-center gap-2 mb-2 text-purple-400 text-sm font-medium">
                                            <Briefcase className="w-4 h-4" />
                                            <span>{exp.company}</span>
                                        </div>
                                        <h3 className="text-xl font-bold font-display text-white mb-1 group-hover:text-purple-300 transition-colors">{exp.role}</h3>
                                        <div className="flex items-center gap-2 mb-4 text-slate-500 text-xs uppercase tracking-wider">
                                            <Calendar className="w-3 h-3" />
                                            <span>{exp.period}</span>
                                        </div>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>



            </div>
        </section>
    );
}
