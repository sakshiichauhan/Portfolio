// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { ExternalLink, Github, ArrowLeft, Calendar, Users, Zap, ChevronLeft, ChevronRight } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// // Placeholder Image Component
// const PlaceholderImage = ({ title }: { title: string }) => (
//   <div className="w-full h-64 bg-gradient-to-br from-[#A3E635]/20 to-[#212020] rounded-lg flex items-center justify-center">
//     <div className="text-center text-white/60">
//       <div className="w-16 h-16 bg-[#A3E635]/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
//         <div className="w-8 h-8 bg-[#A3E635] rounded"></div>
//       </div>
//       <p className="text-sm font-medium">{title}</p>
//       <p className="text-xs mt-1">Project Preview</p>
//     </div>
//   </div>
// );

// // Image Gallery Component
// const ImageGallery = ({ images, title }: { images: string[], title: string }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === images.length - 1 ? 0 : prev + 1
//     );
//   };

//   const previousImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === 0 ? images.length - 1 : prev - 1
//     );
//   };

//   return (
//     <div className="relative">
//       <div className="relative h-64 bg-gradient-to-br from-[#A3E635]/20 to-[#212020] rounded-lg overflow-hidden">
//         <PlaceholderImage title={images[currentImageIndex] || title} />
        
//         {images.length > 1 && (
//           <>
//             <Button
//               variant="outline"
//               size="sm"
//               className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-[#212020]/80 text-white border-white/20 hover:bg-[#A3E635]/10"
//               onClick={previousImage}
//             >
//               <ChevronLeft className="w-4 h-4" />
//             </Button>
//             <Button
//               variant="outline"
//               size="sm"
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-[#212020]/80 text-white border-white/20 hover:bg-[#A3E635]/10"
//               onClick={nextImage}
//             >
//               <ChevronRight className="w-4 h-4" />
//             </Button>
//             <div className="absolute top-2 left-2 z-20">
//               <Badge className="bg-[#A3E635] text-[#212020]">
//                 {currentImageIndex + 1} / {images.length}
//               </Badge>
//             </div>
//           </>
//         )}
//       </div>
      
//       {images.length > 1 && (
//         <div className="flex justify-center gap-2 mt-4">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentImageIndex 
//                   ? 'bg-[#A3E635]' 
//                   : 'bg-white/30 hover:bg-white/50'
//               }`}
//               onClick={() => setCurrentImageIndex(index)}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const Aimshala = () => {
//   const project = {
//     title: "Aimshala - Consultant Management Platform",
//     subtitle: "Comprehensive Consultant Management System",
//     description: "Developed a comprehensive consultant management platform with dashboard, profile management, and session scheduling. This project focuses on connecting consultants with clients through an intuitive platform.",
//     longDescription: "Aimshala is a platform designed to bridge the gap between consultants and clients. The system provides comprehensive tools for profile management, session scheduling, and payment processing, making it easier for consultants to manage their business and for clients to find the right expertise.",
//     tech: ["React.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Clerk", "Stripe"],
//     features: [
//       "Multi-tab Profile System",
//       "Payment Processing Integration",
//       "Calendar Management",
//       "Type-safe Development",
//       "Real-time Notifications",
//       "Advanced Search and Filtering"
//     ],
//     challenges: [
//       "Implementing complex payment processing workflows",
//       "Creating an intuitive calendar management system",
//       "Ensuring type safety across the application",
//       "Managing real-time updates and notifications"
//     ],
//     solutions: [
//       "Integrated Stripe for secure payment processing",
//       "Used React Big Calendar for calendar functionality",
//       "Implemented TypeScript throughout the application",
//       "Used WebSockets for real-time features"
//     ],
//     github: "https://github.com/sakshiichauhan/Aimshala-",
//     demo: null,
//     liveLinks: [
//       {
//         name: "Consultant Portal",
//         url: "https://aimshala-consultant.vercel.app",
//         description: "Consultant dashboard and profile management"
//       },
//       {
//         name: "Client Portal",
//         url: "https://aimshala-client.vercel.app",
//         description: "Client booking and session management"
//       }
//     ],
//     images: ["aimshala-1", "aimshala-2"],
//     duration: "4 months",
//     team: "Solo Project",
//     role: "Full-Stack Developer",
//     projectType: "Platform",
//     status: "Completed"
//   };

//   return (
//     <div className="min-h-screen bg-[#212020]">
//       {/* Navigation Header */}
//       <div className="sticky top-0 z-40 bg-[#212020]/80 backdrop-blur-xl border-b border-white/10">
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <Link to="/projects">
//               <div>
//                 <Button variant="outline" className="border-[#A3E635]/30 text-white hover:bg-[#A3E635]/10">
//                   <ArrowLeft className="w-4 h-4 mr-2" />
//                   Back to Projects
//                 </Button>
//               </div>
//             </Link>
//             <div className="flex gap-3">
//               <div>
//                 <Button 
//                   className="bg-[#A3E635] text-[#212020] hover:bg-[#A3E635]/90"
//                   asChild
//                 >
//                   <a href={project.github} target="_blank" rel="noopener noreferrer">
//                     <Github className="w-4 h-4 mr-2" />
//                     View Code
//                   </a>
//                 </Button>
//               </div>
//               {project.demo && (
//                 <div>
//                   <Button 
//                     variant="outline"
//                     className="border-[#A3E635]/30 text-white hover:bg-[#A3E635]/10"
//                     asChild
//                   >
//                     <a href={project.demo} target="_blank" rel="noopener noreferrer">
//                       <ExternalLink className="w-4 h-4 mr-2" />
//                       Live Demo
//                     </a>
//                   </Button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-6 py-12">
//         {/* Project Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-[#FFFFFF]">
//             {project.title}
//           </h1>
//           <p className="text-xl text-[#A3E635] mb-6">
//             {project.subtitle}
//           </p>
//           <p className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
//             {project.longDescription}
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8 mb-16">
//           {/* Project Info */}
//           <div className="lg:col-span-2">
//             <Card className="bg-[#212020]/50 backdrop-blur-sm border-white/20">
//               <CardHeader>
//                 <CardTitle className="text-2xl text-white">Project Overview</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="flex items-center gap-3">
//                     <Calendar className="w-5 h-5 text-[#A3E635]" />
//                     <div>
//                       <p className="text-sm text-white/60">Duration</p>
//                       <p className="text-white font-medium">{project.duration}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <Users className="w-5 h-5 text-[#A3E635]" />
//                     <div>
//                       <p className="text-sm text-white/60">Team</p>
//                       <p className="text-white font-medium">{project.team}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <Zap className="w-5 h-5 text-[#A3E635]" />
//                     <div>
//                       <p className="text-sm text-white/60">Role</p>
//                       <p className="text-white font-medium">{project.role}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <div className="w-5 h-5 bg-[#A3E635] rounded"></div>
//                     <div>
//                       <p className="text-sm text-white/60">Type</p>
//                       <p className="text-white font-medium">{project.projectType}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <div className="w-5 h-5 bg-[#A3E635] rounded"></div>
//                     <div>
//                       <p className="text-sm text-white/60">Status</p>
//                       <p className="text-white font-medium">{project.status}</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-semibold text-white mb-4">Technologies Used</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {project.tech.map((tech, index) => (
//                       <div key={index}>
//                         <Badge 
//                           variant="outline" 
//                           className="text-sm text-[#FFFFFF] bg-white/10 border-white/20 hover:bg-[#A3E635]/10 hover:border-[#A3E635]/30 transition-colors"
//                         >
//                           {tech}
//                         </Badge>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Project Image Gallery */}
//           <div>
//             <Card className="bg-[#212020]/50 backdrop-blur-sm border-white/20">
//               <CardContent className="p-6">
//                 <ImageGallery images={project.images} title={project.title} />
//               </CardContent>
//             </Card>
//           </div>
//         </div>

//         {/* Live Links Section */}
//         {project.liveLinks && project.liveLinks.length > 0 && (
//           <div className="mb-16">
//             <Card className="bg-[#212020]/50 backdrop-blur-sm border-white/20">
//               <CardHeader>
//                 <CardTitle className="text-xl text-white">Live Links</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   {project.liveLinks.map((link, index) => (
//                     <div key={index} className="p-4 border border-white/10 rounded-lg">
//                       <h4 className="text-white font-semibold mb-2">{link.name}</h4>
//                       <p className="text-white/60 text-sm mb-3">{link.description}</p>
//                       <Button 
//                         variant="outline" 
//                         size="sm"
//                         className="border-[#A3E635]/30 text-white hover:bg-[#A3E635]/10"
//                         asChild
//                       >
//                         <a href={link.url} target="_blank" rel="noopener noreferrer">
//                           <ExternalLink className="w-4 h-4 mr-2" />
//                           Visit
//                         </a>
//                       </Button>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         )}

//         {/* Features & Challenges */}
//         <div className="grid lg:grid-cols-2 gap-8 mb-16">
//           <div>
//             <Card className="bg-[#212020]/50 backdrop-blur-sm border-white/20 h-full">
//               <CardHeader>
//                 <CardTitle className="text-xl text-white">Key Features</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-3">
//                   {project.features.map((feature, index) => (
//                     <li 
//                       key={index}
//                       className="flex items-start gap-3"
//                     >
//                       <div className="w-2 h-2 bg-[#A3E635] rounded-full mt-2 flex-shrink-0"></div>
//                       <span className="text-white/80">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>
//             </Card>
//           </div>

//           <div>
//             <Card className="bg-[#212020]/50 backdrop-blur-sm border-white/20 h-full">
//               <CardHeader>
//                 <CardTitle className="text-xl text-white">Challenges & Solutions</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-6">
//                   <div>
//                     <h4 className="text-lg font-semibold text-white mb-3">Challenges</h4>
//                     <ul className="space-y-2">
//                       {project.challenges.map((challenge, index) => (
//                         <li 
//                           key={index}
//                           className="flex items-start gap-3"
//                         >
//                           <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
//                           <span className="text-white/80 text-sm">{challenge}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-white mb-3">Solutions</h4>
//                     <ul className="space-y-2">
//                       {project.solutions.map((solution, index) => (
//                         <li 
//                           key={index}
//                           className="flex items-start gap-3"
//                         >
//                           <div className="w-2 h-2 bg-[#A3E635] rounded-full mt-2 flex-shrink-0"></div>
//                           <span className="text-white/80 text-sm">{solution}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Aimshala;

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
import image1 from "@/assets/Aimshala/image1.jpeg";
import image2 from "@/assets/Aimshala/image2.jpeg";
import image3 from "@/assets/Aimshala/image3.jpeg";
import image4 from "@/assets/Aimshala/image4.jpeg";
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

const Aimshala = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const navigate = useNavigate();

  const project = {
    title: "Aimshala - Consultant Management Platform",

    longDescription:
      "Aimshala is a comprehensive consultant management platform that provides a centralized platform for managing users, content, finances, and business operations. The application features a modern, responsive design with intuitive navigation and real-time data updates",
    tech: [
      "React.js",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
    "Redux Toolkit", 
      "ShadCN UI",
      "React Router DOM",
      ,
    ],
    features: [
            "Multi-tab Profile System",
            "Payment Processing Integration",
            "Calendar Management",
            "Type-safe Development",
            "Real-time Notifications",
            "Advanced Search and Filtering"
          ],
          challenges: [
              
                  "Creating an intuitive calendar management system",
                  "Ensuring type safety across the application",
               
                ],
                solutions: [
               
                  "Used React Big Calendar for calendar functionality",
                  "Implemented TypeScript throughout the application",
                  "Used WebSockets for real-time features"
                ],

    demo: "https://aimshala.vercel.app/",

    images: [image1, image2, image3, image4],

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

export default Aimshala;

