import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/Pages/Navigation";
import HeroSection from "@/Pages/HeroSection";
import ExperienceSection from "@/Pages/Experience";
import ProjectsSection from "@/Pages/ProjectSection";

import AdminDashboard from "@/Pages/Projects/AdminDashboard";
import Aimshala from "@/Pages/Projects/Aimshala";
import BondOverSports from "@/Pages/Projects/BondOverSports";
import SkillsSection from "@/Pages/SkillSection";
import AchievementsSection from "@/Pages/Achievement";
import ContactSection from "@/Pages/ContactSerction";
import NotFound from "@/Pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/experience" element={<ExperienceSection />} />
            <Route path="/projects" element={<ProjectsSection />} />
           
            <Route path="/project/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/project/aimshala" element={<Aimshala />} />
            <Route path="/project/bond-over-sports" element={<BondOverSports />} />
            <Route path="/skills" element={<SkillsSection />} />
            <Route path="/achievements" element={<AchievementsSection />} />
            <Route path="/contact" element={<ContactSection />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;