import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
  Image as ImageIcon,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

// Import images
import image1 from "@/assets/BondOverSports/image1.jpeg";
import image2 from "@/assets/BondOverSports/image2.jpeg";
import image3 from "@/assets/BondOverSports/image3.jpeg";

// Image Modal Component
const ImageModal = ({
  isOpen,
  onClose,
  images,
  title,
}: {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-6xl mx-4 max-h-[90vh] bg-[#212020] rounded-lg shadow-2xl border border-white/20">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/20">
          <div className="flex items-center gap-3">
            <ImageIcon className="w-6 h-6 text-[#A3E635]" />
            <h2 className="text-xl font-semibold text-white">
              {title} - Output Images
            </h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Image Container */}
        <div className="relative p-6">
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
            <img
              src={images[currentImageIndex]}
              alt={`${title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
            />

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#212020]/90 text-white border-white/20 hover:bg-[#A3E635]/20 hover:border-[#A3E635]/50 transition-all duration-300"
                  onClick={previousImage}
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#212020]/90 text-white border-white/20 hover:bg-[#A3E635]/20 hover:border-[#A3E635]/50 transition-all duration-300"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>

                {/* Image Counter */}
                <div className="absolute top-4 left-4 z-20">
                  <Badge className="bg-[#A3E635] text-[#212020] font-semibold">
                    {currentImageIndex + 1} / {images.length}
                  </Badge>
                </div>
              </>
            )}
          </div>

          {/* Thumbnail Navigation */}
          {images.length > 1 && (
            <div className="flex justify-center gap-3 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentImageIndex
                      ? "border-[#A3E635] scale-110"
                      : "border-white/20 hover:border-white/40"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img
                    src={images[index]}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Image Info */}
          <div className="mt-4 text-center">
            <p className="text-white/70 text-sm">
              Click outside or press ESC to close
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Live Links Component

const BondOverSports = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const navigate = useNavigate();

  const project = {
    title: "Bond Over Sports (BOS)",

    longDescription:
      "Bond Over Sports is a comprehensive sports management platform I build innovative digital platforms that connect communities through heritage sports and culture, combining frontend development and API integration with user-focused design to inspire participation and collaboration.",
    tech: [
      "React.js",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Axios",
      "Node.js",
    ],
    features: [
      "Dynamic Landing Page – Animated hero, event highlights, and community engagement",
      "Versatile User Roles – Five roles with customized access and workflows",
      "Real-time Event Management – Live listings, filtering, maps, and easy registration",
      "Sponsorship Portal – Sponsor onboarding, partnerships, and brand visibility.",

      "Robust Tech Stack – React, TypeScript, Tailwind, with strong security and performance",
    ],
    challenges: [
      "Real-time data integration and event updates required dynamic",
      "Secure user onboarding and verification to ensure genuine participation and data protection",
      "Responsive design required seamless access across mobile, tablet, desktop, and large screens.",
    ],
    solutions: [
      "Developed the UI using a mobile-first Tailwind CSS approach with responsive layouts and media queries.",
      "frontend optimizations like code splitting and lazy loading",
    ],
    github: "https://github.com/sakshiichauhan/Bos",
    demo: "https://bos-topaz.vercel.app",
    liveLinks: [
      {
        name: "Main Platform",
        url: "https://bos-topaz.vercel.app",
        description:
          "Primary sports management platform with user registration and event management",
      },
      {
        name: "Admin Panel",
        url: "https://bos-admin.vercel.app",
        description:
          "Administrative dashboard for managing users, events, and platform content",
      },
    ],
    images: [image1, image2, image3],
    duration: "6 months",
    team: "Team of 3",
    role: "Frontend Lead Developer",
    projectType: "Government Platform",
    status: "Live & Recognized",
  };

  return (
    <div className="pt-35 pb-20 bg-[#212020] min-h-screen">
      <div className="container mx-auto px-6 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Button
            onClick={() => navigate("/projects")}
            variant="ghost"
            className="text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Button>
        </div>

        {/* Project Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4  bg-gradient-to-r from-white to-[#A3E635] bg-clip-text text-transparent">
            {project.title}
          </h1>

          <p className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Project Info */}
          <div className="lg:col-span-2">
            <Card className="bg-[#212020]/50 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Project Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left Column - Project Info */}
                  <div className="space-y-6">
                    {/* Project Status */}
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-[#A3E635] rounded"></div>
                      <div>
                        <p className="text-sm text-white/60">Status</p>
                        <p className="text-white font-medium">
                          {project.status}
                        </p>
                      </div>
                    </div>

                    {/* Technologies Used */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-sm text-[#FFFFFF] bg-white/10 border-white/20 hover:bg-[#A3E635]/10 hover:border-[#A3E635]/30 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button
                        onClick={() => window.open(project.demo, "_blank")}
                        className="bg-gradient-to-r from-[#A3E635] to-[#84CC16] text-[#212020] hover:from-[#84CC16] hover:to-[#A3E635] transition-all duration-300 font-semibold px-6 py-3 flex items-center gap-2 justify-center"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </Button>

                      <Button
                        onClick={() => setIsImageModalOpen(true)}
                        variant="outline"
                        className="border-white/20 text-white hover:bg-[#A3E635]/10 hover:border-[#A3E635]/30 transition-all duration-300 font-semibold px-6 py-3 flex items-center gap-2 justify-center"
                      >
                        <ImageIcon className="w-5 h-5" />
                        View Images
                      </Button>
                    </div>
                  </div>

                  {/* Right Column - Project Image */}
                  <div className="flex items-center justify-center">
                    <div className="relative w-full max-w-sm">
                      <img
                        src={image1}
                        alt="Bond Over Sports Platform"
                        className="w-full h-auto rounded-lg shadow-lg border border-white/20"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Live Links */}
          <div className="lg:col-span-1">
            <Card className="bg-[#212020]/50 backdrop-blur-sm border-white/20 h-full">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Button
                    onClick={() => window.open(project.demo, "_blank")}
                    className="w-full bg-gradient-to-r from-[#A3E635] to-[#84CC16] text-[#212020] hover:from-[#84CC16] hover:to-[#A3E635] transition-all duration-300 font-semibold px-4 py-3 flex items-center gap-2 justify-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                  <p className="text-xs text-white/60">
                    Visit the live application
                  </p>
                </div>

                <div className="space-y-2">
                  <Button
                    onClick={() => setIsImageModalOpen(true)}
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-[#A3E635]/10 hover:border-[#A3E635]/30 transition-all duration-300 font-medium px-4 py-3 flex items-center gap-2 justify-center"
                  >
                    <ImageIcon className="w-4 h-4" />
                    View Images
                  </Button>
                  <p className="text-xs text-white/60">
                    See project screenshots
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features & Challenges */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <Card className="bg-[#212020]/50 backdrop-blur-sm border-white/20 h-full">
              <CardHeader>
                <CardTitle className="text-xl text-[#FFFFFF]">
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
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
                <CardTitle className="text-xl text-[#FFFFFF]">
                  Challenges & Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-[#FFFFFF] mb-3">
                      Challenges
                    </h4>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-white/80 ">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#FFFFFF] mb-3">
                      Solutions
                    </h4>
                    <ul className="space-y-2">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#A3E635] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-white/80 ">{solution}</span>
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

      {/* Image Modal */}
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        images={project.images}
        title={project.title}
      />
    </div>
  );
};

export default BondOverSports;
