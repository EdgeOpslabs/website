<div align="center">

# EdgeOps Labs

![Deployment Status](https://img.shields.io/badge/deployment-operational-00C853?style=for-the-badge&logo=vercel)
![Version](https://img.shields.io/badge/release-v1.0.0-05CAFF?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-000000?style=for-the-badge)
![Tech](https://img.shields.io/badge/built_with-Next.js_16-000000?style=for-the-badge&logo=next.js)
![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-00D1FF?style=for-the-badge&logo=github)
![Open Source](https://img.shields.io/badge/open_source-yes-05CAFF?style=for-the-badge)
![Maintained](https://img.shields.io/badge/maintained-yes-00C853?style=for-the-badge)

**Architecting the Operating System for the Intelligent Edge.**

[Enter the Lab](https://www.edgeopslabs.com/) · [Read the Protocol](CONTRIBUTING.md) · [Access Repo](https://github.com/EdgeOpslabs)

</div>

---

## 🚀 The Manifesto

**We are engineering the Autonomous Cloud.**

The current DevOps landscape is a graveyard of "managed services" that manage nothing but your billing cycle. We reject the notion that infrastructure requires constant human intervention.

We build for the **Intelligent Edge**—where latency is fatal and downtime is not an option.

### Our First Principles

1.  **Code is Law.** Infrastructure should be deterministic, not "eventually consistent."
2.  **Zero-Touch Operations.** If a human has to SSH into a server, the architecture has failed.
3.  **Speed is not a luxury.** In the age of AI, milliseconds are centuries.

> "We do not patch the old world. We compile the new one." — *EdgeOps Labs Protocol*

## ⚡ Tech Stack (The Kernel)

We don't use libraries because they are "popular." We use them because they are **performant**.

*   **Core:** [Next.js 15](https://nextjs.org/) (App Router only. No legacy `pages/` garbage).
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Utility-first. No CSS-in-JS runtime overhead).
*   **Animation:** [Framer Motion](https://www.framer.com/motion/) (GPU-accelerated layouts).
*   **Icons:** [Lucide React](https://lucide.dev/) (Clean. SVG. No bloat).
*   **Package Manager:** `npm` (Standard. Reliable).

## 🛠️ Boot Sequence

Don't ask how to run it. Read the code. But if you must:

```bash
# 1. Clone the repository
git clone https://github.com/EdgeOpslabs/website.git

# 2. Install dependencies (Clean install only)
npm ci

# 3. Ignite the development server
npm run dev
```

Open `http://localhost:4321` and verify the integrity of the build.

### Live Blog Telemetry

The Community page pulls real-time highlights from the blog deployment through the `/api/posts/highlights` endpoint. Configure the origin via:

```bash
NEXT_PUBLIC_BLOG_BASE_URL="https://blogs.edgeopslabs.com"
```

If you run a preview/staging blog environment, point this variable to that URL so the marketing site fetches the correct feed.
When `NEXT_PUBLIC_BLOG_BASE_URL` is omitted, the site automatically uses `http://localhost:3001` in development and `https://blogs.edgeopslabs.com` in production, so local dev setups “just work” when both apps run side by side.

## 🤝 Contributing

**We welcome contributions, but we demand excellence.**

We do not merge spaghetti code. We do not merge formatting errors.
Before you open a PR, read the **[Contribution Protocol](CONTRIBUTING.md)**. It is the Single Source of Truth for our architecture.

> "Talk is cheap. Show me the code." - Linus Torvalds

---

<div align="center">
  <p>© 2026 EdgeOps Labs. Engineered for the Singularity.</p>
</div>
