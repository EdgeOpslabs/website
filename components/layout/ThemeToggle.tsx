"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className={cn("w-10 h-6", className)} />;
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={cn(
                "relative flex items-center w-14 h-7 p-1 rounded-full cursor-pointer transition-all duration-500",
                "border border-brand-primary/30 backdrop-blur-sm",
                isDark ? "bg-black/50 border-brand-primary" : "bg-brand-primary/10",
                isDark && "shadow-[0_0_10px_rgba(5,202,255,0.2)]",
                className
            )}
            aria-label="Toggle theme"
        >
            {/* Toggle Thumb */}
            <div
                className={cn(
                    "relative w-5 h-5 rounded-full shadow-md transform transition-transform duration-500 flex items-center justify-center overflow-hidden",
                    isDark ? "translate-x-7 bg-brand-primary text-black" : "translate-x-0 bg-white text-brand-secondary"
                )}
            >
                <Sun className={cn("absolute w-3 h-3 transition-all duration-500", isDark ? "scale-0 opacity-0" : "scale-100 opacity-100")} />
                <Moon className={cn("absolute w-3 h-3 transition-all duration-500", isDark ? "scale-100 opacity-100" : "scale-0 opacity-0")} />
            </div>

            {/* Background decoration */}
            <div className={cn(
                "absolute inset-0 rounded-full pointer-events-none transition-opacity duration-500",
                isDark ? "opacity-100" : "opacity-0"
            )}>
                <div className="absolute left-2 top-2 w-[1px] h-[1px] bg-white rounded-full animate-pulse" />
                <div className="absolute right-2 bottom-2 w-[1px] h-[1px] bg-white rounded-full animate-pulse delay-75" />
            </div>
        </button>
    );
}
