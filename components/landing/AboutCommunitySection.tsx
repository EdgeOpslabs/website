"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const AboutCommunitySection = () => {
    return (
        <section className="container mx-auto px-4 py-24 border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

                {/* Left: The Mission */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight md:text-5xl text-brand-text">
                        For Engineers, <br />
                        <span className="text-brand-dark/50" style={{ WebkitTextStroke: "1px #05CAFF", color: "transparent" }}>By Engineers.</span>
                    </h2>
                    <p className="text-brand-text/70 text-lg leading-relaxed">
                        EdgeOps Labs is an Open Source Research Lab founded by a DevOps Engineer to bridge the gap between complex infrastructure and intelligent automation.
                    </p>
                    <p className="text-brand-text/70 text-lg leading-relaxed">
                        We believe the future of cloud computing is autonomous, efficient, and running on the edge. Our mission is to build the tools that make this future possible—without the enterprise bloat.
                    </p>
                </div>

                {/* Right: Join the Forge */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card rounded-2xl p-8 lg:p-12 relative overflow-hidden group border-brand-accent/20"
                >
                    <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity bg-brand-accent blur-[60px] rounded-full h-32 w-32 translate-x-10 -translate-y-10" />

                    <div className="relative z-10 flex flex-col items-start gap-6">
                        <div className="h-16 w-16 bg-[#5865F2] rounded-2xl flex items-center justify-center shadow-lg shadow-[#5865F2]/30">
                            {/* Discord Icon SVG */}
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1892.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.1023.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
                            </svg>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-1">
                                Join the Forge
                            </h3>
                            <p className="text-white/60 text-sm">
                                Connect with 5,000+ DevOps engineers.
                            </p>
                        </div>

                        <a
                            href="https://discord.gg/edgeopslabs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#5865F2] px-6 py-3 font-semibold text-white transition-all hover:bg-[#4752c4] hover:shadow-[0_0_20px_rgba(88,101,242,0.4)]"
                        >
                            Enter the Lab
                            <ArrowUpRight size={18} />
                        </a>

                        <div className="flex items-center -space-x-3 pt-2">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="relative w-8 h-8 rounded-full border-2 border-[#1a1a2e] overflow-hidden ring-2 ring-transparent">
                                    <img
                                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 40}&backgroundColor=b6e3f4`}
                                        alt="Member"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#1a1a2e] bg-brand-primary/20 text-[10px] font-bold text-brand-primary ring-2 ring-transparent">
                                +5k
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
