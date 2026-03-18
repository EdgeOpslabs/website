"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import speakers from "@/config/guestSpeakers.json";

export function GuestSpeakerSpotlight() {

    return (
        <section className="py-16 md:py-24 border-t border-brand-primary/10">
            <div className="text-center mb-16">
                <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-brand-primary text-sm font-mono uppercase tracking-[0.2em] mb-4 block"
                >
                    Introducing the Experts
                </motion.span>
                <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-brand-text mb-6"
                >
                    Meet Our Speakers
                </motion.h2>
                
                <div className="flex flex-col items-center gap-2">
                    <button className="text-brand-primary hover:text-brand-primary/80 transition-colors flex items-center gap-1 text-sm font-medium">
                        See all speakers <ChevronRight size={14} />
                    </button>
                    <span className="text-xs text-brand-text/40 font-mono">
                        {speakers.length} Speakers Confirmed
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 max-w-6xl mx-auto px-4">
                {speakers.map((speaker, i) => (
                    <motion.div
                        key={speaker.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col items-center text-center group"
                    >
                        {/* Circular Image Container */}
                        <div className="relative w-48 h-48 mb-8">
                            <div className="absolute inset-0 rounded-full border-2 border-brand-primary/10 group-hover:border-brand-primary/40 transition-colors duration-500 scale-110" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-card shadow-xl transition-transform duration-500 group-hover:scale-105">
                                <Image
                                    src={speaker.avatar}
                                    alt={speaker.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Speaker Details */}
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-brand-text group-hover:text-brand-primary transition-colors">
                                {speaker.name}
                            </h3>
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-medium text-brand-text/60 leading-tight">
                                    {speaker.role} of {speaker.company}
                                </p>
                                <p className="text-xs text-brand-text/40 font-mono italic">
                                    &quot;{speaker.topic}&quot;
                                </p>
                            </div>
                            
                            <a 
                                href={speaker.linkedin} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex mt-4 text-brand-text/30 hover:text-brand-primary transition-colors"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
