export const FooterSection = () => {
    return (
        <footer className="border-t border-card-border bg-card pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-16">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold font-mono tracking-tight text-brand-text flex items-center gap-2">
                            <span className="text-brand-primary">edgeops</span>.labs
                        </h3>
                        <p className="text-sm text-brand-text/60 leading-relaxed">
                            Architecting the Autonomous Cloud. <br />
                            Open Source tools for the Intelligent Edge.
                        </p>
                    </div>

                    {/* OSS Column */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-text">
                            Open Source
                        </h4>
                        <ul className="space-y-3 text-sm text-brand-text/60">
                            <li>
                                <a href="#" className="hover:text-brand-primary transition-colors">opsctl</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-brand-primary transition-colors">Nexus</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-brand-primary transition-colors">KubeSentient</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-brand-primary transition-colors">Roadmap</a>
                            </li>
                        </ul>
                    </div>

                    {/* Socials Column */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-text">
                            Connect
                        </h4>
                        <ul className="space-y-3 text-sm text-brand-text/60">
                            <li>
                                <a href="https://github.com/EdgeOpslabs" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">GitHub</a>
                            </li>
                            <li>
                                <a href="https://discord.gg/edgeopslabs" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">Discord</a>
                            </li>
                            <li>
                                <a href="https://youtube.com/@iemafzalhassan" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">YouTube</a>
                            </li>
                            <li>
                                <a href="https://x.com/iemafzal" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">Twitter / X</a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-text">
                            Legal
                        </h4>
                        <ul className="space-y-3 text-sm text-brand-text/60">
                            <li>
                                <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-brand-primary transition-colors">Code of Conduct</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 border-t border-white/5 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row text-xs text-brand-text/40">
                    <p>© 2026 EdgeOps Labs. All rights reserved.</p>
                    <div className="flex gap-4">
                        <span>Designed for the Intelligent Edge.</span>
                        <span className="font-mono text-brand-primary/50">v1.0.0</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
