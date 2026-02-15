export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubUrl?: string;
    liveUrl?: string;
}

export interface Skill {
    name: string;
    category: 'Frontend' | 'Backend' | 'Tools' | 'Other';
}

export interface UserProfile {
    name: string;
    role: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    profileSummary: string;
    skills: Skill[];
    projects: Project[];
}
