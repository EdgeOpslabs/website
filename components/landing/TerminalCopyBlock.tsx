"use client";

import { useState } from "react";
import { Check, Terminal, Copy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TerminalCopyBlockProps {
    command?: string;
    className?: string;
}

export const TerminalCopyBlock = ({
    command = "curl -sL edgeops.labs/install | bash",
    className,
}: TerminalCopyBlockProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(command);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy command:", err);
        }
    };

    return (
        <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCopy}
            className={cn(
                "group relative flex items-center gap-3 overflow-hidden rounded-lg",
                "bg-card border border-brand-primary/20",
                "px-5 py-4 font-mono text-sm sm:text-base",
                "transition-colors hover:border-brand-primary/50 hover:bg-brand-primary/5",
                "shadow-lg shadow-black/50 backdrop-blur-md",
                className
            )}
        >
            {/* Terminal Icon */}
            <div className="flex items-center gap-2 text-brand-primary/50 group-hover:text-brand-primary transition-colors">
                <Terminal size={18} />
                <span className="select-none text-brand-primary/30">➜</span>
            </div>

            {/* Command Text */}
            <span className="text-brand-text/90 min-w-[280px] text-left relative z-10 font-medium tracking-tight">
                {command}
            </span>

            {/* Action Icon (Copy or Check) */}
            <div className="relative ml-2 flex h-5 w-5 items-center justify-center">
                <AnimatePresence mode="wait">
                    {copied ? (
                        <motion.div
                            key="check"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="text-brand-accent"
                        >
                            <Check size={18} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="copy"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="text-brand-text/30 group-hover:text-brand-primary transition-colors"
                        >
                            <Copy size={18} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Background Sheen Effect */}
            <div className="absolute inset-0 -z-10 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-brand-primary/5 to-transparent transition-transform duration-1000 ease-in-out" />

            {/* Toast-ish Feedback */}
            <AnimatePresence>
                {copied && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-brand-accent text-brand-dark text-xs font-bold rounded shadow-lg pointer-events-none"
                    >
                        Copied to clipboard!
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    );
};
