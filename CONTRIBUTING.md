# Contribution Protocol

> "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away." — *EdgeOps Engineering Standard*

Welcome to the **EdgeOps Labs** forge. Use this document as your kernel.

We are building the operating system for the intelligent edge. This requires precision, efficiency, and a complete disregard for "industry standards" that prioritize safety over performance.

If you are here to write boilerplate, turn back. If you are here to optimize the signal-to-noise ratio of the cloud, proceed.

---

## Architecture

Understanding the system architecture is mandatory before contributing.

### 1. The Core (Next.js 15)
We utilize the **App Router** (`app/`) exclusively.
-   **Server Components:** Default. Use them for data fetching and static content.
-   **Client Components:** Use `'use client'` *only* when interactivity is strictly necessary (e.g., hooks, event listeners).
-   **Directory Structure:**
    -   `app/`: Routes and Pages.
    -   `components/landing/`: High-level landing page blocks (Hero, Features, Footer).
    -   `components/ui/`: Low-level primitives (Buttons, Cards). **Do not reinvent the wheel.**
    -   `lib/`: Utilities and helper functions.

### 2. The Skin (Tailwind CSS v4)
We do not write "CSS". We write utility classes.
-   **No Arbitrary Values:** Do not use `w-[123px]`. Use the design tokens (`w-32`, `w-full`).
-   **Responsive First:** Mobile-first media queries.
-   **Dark Mode:** Built-in. Every component must look impeccable in both Light and Dark modes.

### 3. The Rules of Engagement

#### Code Quality
*   **TypeScript:** Strict mode is non-negotiable. `any` is forbidden. Define your interfaces.
*   **clean code:** If a function is longer than your screen, refactor it.
*   **Comments:** Code should explain *what* it does. Comments should explain *why*. If the code is obvious, do not comment.

#### Pull Request Protocol
1.  **Atomic Commits:** One feature, one commit.
2.  **Descriptive Titles:** "Fix bug" is unacceptable. "Fix race condition in active nodes counter" is acceptable.
3.  **Visual Proof:** If you change the UI, provide screenshots. We believe what we see.

---

## 🚀 How to Contribute

1.  **Fork** the repository.
2.  **Branch** off `main` (`git checkout -b feature/warp-drive`).
3.  **Code** like your reputation depends on it.
4.  **Push** to your fork.
5.  **Open a PR** and wait for the code review. Be prepared to defend your decisions.

**Welcome to the resistance.**
