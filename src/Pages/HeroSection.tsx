import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MapPin, Phone, Instagram, Download, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileImage from "@/assets/Sakshi.jpg";


const TypewriterText = ({ text, speed = 100 }: { text: string; speed?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className="text-[#A3E635]">
      {displayText}
     
    </span>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#212020] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#A3E635]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#A3E635]/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#A3E635]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-[#A3E635]/20 text-[#A3E635] border-[#A3E635]/30 mb-4">
                Available for Opportunities
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <TypewriterText text="Hello, I'm SAKSHI" speed={150} />
              </h1>
              <div className="text-xl lg:text-2xl text-[#FFFFFF] font-medium">
                Junior Software Developer | Full-Stack Web Development
              </div>
            </div>

            <p className="text-lg text-[#FFFFFF] leading-relaxed max-w-2xl">
            Results-driven Software Developer skilled in React.js, Node.js & full-stack web development. Expert at building high-performance apps, optimizing user engagement, and leading projects from concept to delivery with a focus on intuitive UX and scalability.
            </p>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
              <div className="flex items-center gap-2 text-[#FFFFFF]"> 
                <Mail className="w-4 h-4 text-[#A3E635]" />
                chauhan.sakshi2002@gmail.com
              </div>
              <div className="flex items-center gap-2 text-[#FFFFFF]">
                <Phone className="w-4 h-4 text-[#A3E635]" />
                +91 8178359271
              </div>
              <div className="flex items-center gap-2 text-[#FFFFFF]">
                <MapPin className="w-4 h-4 text-[#A3E635]" />
                Noida, India
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-[#A3E635] text-black hover:bg-[#ffffff] hover:border-[#A3E635] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group font-semibold px-8 py-3 rounded-xl"
                >
                  <Mail className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Get In Touch
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a 
                href="/Sakshi_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-[#A3E635]/30 text-white hover:bg-[#A3E635]/10 hover:border-[#A3E635] transition-all duration-300 backdrop-blur-sm hover:scale-105 group font-semibold px-8 py-3 rounded-xl"
                >
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Download CV
                </Button>
              </a>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://github.com/sakshiichauhan" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:bg-[#A3E635]/10 hover:text-[#A3E635] text-[#FFFFFF] border-2 border-[#FFFFFF] transition-all duration-300 hover:scale-110 group p-3 rounded-xl"
                >
                  <Github className="w-7 h-7 group-hover:animate-pulse" />
                </Button>
              </a>
              <a 
                href="https://www.linkedin.com/in/sakshi-chauhan-022862229/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:bg-[#A3E635]/10 hover:text-[#A3E635] border-2 border-[#FFFFFF] text-[#FFFFFF] transition-all duration-300 hover:scale-110 group p-3 rounded-xl"
                >
                  <Linkedin className="w-5 h-5 group-hover:animate-pulse" />
                </Button>
              </a>
              <a 
                href="https://www.instagram.com/chauhan.sakshi2002/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:bg-[#A3E635]/10 hover:text-[#A3E635] border-2 border-[#FFFFFF] text-[#FFFFFF] transition-all duration-300 hover:scale-110 group p-3 rounded-xl"
                >
                  <Instagram className="w-5 h-5 group-hover:animate-pulse" />
                </Button>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-[#A3E635] rounded-full blur-2xl opacity-30 scale-110"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="w-full h-full bg-[#A3E635] rounded-full border-4 border-[#A3E635]/30 shadow-elevated overflow-hidden">
                  <img 
                    src={profileImage} 
                    alt="Sakshi Chauhan" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating achievement badges */}
              <div className="absolute -top-4 -right-4 bg-black border border-white/20 rounded-lg p-3 shadow-elevated">
                <div className="text-2xl font-bold text-[#A3E635]">30%</div>
                <div className="text-xs text-white/70">User Engagement</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-black border border-white/20 rounded-lg p-3 shadow-elevated">
                <div className="text-2xl font-bold text-[#A3E635]">4+</div>
                <div className="text-xs text-white/70">Projects Built</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;