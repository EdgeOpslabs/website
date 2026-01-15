"use client";

import { motion } from "framer-motion";
import { Terminal, GitCommit, GitBranch, GitMerge, User, Code } from "lucide-react";
import Image from "next/image";
import { Contributors } from "@/components/landing/Contributors";

const timeline = [
    {
        year: "2023",
        title: "Initial Commit",
        description: "The core kernel was initialized. First lines of code written in a basement server room.",
        icon: GitCommit,
    },
    {
        year: "2024",
        title: "Feature Branch: Intelligence",
        description: "Integrated Large Language Models into the ops pipeline. The first autonomous agent went online.",
        icon: GitBranch,
    },
    {
        year: "2025",
        title: "Merge to Main",
        description: "Public beta release. The platform stabilized and began self-replicating across multi-cloud clusters.",
        icon: GitMerge,
    },
    {
        year: "2026",
        title: "v1.0.0 Release",
        description: "EdgeOps Labs goes public. The new standard for intelligent edge orchestration is defined.",
        icon: Terminal,
    },
];

const team = [
    {
        name: "Afzal Hassan",
        role: "DevOps Engineer",
        handle: "@iemafzalhassan",
        bio: "Building systems that build themselves. Obsessed with idempotency and neon lights.",
        avatar: "https://github.com/iemafzalhassan.png", // Using GitHub avatar as placeholder
    },
    // Add more team members here
];

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -z-20 w-1/2 h-full bg-gradient-to-l from-brand-primary/5 to-transparent" />

            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-24 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 mb-6 text-brand-primary/60 font-mono text-sm uppercase tracking-widest"
                    >
                        <Terminal size={16} />
                        <span>root@edgeops:~/about# whoami</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-8 text-brand-text"
                    >
                        Architecting the <br />
                        <span className="text-glow text-brand-primary">Singularity</span>.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-brand-text/60 leading-relaxed max-w-2xl border-l-2 border-brand-primary/20 pl-6"
                    >
                        We are building the operating system for the intelligent edge.
                        Our mission is to replace manual orchestration with autonomous agents.
                    </motion.p>
                </div>

                {/* Commit History (Timeline) */}
                <section className="mb-40">
                    <h2 className="text-2xl font-bold font-mono text-brand-text mb-12 flex items-center gap-3">
                        <GitBranch className="text-brand-primary" />
                        Commit History
                    </h2>

                    <div className="relative border-l border-brand-primary/20 ml-3 md:ml-12 space-y-12 pb-12">
                        {timeline.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative pl-8 md:pl-12"
                            >
                                <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-brand-primary ring-4 ring-background" />

                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                                    <span className="font-mono text-brand-primary text-sm bg-brand-primary/10 px-2 py-1 rounded">
                                        {item.icon === GitCommit && "commit"}
                                        {item.icon === GitBranch && "branch"}
                                        {item.icon === GitMerge && "merge"}
                                        {item.icon === Terminal && "release"}
                                        _{item.year}
                                    </span>
                                    <h3 className="text-xl font-bold text-brand-text">{item.title}</h3>
                                </div>

                                <p className="text-brand-text/60 max-w-xl">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Team Section */}
                <section>
                    <h2 className="text-2xl font-bold font-mono text-brand-text mb-12 flex items-center gap-3">
                        <User className="text-brand-primary" />
                        The Architects
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {team.map((member, i) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative overflow-hidden rounded-xl bg-card border border-brand-primary/10 p-6 flex items-start gap-4 hover:border-brand-primary/30 transition-all"
                            >
                                <div className="relative h-16 w-16 shrink-0 rounded-lg overflow-hidden border border-brand-primary/20 group-hover:border-brand-primary/50 transition-colors">
                                    {/* Placeholder Avatar */}
                                    <img
                                        src={member.avatar}
                                        alt={member.name}
                                        className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-brand-text group-hover:text-brand-primary transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-xs font-mono text-brand-primary/60 mb-2">
                                        {member.role}
                                    </p>
                                    <p className="text-sm text-brand-text/60 leading-tight">
                                        {member.bio}
                                    </p>
                                    <a href={`https://github.com/${member.handle.replace('@', '')}`} className="mt-3 inline-flex items-center gap-1 text-xs font-mono text-brand-text/40 hover:text-brand-primary transition-colors">
                                        <Code size={12} />
                                        {member.handle}
                                    </a>
                                </div>
                            </motion.div>
                        ))}

                        {/* Hiring Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group relative overflow-hidden rounded-xl border border-dashed border-brand-text/10 p-6 flex flex-col justify-center items-center text-center hover:bg-brand-primary/5 hover:border-brand-primary/30 transition-all cursor-pointer"
                        >
                            <User size={32} className="text-brand-text/20 mb-3 group-hover:text-brand-primary transition-colors" />
                            <h3 className="text-brand-text/60 font-mono text-sm">Waiting for signal...</h3>
                            <span className="text-xs text-brand-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                Apply Now &rarr;
                            </span>
                        </motion.div>
                    </div>
                </section>

                {/* Contributors Section */}
                <Contributors />
            </div>
        </main>
    );
}
