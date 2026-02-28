"use client";

import { motion } from "framer-motion";
import { FolderGit2, Star, GitFork } from "lucide-react";

const REPOS = [
    {
        name: "edgeops/core",
        description: "The autonomous cloud kernel. Handles deterministic state reconciliation at the edge.",
        language: "Rust",
        stars: "12.4k",
        forks: "1.2k",
        color: "bg-orange-500"
    },
    {
        name: "edgeops/runtime",
        description: "Zero-latency WASM execution environment optimized for AI inference workloads.",
        language: "C++",
        stars: "8.9k",
        forks: "840",
        color: "bg-blue-500"
    },
    {
        name: "edgeops/protocol",
        description: "P2P networking stack for decentralized node synchronization.",
        language: "Go",
        stars: "5.1k",
        forks: "320",
        color: "bg-cyan-500"
    }
];

export function FeaturedRepos() {
    return (
        <section className="py-16 border-t border-white/10 mt-16">
            <div className="flex items-center gap-3 mb-10">
                <div className="p-2 rounded-lg bg-white/10 text-white">
                    <FolderGit2 size={24} />
                </div>
                <h2 className="text-3xl font-bold font-mono text-brand-text">Open Source Kernel</h2>
            </div>

            <p className="text-brand-text/60 mb-10 max-w-2xl font-mono">
                Code is law. Inspect our core infrastructure repositories. We build in the open.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
                {REPOS.map((repo, i) => (
                    <motion.a
                        key={repo.name}
                        href={`https://github.com/${repo.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 rounded-2xl border border-white/10 bg-card hover:border-white/30 transition-all group flex flex-col"
                    >
                        <h3 className="text-lg font-bold mb-3 font-mono text-brand-primary group-hover:underline">
                            {repo.name}
                        </h3>
                        <p className="text-brand-text/60 text-sm mb-6 flex-grow">
                            {repo.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-brand-text/50 font-mono">
                            <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${repo.color}`} />
                                {repo.language}
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1 group-hover:text-amber-400 transition-colors">
                                    <Star size={14} /> {repo.stars}
                                </span>
                                <span className="flex items-center gap-1 group-hover:text-white transition-colors">
                                    <GitFork size={14} /> {repo.forks}
                                </span>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
