import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, TrendingUp } from "lucide-react";

const ExperienceSection = () => {
  const achievements = [
    "Designed and implemented interactive dashboards using React.js & Tailwind CSS, enhancing data accessibility and improving report accuracy by 14%",
    "Developed and integrated full-stack solutions for 4+ websites using Node.js & Express.js, significantly boosting backend functionality",
    "Led development of enterprise-level applications including consultant management platforms and community sports platforms",
    "Optimized application performance through code splitting and lazy loading techniques, achieving 25% faster load times",
    "Mentored junior developers and conducted code reviews to maintain high code quality standards"
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#FFFFFF]">
            Professional <span className="text-[#A3E635]">Experience</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Building innovative solutions and leading development teams to deliver exceptional results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-black/50 backdrop-blur-sm border-white/20 hover:shadow-elevated transition-all duration-300">
            <CardHeader className="pb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl lg:text-3xl mb-2 flex items-center gap-3 text-white">
                    <Building2 className="w-8 h-8 text-[#A3E635]" />
                    Software Developer
                  </CardTitle>
                  <div className="text-xl text-[#A3E635] font-semibold mb-2">Alpheric</div>
                  <div className="flex flex-wrap items-center gap-4 text-white/70">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      August 2024 - Present
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Noida, India
                    </div>
                  </div>
                </div>
                <Badge className="bg-[#A3E635] text-black self-start md:self-center">
                  Current Role
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-white/10 rounded-lg border border-white/20">
                  <div className="text-2xl font-bold text-[#A3E635] mb-1">14%</div>
                  <div className="text-sm text-white/70">Report Accuracy</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg border border-white/20">
                  <div className="text-2xl font-bold text-[#A3E635] mb-1">4+</div>
                  <div className="text-sm text-white/70">Websites Built</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg border border-white/20">
                  <div className="text-2xl font-bold text-[#A3E635] mb-1">25%</div>
                  <div className="text-sm text-white/70">Faster Load Times</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg border border-white/20">
                  <div className="text-2xl font-bold text-[#A3E635] mb-1">100%</div>
                  <div className="text-sm text-white/70">Code Quality</div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
                  <TrendingUp className="w-5 h-5 text-[#A3E635]" />
                  Key Achievements
                </h4>
                <div className="grid gap-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white/10 rounded-lg border border-white/20">
                      <div className="w-2 h-2 bg-[#A3E635] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-white/80 leading-relaxed">{achievement}</p>
                    </div>
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