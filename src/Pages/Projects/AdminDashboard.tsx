import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {  Calendar,  ChevronLeft, ChevronRight } from "lucide-react";

import { useState } from "react";

// Placeholder Image Component
const PlaceholderImage = ({ title }: { title: string }) => (
  <div className="w-full h-64 bg-gradient-to-br from-[#A3E635]/20 to-[#212020] rounded-lg flex items-center justify-center">
    <div className="text-center text-white/60">
      <div className="w-16 h-16 bg-[#A3E635]/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
        <div className="w-8 h-8 bg-[#A3E635] rounded"></div>
      </div>
      <p className="text-sm font-medium">{title}</p>
      <p className="text-xs mt-1">Project Preview</p>
    </div>
  </div>
);

// Image Gallery Component
const ImageGallery = ({ images, title }: { images: string[], title: string }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative">
      <div className="relative h-64 bg-gradient-to-br from-[#A3E635]/20 to-[#212020] rounded-lg overflow-hidden">
        <PlaceholderImage title={images[currentImageIndex] || title} />
        
        {images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="sm"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-[#212020]/80 text-white border-white/20 hover:bg-[#A3E635]/10"
              onClick={previousImage}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-[#212020]/80 text-white border-white/20 hover:bg-[#A3E635]/10"
              onClick={nextImage}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
            <div className="absolute top-2 left-2 z-20">
              <Badge className="bg-[#A3E635] text-[#212020]">
                {currentImageIndex + 1} / {images.length}
              </Badge>
            </div>
          </>
        )}
      </div>
      
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
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
      )}
    </div>
  );
};

const AdminDashboard = () => {
  const project = {
    title: "Admin Dashboard",
    subtitle: "Dynamic React TypeScript Admin Panel",
    description: "Built a comprehensive admin dashboard using React TypeScript, Tailwind CSS, and ShadCN UI to manage platform data efficiently. This project showcases modern web development practices with a focus on user experience and data management.",
    longDescription: "This admin dashboard was developed to streamline business operations by providing a centralized platform for managing users, content, finances, and business operations. The application features a modern, responsive design with intuitive navigation and real-time data updates.",
    tech: ["React TypeScript", "Tailwind CSS", "ShadCN UI", "React Router DOM", "Axios", "Vite"],
    features: [
      "User Management (Explorers, Coaches, Organizations)",
      "Content Management (Articles, Videos, Testimonials, FAQs)",
      "Financial Management (Payments, Payouts, Commissions)",
      "Product Management (Assessments, Sessions)",
      "User Reports & Feedback Handling",
      "Responsive, Modern UI with Secure Authentication"
    ],
    challenges: [
      "Implementing complex state management for multiple user roles",
      "Creating responsive design for various screen sizes",
      "Optimizing performance with large datasets",
      "Ensuring secure authentication and authorization"
    ],
    solutions: [
      "Used React Context and custom hooks for state management",
      "Implemented responsive design with Tailwind CSS breakpoints",
      "Implemented virtual scrolling and pagination for performance",
      "Integrated JWT tokens and role-based access control"
    ],
    github: "https://github.com/sakshiichauhan/Assetmanagement-project",
    demo: null,
    liveLinks: [
      {
        name: "Admin Panel",
        url: "https://admin-dashboard-demo.vercel.app",
        description: "Main admin interface"
      }
    ],
    images: [
      "admin-dashboard-1",
      "admin-dashboard-2", 
      "admin-dashboard-3"
    ],
    duration: "3 months",
    team: "Solo Project",
    role: "Full-Stack Developer",
    projectType: "Web Application",
    status: "Completed"
  };

  return (
    <div className="pt-35 pb-20 bg-[#212020]">
      {/* Navigation Header */}


      <div className="container mx-auto px-6 py-12">
        {/* Project Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-[#FFFFFF]">
            {project.title}
          </h1>
          <p className="text-xl text-[#A3E635] mb-6">
            {project.subtitle}
          </p>
          <p className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Project Info */}
          <div className="lg:col-span-2">
            <Card className="bg-[#212020]/50 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Project Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-[#A3E635]" />
                    <div>
                      <p className="text-sm text-white/60">Duration</p>
                      <p className="text-white font-medium">{project.duration}</p>
                    </div>
                  </div>
                
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#A3E635] rounded"></div>
                    <div>
                      <p className="text-sm text-white/60">Type</p>
                      <p className="text-white font-medium">{project.projectType}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#A3E635] rounded"></div>
                    <div>
                      <p className="text-sm text-white/60">Status</p>
                      <p className="text-white font-medium">{project.status}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <div key={index}>
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
              </CardContent>
            </Card>
          </div>

          {/* Project Image Gallery */}
          <div>
            <Card className="bg-[#212020]/50 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <ImageGallery images={project.images} title={project.title} />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Live Links Section */}
   

        {/* Features & Challenges */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <Card className="bg-[#212020]/50 backdrop-blur-sm border-white/20 h-full">
              <CardHeader>
                <CardTitle className="text-xl text-white">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-[#A3E635] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-[#212020]/50 backdrop-blur-sm border-white/20 h-full">
              <CardHeader>
                <CardTitle className="text-xl text-white">Challenges & Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Challenges</h4>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li 
                          key={index}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-white/80 text-sm">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Solutions</h4>
                    <ul className="space-y-2">
                      {project.solutions.map((solution, index) => (
                        <li 
                          key={index}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-[#A3E635] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-white/80 text-sm">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
