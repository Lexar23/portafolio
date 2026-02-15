"use client";

import { Skill } from "@/interfaces/portfolio";

export const SkillsSection = ({ skills }: { skills: Skill[] }) => {
    const categories = Array.from(new Set(skills.map(s => s.category)));

    return (
        <section id="skills" className="py-24 px-6 max-w-7xl mx-auto bg-editor-bg/50 rounded-3xl border border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight">Technical <span className="text-accent underline decoration-accent/30">Arsenal</span></h2>
                    <p className="text-foreground/60 leading-relaxed text-lg">
                        I continuously evolve my stack to follow industry standards.
                        My focus is on creating high-performance, accessible, and maintainable
                        frontend architectures.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex-1 min-w-[150px]">
                            <div className="text-accent font-bold text-2xl mb-1">2+</div>
                            <div className="text-xs text-foreground/40 uppercase tracking-widest">Years Learning</div>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex-1 min-w-[150px]">
                            <div className="text-accent font-bold text-2xl mb-1">10+</div>
                            <div className="text-xs text-foreground/40 uppercase tracking-widest">Projects Completed</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {categories.map((category) => (
                        <div key={category} className="space-y-4">
                            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-accent/60 flex items-center gap-2">
                                <span className="w-4 h-[1px] bg-accent/40"></span>
                                {category}
                            </h3>
                            <ul className="grid grid-cols-1 gap-3">
                                {skills
                                    .filter(s => s.category === category)
                                    .map(skill => (
                                        <li key={skill.name} className="flex items-center gap-3 group">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-40 group-hover:opacity-100 transition-opacity"></div>
                                            <span className="text-sm font-medium hover:text-accent transition-colors cursor-default capitalize">
                                                {skill.name}
                                            </span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
