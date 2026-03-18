"use client";

import { motion } from "framer-motion";
import { Eye, Rocket, Heart, Zap, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
    {
        icon: Zap,
        title: "Innovation First",
        description: "We constantly push the boundaries of what's possible with autonomous edge computing.",
        color: "text-brand-primary",
        bg: "bg-brand-primary/10",
        border: "border-brand-primary/20",
    },
    {
        icon: Globe,
        title: "Open & Decentralized",
        description: "We believe the future of the cloud is decentralized, open-source, and accessible to everyone.",
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        border: "border-blue-400/20",
    },
    {
        icon: Heart,
        title: "Community Driven",
        description: "Our community is our strength. We build in public and prioritize developer experience above all.",
        color: "text-rose-400",
        bg: "bg-rose-400/10",
        border: "border-rose-400/20",
    }
];

export function VisionMissionValues() {
    return (
        <section className="py-16 md:py-24 relative border-t border-brand-primary/10">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] -z-10" />

            <div className="space-y-16 lg:space-y-24">
                {/* Vision & Mission Split */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-brand-primary/20 to-transparent" />

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white/80 to-transparent dark:from-card/50 dark:to-background border border-black/5 dark:border-white/5 hover:border-brand-primary/30 transition-colors group"
                    >
                        <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-8 border border-brand-primary/20">
                                <Eye className="w-8 h-8 text-brand-primary" />
                            </div>
                            <h2 className="text-3xl font-bold font-mono text-brand-text mb-4 flex items-center gap-4">
                                Our Vision
                                <span className="h-px flex-1 bg-gradient-to-r from-brand-primary/50 to-transparent" />
                            </h2>
                            <p className="text-brand-text/70 text-lg leading-relaxed">
                                A world where computing infrastructure manages itself. We envision a globally distributed, intelligent edge network where applications seamlessly scale and heal without human intervention.
                            </p>
                        </div>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-bl from-white/80 to-transparent dark:from-card/50 dark:to-background border border-black/5 dark:border-white/5 hover:border-blue-500/30 transition-colors group"
                    >
                        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/20">
                                <Rocket className="w-8 h-8 text-blue-400" />
                            </div>
                            <h2 className="text-3xl font-bold font-mono text-brand-text mb-4 flex items-center gap-4">
                                Our Mission
                                <span className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
                            </h2>
                            <p className="text-brand-text/70 text-lg leading-relaxed">
                                To abstract away the complexities of modern cloud deployments. We are building the foundational tools, protocols, and autonomous agents that empower developers to focus solely on shipping great code.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Community Values (How it works / Intension) */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-mono text-brand-text mb-6">
                            How Our <span className="text-glow text-brand-primary">Community Works</span>
                        </h2>
                        <p className="text-brand-text/60 text-lg max-w-2xl mx-auto">
                            The core principles and intentions that drive the EdgeOps ecosystem forward. These values are the bedrock of everything we build.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((value, i) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={cn(
                                    "p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 group",
                                    "bg-white/50 dark:bg-card/30 backdrop-blur-sm border-black/5 dark:border-white/5",
                                    `hover:${value.border}`
                                )}
                            >
                                <div className={cn(
                                    "w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3",
                                    value.bg,
                                    value.color
                                )}>
                                    <value.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-brand-text mb-3">{value.title}</h3>
                                <p className="text-brand-text/60 text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
