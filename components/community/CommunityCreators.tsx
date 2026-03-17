"use client";

import { motion } from "framer-motion";
import { Star, Linkedin, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { DiscordIcon } from "@/components/icons";

import { siteConfig } from "@/lib/config-schema";

const CREATORS = siteConfig.community.creators;

export function CommunityCreators() {
    return (
        <section className="py-16 md:py-24 border-t border-brand-primary/10 mb-8">
            <div className="flex items-center gap-3 mb-16 justify-center text-center">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                    <Star size={24} className="fill-amber-500/50" />
                </div>
                <h2 className="text-3xl font-bold font-mono text-brand-text">Community Creators</h2>
            </div>

            {/* Standardized 4-card grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0 max-w-6xl mx-auto">
                {CREATORS.map((creator, i) => (
                    <motion.div
                        key={creator.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 }}
                        className="relative rounded-2xl overflow-hidden group shadow-xl transition-transform hover:-translate-y-2 h-full"
                    >
                        {/* Moving Light Edge Effect - Identical for all */}
                        <div className="absolute inset-0 z-0">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ ease: "linear", duration: 8, repeat: Infinity }}
                                className="absolute -inset-[100%] z-0 rounded-full bg-[conic-gradient(transparent_0deg,transparent_120deg,rgba(245,158,11,0.5)_180deg,transparent_240deg)] opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                        </div>

                        {/* Card Content */}
                        <div className="relative z-10 m-[1px] md:m-[2px] p-6 lg:p-8 rounded-[15px] bg-gradient-to-b from-card to-background flex flex-col items-center text-center h-[calc(100%-2px)] md:h-[calc(100%-4px)] hover:bg-black/90">

                            {/* Inner Glow effect behind avatar for center card */}
                            {creator.isCenter && (
                                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl -z-10" />
                            )}

                            <div className={`relative rounded-full border-4 overflow-hidden mb-6 transition-colors ${creator.isCenter ? 'w-32 h-32 border-amber-500/50 group-hover:border-amber-400' : 'w-24 h-24 border-white/10 group-hover:border-brand-primary/50'
                                }`}>
                                <Image
                                    src={creator.avatar}
                                    alt={creator.name}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>

                            <h3 className="font-bold text-brand-text group-hover:text-amber-400 transition-colors w-full text-lg lg:text-xl">
                                {creator.name}
                            </h3>

                            <p className="text-xs lg:text-sm text-brand-text/50 mt-2 uppercase tracking-widest font-mono mb-8 w-full px-2">
                                {creator.role}
                            </p>

                            {/* Buttons & Links Container */}
                            <div className="flex flex-col gap-4 mt-auto w-full">
                                {/* Portfolio Primary Action */}
                                {creator.portfolio && (
                                    <Link
                                        href={creator.portfolio}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold uppercase tracking-wider text-xs font-mono transition-colors bg-white/10 text-brand-text hover:bg-white/20"
                                    >
                                        <ExternalLink size={16} />
                                        View Portfolio
                                    </Link>
                                )}

                                {/* Social Outpost Links */}
                                <div className="flex items-center justify-center gap-3">
                                    {creator.linkedin && (
                                        <Link
                                            href={creator.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 rounded-full bg-black/40 border border-white/5 text-brand-text/60 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 transition-colors"
                                            aria-label={`${creator.name}'s LinkedIn profile`}
                                        >
                                            <Linkedin size={18} />
                                        </Link>
                                    )}
                                    {creator.discord && (
                                        <Link
                                            href={creator.discord}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 rounded-full bg-black/40 border border-white/5 text-brand-text/60 hover:text-[#5865F2] hover:border-[#5865F2]/50 hover:bg-[#5865F2]/10 transition-colors"
                                            aria-label={`${creator.name}'s Discord profile`}
                                        >
                                            <DiscordIcon className="w-[18px] h-[18px]" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
