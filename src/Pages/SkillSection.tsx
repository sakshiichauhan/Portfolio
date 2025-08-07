import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, Settings, Users, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="pt-35 pb-20 bg-[#212020]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-4 text-[#FFFFFF]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Technical <span className="text-[#A3E635]">Expertise</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Comprehensive skill set spanning modern web technologies and development methodologies.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.8 + index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <Card 
                className="bg-[#212020]/50 backdrop-blur-sm border-white/20 hover:shadow-elevated transition-all duration-300" 
              >
                <CardHeader className="pb-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CardTitle className="flex items-center gap-3 text-xl text-white">
                      <motion.div 
                        className="p-2 rounded-lg bg-[#A3E635]/10 text-[#A3E635]"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {category.icon}
                      </motion.div>
                      {category.title}
                    </CardTitle>
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 1.0 + index * 0.2 + skillIndex * 0.1 
                        }}
                                                 whileHover={{ scale: 1.1, rotate: 2 }}
                       >
                         <Badge 
                           variant="outline"
                           className="bg-[#212020]/10 border-white/20 hover:bg-[#A3E635]/10 hover:border-[#A3E635]/30 transition-colors text-[#FFFFFF]"
                         >
                           {skill}
                         </Badge>
                       </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <motion.h3 
            className="text-3xl font-bold mb-8 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            Certifications & <span className="text-[#A3E635]">Achievements</span>
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.0 }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 2.2 + index * 0.2,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <Card 
                  className="bg-[#212020]/30 backdrop-blur-sm border-white/20 hover:bg-[#212020]/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="p-2 rounded-lg bg-[#A3E635]/10 text-[#A3E635]"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      > 
                        {cert.icon}
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{cert.title}</h4>
                        <p className="text-sm text-white/80">{cert.period}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;