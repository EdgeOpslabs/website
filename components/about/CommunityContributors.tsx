"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Users } from "lucide-react";
import Image from "next/image";
import config from "@/config/communityContributors.json";

export function CommunityContributors() {
    const mentors = config;

    return (
        <section className="py-16 md:py-24 border-t border-brand-primary/10">
            <h2 className="text-2xl font-bold font-mono text-brand-text mb-12 flex items-center gap-3">
                <Users className="text-brand-primary" />
                Community Contributors
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mentors.map((mentor, i) => (
                    <motion.div
                        key={mentor.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative overflow-hidden rounded-xl bg-card/30 backdrop-blur-sm border border-brand-primary/10 p-6 hover:border-brand-primary/30 transition-all"
                    >
                        <div className="flex items-start gap-4 mb-4">
                            <div className="relative h-16 w-16 shrink-0 rounded-lg overflow-hidden border border-brand-primary/20 group-hover:border-brand-primary/50 transition-colors">
                                <Image
                                    src={mentor.avatar}
                                    alt={mentor.name}
                                    fill
                                    sizes="64px"
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-brand-text group-hover:text-brand-primary transition-colors">
                                    {mentor.name}
                                </h3>
                                <p className="text-xs font-mono text-brand-primary/60">
                                    {mentor.role} • {mentor.contribution}
                                </p>
                            </div>
                        </div>
                        
                        <p className="text-sm text-brand-text/60 leading-relaxed mb-4">
                            {mentor.description}
                        </p>

                        <div className="flex items-center gap-3">
                            <a 
                                href={mentor.linkedin} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-brand-text/40 hover:text-brand-primary transition-colors"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a 
                                href={mentor.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-brand-text/40 hover:text-brand-primary transition-colors"
                            >
                                <Github size={18} />
                            </a>
                        </div>
                    </motion.div>
                ))}

                {/* Apply Now / Join Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: mentors.length * 0.1 }}
                    className="group relative overflow-hidden rounded-xl border-2 border-dashed border-brand-primary/20 p-6 flex flex-col items-center justify-center text-center bg-brand-primary/5 hover:border-brand-primary/40 transition-all hover:bg-brand-primary/10"
                >
                    <div className="mb-4 p-3 rounded-full bg-brand-primary/10 text-brand-primary animate-pulse">
                        <Users size={32} />
                    </div>
                    
                    <h3 className="text-lg font-bold text-brand-text mb-2 font-mono">
                        Waiting for signal...
                    </h3>
                    
                    <p className="text-xs text-brand-text/50 font-mono mb-6 uppercase tracking-wider">
                        Next node operational slot: AVAILABLE
                    </p>

                    <a 
                        href="https://discord.gg/Gy3c2uDwMQ" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primary/80 transition-colors font-bold text-sm"
                    >
                        Apply Now →
                    </a>

                    {/* Terminal decorative elements */}
                    <div className="absolute top-2 left-2 w-1 h-1 bg-brand-primary/20 rounded-full" />
                    <div className="absolute top-2 right-2 w-1 h-1 bg-brand-primary/20 rounded-full" />
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-brand-primary/20 rounded-full" />
                    <div className="absolute bottom-2 right-2 w-1 h-1 bg-brand-primary/20 rounded-full" />
                </motion.div>
            </div>
        </section>
    );
}
