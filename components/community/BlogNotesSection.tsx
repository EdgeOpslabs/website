"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

const BLOGS = [
    {
        id: 1,
        title: "Compiling the Autonomous Cloud: Part 1",
        date: "2026-02-28",
        excerpt: "Why current managed services fail at the edge, and how deterministic infrastructure solves latency.",
        readTime: "8 min read",
        tag: "Architecture"
    },
    {
        id: 2,
        title: "Release Protocol v1.0.0",
        date: "2026-02-15",
        excerpt: "The stable release of the EdgeOps framework. Breaking changes, new APIs, and migration guides.",
        readTime: "12 min read",
        tag: "Release"
    },
    {
        id: 3,
        title: "Zero-Touch Operations in Practice",
        date: "2026-01-30",
        excerpt: "A case study on achieving 99.999% uptime without manual SSH intervention.",
        readTime: "6 min read",
        tag: "Case Study"
    }
];

export function BlogNotesSection() {
    return (
        <section className="py-16 border-t border-white/10 mt-16">
            <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                        <BookOpen size={24} />
                    </div>
                    <h2 className="text-3xl font-bold font-mono text-brand-text">Transmission Logs (Blogs)</h2>
                </div>
                <Link href="https://afzal-khan-blogs.vercel.app/" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-sm font-mono text-brand-text/60 hover:text-brand-primary transition-colors group">
                    View All Logs <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {BLOGS.map((blog, i) => (
                    <motion.a
                        href="#"
                        key={blog.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group p-6 rounded-2xl border border-white/10 bg-card hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all flex flex-col"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-brand-text/70">
                                {blog.tag}
                            </span>
                            <span className="text-xs font-mono text-brand-text/40">{blog.date}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-brand-text group-hover:text-indigo-400 transition-colors">
                            {blog.title}
                        </h3>
                        <p className="text-brand-text/60 text-sm mb-6 flex-grow">
                            {blog.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs font-mono text-brand-text/50 pt-4 border-t border-white/5">
                            <span>{blog.readTime}</span>
                            <span className="text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                                Read <ArrowRight size={14} />
                            </span>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
