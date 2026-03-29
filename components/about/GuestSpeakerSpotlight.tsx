"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import allSpeakers from "@/config/guestSpeakers.json";

// Only show speakers that have been marked active.
// To activate a speaker, set "active": true in guestSpeakers.json
const speakers = (allSpeakers as Array<typeof allSpeakers[0] & { active?: boolean }>).filter(
  (s) => s.active === true
);

export function GuestSpeakerSpotlight() {
  // Hide the entire section when there are no active speakers
  if (speakers.length === 0) return null;

  return (
    <section className="py-16 md:py-24 border-t border-brand-primary/10">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-brand-primary text-sm font-mono uppercase tracking-[0.2em] mb-4 block"
        >
          Introducing the Experts
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-brand-text mb-6"
        >
          Meet Our Speakers
        </motion.h2>

        <div className="flex flex-col items-center gap-2">
          <button className="text-brand-primary hover:text-brand-primary/80 transition-colors flex items-center gap-1 text-sm font-medium">
            See all speakers <ChevronRight size={14} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-12 gap-y-20 max-w-6xl mx-auto px-4">
        {speakers.map((speaker, i) => (
          <motion.div
            key={speaker.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center group h-full"
          >
            {/* Circular Image Container */}
            <div className="relative w-20 h-20 mb-8 shrink-0">
              <div className="absolute inset-0 rounded-full border-2 border-brand-primary/10 group-hover:border-brand-primary/40 transition-colors duration-500 scale-110" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-card shadow-xl transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={speaker.avatar}
                  alt={speaker.name}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>

            {/* Speaker Details */}
            <div className="flex-1 flex flex-col justify-between w-full">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-brand-text group-hover:text-brand-primary transition-colors">
                  {speaker.name}
                </h3>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium text-brand-text/60 leading-tight">
                    {speaker.role} of {speaker.company}
                  </p>
                  <p className="text-xs text-brand-text/40 font-mono italic">
                    &quot;{speaker.topic}&quot;
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 mt-6">
                <a
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-text/30 hover:text-brand-primary transition-colors"
                  aria-label={`${speaker.name}'s LinkedIn profile`}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                {speaker.github && (
                  <a
                    href={speaker.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-text/30 hover:text-brand-primary transition-colors"
                    aria-label={`${speaker.name}'s GitHub profile`}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
