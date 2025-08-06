import Navigation from "@/Pages/Navigation"
import HeroSection from "@/Pages/HeroSection";
import ExperienceSection from "@/Pages/Experience";
import ProjectsSection from "@/Pages/ProjectSection";
import SkillsSection from "@/Pages/SkillSection";
import AchievementsSection from "@/Pages/Achievement";
import ContactSection from "@/Pages/ContactSerction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="achievements">
          <AchievementsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-card/30 backdrop-blur-sm border-t border-border/50 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Sakshi Chauhan. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;