"use client";

import { motion } from "framer-motion";
import { GitCommitHorizontal, CheckCircle2, CircleDashed } from "lucide-react";
import { cn } from "@/lib/utils";

const ROADMAP = [
    {
        month: "March 2026",
        status: "current",
        title: "Protocol Expansion",
        items: [
            "Edge Function Middleware V2",
            "WASM Runtime Integration",
            "Dark Mode Dashboard overhaul"
        ]
    },
    {
        month: "April 2026",
        status: "planned",
        title: "Data Sovereignty",
        items: [
            "Local-first vector storage",
            "P2P state sync (Beta)",
            "Automated failover protocol"
        ]
    },
    {
        month: "May 2026",
        status: "planned",
        title: "The Singularity Release",
        items: [
            "v2.0.0 Stable Release",
            "Global Edge Network expansion",
            "AI-assisted infrastructure auto-scaling"
        ]
    }
];

export function RoadmapSection() {
    return (
        <section className="py-16 border-t border-white/10 mt-16">
            <div className="flex items-center gap-3 mb-10">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <GitCommitHorizontal size={24} />
                </div>
                <h2 className="text-3xl font-bold font-mono text-brand-text">Execution Roadmap</h2>
            </div>

            <p className="text-brand-text/60 mb-12 max-w-2xl font-mono">
                Our trajectory for the next 3 months. We build in public. No roadmaps without delivery.
            </p>

            <div className="relative">
                {/* Connecting Line */}
                <div className="absolute top-0 bottom-0 left-6 md:left-1/2 md:-translate-x-1/2 w-px bg-white/10" />

                <div className="space-y-12">
                    {ROADMAP.map((phase, i) => (
                        <div key={phase.month} className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">

                            {/* Left Side (Month - Desktop) */}
                            <div className="hidden md:block w-1/2 pr-12 text-right">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="font-mono text-xl font-bold text-brand-text/80"
                                >
                                    {phase.month}
                                </motion.div>
                            </div>

                            {/* Center Node */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", delay: 0.1 }}
                                className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-background border-2 border-card z-10"
                            >
                                {phase.status === 'current' ? (
                                    <CheckCircle2 size={16} className="text-emerald-400" />
                                ) : (
                                    <CircleDashed size={16} className="text-brand-text/40" />
                                )}
                            </motion.div>

                            {/* Right Side / Mobile Layout Container */}
                            <div className="w-full pl-16 md:w-1/2 md:pl-12">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className={cn(
                                        "p-6 rounded-2xl border transition-colors",
                                        phase.status === 'current' ? "bg-emerald-500/5 border-emerald-500/20" : "bg-card border-white/5"
                                    )}
                                >
                                    <div className="md:hidden font-mono text-sm font-bold text-brand-primary mb-2">
                                        {phase.month}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-brand-text">
                                        {phase.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {phase.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-3 text-sm text-brand-text/70">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-text/30 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
