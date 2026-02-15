"use client";

import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-accent/20">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tighter flex items-center gap-2">
                    <span className="text-accent text-2xl">{"<"}</span>
                    <span className="hover:text-accent transition-colors">Lexar23</span>
                    <span className="text-accent text-2xl">{"/>"}</span>
                </Link>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link href="#about" className="hover:text-accent transition-colors">About</Link>
                    <Link href="#skills" className="hover:text-accent transition-colors">Skills</Link>
                    <Link href="#projects" className="hover:text-accent transition-colors">Projects</Link>
                    <Link href="#contact" className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg hover:bg-accent/20 transition-all text-accent group">
                        Say Hello
                        <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};
