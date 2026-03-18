"use client";

import { motion } from "framer-motion";
import { Eye, Rocket } from "lucide-react";

export function VisionMission() {
    return (
        <section className="py-16 md:py-24 relative border-t border-brand-primary/10">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] -z-10" />

            <div className="space-y-16 lg:space-y-24 text-center">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 relative text-left">
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
            </div>
        </section>
    );
}
