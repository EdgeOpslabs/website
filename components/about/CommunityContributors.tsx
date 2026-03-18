"use client";

import { motion } from "framer-motion";
import { Briefcase, Github, Linkedin, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import config from "@/config/communityContributors.json";

type Contributor = {
  id: number;
  name: string;
  role: string;
  contribution: string;
  avatar: string;
  description: string;
  linkedin: string;
  github: string;
  portfolio?: string;
};

const CONTRIBUTORS = config as Contributor[];

export function CommunityContributors() {
  return (
    <section className="py-16 md:py-24 border-t border-brand-primary/10 mb-8">
      <div className="flex items-center gap-3 mb-16 justify-center text-center">
        <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
          <Star size={24} className="fill-amber-500/50" />
        </div>
        <h2 className="text-3xl font-bold font-mono text-brand-text">
          Community Contributors
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0 max-w-6xl mx-auto">
        {CONTRIBUTORS.map((contributor, i) => (
          <motion.div
            key={contributor.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative rounded-2xl overflow-hidden group shadow-xl transition-transform hover:-translate-y-2 h-full"
          >
            <div className="absolute inset-0 z-0">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ ease: "linear", duration: 8, repeat: Infinity }}
                className="absolute -inset-[100%] z-0 rounded-full bg-[conic-gradient(transparent_0deg,transparent_120deg,rgba(245,158,11,0.5)_180deg,transparent_240deg)] opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>

            <div className="relative z-10 m-[1px] md:m-[2px] p-6 lg:p-8 rounded-[15px] bg-gradient-to-b from-card to-background flex flex-col items-center text-center h-[calc(100%-2px)] md:h-[calc(100%-4px)] hover:bg-black/90">
              <div className="relative rounded-full border-4 overflow-hidden mb-6 transition-colors w-24 h-24 border-white/10 group-hover:border-brand-primary/50">
                <Image
                  src={contributor.avatar}
                  alt={contributor.name}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>

              <h3 className="font-bold text-brand-text group-hover:text-amber-400 transition-colors w-full text-lg lg:text-xl">
                {contributor.name}
              </h3>

              <p className="text-xs lg:text-sm text-brand-text/50 mt-2 uppercase tracking-widest font-mono mb-8 w-full px-2">
                {contributor.role}
              </p>

              <div className="flex flex-col gap-4 mt-auto w-full">
                {contributor.portfolio && (
                  <Link
                    href={contributor.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold uppercase tracking-wider text-xs font-mono transition-colors bg-white/10 text-brand-text hover:bg-white/20"
                  >
                    <Briefcase size={16} />
                    View Portfolio
                  </Link>
                )}

                <div className="flex items-center justify-center gap-3">
                  {contributor.linkedin && (
                    <Link
                      href={contributor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-black/40 border border-white/5 text-brand-text/60 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 transition-colors"
                      aria-label={`${contributor.name}'s LinkedIn profile`}
                    >
                      <Linkedin size={18} />
                    </Link>
                  )}
                  {contributor.github && (
                    <Link
                      href={contributor.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-black/40 border border-white/5 text-brand-text/60 hover:text-white hover:border-white/50 hover:bg-white/10 transition-colors"
                      aria-label={`${contributor.name}'s GitHub profile`}
                    >
                      <Github size={18} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: CONTRIBUTORS.length * 0.15 }}
          className="relative rounded-2xl overflow-hidden group shadow-xl transition-transform hover:-translate-y-2 h-full border-2 border-dashed border-brand-primary/20 bg-brand-primary/5 hover:border-brand-primary/40 transition-all hover:bg-brand-primary/10"
        >
          <div className="relative z-10 p-6 lg:p-8 rounded-[15px] flex flex-col items-center justify-center text-center h-full">
            <div className="mb-4 p-3 rounded-full bg-brand-primary/10 text-brand-primary animate-pulse">
              <Users size={32} />
            </div>

            <h3 className="text-lg font-bold text-brand-text mb-2 font-mono">
              Waiting for signal...
            </h3>

            <p className="text-xs text-brand-text/50 font-mono mb-6 uppercase tracking-wider">
              Next node operational slot: AVAILABLE
            </p>

            <a
              href="https://discord.gg/Gy3c2uDwMQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primary/80 transition-colors font-bold text-sm"
            >
              Apply Now →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
