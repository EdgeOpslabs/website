"use client";

import { motion } from "framer-motion";
import { Handshake, Clock } from "lucide-react";

export function PartnersCarousel() {
    return (
        <section className="py-16 md:py-24 overflow-hidden border-t border-brand-primary/10">
            <div className="container mx-auto px-4 mb-12">
                <h2 className="text-2xl font-bold font-mono text-brand-text flex items-center gap-3">
                    <Handshake className="text-brand-primary" />
                    Strategic Partners
                </h2>
                <p className="text-sm text-brand-text/40 mt-2 font-mono">
                    Powering the next generation of autonomous infrastructure.
                </p>
            </div>

            {/* Coming Soon Placeholder */}
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center gap-4 py-12 rounded-2xl border border-dashed border-brand-primary/20 bg-brand-primary/5"
                >
                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/10">
                        <Clock className="w-3.5 h-3.5 text-brand-primary" />
                        <span className="text-xs font-mono font-semibold text-brand-primary uppercase tracking-widest">
                            Coming Soon
                        </span>
                    </div>
                    <p className="text-sm text-brand-text/40 font-mono text-center max-w-xs">
                        Our strategic partner network is being established. Exciting collaborations are on the way.
                    </p>
                </motion.div>
            </div>

            {/* Original partner carousel — re-enable when partners are ready
            <div className="relative group">
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
                <motion.div
                    className="flex gap-20 items-center w-max py-4"
                    animate={{ x: ["0%", "-33.333%"] }}
                    transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                    style={{ willChange: "transform" }}
                >
                    {scrollingPartners.map((partner, i) => (
                        <div key={`${partner.name}-${i}`} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700 opacity-40 hover:opacity-100 cursor-pointer px-4">
                            <Image src={partner.logo} alt={partner.name} width={120} height={48}
                                className={cn("h-10 md:h-12 w-auto object-contain transition-all duration-500 hover:scale-110", partner.name.toLowerCase() === 'github' ? 'dark:invert' : '')}
                                loading="lazy" unoptimized />
                        </div>
                    ))}
                </motion.div>
            </div>
            */}
        </section>
    );
}
