"use client";

import { motion } from "framer-motion";
import { Heart, Zap, Globe } from "lucide-react";
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

export function CommunityWorks() {
    return (
        <section className="py-16 md:py-24 relative border-t border-brand-primary/10">
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
        </section>
    );
}
