import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, TrendingUp, Image as ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import React from "react";

// Placeholder Image Component
const PlaceholderImage = ({ title }: { title: string }) => (
  <div className="w-full h-64 bg-gradient-to-br from-[#A3E635]/20 to-[#212020] rounded-lg flex items-center justify-center">
    <div className="text-center text-white/60">
      <div className="w-16 h-16 bg-[#A3E635]/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
        <ImageIcon className="w-8 h-8 text-[#A3E635]" />
      </div>
      <p className="text-sm font-medium">{title}</p>
      <p className="text-xs mt-1">Project Preview</p>
    </div>
  </div>
);

const ProjectsSection = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const projects = [
    {
      title: "Admin Dashboard",
      description: "Developed a robust React-based admin dashboard for streamlined management of users, content, finances, and business operations.",
      tech: ["React 19 ", "TypeScript ", "Vite ", "Tailwind CSS 4 ", "Radix UI ", "React Router DOM ", "Axios"],
      achievements: [
        "User management (Explorers, Coaches, Organizations)",
        "Content management (Articles, Videos, Testimonials, FAQs)",
        "Financial management (Payments, Payouts, Commissions)",
        "Product management (Assessments, Sessions)",
        "User reports & feedback handling",
        "Responsive, modern UI with secure authentication",
      ],
      github: "https://github.com/sakshiichauhan/Assetmanagement-project",
      featured: true,
      gradient: "gradient-primary",
      images: [
        "admin-dashboard-1",
        "admin-dashboard-2", 
        "admin-dashboard-3"
      ]
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
      gradient: "gradient-secondary",
      images: [
        "aimshala-1",
        "aimshala-2"
      ]
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
      gradient: "gradient-primary",
      images: [
        "bos-1",
        "bos-2",
        "bos-3"
      ]
    }
  ];

  const handleImageClick = (images: string[]) => {
    setSelectedImages(images);
    setCurrentImageIndex(0);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImages([]);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedImages.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedImages.length - 1 : prev - 1
    );
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeImageModal();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      previousImage();
    }
  };

  // Add keyboard event listener
  React.useEffect(() => {
    if (isImageModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isImageModalOpen, currentImageIndex]);

  return (
    <section className="pt-35 pb-20 bg-[#212020]">
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
              className="group bg-[#212020]/50 backdrop-blur-sm border-white/20 hover:shadow-elevated hover:scale-105 transition-all duration-500 overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl lg:text-2xl group-hover:text-[#A3E635] transition-colors text-white">
                      {project.title}
                    </CardTitle>
                    {project.featured && (
                      <Badge className="bg-[#A3E635] text-[#212020]">
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
                    className="bg-[#A3E635] text-[#212020] hover:bg-[#A3E635]/90 transition-all duration-300"
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
                      className="border-[#A3E635]/30 text-[#FFFFFF] hover:bg-[#A3E635]/10 hover:border-[#A3E635] transition-all duration-300"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.images && project.images.length > 0 && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-[#A3E635]/30 text-[#FFFFFF] hover:bg-[#A3E635]/10 hover:border-[#A3E635] transition-all duration-300"
                      onClick={() => handleImageClick(project.images)}
                    >
                      <ImageIcon className="w-4 h-4 mr-2" />
                      Images ({project.images.length})
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

      {/* Enhanced Image Modal */}
      {isImageModalOpen && selectedImages.length > 0 && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-[90vh] bg-[#212020] rounded-lg overflow-hidden">
            {/* Close Button */}
            <div className="absolute top-4 right-4 z-20">
              <Button
                variant="outline"
                size="sm"
                className="bg-[#212020]/80 text-white border-white/20 hover:bg-[#A3E635]/10"
                onClick={closeImageModal}
              >
                ✕
              </Button>
            </div>

            {/* Navigation Arrows */}
            {selectedImages.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#212020]/80 text-white border-white/20 hover:bg-[#A3E635]/10"
                  onClick={previousImage}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#212020]/80 text-white border-white/20 hover:bg-[#A3E635]/10"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </>
            )}

            {/* Image Counter */}
            {selectedImages.length > 1 && (
              <div className="absolute top-4 left-4 z-20">
                <Badge className="bg-[#A3E635] text-[#212020]">
                  {currentImageIndex + 1} / {selectedImages.length}
                </Badge>
              </div>
            )}

            {/* Image Display */}
            <div className="p-4">
              <PlaceholderImage title={selectedImages[currentImageIndex]} />
            </div>

            {/* Thumbnail Navigation */}
            {selectedImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
                <div className="flex gap-2">
                  {selectedImages.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-[#A3E635]' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;