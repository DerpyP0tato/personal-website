"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Store, TrendingUp, Megaphone, Route, ShoppingBag, Rocket, Trophy } from "lucide-react";

const competitions = [
    {
        id: "mis311",
        name: "MIS 311 Business Modernization",
        placement: "Winner",
        year: "Dec 2025",

        description: "Reimagined a cafe as a tech-enabled 'third place' with an NFC-powered app integrating POS and ERP systems to optimize operations and deliver AI-driven offers.",
        icon: <Store className="w-10 h-10 text-emerald-500" />,
        color: "emerald"
    },
    {
        id: "upenn",
        name: "UPenn Consult for America",
        placement: "Semi-Finalist",
        year: "Apr 2025",

        description: "Designed 'CapitalPods,' an AI-powered financial product for young adults featuring group budgeting tools and goal-oriented savings platforms to boost user acquisition.",
        icon: <TrendingUp className="w-10 h-10 text-blue-500" />,
        color: "blue"
    },
    {
        id: "buma",
        name: "BUMA x JBL Case Competition",
        placement: "Finalist",
        year: "Mar 2025",

        description: "Proposed a multi-channel partnership campaign for JBL featuring VR experiences and a viral TikTok strategy to target Gen Z consumers.",
        icon: <Megaphone className="w-10 h-10 text-purple-500" />,
        color: "purple"
    },
    {
        id: "nyu",
        name: "NYU Product Case Competition",
        placement: "Finalist",
        year: "Nov 2024",

        description: "Developed a weighted A* algorithm and hub-and-spoke model to optimize small business logistics, winning the preliminary round against 19 teams.",
        icon: <Route className="w-10 h-10 text-cyan-500" />,
        color: "cyan"
    },
    {
        id: "uniqlo",
        name: "UNIQLO x BUBFS",
        placement: "Winner",
        year: "Nov 2024",

        description: "Crafted a strategic partnership proposal under NDA to expand Uniqlo's sustainable line, developing a 3-year growth plan based on market analysis.",
        icon: <ShoppingBag className="w-10 h-10 text-red-500" />,
        color: "red"
    },
    {
        id: "beam",
        name: "BEAM Case Competition",
        placement: "Winner",
        year: "Oct 2024",

        description: "Secured first place with a strategic business proposal for Marvel featuring partnerships with NASA and Red Cross to tackle revenue challenges.",
        icon: <Rocket className="w-10 h-8 text-orange-500" />,
        color: "orange"
    }
];

const CompetitionItem = ({ comp, isSelected, onClick }) => {
    const isWinner = comp.placement.includes("Winner");

    return (

        <motion.div
            onClick={onClick}
            className={`group relative px-4 py-3 cursor-pointer rounded-xl transition-all duration-300 border-l-2 ${isSelected
                ? "bg-white/5 border-l-blue-500"
                : "bg-transparent border-l-transparent hover:bg-white/5 hover:border-l-white/20"
                }`}
        >
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className={`font-sans font-semibold text-xl xl:text-lg mb-1 transition-colors ${isSelected ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                            {comp.name}
                        </h3>
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-slate-500">
                                {comp.year}
                            </span>
                            {isWinner ? (
                                <span className="flex items-center gap-1 text-amber-400 text-xs font-medium">
                                    <Trophy className="w-3 h-3" />
                                    {comp.placement}
                                </span>
                            ) : comp.placement && (
                                <span className="flex items-center gap-1 text-slate-400 text-xs font-medium">
                                    {comp.placement}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile/Tablet Content (Visible when screen < xl) */}
                <div className="block xl:hidden text-slate-400 text-sm leading-relaxed">
                    {comp.description}
                </div>
            </div>
        </motion.div>
    );
};

export default function CaseCompetitions() {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Track scroll progress of the entire section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Map scroll progress (0 to 1) to active index (0 to length - 1)
    useTransform(scrollYProgress, (value) => {
        // We only want to interact when the section is actively scrolling
        // Value goes from 0 to 1. 
        // Let's divide it into segments.
        const count = competitions.length;
        const segment = 1 / count;
        const index = Math.min(Math.floor(value / segment), count - 1);

        // Only update state if it changed to avoid re-renders
        if (index !== activeIndex) {
            // Since we can't update state directly inside useTransform safely in all React versions without debounce,
            // we'll check inside a useEffect or just assume it's safe for simple state.
            // Actually, best practice is to use a listener.
            return index;
        }
    });

    // To properly update state from the motion value
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            const count = competitions.length;
            const index = Math.min(Math.floor(latest * count), count - 1);
            setActiveIndex(Math.max(0, index));
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <section ref={containerRef} className="relative w-full min-h-screen xl:h-[300vh] bg-[#050505] text-white" id="competitions">

            <div className="static xl:sticky top-0 xl:top-28 h-auto xl:h-[calc(100dvh-7rem)] flex flex-col justify-start xl:justify-center overflow-visible pb-12 xl:pb-0 pt-24 xl:pt-8">
                <div className="container mx-auto px-4 md:px-12 h-full flex flex-col">

                    <div className="flex flex-col xl:flex-row gap-12 xl:gap-24 h-full relative items-center">

                        {/* Left Column: Header + Pinned List */}
                        <div className="w-full xl:w-5/12 flex flex-col justify-center h-full">
                            {/* Header inside the sticky column */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="mb-4"
                            >
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-wider mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 py-2 leading-normal uppercase">
                                    CASE COMPETITIONS
                                </h2>
                                <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm">
                                    Select strategic challenges and award-winning solutions.
                                </p>
                            </motion.div>

                            <div className="flex flex-col gap-1 pb-24">
                                {competitions.map((comp, index) => (
                                    <CompetitionItem
                                        key={comp.id}
                                        comp={comp}
                                        isSelected={index === activeIndex}
                                        onClick={() => {
                                            // Manual selection logic if needed
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Stacked Card Carousel */}
                        <div className="w-full xl:w-7/12 hidden xl:flex h-[500px] relative items-center justify-center">
                            <div className="relative w-full h-full">
                                {competitions.map((comp, index) => {
                                    const isActive = index === activeIndex;
                                    const offset = index - activeIndex;

                                    // Only show cards within range
                                    if (Math.abs(offset) > 2) return null;

                                    return (
                                        <motion.div
                                            key={comp.id}
                                            initial={false}
                                            animate={{
                                                y: `calc(50% + ${offset * 80}px - 60px)`,
                                                scale: 1 - Math.abs(offset) * 0.08,
                                                opacity: isActive ? 1 : Math.max(0.4, 1 - Math.abs(offset) * 0.35),
                                                zIndex: competitions.length - Math.abs(offset),
                                            }}
                                            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                                            className={`absolute inset-x-0 w-full h-[280px] rounded-2xl bg-gradient-to-br ${isActive ? 'from-[#0A0A0A] to-[#111]' : 'from-[#080808] to-[#0A0A0A]'} border border-white/5 p-6 flex flex-col shadow-2xl cursor-pointer`}
                                            onClick={() => setActiveIndex(index)}
                                            style={{
                                                transformOrigin: 'center center',
                                                filter: isActive ? 'none' : `blur(${Math.abs(offset) * 1}px)`
                                            }}
                                        >
                                            {/* Header */}
                                            <div className="flex items-start justify-between mb-4">
                                                <div className={`p-3 rounded-xl bg-white/5 text-${comp.color}-500`}>
                                                    {comp.icon}
                                                </div>

                                                {comp.placement.includes("Winner") ? (
                                                    <div className="px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-xs font-medium border border-amber-500/20">
                                                        {comp.placement}
                                                    </div>
                                                ) : (
                                                    <div className="px-3 py-1.5 rounded-full bg-white/5 text-slate-400 text-xs font-medium border border-white/10">
                                                        {comp.placement}
                                                    </div>
                                                )}
                                            </div>

                                            <h3 className="text-xl md:text-2xl font-bold font-sans text-white mb-3 leading-tight">
                                                {comp.name}
                                            </h3>

                                            <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
                                                {comp.description}
                                            </p>

                                            {/* Footer Stats */}
                                            <div className="mt-auto pt-4 border-t border-white/5">
                                                <span className="block text-xs text-slate-500 mb-1">Date</span>
                                                <span className="text-sm text-slate-200">{comp.year}</span>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
