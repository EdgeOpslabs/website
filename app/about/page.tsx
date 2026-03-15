"use client";

import { motion } from "framer-motion";
import { Terminal, User, Code } from "lucide-react";
import Image from "next/image";
import { CommunityCreators } from "@/components/community/CommunityCreators";
import { VisionMissionValues } from "@/components/about/VisionMissionValues";

const team = [
    {
        name: "Afzal Hassan",
        role: "DevOps Engineer",
        handle: "@iemafzalhassan",
        bio: "Building reliable platform automation with a focus on repeatability, observability, and developer velocity.",
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
                        Building the <br />
                        <span className="text-glow text-brand-primary">Autonomous Cloud</span>.
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

                {/* Community Creators Section */}
                <div className="mb-8">
                    <CommunityCreators />
                </div>

                {/* Vision, Mission, and Values Section */}
                <div className="mb-12">
                    <VisionMissionValues />
                </div>

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
                                    <Image
                                        src={member.avatar}
                                        alt={member.name}
                                        fill
                                        sizes="64px"
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all"
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
            </div>
        </main>
    );
}
