import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, TrendingUp } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Asset Management System",
      description: "Developed an intuitive asset management system for organizing and tracking assets with comprehensive CRUD operations",
      tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Express.js"],
      achievements: [
        "30% increase in user engagement",
        "25% reduction in load times",
        "RESTful APIs with error handling",
        "Responsive UI components"
      ],
      github: "https://github.com/sakshiichauhan/Assetmanagement-project",
      featured: true,
      gradient: "gradient-primary"
    },
    {
      title: "Aimshala - Consultant Management Platform", 
      description: "Comprehensive consultant management platform with dashboard, profile management, and session scheduling",
      tech: ["React.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Clerk"],
      achievements: [
        "Multi-tab profile system",
        "Payment processing integration", 
        "Calendar management",
        "Type-safe development"
      ],
      github: "https://github.com/sakshiichauhan/Aimshala-",
      featured: true,
      gradient: "gradient-secondary"
    },
    {
      title: "Bond Over Sports (BOS)",
      description: "Government-recognized platform officially registered under FIT India initiative and acknowledged by NITI Aayog",
      tech: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "Axios"],
      achievements: [
        "Government recognition",
        "5 user roles implementation",
        "Real-time event management",
        "OTP verification system"
      ],
      github: "https://github.com/sakshiichauhan/Bos",
      demo: "https://bos-topaz.vercel.app",
      featured: true,
      gradient: "gradient-primary"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#FFFFFF]">
            Featured <span className="text-[#A3E635]">Projects</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Showcasing innovative solutions that drive real business impact and user engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group bg-black/50 backdrop-blur-sm border-white/20 hover:shadow-elevated hover:scale-105 transition-all duration-500 overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl lg:text-2xl group-hover:text-[#A3E635] transition-colors text-white">
                      {project.title}
                    </CardTitle>
                    {project.featured && (
                      <Badge className="bg-[#A3E635] text-black">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-white/80 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-white">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs text-[#FFFFFF] bg-white/10 border-white/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 flex items-center gap-2 text-white">
                    <TrendingUp className="w-4 h-4 text-[#A3E635]" />
                    Key Achievements
                  </h4>
                  <div className="space-y-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#A3E635] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-xs text-white/70">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="bg-[#A3E635] text-black hover:bg-[#A3E635]/90 transition-all duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-[#A3E635]/30 text-white hover:bg-[#A3E635]/10 hover:border-[#A3E635] transition-all duration-300"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-[#A3E635] opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;