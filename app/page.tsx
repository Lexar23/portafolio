import { Navbar } from "@/components/Navbar";
import { CodeEditorHero } from "@/components/CodeEditorHero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { Footer } from "@/components/Footer";
import { portfolioData } from "@/data/portfolioData";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-accent/30 selection:text-white">
      <Navbar />

      <div className="relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-code-blue/10 blur-[100px] rounded-full -z-10"></div>

        <CodeEditorHero />

        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <SkillsSection skills={portfolioData.skills} />

        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <ProjectsSection projects={portfolioData.projects} />

        <Footer />
      </div>
    </main>
  );
}
