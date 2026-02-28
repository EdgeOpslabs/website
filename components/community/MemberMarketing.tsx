"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Linkedin } from "lucide-react";
import { DiscordIcon } from "@/components/icons";

const MEMBERS = [
    {
        id: 1,
        name: "Alex Dev",
        role: "Core Contributor",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=b6e3f4",
        linkedin: "https://linkedin.com",
        discord: "https://discord.com"
    },
    {
        id: 2,
        name: "Sam Systems",
        role: "Community Manager",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sam&backgroundColor=b6e3f4",
        linkedin: "https://linkedin.com",
        discord: "https://discord.com"
    },
    {
        id: 3,
        name: "Jordan Ops",
        role: "Evangelist",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan&backgroundColor=b6e3f4",
        linkedin: "https://linkedin.com",
        discord: "https://discord.com"
    }
];

export function MemberMarketing() {
    return (
        <section className="py-16">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-brand-primary/10 text-brand-primary">
                    <Users size={24} />
                </div>
                <h2 className="text-3xl font-bold font-mono text-brand-text">Active Nodes (Members)</h2>
            </div>

            <p className="text-brand-text/60 mb-10 max-w-2xl font-mono">
                The decentralized network of architects compiling the new world. These are the top contributors this month.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {MEMBERS.map((member, i) => (
                    <motion.div
                        key={member.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="relative group rounded-xl overflow-hidden hover:-translate-y-1 transition-transform"
                    >
                        {/* Moving Light Effect */}
                        <div className="absolute inset-0 z-0">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ ease: "linear", duration: 8, repeat: Infinity }}
                                className="absolute -inset-[100%] z-0 rounded-full bg-[conic-gradient(transparent_0deg,transparent_120deg,rgba(0,194,255,0.4)_180deg,transparent_240deg)] opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                        </div>

                        {/* Inner Card content, absolute inset with padding to act as 'border' radius clip */}
                        <div className="relative z-10 p-6 m-[1px] md:m-[2px] rounded-[11px] bg-gradient-to-br from-card to-background hover:bg-black/80 transition-all flex flex-col items-center text-center h-[calc(100%-2px)] md:h-[calc(100%-4px)]">
                            <div className="relative w-28 h-28 rounded-full border-4 border-transparent group-hover:border-brand-primary/50 transition-colors overflow-hidden mb-5">
                                <Image
                                    src={member.avatar}
                                    alt={member.name}
                                    fill
                                    sizes="112px"
                                    unoptimized
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="font-bold text-xl text-brand-text group-hover:text-brand-primary transition-colors truncate w-full">
                                {member.name}
                            </h3>
                            <p className="text-sm text-brand-text/50 mt-1 uppercase tracking-wider font-mono mb-6 w-full truncate px-2">
                                {member.role}
                            </p>

                            {/* Social Links */}
                            <div className="flex items-center gap-4 mt-auto">
                                {member.linkedin && (
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full bg-white/5 text-brand-text/60 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-colors z-10"
                                        aria-label={`${member.name}'s LinkedIn profile`}
                                    >
                                        <Linkedin size={22} />
                                    </a>
                                )}
                                {member.discord && (
                                    <a
                                        href={member.discord}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full bg-white/5 text-brand-text/60 hover:text-[#5865F2] hover:bg-[#5865F2]/10 transition-colors z-10"
                                        aria-label={`${member.name}'s Discord profile`}
                                    >
                                        <DiscordIcon className="w-[22px] h-[22px]" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
