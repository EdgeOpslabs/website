"use client";

import { motion } from "framer-motion";
import { TerminalCopyBlock } from "./TerminalCopyBlock";

export const HeroSection = () => {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">

            {/* Background Grid Pattern */}
            {/* Background Grid Pattern - Handled Globally in Layout */}

            {/* Radical Gradient Top Glow */}
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-brand-secondary/20 blur-[120px] -z-10 rounded-full pointer-events-none opacity-50" />

            <div className="container relative z-10 flex flex-col items-center gap-8">

                {/* Badge / Pill */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full border border-brand-primary/20 bg-brand-primary/5 px-3 py-1 text-sm text-brand-primary"
                >
                    <span className="flex h-2 w-2 rounded-full bg-brand-primary mr-2 animate-pulse"></span>
                    v1.0.0 Public Preview
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
                >
                    Architecting the{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent drop-shadow-[0_0_20px_rgba(5,202,255,0.3)]">
                        Autonomous Cloud
                    </span>
                    .
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl text-lg text-brand-text/60 md:text-xl leading-relaxed"
                >
                    Open source tools for the Intelligent Edge. Built for DevOps, MLOps, and AIOps engineers who demand precision and control.
                </motion.p>

                {/* Terminal Copy Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-4"
                >
                    <TerminalCopyBlock />
                </motion.div>

                {/* Decorative Code Elements */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="absolute -z-10 top-1/2 left-10 hidden lg:block text-xs font-mono text-brand-text/10 select-none"
                >
                    <pre>{`func init() {
  system.Connect(edge)
  defer panic("kernel panic")
}`}</pre>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute -z-10 bottom-20 right-10 hidden lg:block text-xs font-mono text-brand-text/10 select-none"
                >
                    <pre>{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: sentient-edge`}</pre>
                </motion.div>

            </div>
        </section>
    );
};
