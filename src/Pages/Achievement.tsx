import { Card, CardContent } from "@/components/ui/card";
import { Award, TrendingUp, Users, Zap, Target, Star } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "30%",
      label: "User Engagement Increase",
      description: "Through optimized backend performance and intuitive UI design",
      color: "primary"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      value: "25%",
      label: "Load Time Reduction",
      description: "Database optimization and efficient API design implementation",
      color: "secondary"
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: "14%",
      label: "Report Accuracy Improvement",
      description: "Interactive dashboard implementation with data visualization",
      color: "accent"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "4+",
      label: "Full-Stack Applications",
      description: "Enterprise-level platforms including consultant management systems",
      color: "primary"
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "1",
      label: "Government Recognition",
      description: "BOS platform officially registered under FIT India initiative",
      color: "secondary"
    },
    {
      icon: <Star className="w-8 h-8" />,
      value: "100%",
      label: "Code Quality Standards",
      description: "Mentored junior developers and conducted comprehensive code reviews",
      color: "accent"
    }
  ];

  const additionalInfo = [
    {
      title: "Languages",
      content: "English (Professional), Hindi (Native)"
    },
    {
      title: "Interests", 
      content: "Web Development, UI/UX Design, Performance Optimization, Open Source Contribution"
    },
    {
      title: "Availability",
      content: "Immediate availability for full-time opportunities"
    }
  ];

  return (
    <section className="pt-35 pb-20 bg-[#212020]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#FFFFFF]">
            Key <span className="text-[#A3E635]">Achievements</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Measurable impact and recognition across various projects and initiatives.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="group bg-[#212020]/50 backdrop-blur-sm border-white/20 hover:shadow-elevated hover:scale-105 transition-all duration-500 text-center"
            >
              <CardContent className="p-8">
                <div className="inline-flex p-4 rounded-full bg-[#A3E635]/10 text-[#A3E635] mb-6 group-hover:shadow-glow-primary transition-all duration-300">
                  {achievement.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-[#A3E635] mb-2">
                  {achievement.value}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {achievement.label}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center text-white">
            Additional <span className="text-[#A3E635]">Information</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalInfo.map((info, index) => (
              <Card 
                key={index}
                className="bg-[#212020]/30 backdrop-blur-sm border-white/20 hover:bg-[#212020]/50 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-white mb-3">{info.title}</h4>
                  <p className="text-white/80 leading-relaxed">{info.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;