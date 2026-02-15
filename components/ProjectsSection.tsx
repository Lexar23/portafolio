"use client";

import Image from "next/image";
import { Project } from "@/interfaces/portfolio";

export const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-500">
            <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex gap-2">
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-foreground/60 line-clamp-2 text-sm">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-[10px] font-mono bg-accent/10 border border-accent/20 text-accent rounded-full capitalize">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const ProjectsSection = ({ projects }: { projects: Project[] }) => {
    return (
        <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="space-y-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tight inline-flex items-center gap-4">
                    <span className="text-accent underline decoration-accent/30">Selected Projects</span>
                    <div className="h-[1px] w-24 bg-accent/20"></div>
                </h2>
                <p className="text-foreground/60 max-w-xl">
                    A showcase of my recent work, blending design and robust frontend engineering.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};
