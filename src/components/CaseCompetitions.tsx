"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Target, Award, Zap, Store, TrendingUp, Megaphone, Route, ShoppingBag, Rocket } from "lucide-react";

const competitions = [
    {
        name: "MIS 311 Business Modernization",
        placement: "Winner",
        year: "Dec 2025",
        description: "Reimagined a cafe as a tech-enabled 'third place' with an NFC-powered app integrating POS and ERP systems to optimize operations and deliver AI-driven offers.",
        icon: <Store className="w-8 h-8 text-emerald-400" />
    },
    {
        name: "UPenn Consult for America x Capital One",
        placement: "Semi-Finalist (Top 5%)",
        year: "Apr 2025",
        description: "Designed 'CapitalPods,' an AI-powered financial product for young adults featuring group budgeting tools and goal-oriented savings platforms to boost user acquisition.",
        icon: <TrendingUp className="w-8 h-8 text-blue-400" />
    },
    {
        name: "BUMA x JBL Spring Case Competition",
        placement: "Finalist",
        year: "Mar 2025",
        description: "Proposed a multi-channel partnership campaign for JBL featuring VR experiences and a viral TikTok strategy to target Gen Z consumers.",
        icon: <Megaphone className="w-8 h-8 text-purple-400" />
    },
    {
        name: "NYU Product Case Competition",
        placement: "Finalist",
        year: "Nov 2024",
        description: "Developed a weighted A* algorithm and hub-and-spoke model to optimize small business logistics, winning the preliminary round against 19 teams.",
        icon: <Route className="w-8 h-8 text-cyan-400" />
    },
    {
        name: "UNIQLO x BUBFS Merchandising",
        placement: "Winner",
        year: "Nov 2024",
        description: "Crafted a strategic partnership proposal under NDA to expand Uniqlo's sustainable line, developing a 3-year growth plan based on market analysis.",
        icon: <ShoppingBag className="w-8 h-8 text-red-400" />
    },
    {
        name: "BEAM Case Competition",
        placement: "Winner",
        year: "Oct 2024",
        description: "Secured first place with a strategic business proposal for Marvel featuring partnerships with NASA and Red Cross to tackle revenue challenges.",
        icon: <Rocket className="w-8 h-8 text-orange-400" />
    }
];

export default function CaseCompetitions() {
    return (
        <section className="relative w-full py-20 bg-[#0a0a0a] text-white overflow-hidden" id="competitions">

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-display tracking-wider mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-200">
                        CASE COMPETITIONS
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        Solving complex business problems and driving innovation under pressure.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {competitions.map((comp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group h-full"
                        >
                            {/* Abstract Glow Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative h-full p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/5 shadow-inner">
                                        {comp.icon}
                                    </div>
                                    <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider bg-white/10 text-slate-300 border border-white/5">
                                        {comp.year}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-purple-300 transition-colors">
                                    {comp.name}
                                </h3>

                                <div className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-4 uppercase tracking-widest">
                                    {comp.placement}
                                </div>

                                <p className="text-slate-400 text-sm leading-relaxed mt-auto">
                                    {comp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
