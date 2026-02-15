"use client";

import { portfolioData } from "@/data/portfolioData";

export const Footer = () => {
    return (
        <footer id="contact" className="pt-24 pb-12 px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-accent/5">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                    Let's <span className="text-accent underline decoration-accent/30">Connect</span> & Build.
                </h2>

                <p className="max-w-xl text-foreground/60 text-lg">
                    Currently looking for a junior frontend developer position where I can contribute
                    to exciting projects and grow alongside experienced developers.
                </p>

                <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
                    <a href={`mailto:${portfolioData.email}`} className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent group transition-all">
                        <span className="text-accent/60 group-hover:text-accent mr-3">Contact via Email</span>
                        {portfolioData.email}
                    </a>
                    <a href={portfolioData.linkedin} target="_blank" className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent group transition-all">
                        <span className="text-accent/60 group-hover:text-accent mr-3">LinkedIn Profile</span>
                        Lexar23
                    </a>
                </div>

                <div className="pt-20 w-full flex flex-col md:flex-row justify-between items-center gap-6 text-foreground/40 text-sm">
                    <p>© {new Date().getFullYear()} Jose Alexander Arce Salas. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href={portfolioData.github} target="_blank" className="hover:text-accent transition-colors underline decoration-accent/20 underline-offset-4">GitHub</a>
                        <a href={portfolioData.linkedin} target="_blank" className="hover:text-accent transition-colors underline decoration-accent/20 underline-offset-4">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
