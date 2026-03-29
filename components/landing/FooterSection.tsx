import Link from "next/link";

function FooterLink({
    href,
    label,
    external = false,
}: {
    href: string;
    label: string;
    external?: boolean;
}) {
    const content = (
        <span className="relative z-10 flex items-center gap-1 font-mono text-sm">
            <span className="text-brand-primary transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                [
            </span>
            {label}
            <span className="text-brand-primary transition-all duration-300 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                ]
            </span>
        </span>
    );

    const className = "group relative inline-flex items-center px-2 py-1 no-underline transition-colors text-brand-text/70 hover:text-brand-primary";

    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
            >
                {content}
                <span className="absolute inset-0 -z-10 rounded-md bg-brand-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
        );
    }

    return (
        <Link href={href} className={className}>
            {content}
            <span className="absolute inset-0 -z-10 rounded-md bg-brand-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </Link>
    );
}

export const FooterSection = () => {
    return (
        <footer className="border-t border-card-border bg-card pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-16">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold font-mono tracking-tight text-brand-text flex items-center gap-2 transition-all duration-300 hover:text-glow">
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
                                <FooterLink href="/products" label="opsctl" />
                            </li>
                            <li>
                                <FooterLink href="/products" label="Nexus" />
                            </li>
                            <li>
                                <FooterLink href="/products" label="KubeSentient" />
                            </li>
                            <li>
                                <FooterLink href="https://github.com/EdgeOpslabs" label="Roadmap" external />
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
                                <FooterLink href="https://github.com/EdgeOpslabs" label="GitHub" external />
                            </li>
                            <li>
                                <FooterLink href="https://discord.gg/Gy3c2uDwMQ" label="Discord" external />
                            </li>
                            <li>
                                <FooterLink href="https://youtube.com/@iemafzalhassan" label="YouTube" external />
                            </li>
                            <li>
                                <FooterLink href="https://x.com/EdgeopsL46234" label="Twitter / X" external />
                            </li>
                            <li>
                                <FooterLink href="https://www.linkedin.com/company/edgeops-labs/" label="LinkedIn" external />
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
                                <FooterLink href="/privacy" label="Privacy Policy" />
                            </li>
                            <li>
                                <FooterLink href="/terms" label="Terms of Service" />
                            </li>
                            <li>
                                <FooterLink href="/code-of-conduct" label="Code of Conduct" />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 border-t border-card-border pt-8 flex flex-col items-center justify-between gap-4 md:flex-row text-xs text-brand-text/40">
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
