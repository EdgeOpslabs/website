"use client";

import { FolderGit2 } from "lucide-react";

const REPOS = [
    {
        name: "edgeops/core",
        description: "The autonomous cloud kernel. Handles deterministic state reconciliation at the edge.",
        language: "Rust",
        color: "bg-orange-500"
    },
    {
        name: "edgeops/runtime",
        description: "Zero-latency WASM execution environment optimized for AI inference workloads.",
        language: "C++",
        color: "bg-blue-500"
    },
    {
        name: "edgeops/protocol",
        description: "P2P networking stack for decentralized node synchronization.",
        language: "Go",
        color: "bg-cyan-500"
    }
];

export function FeaturedRepos() {
    return (
        <section className="py-16 border-t border-white/10 mt-16">
            <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/10 text-white">
                        <FolderGit2 size={24} />
                    </div>
                    <h2 className="text-3xl font-bold font-mono text-brand-text">Open Source Kernel</h2>
                </div>
                <div className="px-3 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/10 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                    <span className="text-[10px] font-mono font-bold text-brand-primary uppercase tracking-wider">
                        Coming Soon
                    </span>
                </div>
            </div>

            <p className="text-brand-text/60 mb-10 max-w-2xl font-mono">
                Code is law. Our core infrastructure repositories will be made public here. We build in the open.
            </p>

            <div className="grid md:grid-cols-3 gap-6 opacity-60 pointer-events-none grayscale-[0.5]">
                {REPOS.map((repo) => (
                    <div
                        key={repo.name}
                        className="p-6 rounded-2xl border border-white/5 bg-card/50 transition-all group flex flex-col"
                    >
                        <h3 className="text-lg font-bold mb-3 font-mono text-brand-primary/70">
                            {repo.name}
                        </h3>
                        <p className="text-brand-text/60 text-sm mb-6 flex-grow">
                            {repo.description}
                        </p>
                        <div className="flex items-center text-xs text-brand-text/50 font-mono mt-auto">
                            <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${repo.color}`} />
                                {repo.language}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
