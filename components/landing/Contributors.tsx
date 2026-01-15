"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitCommit, Star, Code, Users } from "lucide-react";
import Image from "next/image";

interface Contributor {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
    contributions: number;
}

export function Contributors() {
    const [contributors, setContributors] = useState<Contributor[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContributors = async () => {
            try {
                // Fetch all public repositories for the EdgeOpslabs organization
                const reposRes = await fetch('https://api.github.com/orgs/EdgeOpslabs/repos');
                if (!reposRes.ok) throw new Error("Failed to fetch repos");

                const repos = await reposRes.json();

                // Fetch contributors for each repository (limit to top 5 to respect rate limits)
                const contributorsPromises = repos.slice(0, 5).map((repo: any) =>
                    fetch(repo.contributors_url).then(res => res.ok ? res.json() : [])
                );

                const contributorsArrays = await Promise.all(contributorsPromises);

                // Flatten and Deduplicate by ID
                const allContributors = contributorsArrays.flat();
                const uniqueContributorsMap = new Map();

                allContributors.forEach((c: any) => {
                    if (!uniqueContributorsMap.has(c.id) && !c.login.includes('[bot]')) {
                        uniqueContributorsMap.set(c.id, c);
                    } else if (uniqueContributorsMap.has(c.id)) {
                        // Aggregate contributions count if needed, though API returns per repo
                        const existing = uniqueContributorsMap.get(c.id);
                        existing.contributions += c.contributions;
                    }
                });

                const uniqueContributors = Array.from(uniqueContributorsMap.values())
                    .sort((a: any, b: any) => b.contributions - a.contributions);

                setContributors(uniqueContributors as Contributor[]);
            } catch (error) {
                console.error("Failed to load contributors", error);
                // Fallback to core architect if API fails
                setContributors([
                    { id: 1, login: "iemafzal", avatar_url: "https://github.com/iemafzal.png", html_url: "https://github.com/iemafzal", contributions: 1337 },
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchContributors();
    }, []);

    return (
        <section className="py-24 border-t border-brand-primary/10 mt-16 -mx-4 px-4 md:-mx-12 md:px-12">
            <div className="flex items-center gap-3 mb-10">
                <Users className="text-brand-primary" />
                <h2 className="text-2xl font-bold font-mono text-brand-text">
                    Active Nodes (Contributors)
                </h2>
            </div>

            {loading ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-24 bg-brand-primary/5 rounded-lg border border-brand-primary/10" />
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {contributors.map((contributor, i) => (
                        <motion.a
                            key={contributor.id}
                            href={contributor.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="group relative flex flex-col items-center p-4 rounded-xl bg-card border border-brand-primary/10 hover:border-brand-primary/40 transition-all hover:-translate-y-1"
                        >
                            <div className="relative w-12 h-12 mb-3 rounded-full overflow-hidden ring-2 ring-brand-primary/20 group-hover:ring-brand-primary/60 transition-all">
                                <Image
                                    src={contributor.avatar_url}
                                    alt={contributor.login}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-xs font-mono text-brand-text/80 group-hover:text-brand-primary transition-colors truncate w-full text-center">
                                @{contributor.login}
                            </span>
                            <span className="text-[10px] text-brand-text/40 mt-1 font-mono">
                                {contributor.contributions} commits
                            </span>
                        </motion.a>
                    ))}
                </div>
            )}
        </section>
    );
}
