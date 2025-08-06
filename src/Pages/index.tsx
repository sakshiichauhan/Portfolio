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
      
  
    
    </div>
  );
};

export default Index;