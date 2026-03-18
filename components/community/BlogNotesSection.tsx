"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getLatestBlogs, Blog } from "@/lib/blogs";

export function BlogNotesSection() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadBlogs() {
            const latest = await getLatestBlogs();
            setBlogs(latest);
            setLoading(false);
        }
        loadBlogs();
    }, []);

    return (
        <section className="py-16 border-t border-white/10 mt-16">
            <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                        <BookOpen size={24} />
                    </div>
                    <h2 className="text-3xl font-bold font-mono text-brand-text">Transmission Logs (Blogs)</h2>
                </div>
                <Link href="https://blogs.edgeopslabs.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono text-brand-text/60 hover:text-brand-primary transition-colors group">
                    View All Logs <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            {loading ? (
                <div className="flex flex-col items-center justify-center py-20 text-brand-text/40 font-mono">
                    <Loader2 className="animate-spin mb-4 text-indigo-500" size={32} />
                    <p className="animate-pulse">FETCHING_LATEST_TRANSMISSIONS...</p>
                </div>
            ) : (
                <div className="grid md:grid-cols-3 gap-6">
                    {blogs.map((blog, i) => (
                        <motion.a
                            href={blog.url}
                            key={blog.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            target={blog.url.startsWith('http') ? "_blank" : undefined}
                            rel={blog.url.startsWith('http') ? "noopener noreferrer" : undefined}
                            className="group p-6 rounded-2xl border border-white/10 bg-card hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-brand-text/70">
                                        {blog.tag}
                                    </span>
                                    {/* New Badge for the 3rd position (latest) */}
                                    {i === 2 && (
                                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 animate-pulse border border-indigo-500/30">
                                            NEW
                                        </span>
                                    )}
                                </div>
                                <span className="text-xs font-mono text-brand-text/40">{blog.date}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-brand-text group-hover:text-indigo-400 transition-colors line-clamp-2">
                                {blog.title}
                            </h3>
                            <p className="text-brand-text/60 text-sm mb-6 flex-grow line-clamp-3">
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
            )}
        </section>
    );
}
