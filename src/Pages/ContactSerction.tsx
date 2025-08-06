import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "chauhan.sakshi2002@gmail.com",
      href: "mailto:chauhan.sakshi2002@gmail.com",
      color: "primary"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 8178359271",
      href: "tel:+918178359271",
      color: "secondary"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Noida, India",
      href: "#",
      color: "accent"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/sakshiichauhan",
      color: "primary"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/sakshi-chauhan",
      color: "secondary"
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#A3E635]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#A3E635]/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#FFFFFF]"> 
            Let's <span className="text-[#A3E635]">Connect</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <Card 
                key={index}
                className="group bg-black/50 backdrop-blur-sm border-white/20 hover:shadow-elevated hover:scale-105 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-4 rounded-full bg-[#A3E635]/10 text-[#A3E635] mb-4 group-hover:shadow-glow-primary transition-all duration-300">
                    {contact.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{contact.label}</h3>
                  {contact.href !== "#" ? (
                    <a 
                      href={contact.href}
                      className="text-white/70 hover:text-[#A3E635] transition-colors"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-white/70">{contact.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="bg-black/50 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
                Ready to work together?
              </h3>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                I'm currently available for full-time opportunities and exciting projects. 
                Let's discuss how we can create something amazing together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-[#A3E635] text-black hover:bg-[#A3E635]/90 transition-all duration-300"
                  asChild
                >
                  <a href="mailto:chauhan.sakshi2002@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-[#A3E635]/30 text-white hover:bg-[#A3E635]/10 hover:border-[#A3E635] transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="lg"
                className="hover:bg-[#A3E635]/10 hover:text-[#A3E635] text-white transition-all duration-300"
                asChild
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                  <span className="ml-2">{social.label}</span>
                </a>
              </Button>
            ))}
          </div>

          {/* Education Section */}
          <Card className="mt-12 bg-black/30 backdrop-blur-sm border-white/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold mb-4 text-white">Education</h3>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-white">
                  Bachelor of Technology in Information Technology
                </h4>
                <p className="text-white/80">Krishna Engineering College</p>
                <p className="text-sm text-white/70">October 2020 - June 2024 | CGPA: 7.24/10</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;