"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Twitter, Radio, Globe, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { DiscordIcon } from "@/components/icons";

import { CommunityCreators } from "@/components/community/CommunityCreators";
import { MemberMarketing } from "@/components/community/MemberMarketing";
import { BlogNotesSection } from "@/components/community/BlogNotesSection";
import { RoadmapSection } from "@/components/community/RoadmapSection";
import { FeaturedRepos } from "@/components/community/FeaturedRepos";
import { RecordedSessions } from "@/components/community/RecordedSessions";
import { FreeTools } from "@/components/community/FreeTools";

const channels = [
    {
        id: "discord",
        title: "Discord Community",
        description: "Real-time support, product discussions, release updates, and peer collaboration.",
        action: "Join Discord",
        url: "https://discord.gg/edgeopslabs",
        icon: DiscordIcon,
        color: "text-indigo-600 dark:text-indigo-400",
        border: "border-indigo-500/10 dark:border-indigo-500/20",
        bg: "hover:bg-indigo-50 dark:hover:bg-indigo-500/10",
    },
    {
        id: "github",
        title: "GitHub Organization",
        description: "Explore repositories, open issues, and contribute via pull requests.",
        action: "Open GitHub",
        url: "https://github.com/EdgeOpslabs",
        icon: Github,
        color: "text-black dark:text-white",
        border: "border-black/10 dark:border-white/20",
        bg: "hover:bg-black/5 dark:hover:bg-white/10",
    },
    {
        id: "twitter",
        title: "X Updates",
        description: "Follow product announcements, technical highlights, and community updates.",
        action: "Follow on X",
        url: "https://x.com/iemafzal",
        icon: Twitter,
        color: "text-sky-600 dark:text-sky-400",
        border: "border-sky-500/10 dark:border-sky-500/20",
        bg: "hover:bg-sky-50 dark:hover:bg-sky-500/10",
    },
    {
        id: "linkedin",
        title: "LinkedIn Network",
        description: "Connect with professionals, explore career opportunities, and read company news.",
        action: "Connect on LinkedIn",
        url: "https://www.linkedin.com/company/edgeopslabs/",
        icon: Linkedin,
        color: "text-[#0A66C2]",
        border: "border-[#0A66C2]/10 dark:border-[#0A66C2]/20",
        bg: "hover:bg-[#0A66C2]/5 dark:hover:bg-[#0A66C2]/10",
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

                {/* --- CONTENT SECTIONS --- */}
                <div className="max-w-6xl mx-auto">
                    <CommunityCreators />
                    <MemberMarketing />
                    <BlogNotesSection />
                    <RoadmapSection />
                    <FeaturedRepos />
                    <RecordedSessions />
                    <FreeTools />
                </div>

                {/* --- STATS SECTION --- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-32 mb-32 text-center"
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

                {/* --- CALL TO ACTION (Hero & Channels) --- */}
                {/* Moved entirely beneath the Global Presence Stats per user request */}
                <div className="mb-24 text-center max-w-4xl mx-auto pt-16 border-t border-brand-primary/10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-brand-primary/10 text-brand-primary"
                    >
                        <Globe size={48} className="motion-safe:animate-pulse" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-brand-text"
                    >
                        Join the <span className="text-glow text-brand-primary">Protocol</span>.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-brand-text/60 font-mono"
                    >
                        Connect with the global EdgeOps community and stay current with every release.
                    </motion.p>
                </div>

                {/* Channels Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto mb-16 relative z-10">
                    {channels.map((channel, i) => (
                        <motion.div
                            key={channel.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative group rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-transform"
                        >
                            {/* Moving Light Edge Effect */}
                            <div className="absolute inset-0 z-0">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ ease: "linear", duration: 8, repeat: Infinity }}
                                    className={`absolute -inset-[100%] z-0 rounded-full bg-[conic-gradient(transparent_0deg,transparent_120deg,rgba(0,194,255,0.4)_180deg,transparent_240deg)] opacity-0 group-hover:opacity-100 transition-opacity`}
                                />
                            </div>

                            <a
                                href={channel.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    "relative z-10 flex flex-col items-center text-center p-8 m-[1px] md:m-[2px] rounded-[15px] bg-gradient-to-br from-card to-background hover:bg-accent/50 dark:hover:bg-black/80 transition-all h-[calc(100%-2px)] md:h-[calc(100%-4px)]",
                                    channel.bg
                                )}
                            >
                                <div className={cn("mb-6 p-4 rounded-full bg-background/50 backdrop-blur-sm", channel.color)}>
                                    <channel.icon className="w-10 h-10" />
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
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
