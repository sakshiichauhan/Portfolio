import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="pt-35 pb-20 bg-[#212020] relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <motion.div 
          className="absolute top-20 left-20 w-64 h-64 bg-[#A3E635]/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-[#A3E635]/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.35, 0.3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </motion.div>

      <div className="container relative z-10 mx-auto px-6">
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
            Let's <span className="text-[#A3E635]">Connect</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to collaborate on exciting projects or discuss opportunities? I'd love to hear from you.
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Contact Information */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.0 + index * 0.2,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <Card 
                  className="group bg-[#212020]/50 backdrop-blur-sm border-white/20 hover:shadow-elevated hover:scale-105 transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className="inline-flex p-4 rounded-full bg-[#A3E635]/10 text-[#A3E635] mb-4 group-hover:shadow-glow-primary transition-all duration-300"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {contact.icon}
                    </motion.div>
                    <h3 className="text-lg font-semibold text-white mb-2">{contact.label}</h3>
                    {contact.href !== "#" ? (
                      <a 
                        href={contact.href}
                         className="text-white/70 hover:text-[#A3E635] transition-colors break-words text-lg leading-relaxed " 
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-white/70 break-words text-lg leading-relaxed">{contact.value}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <Card className="bg-[#212020]/50 border-white/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <motion.h3 
                  className="text-2xl lg:text-3xl font-bold mb-4 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.0 }}
                >
                  Ready to work together?
                </motion.h3>
                <motion.p 
                  className="text-lg text-white/80 mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.2 }}
                >
                  I'm currently available for full-time opportunities and exciting projects. 
                  Let's discuss how we can create something amazing together.
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.4 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
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
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button 
                      variant="outline"
                      size="lg"
                      className="border-[#A3E635]/30 text-white hover:bg-[#A3E635]/10 hover:border-[#A3E635] transition-all duration-300"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Resume
                    </Button>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-6 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <Button
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
              </motion.div>
            ))}
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
          >
            <Card className="mt-12 bg-[#212020]/30 backdrop-blur-sm border-white/20">
              <CardContent className="p-8 text-center">
                <motion.h3 
                  className="text-xl font-bold mb-4 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 3.4 }}
                >
                  Education
                </motion.h3>
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 3.6 }}
                >
                  <h4 className="text-lg font-semibold text-white">
                    Bachelor of Technology in Information Technology
                  </h4>
                  <p className="text-white/80">Krishna Engineering College</p>
                  <p className="text-sm text-white/70">October 2020 - June 2024 | CGPA: 7.24/10</p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;