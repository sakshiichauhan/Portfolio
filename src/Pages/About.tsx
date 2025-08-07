import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Mail, MapPin, Phone, Calendar, GraduationCap, Languages, Database, Code, Camera, Linkedin, Github, Instagram } from "lucide-react";
import profileImage from "@/assets/Sakshi.jpg";
import { motion } from "framer-motion";
import { Button} from "@/components/ui/button"
export default function About() {
  const skills = [
    { name: "React.js", percentage: 90 },
    { name: "Node.js", percentage: 85 },
    { name: "TypeScript", percentage: 80 },
    { name: "JavaScript", percentage: 95 },
    { name: "HTML/CSS", percentage: 90 },
    { name: "MongoDB", percentage: 75 },
    { name: "Git", percentage: 85 },
    { name: "REST APIs", percentage: 80 },
  ];

  return (
    <section className="relative pt-35 pb-20 bg-[#212020] overflow-hidden">
      {/* Background with mountain image */}
  
       
        <div className="absolute inset-0 bg-[#212020]"></div>
    

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Panel - Personal Information and Skills */}
          <div className="space-y-8">
            {/* Profile Header */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Sakshi Chauhan
              </h1>
              <Badge className="bg-[#A3E635]/20 text-[#A3E635] border-[#A3E635]/30 mb-6">
                Junior Software Developer
              </Badge>
            </div>

            {/* Profile Image and Basic Info */}
            <Card className="bg-[#212020] border-[#212020] backdrop-blur-sm">
              <CardContent >
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                  {/* Profile Image */}
                  <div className="relative">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-[#A3E635]/30">
                      <img 
                        src={profileImage} 
                        alt="Sakshi Chauhan" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Personal Details */}
                  <div className="flex-1 space-y-3 text-white">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#A3E635]" />
                      <span>chauhan.sakshi2002@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#A3E635]" />
                      <span>+91 8178359271</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#A3E635]" />
                      <span>Noida, India</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#A3E635]" />
                      <span>Experience: 1+ Years</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills Section */}
            <Card className="bg-[#212020] border-[#212020] backdrop-blur-sm ">
              <CardContent className="">
                <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-[#A3E635] font-bold">{skill.percentage}%</span>
                      </div>
                      <Progress 
                        value={skill.percentage} 
                        className="h-2 bg-white/10"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - About Me and Details */}
          <div className="space-y-8">
            {/* About Me Section */}
            <Card className="bg-[#212020] border-[#212020] backdrop-blur-sm">
              <CardContent className="pt-25">
                <motion.div 
                  className="text-center mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.div className="relative mb-4">
                    <motion.h2  
                      className="text-4xl lg:text-6xl font-bold text-white/5 absolute inset-0 flex items-center justify-center mt-20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      About Me
                    </motion.h2>
                    <motion.h2 
                      className="text-3xl lg:text-6xl font-bold text-white relative z-10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      About Me
                    </motion.h2>
                  </motion.div>
                </motion.div>

                <p className="text-white/90 text-xl leading-relaxed mb-7">
                Software Developer with 1+ year of experience in full-stack web development using React.js and Node.js. Skilled in building scalable, high-performance applications and interactive dashboards. Passionate about creating seamless digital experiences with a strong focus on design, code quality, and collaboration. Driven by curiosity and dedication to impactful software solutions. Adaptable and quick to learn new technologies in dynamic environments. Committed to continuous growth and contributing effectively to team success.
                </p>

                {/* Detailed Information */}
                <div className="space-y-4 text-xl mt-10">
                  <div className="flex items-center gap-3 ">
                    <GraduationCap className="w-5 h-5 text-[#A3E635]" />
                    <div>
                      <span className="text-[#A3E635] font-semibold">Profile:</span>
                      <span className="text-white ml-2">Junior Software Developer</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-[#A3E635]" />
                    <div>
                      <span className="text-[#A3E635] font-semibold">Domain:</span>
                      <span className="text-white ml-2">Web Development, UI/UX, Mobile Apps</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-[#A3E635]" />
                    <div>
                      <span className="text-[#A3E635] font-semibold">Education:</span>
                      <span className="text-white ml-2">Bachelor of Technology</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Languages className="w-5 h-5 text-[#A3E635]" />
                    <div>
                      <span className="text-[#A3E635] font-semibold">Languages:</span>
                      <span className="text-white ml-2">English, Hindi</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-[#A3E635]" />
                    <div>
                      <span className="text-[#A3E635] font-semibold">Tools:</span>
                      <span className="text-white ml-2">VS Code, Git, Postman, Figma</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Camera className="w-5 h-5 text-[#A3E635]" />
                    <div>
                      <span className="text-[#A3E635] font-semibold">Interests:</span>
                      <span className="text-white ml-2">Photography, Travel, Reading</span>
                    </div>
                  </div>

                  <div className="flex items-left gap-4 justify-left mt-10">
  <a 
    href="https://github.com/sakshiichauhan" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-2"
  >
    <Button 
      variant="ghost" 
      size="icon" 
      aria-label="GitHub"
      className="hover:bg-[#A3E635]/20 hover:text-[#A3E635] text-[#FFFFFF] border-2 border-[#FFFFFF] shadow-md transition-all duration-300 hover:scale-110 hover:ring-2 hover:ring-[#A3E635]/40 group p-3 rounded-xl"
    >
      <Github className="w-7 h-7 group-hover:animate-pulse" />
    </Button>
    <span className="text-white font-medium text-sm">GitHub</span>
  </a>
  <a 
    href="https://www.linkedin.com/in/sakshi-chauhan-022862229/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-2"
  >
    <Button 
      variant="ghost" 
      size="icon" 
      aria-label="LinkedIn"
      className="hover:bg-[#A3E635]/20 hover:text-[#A3E635] border-2 border-[#FFFFFF] text-[#FFFFFF] shadow-md transition-all duration-300 hover:scale-110 hover:ring-2 hover:ring-[#A3E635]/40 group p-3 rounded-xl"
    >
      <Linkedin className="w-5 h-5 group-hover:animate-pulse" />
    </Button>
    <span className="text-white font-medium text-sm">LinkedIn</span>
  </a>
  <a 
    href="https://www.instagram.com/chauhan.sakshi2002/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-2"
  >
    <Button 
      variant="ghost" 
      size="icon" 
      aria-label="Instagram"
      className="hover:bg-[#A3E635]/20 hover:text-[#A3E635] border-2 border-[#FFFFFF] text-[#FFFFFF] shadow-md transition-all duration-300 hover:scale-110 hover:ring-2 hover:ring-[#A3E635]/40 group p-3 rounded-xl"
    >
      <Instagram className="w-5 h-5 group-hover:animate-pulse" />
    </Button>
    <span className="text-white font-medium text-sm">Instagram</span>
  </a>
</div>

                </div>
              </CardContent>
            </Card>
          </div>
        </div>
       

            {/* Enhanced Social Links */}
           
      </div>
    </section>
  );
}
