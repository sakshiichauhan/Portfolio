import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
// import profileImage from "@/assets/profile-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
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
                <span className="text-white">SAKSHI</span>
                <br />
                <span className="text-[#A3E635]">
                  CHAUHAN
                </span>
              </h1>
              <div className="text-xl lg:text-2xl text-white/70 font-medium">
                Software Developer | Full-Stack Web Development
              </div>
            </div>

            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
              Results-driven Software Developer with expertise in React.js, Node.js, and full-stack development. 
              Proven track record of delivering high-performance web applications with 30%+ improvement in user engagement.
            </p>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-white/70">
                <Mail className="w-4 h-4 text-[#A3E635]" />
                chauhan.sakshi2002@gmail.com
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Phone className="w-4 h-4 text-[#A3E635]" />
                +91 8178359271
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4 text-[#A3E635]" />
                Noida, India
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-[#A3E635] text-black hover:bg-[#A3E635]/90 transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-[#A3E635]/30 text-white hover:bg-[#A3E635]/10 hover:border-[#A3E635] transition-all duration-300"
              >
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-[#A3E635]/10 hover:text-[#A3E635] text-white transition-colors">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-[#A3E635]/10 hover:text-[#A3E635] text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-[#A3E635] rounded-full blur-2xl opacity-30 scale-110"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="w-full h-full bg-[#A3E635] rounded-full border-4 border-[#A3E635]/30 shadow-elevated flex items-center justify-center">
                  <div className="text-6xl font-bold text-black">SC</div>
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