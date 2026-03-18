"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { CommunityCreators } from "@/components/community/CommunityCreators";
import { VisionMissionValues } from "@/components/about/VisionMissionValues";
import { CommunityContributors } from "@/components/about/CommunityContributors";
import { GuestSpeakerSpotlight } from "@/components/about/GuestSpeakerSpotlight";
import { PartnersCarousel } from "@/components/about/PartnersCarousel";

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

                {/* Main Content Sections */}
                <div className="space-y-8">
                    {/* Vision, Mission, and Values Section */}
                    <VisionMissionValues />

                    {/* Community Creators Section - The Team */}
                    <CommunityCreators />

                    {/* Community Contributors - THE ARCHITECTS (Founder) */}
                    <CommunityContributors />

                    {/* Guest Speaker Spotlight - Industry Experts */}
                    <GuestSpeakerSpotlight />

                    {/* Partners Carousel - Social Proof / Trust */}
                    <PartnersCarousel />
                </div>
            </div>
        </main>
    );
}
