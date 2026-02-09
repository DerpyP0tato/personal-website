"use client";

import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Activity, GitBranch, ShieldCheck, Mail, DollarSign, Layout } from "lucide-react";

const projects = [
    {
        title: "Marketing Analytics Library",
        category: "ANALYTICS",
        description: "Developed a Python-based analytics library to extract and analyze website visitor behavior beyond standard GA4 reporting, with metrics tailored to company-specific decision-making needs.",
        metrics: [
            { value: "15+ hrs/mo", label: "TIME SAVED" },
            { value: "Tailored", label: "METRICS" }
        ],
        icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
        color: "border-blue-500/20 bg-blue-500/5 hover:border-blue-500/40"
    },
    {
        title: "Website Monitor Tool",
        category: "INTERNAL TOOLING",
        description: "Built a custom uptime and audit monitoring system covering performance, accessibility, and SEO. The tool replicated core enterprise features and enabled the decommissioning of a six-figure annual software platform.",
        metrics: [
            { value: "$100K+/yr", label: "SAVED" },
            { value: "Lean System", label: "DESIGN" }
        ],
        icon: <Activity className="w-6 h-6 text-emerald-400" />,
        color: "border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40"
    },
    {
        title: "Data Pipeline Automation",
        category: "AUTOMATION",
        description: "Created an automated, Selenium-based data pipeline that connected Amazon marketplace data directly into the company's analytics platform, eliminating manual extraction and reporting workflows.",
        metrics: [
            { value: "15+ hrs/wk", label: "TIME SAVED" },
            { value: "End-to-End", label: "INTEGRATION" }
        ],
        icon: <GitBranch className="w-6 h-6 text-purple-400" />,
        color: "border-purple-500/20 bg-purple-500/5 hover:border-purple-500/40"
    },
    {
        title: "Data Scrubbing & Compliance",
        category: "AUTOMATION",
        description: "Built a Python-based system to automatically scrub, standardize, and validate customer lead data in line with business requirements and compliance standards, replacing a team-wide manual process.",
        metrics: [
            { value: "150+ hrs/wk", label: "TIME SAVED" },
            { value: "Automated", label: "QUALITY" }
        ],
        icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
        color: "border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-500/40"
    },
    {
        title: "Email Marketing Tooling",
        category: "INTERNAL TOOLING",
        description: "Developed a lightweight internal email system that enabled fully branded marketing campaigns without reliance on recurring third-party email marketing platforms.",
        metrics: [
            { value: "$45/mo", label: "SAVED" },
            { value: "$0/mo", label: "FEES" }
        ],
        icon: <Mail className="w-6 h-6 text-pink-400" />,
        color: "border-pink-500/20 bg-pink-500/5 hover:border-pink-500/40"
    },
    {
        title: "Revenue Reconciliation",
        category: "INTERNAL TOOLING",
        description: "Created an internal application that reconciled booking and promotion data across platforms to identify discrepancies and surface previously missed revenue.",
        metrics: [
            { value: "$1,500+", label: "RECOVERED" },
            { value: "Cross-Platform", label: "INTEGRATION" }
        ],
        icon: <DollarSign className="w-6 h-6 text-yellow-400" />,
        color: "border-yellow-500/20 bg-yellow-500/5 hover:border-yellow-500/40"
    },
    {
        title: "Website Design & Prototyping",
        category: "DESIGN",
        description: "Designed and prototyped marketing websites in Figma and supported deployment and ongoing management on Squarespace for non-technical teams.",
        metrics: [
            { value: "Rapid", label: "ITERATION" },
            { value: "Design-Launch", label: "LIFECYCLE" }
        ],
        icon: <Layout className="w-6 h-6 text-orange-400" />,
        color: "border-orange-500/20 bg-orange-500/5 hover:border-orange-500/40"
    }
];

export default function Projects() {
    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center py-20 bg-[#0a0a0a] text-white overflow-hidden" id="projects">

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 tracking-wider uppercase">Selected Projects</h2>
                    <div className="w-20 h-1 bg-blue-500 rounded-full" />
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative p-6 md:p-8 rounded-2xl border ${project.color} backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
                        >
                            {/* Header Row: Icon and Category */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                                    {project.icon}
                                </div>
                                <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-white/5 border border-white/5 text-slate-400">
                                    {project.category}
                                </span>
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-xl font-bold font-display mb-3 group-hover:text-blue-400 transition-colors uppercase tracking-wide">
                                {project.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                {project.description}
                            </p>

                            {/* Metrics */}
                            <div className="mt-auto grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                                {project.metrics.map((metric, idx) => (
                                    <div key={idx}>
                                        <div className="font-bold text-white text-sm md:text-base">
                                            {metric.value}
                                        </div>
                                        <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                                            {metric.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
