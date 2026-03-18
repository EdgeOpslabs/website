"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, ChevronRight, FileText, Scale, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface LegalLayoutProps {
    children: React.ReactNode;
    title: string;
    lastUpdated: string;
}

const navItems = [
    { name: "Privacy Policy", href: "/privacy", icon: Shield },
    { name: "Terms of Service", href: "/terms", icon: Scale },
    { name: "Code of Conduct", href: "/code-of-conduct", icon: Users },
];

export function LegalLayout({ children, title, lastUpdated }: LegalLayoutProps) {
    const pathname = usePathname();

    return (
        <main className="min-h-screen pt-32 pb-20 overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -z-20 w-1/2 h-full bg-gradient-to-l from-brand-primary/5 to-transparent" />
            <div className="absolute bottom-0 left-0 -z-20 w-1/2 h-full bg-gradient-to-r from-brand-primary/5 to-transparent" />

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-[280px,1fr] gap-12 lg:gap-24">
                    {/* Sidebar Navigation */}
                    <aside className="space-y-8">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-2 text-brand-primary/60 font-mono text-sm uppercase tracking-widest mb-4"
                            >
                                <FileText size={16} />
                                <span>Legal @ EdgeOps</span>
                            </motion.div>
                            <h1 className="text-3xl font-bold text-brand-text mb-2">Documentation</h1>
                            <p className="text-sm text-brand-text/40 font-mono">Last Updated: {lastUpdated}</p>
                        </div>

                        <nav className="flex flex-col gap-2">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group hover:-translate-x-1",
                                            isActive 
                                                ? "bg-brand-primary/10 border border-brand-primary/20 text-brand-primary" 
                                                : "text-brand-text/40 hover:text-brand-text hover:bg-white/5 border border-transparent"
                                        )}
                                    >
                                        <item.icon size={18} className={cn("transition-colors", isActive ? "text-brand-primary" : "group-hover:text-brand-primary")} />
                                        <span className="font-medium">{item.name}</span>
                                        {isActive && <ChevronRight size={16} className="ml-auto" />}
                                    </Link>
                                );
                            })}
                        </nav>
                    </aside>

                    {/* Main Content Area */}
                    <article className="max-w-3xl font-sans">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="mb-12">
                                <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-4 leading-tight">{title}</h1>
                                <div className="h-1.5 w-24 bg-brand-primary rounded-full shadow-[0_0_10px_rgba(5,202,255,0.5)]" />
                            </div>
                            
                            <div className="space-y-8 text-brand-text/80 leading-relaxed text-lg lg:text-xl">
                                {children}
                            </div>
                        </motion.div>
                    </article>
                </div>
            </div>
            
            <style jsx global>{`
                article h3 {
                    @apply text-2xl font-bold text-brand-text mt-16 mb-4 font-mono;
                }
                article p {
                    @apply mb-6;
                }
                article ul {
                    @apply space-y-4 mb-8 list-none pl-2;
                }
                article li {
                    @apply flex items-start gap-3;
                }
                article li::before {
                    content: ">";
                    @apply text-brand-primary font-mono font-bold mt-1;
                }
                article strong {
                    @apply text-brand-primary font-semibold;
                }
            `}</style>
        </main>
    );
}
