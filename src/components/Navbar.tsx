"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase } from "lucide-react";

const navItems = [
    { name: "HOME", href: "#home", icon: <Home className="w-4 h-4" /> },
    { name: "ABOUT", href: "#about", icon: <User className="w-4 h-4" /> },
    { name: "EXPERIENCE", href: "#experience", icon: <Briefcase className="w-4 h-4" /> },
    { name: "PROJECTS", href: "#projects", icon: <Briefcase className="w-4 h-4" /> }, // Keeping Briefcase icon for now or can import Folder
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.href.substring(1));
            const scrollPosition = window.scrollY + 100; // Offset for better detection

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="sticky top-8 -mt-32 z-50 w-full flex justify-center py-4 pointer-events-none"
        >
            <nav className="flex items-center gap-1 p-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl pointer-events-auto">
                {navItems.map((item) => {
                    const isActive = activeSection === item.href.substring(1);
                    return (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs md:text-sm transition-all duration-300 font-display tracking-widest ${isActive ? "bg-white text-black font-bold" : "text-white/60 hover:text-white hover:bg-white/10"}`}
                            onClick={() => setActiveSection(item.href.substring(1))}
                        >
                            <span className="hidden md:inline">{item.name}</span>
                            <span className="md:hidden">{item.icon}</span>
                        </a>
                    );
                })}
            </nav>
        </motion.div>
    );
}
