import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, Settings, Users, Lightbulb } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Radix UI"],
      color: "primary"
    },
    {
      title: "Backend Development", 
      icon: <Database className="w-6 h-6" />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "MongoDB", "Database Design", "Authentication Systems"],
      color: "secondary"
    },
    {
      title: "State Management & Tools",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Redux Toolkit", "React Router DOM", "Axios", "Git", "AWS", "Postman", "Jira", "OOPs"],
      color: "accent"
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      skills: ["Problem Solving", "Team Collaboration", "Agile Methodologies", "Time Management"],
      color: "primary"
    }
  ];

  const certifications = [
    {
      title: "Google Data Analytics",
      period: "May 2022 - February 2023",
      icon: <Code2 className="w-5 h-5" />
    },
    {
      title: "Techguru Presentation",
      period: "December 2021 - January 2022", 
      icon: <Lightbulb className="w-5 h-5" />
    },
    {
      title: "Programming Quiz by IEEE",
      period: "September 2022",
      icon: <Code2 className="w-5 h-5" />
    },
    {
      title: "Data Analytics - Atos Prayas Foundation",
      period: "Youth Skilling & Employability Initiative",
      icon: <Database className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#FFFFFF]">
            Technical <span className="text-[#A3E635]">Expertise</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Comprehensive skill set spanning modern web technologies and development methodologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-black/50 backdrop-blur-sm border-white/20 hover:shadow-elevated transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl text-white">
                  <div className="p-2 rounded-lg bg-[#A3E635]/10 text-[#A3E635]">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="outline"
                      className="bg-white/10 border-white/20 hover:bg-[#A3E635]/10 hover:border-[#A3E635]/30 transition-colors text-white"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center text-white">
            Certifications & <span className="text-[#A3E635]">Achievements</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="bg-black/30 backdrop-blur-sm border-white/20 hover:bg-black/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-[#A3E635]/10 text-[#A3E635]">
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{cert.title}</h4>
                      <p className="text-sm text-white/80">{cert.period}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;