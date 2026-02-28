"use client";

import { motion } from "framer-motion";
import { Terminal, Download, FileJson, Cpu } from "lucide-react";

const TOOLS = [
    {
        id: "cli",
        title: "EdgeOps CLI Tool",
        description: "Manage nodes, deploy functions, and monitor logs directly from your terminal.",
        icon: Terminal,
        action: "Download v1.0",
        color: "text-brand-primary"
    },
    {
        id: "cheat",
        title: "Architecture Cheatsheet",
        description: "Printable PDF detailing our zero-touch infrastructure patterns and ports.",
        icon: FileJson,
        action: "Get PDF",
        color: "text-amber-400"
    },
    {
        id: "benchmark",
        title: "Latency Benchmarker",
        description: "Web tool to test your current stack against EdgeOps regional nodes.",
        icon: Cpu,
        action: "Run Test",
        color: "text-purple-400"
    }
];

export function FreeTools() {
    return (
        <section className="py-16 border-t border-b border-white/10 my-16">
            <div className="flex items-center gap-3 mb-10">
                <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400">
                    <Download size={24} />
                </div>
                <h2 className="text-3xl font-bold font-mono text-brand-text">Tactical Assets (Free Tools)</h2>
            </div>

            <p className="text-brand-text/60 mb-10 max-w-2xl font-mono">
                Equip yourself. Open-source utilities and references to accelerate your deployment velocity.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
                {TOOLS.map((tool, i) => (
                    <motion.div
                        key={tool.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 rounded-2xl border border-white/10 bg-card hover:bg-white/5 transition-all flex flex-col items-start"
                    >
                        <div className={`mb-4 p-3 rounded-xl bg-white/5 ${tool.color}`}>
                            <tool.icon size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-brand-text">
                            {tool.title}
                        </h3>
                        <p className="text-brand-text/60 text-sm mb-6 flex-grow">
                            {tool.description}
                        </p>
                        <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest font-mono text-brand-text/80 hover:text-white transition-colors py-2 px-4 rounded-lg border border-white/10 hover:border-white/30 bg-background w-full justify-center">
                            <Download size={14} />
                            {tool.action}
                        </button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
