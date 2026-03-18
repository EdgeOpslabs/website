"use client";

import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import config from "@/config/config.json";

export function PartnersCarousel() {
    const partners = config.community.partners;
    // Triple the partners for a much smoother infinite scroll loop
    const scrollingPartners = [...partners, ...partners, ...partners];

    return (
        <section className="py-16 md:py-24 overflow-hidden border-t border-brand-primary/10">
            <div className="container mx-auto px-4 mb-16">
                <h2 className="text-2xl font-bold font-mono text-brand-text flex items-center gap-3">
                    <Handshake className="text-brand-primary" />
                    Strategic Partners
                </h2>
                <p className="text-sm text-brand-text/40 mt-2 font-mono">
                    Powering the next generation of autonomous infrastructure.
                </p>
            </div>

            <div className="relative group">
                {/* Gradient Masks - Simplified to prevent visible artifacts */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-20 items-center w-max py-4"
                    animate={{
                        x: ["0%", "-33.333%"],
                    }}
                    transition={{
                        duration: 30, // Slower for premium feel and less lag
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    style={{ willChange: "transform" }}
                >
                    {scrollingPartners.map((partner, i) => (
                        <div
                            key={`${partner.name}-${i}`}
                            className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700 opacity-40 hover:opacity-100 cursor-pointer px-4"
                        >
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                width={120}
                                height={48}
                                className={cn(
                                    "h-10 md:h-12 w-auto object-contain transition-all duration-500 hover:scale-110",
                                    partner.name.toLowerCase() === 'github' ? 'dark:invert' : ''
                                )}
                                loading="lazy"
                                unoptimized
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
