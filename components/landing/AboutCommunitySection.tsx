"use client";

import Image from "next/image";

export const AboutCommunitySection = () => {
    return (
        <section className="container mx-auto px-4 py-24 border-t border-card-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

                {/* Left: The Mission */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight md:text-5xl text-brand-text">
                        For Engineers, <br />
                        <span className="text-brand-dark/50" style={{ WebkitTextStroke: "1px #05CAFF", color: "transparent" }}>By Engineers.</span>
                    </h2>
                    <p className="text-brand-text/70 text-lg leading-relaxed">
                        EdgeOps Labs is an Open Source Research Lab founded by a DevOps Engineer to bridge the gap between complex infrastructure and intelligent automation.
                    </p>
                    <p className="text-brand-text/70 text-lg leading-relaxed">
                        We believe the future of cloud computing is autonomous, efficient, and running on the edge. Our mission is to build the tools that make this future possible—without the enterprise bloat.
                    </p>
                </div>

                {/* Right: Circular Tech Icons */}
                <div className="relative flex-1 lg:h-[600px] h-[400px] flex items-center justify-center overflow-visible">
                    <div className="relative w-full h-full flex items-center justify-center scale-[0.65] sm:scale-75 md:scale-90 lg:scale-100">
                        {/* Center Logo/Icon */}
                        <div className="absolute z-10 h-24 w-24 rounded-full bg-brand-dark border border-brand-accent/30 shadow-[0_0_30px_rgba(5,202,255,0.2)] flex items-center justify-center">
                            <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-brand-primary to-brand-accent" />
                        </div>

                        {/* Orbit Circles */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[250px] w-[250px] rounded-full border border-brand-accent/40 dark:border-brand-accent/30 border-dashed animate-[spin_30s_linear_infinite]" />
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full border border-brand-accent/30 dark:border-brand-accent/20 animate-[spin_45s_linear_infinite_reverse]" />

                        <div className="absolute left-1/2 top-1/2">
                            {[
                                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
                                { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
                                { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
                                { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", darkThemeInvert: true },
                                { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg" },
                                { name: "Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", darkThemeInvert: true },
                            ].map((tech, i) => {
                                return (
                                    <div
                                        key={tech.name}
                                        className="absolute w-12 h-12 flex items-center justify-center p-2"
                                        style={{
                                            animation: `orbit1 30s linear infinite`,
                                            animationDelay: `-${(30 / 6) * i}s`
                                        }}
                                    >
                                        <div className="flex items-center justify-center">
                                            <Image
                                                src={tech.icon}
                                                alt={tech.name}
                                                width={32}
                                                height={32}
                                                unoptimized
                                                className={tech.darkThemeInvert ? 'dark:invert' : ''}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="absolute left-1/2 top-1/2">
                            {[
                                { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg" },
                                { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
                                { name: "Ansible", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg" },
                                { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" },
                                { name: "OpenShift", icon: "https://cdn.simpleicons.org/redhatopenshift/EE0000" },
                                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
                                { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
                            ].map((tech, i) => {
                                return (
                                    <div
                                        key={tech.name}
                                        className="absolute w-14 h-14 flex items-center justify-center p-2"
                                        style={{
                                            animation: `orbit2 45s linear infinite reverse`,
                                            animationDelay: `-${(45 / 7) * i}s`
                                        }}
                                    >
                                        <div className="flex items-center justify-center">
                                            <Image src={tech.icon} alt={tech.name} width={36} height={36} unoptimized />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>




            </div>
        </section>
    );
};
