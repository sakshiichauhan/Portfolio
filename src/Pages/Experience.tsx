import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, TrendingUp, Users, Zap, Code, Rocket } from "lucide-react";

const ExperienceSection = () => {
  const achievements = [
    "Built 5+ high-impact websites with interactive Framer animations, driving user engagement",
    "Integrated RESTful APIs and engineered scalable backends (Node.js, MongoDB) for robust, dynamic apps",
    "Optimized performance with code splitting and lazy loading, reducing load times by 25%",
    "Led enterprise platform development, managed agile projects in Jira, and mentored junior developers",
    "Completed 1+ year of professional experience in full-stack development with focus on modern web technologies"
  ];

  const stats = [
    { icon: Rocket, value: "5+", label: "Websites Built", color: "text-[#A3E635]" },
    { icon: Zap, value: "25%", label: "Faster Load Times", color: "text-[#A3E635]" },
    { icon: Users, value: "100%", label: "Team Leadership", color: "text-[#A3E635]" },
    { icon: Code, value: "1+", label: "Years Experience", color: "text-[#A3E635]" }
  ];

  return (
    <section className="pt-35 pb-20 bg-[#212020] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#A3E635]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#A3E635]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-left mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#FFFFFF]">
            Professional <span className="text-[#A3E635]">Experience</span>
          </h2>
          <p className="text-lg text-[#FFFFFF]/80 max-w-3xl leading-relaxed"> 
            Building innovative solutions and leading development teams to deliver exceptional results with cutting-edge technologies. Over 1 year of professional experience in full-stack development.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="bg-[#212020]/80 backdrop-blur-sm border-white/20 hover:shadow-elevated transition-all duration-500 hover:scale-[1.02] group">
            <CardHeader className="pb-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#A3E635]/20 rounded-xl border border-[#A3E635]/30">
                      <Building2 className="w-8 h-8 text-[#A3E635]" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl lg:text-3xl mb-2 text-white group-hover:text-[#A3E635] transition-colors duration-300">
                        Junior Software Developer
                      </CardTitle>
                      <div className="text-xl text-[#A3E635] font-semibold">Alpheric</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-6 text-white/70">
                    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg border border-white/20">
                      <Calendar className="w-4 h-4 text-[#A3E635]" />
                      August 2024 - Present (1+ Year)
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg border border-white/20">
                      <MapPin className="w-4 h-4 text-[#A3E635]" />
                      Noida, India
                    </div>
                  </div>
                </div>
                <Badge className="bg-[#A3E635] text-black self-start lg:self-center px-6 py-2 text-sm font-semibold shadow-lg">
                  Current Role
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-[#A3E635]/20 rounded-lg border border-[#A3E635]/30">
                        <stat.icon className="w-6 h-6 text-[#A3E635]" />
                      </div>
                    </div>
                    <div className={`text-2xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                    <div className="text-sm text-white/70 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Enhanced Achievements Section */}
              <div>
                <h4 className="text-xl font-semibold mb-6 flex items-center gap-3 text-white">
                  <div className="p-2 bg-[#A3E635]/20 rounded-lg border border-[#A3E635]/30">
                    <TrendingUp className="w-5 h-5 text-[#A3E635]" />
                  </div>
                  Key Achievements
                </h4>
                <div className="grid gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-4 p-6 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] group">
                      <div className="w-3 h-3 bg-[#A3E635] rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                      <p className="text-white/90 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack */}
              <div className="pt-6 border-t border-white/20">
                <h4 className="text-lg font-semibold mb-4 text-white">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-3">
                  {["React.js", "Node.js", "MongoDB", "Framer", "Jira", "RESTful APIs", "Code Splitting", "Agile"].map((tech, index) => (
                    <Badge key={index} variant="outline" className="bg-[#A3E635]/10 text-[#A3E635] border-[#A3E635]/30 hover:bg-[#A3E635]/20 transition-colors duration-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;