"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageSquare, Github, Twitter, Radio, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const channels = [
    {
        id: "discord",
        title: "Discord Community",
        description: "Real-time support, product discussions, release updates, and peer collaboration.",
        action: "Join Discord",
        url: "https://discord.gg/edgeopslabs",
        icon: MessageSquare,
        color: "text-indigo-400",
        border: "border-indigo-500/20",
        bg: "hover:bg-indigo-500/10",
    },
    {
        id: "github",
        title: "GitHub Organization",
        description: "Explore repositories, open issues, and contribute via pull requests.",
        action: "Open GitHub",
        url: "https://github.com/EdgeOpslabs",
        icon: Github,
        color: "text-white",
        border: "border-white/20",
        bg: "hover:bg-white/10",
    },
    {
        id: "twitter",
        title: "X Updates",
        description: "Follow product announcements, technical highlights, and community updates.",
        action: "Follow on X",
        url: "https://x.com/iemafzal",
        icon: Twitter,
        color: "text-sky-400",
        border: "border-sky-500/20",
        bg: "hover:bg-sky-500/10",
    },
];

export default function CommunityPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 overflow-hidden relative">
            {/* Background Map Effect */}
            <div className="absolute inset-0 -z-20 opacity-20 dark:opacity-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/20 rounded-full blur-[120px]" />
            </div>
            {/* Hex Grid Overlay */}
            {/* Hex Grid Overlay - Handled Globally in Layout */}

            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="mb-24 text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-brand-primary/10 text-brand-primary"
                    >
                        <Globe size={48} className="motion-safe:animate-pulse" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-brand-text"
                    >
                        Join the <span className="text-glow text-brand-primary">Protocol</span>.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-brand-text/60 font-mono"
                    >
                        Connect with the global EdgeOps community and stay current with every release.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
                    {channels.map((channel, i) => (
                        <motion.a
                            key={channel.id}
                            href={channel.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 + 0.3 }}
                            className={cn(
                                "group relative flex flex-col items-center text-center p-8 rounded-2xl border bg-card transition-all duration-300",
                                channel.border,
                                channel.bg,
                                "hover:scale-105 hover:shadow-2xl"
                            )}
                        >
                            <div className={cn("mb-6 p-4 rounded-full bg-background/50 backdrop-blur-sm", channel.color)}>
                                <channel.icon size={40} />
                            </div>

                            <h3 className="text-2xl font-bold mb-3 text-brand-text font-mono group-hover:text-brand-primary transition-colors">
                                {channel.title}
                            </h3>

                            <p className="text-brand-text/60 mb-8 leading-relaxed flex-grow">
                                {channel.description}
                            </p>

                            {/* "People Stack" for Discord - Social Proof */}
                            {channel.id === 'discord' && (
                                <div className="flex items-center justify-center -space-x-3 mb-6">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <div key={i} className="relative w-8 h-8 rounded-full border-2 border-card overflow-hidden ring-2 ring-background">
                                            <Image
                                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 40}&backgroundColor=b6e3f4`}
                                                alt="Community member"
                                                fill
                                                sizes="32px"
                                                unoptimized
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                    <div className="relative flex items-center justify-center w-8 h-8 rounded-full border-2 border-card bg-brand-primary/20 text-[10px] font-bold text-brand-primary ring-2 ring-background">
                                        +5k
                                    </div>
                                </div>
                            )}

                            <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-text/80 font-mono group-hover:text-brand-primary transition-colors">
                                <Radio size={16} className="animate-pulse" />
                                {channel.action}
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Global Presence Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-32 text-center"
                >
                    <div className="inline-block border border-brand-primary/20 bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-lg p-8 shadow-xl">
                        <div className="grid grid-cols-3 gap-12 text-center">
                            <div>
                                <div className="text-4xl font-bold text-brand-primary font-mono mb-2">512</div>
                                <div className="text-xs uppercase tracking-widest text-brand-text/50">Active Nodes</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-brand-primary font-mono mb-2">10k+</div>
                                <div className="text-xs uppercase tracking-widest text-brand-text/50">Commits</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-brand-primary font-mono mb-2">24/7</div>
                                <div className="text-xs uppercase tracking-widest text-brand-text/50">Uptime</div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-8 text-xs font-mono text-brand-text/30">
                        * LIVE COMMUNITY SNAPSHOT
                    </p>
                </motion.div>
            </div>
        </main>
    );
}
