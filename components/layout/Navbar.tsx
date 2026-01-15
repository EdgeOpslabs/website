"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
    { href: "/", label: "HOME" },
    { href: "/products", label: "PRODUCTS" },
    { href: "/community", label: "COMMUNITY" },
    { href: "/about", label: "ABOUT" },
];

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    // Handle scroll effect
    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "py-4" : "py-6"
            )}
        >
            <div className={cn(
                "container mx-auto px-4 sm:px-6 lg:px-8",
                "transition-all duration-500"
            )}>
                <div className={cn(
                    "relative flex items-center justify-between px-6 py-3 rounded-2xl border transition-all duration-300",
                    // Glass/Cyber style
                    "bg-background/60 backdrop-blur-xl border-brand-primary/30",
                    "hover:border-brand-primary/60 hover:shadow-[0_0_15px_rgba(5,202,255,0.15)]",
                    scrolled && "bg-background/80 border-brand-primary/50 shadow-[0_0_20px_rgba(5,202,255,0.1)]"
                )}>
                    {/* Scanline overlay for the bar */}
                    <div className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden opacity-5 dark:opacity-20 bg-scanline" />

                    {/* Logo Section */}
                    <div className="relative z-10 flex-shrink-0">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative h-10 w-10 flex items-center justify-center rounded-lg bg-brand-primary/10 border border-brand-primary/30 group-hover:bg-brand-primary/20 transition-all duration-300 overflow-hidden">
                                <Image
                                    src="/logo.png"
                                    alt="EdgeOps Labs Logo"
                                    width={40}
                                    height={40}
                                    className="object-cover p-1"
                                />
                                {/* Glitch overlay */}
                                <div className="absolute inset-0 bg-brand-primary/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold tracking-wider text-brand-text font-mono group-hover:text-glow transition-all">
                                    EDGEOPS<span className="text-brand-primary">_LABS</span>
                                </span>
                                <span className="text-[10px] text-brand-text/60 font-mono tracking-[0.2em] group-hover:text-brand-primary/80 transition-colors">
                                    TERMINAL_ACCESS
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1 relative z-10">
                        {NAV_LINKS.map((link) => (
                            <NavLink key={link.label} href={link.href} label={link.label} />
                        ))}
                    </nav>

                    {/* Right Section */}
                    <div className="relative z-10 flex items-center gap-6">
                        <ThemeToggle />

                        {/* Mobile Menu Button - Cyber Button */}
                        <button
                            className="md:hidden relative group p-2 text-brand-primary hover:text-brand-accent transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <div className="absolute inset-0 border border-brand-primary/30 rounded-md -skew-x-12 group-hover:bg-brand-primary/10 transition-all" />
                            {isMobileMenuOpen ? <X className="relative w-6 h-6" /> : <Menu className="relative w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Matrix Reveal Style */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-x-4 top-24 z-40">
                    <div className="bg-background/90 border border-brand-primary/50 backdrop-blur-xl rounded-xl p-4 shadow-[0_0_30px_rgba(5,202,255,0.15)] overflow-hidden">
                        <div className="absolute inset-0 bg-scanline opacity-10 pointer-events-none" />
                        <div className="flex flex-col space-y-2 relative z-10">
                            {NAV_LINKS.map((link, idx) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="font-mono text-lg text-brand-text/80 hover:text-brand-primary hover:pl-4 transition-all duration-300 border-l-2 border-transparent hover:border-brand-primary px-2"
                                    style={{ animationDelay: `${idx * 50}ms` }}
                                >
                                    {`> ${link.label}`}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

function NavLink({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="group relative px-4 py-2 font-mono text-sm font-medium text-brand-text/70 transition-colors hover:text-brand-primary"
        >
            <span className="relative z-10 flex items-center gap-1">
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-primary">[</span>
                {label}
                <span className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-primary">]</span>
            </span>
            <span className="absolute inset-0 -z-10 bg-brand-primary/5 opacity-0 group-hover:opacity-100 rounded-md transition-opacity duration-300" />
        </Link>
    );
}
