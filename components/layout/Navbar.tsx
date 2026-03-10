"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
    { href: "/", label: "HOME" },
    { href: "/products", label: "PRODUCTS" },
    { href: "https://blogs.edgeopslabs.com", label: "BLOG", external: true },
    { href: "/community", label: "COMMUNITY" },
    { href: "/about", label: "ABOUT" },
];

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const pathname = usePathname();

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
                scrolled ? "py-3 md:py-4" : "py-4 md:py-6"
            )}
        >
            <div className={cn(
                "container mx-auto px-3 sm:px-6 lg:px-8",
                "transition-all duration-500"
            )}>
                <div className={cn(
                    "relative flex flex-nowrap items-center gap-2 rounded-2xl border px-3 py-2.5 sm:px-4 md:px-6 md:py-3.5 transition-all duration-300 overflow-hidden",
                    // Glass/Cyber style
                    "bg-background/60 backdrop-blur-xl border-brand-primary/30",
                    "hover:border-brand-primary/60 hover:shadow-[0_0_15px_rgba(5,202,255,0.15)]",
                    scrolled && "bg-background/80 border-brand-primary/50 shadow-[0_0_20px_rgba(5,202,255,0.1)]"
                )}>
                    {/* Scanline overlay for the bar */}
                    <div className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden opacity-5 dark:opacity-20 bg-scanline" />

                    {/* Logo Section */}
                    <div className="relative z-10 min-w-0 flex-1 md:w-[272px] md:flex-none">
                        <Link href="/" className="group flex min-w-0 items-center gap-2 sm:gap-3">
                            <div className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-brand-primary/30 bg-brand-primary/10 transition-all duration-300 group-hover:bg-brand-primary/20 sm:h-10 sm:w-10">
                                <Image
                                    src="/logo.png"
                                    alt="EdgeOps Labs Logo"
                                    width={36}
                                    height={36}
                                    className="object-cover p-1"
                                />
                                {/* Glitch overlay */}
                                <div className="absolute inset-0 bg-brand-primary/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12" />
                            </div>
                            <div className="flex min-w-0 flex-col">
                                <span className="truncate font-mono text-sm font-bold tracking-wider text-brand-text transition-all group-hover:text-glow sm:text-base md:text-lg">
                                    EDGEOPS<span className="text-brand-primary">_LABS</span>
                                </span>
                                <span className="hidden font-mono text-[10px] tracking-[0.2em] text-brand-text/60 transition-colors group-hover:text-brand-primary/80 sm:block">
                                    TERMINAL_ACCESS
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="relative z-10 hidden flex-1 items-center justify-center gap-1 md:flex">
                        {NAV_LINKS.map((link) => (
                            <NavLink
                                key={link.label}
                                href={link.href}
                                label={link.label}
                                isActive={!link.external && pathname === link.href}
                                external={Boolean(link.external)}
                            />
                        ))}
                    </nav>

                    {/* Right Section */}
                    <div className="relative z-10 ml-auto flex shrink-0 items-center gap-2 sm:gap-3 md:w-[96px] md:justify-end">
                        <ThemeToggle className="scale-90 sm:scale-100 md:scale-100" />

                        {/* Mobile Menu Button - Cyber Button */}
                        <button
                            className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-md text-brand-primary transition-colors hover:text-brand-accent md:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <div className="absolute inset-0 border border-brand-primary/30 rounded-md -skew-x-12 group-hover:bg-brand-primary/10 transition-all" />
                            {isMobileMenuOpen ? <X className="relative h-5 w-5" /> : <Menu className="relative h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Matrix Reveal Style */}
            {isMobileMenuOpen && (
                <div className="fixed inset-x-3 top-20 z-40 md:hidden sm:inset-x-4 sm:top-24">
                    <div className="bg-background/90 border border-brand-primary/50 backdrop-blur-xl rounded-xl p-4 shadow-[0_0_30px_rgba(5,202,255,0.15)] overflow-hidden">
                        <div className="absolute inset-0 bg-scanline opacity-10 pointer-events-none" />
                        <div className="flex flex-col space-y-2 relative z-10">
                            {NAV_LINKS.map((link, idx) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        "font-mono text-lg text-brand-text/80 hover:text-brand-primary hover:pl-4 transition-all duration-300 border-l-2 px-2",
                                        !link.external && pathname === link.href
                                            ? "border-brand-primary text-brand-primary"
                                            : "border-transparent hover:border-brand-primary"
                                    )}
                                    style={{ animationDelay: `${idx * 50}ms` }}
                                    aria-current={!link.external && pathname === link.href ? "page" : undefined}
                                    target={link.external ? "_blank" : undefined}
                                    rel={link.external ? "noopener noreferrer" : undefined}
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

function NavLink({
    href,
    label,
    isActive,
    external,
}: {
    href: string;
    label: string;
    isActive: boolean;
    external?: boolean;
}) {
    return (
        <Link
            href={href}
            aria-current={isActive ? "page" : undefined}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={cn(
                "group relative px-4 py-2 font-mono text-sm font-medium transition-colors",
                "md:px-3 lg:px-4",
                isActive ? "text-brand-primary" : "text-brand-text/70 hover:text-brand-primary"
            )}
        >
            <span className="relative z-10 flex items-center gap-1">
                <span
                    className={cn(
                        "transition-all duration-300 text-brand-primary",
                        isActive
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                    )}
                >
                    [
                </span>
                {label}
                <span
                    className={cn(
                        "transition-all duration-300 text-brand-primary",
                        isActive
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                    )}
                >
                    ]
                </span>
            </span>
            <span
                className={cn(
                    "absolute inset-0 -z-10 rounded-md transition-opacity duration-300",
                    isActive ? "bg-brand-primary/10 opacity-100" : "bg-brand-primary/5 opacity-0 group-hover:opacity-100"
                )}
            />
        </Link>
    );
}
