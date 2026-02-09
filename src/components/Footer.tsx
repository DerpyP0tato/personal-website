"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full py-12 bg-[#050505] border-t border-white/5 flex flex-col items-center justify-center text-center">
            <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-4">
                Need strategy & technical consulting?
            </h3>
            <a
                href="https://www.maximizeconsulting.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white/80 hover:text-white"
            >
                <span>Visit Maximize Consulting</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="mt-12 text-xs text-white/20">
                © {new Date().getFullYear()} Maxwell Chan. All rights reserved.
            </div>
        </footer>
    );
}
