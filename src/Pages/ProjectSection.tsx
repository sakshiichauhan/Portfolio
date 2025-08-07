import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import images
import bondOverSportsImage1 from "@/assets/BondOverSports/image1.jpeg";
import AdminDashboard from "@/assets/AdminDashboard/image1.jpeg";
import Aimshala from "@/assets/Aimshala/image1.jpeg";


// Project Image Component
const ProjectImage = ({ imagePath, title }: { imagePath: string; title: string }) => (
  <div className="w-full h-48 rounded-lg overflow-hidden">
    <img 
      src={imagePath} 
      alt={title}
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    />
  </div>
);

const ProjectsSection = () => {
  const projects = [
    {
      title: "Bond Over Sports (BOS)",
      description: "I build Bond Over Sports, a platform connecting communities through heritage sports using frontend and API-driven design",
      tech: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "Axios"],
      image: bondOverSportsImage1,
      pagePath: "/project/bond-over-sports"
    },
    {
      title: "Admin Dashboard",
      description: "Built a dynamic and responsive Admin Dashboard using React TypeScript, Tailwind CSS, and ShadCN UI to manage platform data efficiently.",
      tech: ["React Ts", "Tailwindcss", "ShadCN UI"],
      image: AdminDashboard,
      pagePath: "/project/admin-dashboard"
    },
    {
      title: "Aimshala - Consultant Management Platform", 
      description: "Comprehensive consultant management platform with dashboard, profile management, and session scheduling",
      tech: ["React.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Clerk"],
      image: Aimshala,
      pagePath: "/project/aimshala"
    },
  
  ];

  const handleProjectClick = (pagePath: string) => {
    window.open(pagePath, '_blank');
  };

  return (
    <section className="pt-35 pb-20 bg-[#212020]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#FFFFFF]">
            What I've been <span className="text-[#A3E635]">working on</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Showcasing innovative solutions that drive real business impact and user engagement.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <Card className="group bg-[#212020]/50 backdrop-blur-sm border-white/20 hover:shadow-elevated transition-all duration-500 overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-8 p-8">
                  {/* Project Thumbnail */}
                  <div className="lg:w-1/3">
                    <ProjectImage imagePath={project.image} title={project.title} />
                  </div>

                  {/* Project Details */}
                  <div className="lg:w-2/3 space-y-6">
                    <div className="space-y-3">
                      <div>
                        <h3 
                          className="text-2xl lg:text-3xl font-bold text-white group-hover:text-[#A3E635] transition-colors cursor-pointer hover:text-[#A3E635]"
                          onClick={() => handleProjectClick(project.pagePath)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              handleProjectClick(project.pagePath);
                            }
                          }}
                        >
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className="text-white/80 leading-relaxed text-lg">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <div key={techIndex}>
                            <Badge 
                              variant="outline" 
                              className="text-sm text-[#FFFFFF] bg-white/10 border-white/20 hover:bg-[#A3E635]/10 hover:border-[#A3E635]/30 transition-colors"
                            >
                              {tech}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                  
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;