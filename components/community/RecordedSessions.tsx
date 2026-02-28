"use client";

import { motion } from "framer-motion";
import { Youtube, Play } from "lucide-react";
import Image from "next/image";

const SESSIONS = [
    {
        id: "v1",
        title: "Building Deterministic Infrastructure",
        speaker: "Lead Architect, EdgeOps",
        views: "15k",
        thumbnail: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "v2",
        title: "Zero-Touch Operations Masterclass",
        speaker: "DevOps Engineering Team",
        views: "8.2k",
        thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "v3",
        title: "State Replication at the Edge",
        speaker: "Core Systems Group",
        views: "21k",
        thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
    }
];

export function RecordedSessions() {
    return (
        <section className="py-16 border-t border-white/10 mt-16">
            <div className="flex items-center gap-3 mb-10">
                <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                    <Youtube size={24} />
                </div>
                <h2 className="text-3xl font-bold font-mono text-brand-text">Visual Telemetry (Sessions)</h2>
            </div>

            <p className="text-brand-text/60 mb-10 max-w-2xl font-mono">
                Decrypted recordings of architectural summits, deep dives, and masterclasses.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
                {SESSIONS.map((session, i) => (
                    <motion.a
                        key={session.id}
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative rounded-2xl overflow-hidden border border-white/10 bg-card hover:border-red-500/50 transition-all flex flex-col"
                    >
                        {/* Thumbnail Container */}
                        <div className="relative aspect-video w-full overflow-hidden bg-white/5">
                            <Image
                                src={session.thumbnail}
                                alt={session.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                unoptimized // Allows unsplash dynamically without configuring domains
                                className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform">
                                    <Play size={20} className="ml-1" />
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 flex-grow">
                            <h3 className="text-lg font-bold mb-2 text-brand-text leading-tight group-hover:text-red-400 transition-colors">
                                {session.title}
                            </h3>
                            <div className="flex items-center justify-between text-xs text-brand-text/50 font-mono mt-4">
                                <span>{session.speaker}</span>
                                <span>{session.views} views</span>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
