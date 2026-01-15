"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Activity, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const products = [
    {
        id: "opsctl",
        title: "opsctl",
        description: "The unified CLI. Manage your entire edge stack from one terminal.",
        icon: Terminal,
        className: "md:col-span-2",
    },
    {
        id: "nexus",
        title: "Nexus",
        description: "MCP Server Manager. Connect AI to your Infrastructure context.",
        icon: Cpu,
        className: "md:col-span-1",
    },
    {
        id: "kubesentient",
        title: "KubeSentient",
        description: "Self-healing Kubernetes clusters driven by AI analysis.",
        icon: Activity,
        className: "md:col-span-1",
    },
    // Placeholder to balance the grid if needed, but instructions said 3 items.
    // 3 items: Large (2 cols), Medium (1 col), Medium (1 col) -> 2 rows in a 2-col grid?
    // Row 1: opsctl (span 2)
    // Row 2: Nexus (span 1), KubeSentient (span 1)
    // That seems like a solid bento.
];

export const ProductsSection = () => {
    return (
        <section className="container mx-auto px-4 py-24">
            <div className="mb-16 text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl text-brand-text mb-4">
                    The <span className="text-brand-primary">EdgeOps</span> Suite
                </h2>
                <p className="text-brand-text/60 max-w-2xl mx-auto">
                    Powerful tools designed to work together or stand alone.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {products.map((product, i) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={cn(
                            "group relative overflow-hidden rounded-2xl glass-card p-8 transition-all hover:bg-brand-primary/5 dark:hover:bg-brand-dark/30",
                            // Custom grid logic: 
                            // If we want opsctl to be large, let's say it takes 2 cols on LG.
                            product.id === 'opsctl' ? "lg:col-span-2 md:col-span-2" : "lg:col-span-1 md:col-span-1"
                        )}
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                            <product.icon size={120} className="text-brand-primary translate-x-8 -translate-y-8" />
                        </div>

                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-brand-primary/10 p-3 text-brand-primary ring-1 ring-inset ring-brand-primary/20">
                                    <product.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-text mb-2 font-mono">
                                    {product.title}
                                </h3>
                                <p className="text-brand-text/70 leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            <div className="mt-8 flex items-center text-sm font-semibold text-brand-primary">
                                Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Decorative Grid Filler if we want a true bento feel with empty spaces or stats */}
                <div className="hidden lg:flex flex-col justify-center items-center p-8 rounded-2xl border border-dashed border-white/10 text-center">
                    <span className="text-4xl font-mono font-bold text-white/20">3+</span>
                    <span className="text-sm text-white/40 uppercase tracking-widest mt-2">Modules Active</span>
                </div>

            </div>
        </section>
    );
};
