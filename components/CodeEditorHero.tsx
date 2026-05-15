"use client";

import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";

export const CodeEditorHero = () => {
    return (
        <section id="about" className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 space-y-6"
                >
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium"
                    >
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                        Available for new opportunities
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        Hi, I&apos;m <span className="text-accent underline decoration-accent/30 underline-offset-8">Jose Alexander</span>
                    </h1>
                    <p className="text-xl text-foreground/70 max-w-2xl leading-relaxed">
                        {portfolioData.role} specialized in building modern web applications with
                        <span className="text-accent font-semibold px-2">Next.js</span>,
                        <span className="text-code-blue font-semibold px-2">TypeScript</span> and
                        <span className="text-accent font-semibold px-2">Tailwind</span>.
                    </p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="flex gap-4"
                    >
                        <a href="#projects" className="px-8 py-3 bg-accent text-background font-bold rounded-xl hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all">
                            View Work
                        </a>
                        <a href={portfolioData.github} target="_blank" className="px-8 py-3 border border-accent/30 rounded-xl hover:bg-accent/5 transition-all text-accent">
                            GitHub
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="flex-1 w-full max-w-2xl"
                >
                    <div className="rounded-xl overflow-hidden border border-accent/20 shadow-2xl bg-editor-bg">
                        {/* Window Header */}
                        <div className="bg-editor-line px-4 py-3 flex items-center justify-between">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="text-xs text-foreground/40 font-mono">Profile.ts — Visual Studio Code</div>
                            <div className="w-12"></div>
                        </div>

                        {/* Editor Content */}
                        <div className="p-6 font-mono text-sm sm:text-base leading-relaxed overflow-x-auto whitespace-pre">
                            <div className="flex gap-4">
                                <span className="text-foreground/20 text-right w-6 select-none">1</span>
                                <div>
                                    <span className="text-code-purple">import</span>{" "}
                                    <span className="text-foreground">{"{"} Developer {"}"}</span>{" "}
                                    <span className="text-code-purple">from</span>{" "}
                                    <span className="text-code-green">&apos;@lexar23&apos;</span>;
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-foreground/20 text-right w-6 select-none">2</span>
                                <span></span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-foreground/20 text-right w-6 select-none">3</span>
                                <div>
                                    <span className="text-code-purple">const</span>{" "}
                                    <span className="text-code-blue">profile</span>{" "}
                                    <span className="text-foreground">=</span>{" "}
                                    <span className="text-foreground">{"{"}</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-foreground/20 text-right w-6 select-none">4</span>
                                <div className="pl-4">
                                    <span className="text-foreground">name:</span>{" "}
                                    <span className="text-code-green">&apos;{portfolioData.name}&apos;</span>,
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-foreground/20 text-right w-6 select-none">5</span>
                                <div className="pl-4">
                                    <span className="text-foreground">role:</span>{" "}
                                    <span className="text-code-green">&apos;{portfolioData.role}&apos;</span>,
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-foreground/20 text-right w-6 select-none">6</span>
                                <div className="pl-4">
                                    <span className="text-foreground">passions:</span>{" "}
                                    <span className="text-foreground">[</span>
                                    <span className="text-code-green">&apos;Clean Code&apos;</span>,{" "}
                                    <span className="text-code-green">&apos;UI/UX&apos;</span>,{" "}
                                    <span className="text-code-green">&apos;Innovation&apos;</span>
                                    <span className="text-foreground">]</span>,
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-foreground/20 text-right w-6 select-none">7</span>
                                <div className="pl-4">
                                    <span className="text-foreground">location:</span>{" "}
                                    <span className="text-code-green">&apos;{portfolioData.location.split(',')[0]}&apos;</span>,
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-foreground/20 text-right w-6 select-none">8</span>
                                <div className="pl-4">
                                    <span className="text-foreground">eager_to_learn:</span>{" "}
                                    <span className="text-code-orange">true</span>,
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-foreground/20 text-right w-6 select-none">9</span>
                                <div><span className="text-foreground">{"}"}</span>;</div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-foreground/20 text-right w-6 select-none">10</span>
                                <span></span>
                            </div>
                            <div className="flex gap-4 group">
                                <span className="text-foreground/20 text-right w-6 select-none">11</span>
                                <div>
                                    <span className="text-code-blue">console</span>.
                                    <span className="text-code-purple">log</span>(
                                    <span className="text-code-green">&apos;Ready to build something amazing!&apos;</span>
                                    );
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
