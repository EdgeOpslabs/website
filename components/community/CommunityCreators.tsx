"use client";

import { motion } from "framer-motion";
import { Briefcase, Github, Linkedin, Users } from "lucide-react";
import Image from "next/image";
import { DiscordIcon } from "@/components/icons";

import { siteConfig, type Creator } from "@/lib/config-schema";

const CREATORS = siteConfig.community.creators as Creator[];

export function CommunityCreators() {
  return (
    <section className="py-16 md:py-24 border-t border-brand-primary/10">
      <h2 className="text-2xl font-bold font-mono text-brand-text mb-12 flex items-center gap-3">
        <Users className="text-brand-primary" />
        Architects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {CREATORS.map((creator, i) => (
          <motion.div
            key={creator.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-xl bg-card/30 backdrop-blur-sm border border-brand-primary/10 p-6 hover:border-brand-primary/30 transition-all"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="relative h-16 w-16 shrink-0 rounded-lg overflow-hidden border border-brand-primary/20 group-hover:border-brand-primary/50 transition-colors">
                <Image
                  src={creator.avatar}
                  alt={creator.name}
                  fill
                  sizes="64px"
                  unoptimized
                  className="object-cover grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-text group-hover:text-brand-primary transition-colors">
                  {creator.name}
                </h3>
                <p className="text-xs font-mono text-brand-primary/60">
                  {creator.role}
                </p>
              </div>
            </div>

            <p className="text-sm text-brand-text/60 leading-relaxed mb-4">
              {creator.bio || "Building the future of edge infrastructure."}
            </p>

            <div className="flex items-center gap-3">
              {creator.linkedin && (
                <a
                  href={creator.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-text/40 hover:text-brand-primary transition-colors"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {creator.github && (
                <a
                  href={creator.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-text/40 hover:text-brand-primary transition-colors"
                  aria-label={`${creator.name}'s GitHub profile`}
                >
                  <Github size={18} />
                </a>
              )}
              {creator.discord && (
                <a
                  href={creator.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-text/40 hover:text-brand-primary transition-colors"
                >
                  <DiscordIcon className="w-[18px] h-[18px]" />
                </a>
              )}
              {creator.portfolio && (
                <a
                  href={creator.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-text/40 hover:text-brand-primary transition-colors"
                  aria-label={`${creator.name}'s portfolio`}
                >
                  <Briefcase size={18} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
