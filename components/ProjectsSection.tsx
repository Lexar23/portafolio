"use client";

import Image from "next/image";
import { Project } from "@/interfaces/portfolio";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
    const fallbackImage = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800";
    const previewUrl = project.liveUrl 
        ? `https://v1.screenshot.11ty.dev/${encodeURIComponent(project.liveUrl)}/large/_wait:2/`
        : (project.imageUrl || fallbackImage);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-500 hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.1)] flex flex-col h-full"
        >
            <div className="aspect-video relative overflow-hidden bg-white/5">
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-40 transition-opacity z-10 pointer-events-none"></div>
                <Image
                    src={previewUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    unoptimized={!!project.liveUrl} // WordPress mshots doesn't play well with Next.js image optimization sometimes
                />
                
                {/* Overlay with Visit button on hover */}
                <div className="absolute inset-0 flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    {project.liveUrl && (
                        <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-accent text-accent-foreground font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
                        >
                            Ver Proyecto
                        </a>
                    )}
                </div>
            </div>

            <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex gap-2">
                        {project.githubUrl && (
                            <a 
                                href={project.githubUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-foreground/60 hover:text-foreground"
                                title="GitHub Repository"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        )}
                        {project.liveUrl && (
                            <a 
                                href={project.liveUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-foreground/60 hover:text-foreground"
                                title="Live Demo"
                            >
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-foreground/60 line-clamp-2 text-sm leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-[11px] font-mono bg-accent/5 border border-accent/10 text-accent/80 rounded-full hover:bg-accent/10 transition-colors cursor-default">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
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
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};
