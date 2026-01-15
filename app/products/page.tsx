"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Activity, Shield, Zap, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const products = [
    {
        id: "opsctl",
        title: "opsctl",
        subtitle: "The Unified CLI",
        description: "Command and control your entire infrastructure from a single terminal interface. Execute zero-latency payloads across multi-cloud environments.",
        specs: ["Latency: <10ms", "Encryption: AES-256", "Runtime: Go"],
        icon: Terminal,
        status: "STABLE",
    },
    {
        id: "nexus",
        title: "Nexus",
        subtitle: "MCP Server Manager",
        description: "Connect AI agents to your infrastructure context. Bridge the gap between extensive language models and your runtime environment.",
        specs: ["Protocol: MCP", "Context: Real-time", "Auth: OAuth2"],
        icon: Cpu,
        status: "BETA",
    },
    {
        id: "kubesentient",
        title: "KubeSentient",
        subtitle: "Autonomous Clusters",
        description: "Self-healing Kubernetes operator driven by AI analysis. Achieves binary superiority by predicting failures before they manifest.",
        specs: ["Predictive: Yes", "Healing: Auto", "Scale: Infinite"],
        icon: Activity,
        status: "ALPHA",
    },
    {
        id: "aegis",
        title: "Aegis",
        subtitle: "Edge Security",
        description: "Immutable security policies for the intelligent edge. Defend your stack against unauthorized access with pre-computed threat models.",
        specs: ["Policy: OPA", "Defense: Active", "Zero Trust: Yes"],
        icon: Shield,
        status: "CLASSIFIED",
    },
];

export default function ProductsPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 overflow-hidden">
            {/* Background Grid - Reused from Hero */}
            {/* Background Grid - Handled Globally in Layout */}
            <div className="absolute inset-0 -z-10 bg-background/90 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_0%,#000_100%)]" />

            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="mb-20 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/5 px-3 py-1 text-xs font-mono text-brand-primary"
                    >
                        <span className="h-2 w-2 animate-pulse rounded-full bg-brand-primary" />
                        SYSTEM_STATUS: ONLINE
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="mb-6 text-4xl font-bold tracking-tighter md:text-6xl lg:text-7xl text-brand-text"
                    >
                        Equip Your <span className="text-glow text-brand-primary">Stack</span>.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl text-lg text-brand-text/60 md:text-xl font-mono"
                    >
                        Precision-engineered modules for the autonomous cloud. <br className="hidden md:block" />
                        Deploy with <span className="text-brand-accent">lethal capabilities</span>.
                    </motion.p>
                </div>

                {/* Products Grid */}
                <div className="grid gap-8 md:grid-cols-2">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 + 0.3 }}
                            className="group relative overflow-hidden rounded-xl border border-card-border bg-card p-8 transition-all hover:border-brand-primary/50 hover:shadow-[0_0_30px_rgba(5,202,255,0.1)]"
                        >
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-bl from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="mb-6 flex items-start justify-between">
                                <div className="rounded-lg bg-brand-primary/10 p-3 text-brand-primary ring-1 ring-inset ring-brand-primary/20 group-hover:bg-brand-primary/20 transition-colors">
                                    <product.icon size={28} />
                                </div>
                                <span className={cn(
                                    "rounded px-2 py-1 text-[10px] font-bold font-mono tracking-widest border",
                                    product.status === 'STABLE' && "border-green-500/30 text-green-500 bg-green-500/10",
                                    product.status === 'BETA' && "border-brand-primary/30 text-brand-primary bg-brand-primary/10",
                                    product.status === 'ALPHA' && "border-orange-500/30 text-orange-500 bg-orange-500/10",
                                    product.status === 'CLASSIFIED' && "border-red-500/30 text-red-500 bg-red-500/10"
                                )}>
                                    {product.status}
                                </span>
                            </div>

                            <h3 className="mb-2 text-2xl font-bold text-brand-text font-mono group-hover:text-brand-primary transition-colors">
                                {product.title}
                            </h3>
                            <p className="mb-4 text-sm font-semibold text-brand-primary/80 font-mono tracking-wide">
                                {product.subtitle}
                            </p>
                            <p className="mb-6 text-brand-text/70 leading-relaxed">
                                {product.description}
                            </p>

                            {/* Tech Specs */}
                            <div className="border-t border-brand-text/5 pt-4">
                                <div className="grid grid-cols-3 gap-2">
                                    {product.specs.map((spec, j) => (
                                        <div key={j} className="text-[10px] font-mono text-brand-text/40 uppercase tracking-wider">
                                            {spec}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
