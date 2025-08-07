import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin,Instagram } from "lucide-react";
import { motion } from "framer-motion";
import bgImage from "@/assets/bg.jpg";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "ADDRESS",
      value: "Noida, India",
      color: "primary"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "CONTACT NUMBER",
      value: "+91 8178359271",
      color: "secondary"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "EMAIL ADDRESS",
      value: "chauhan.sakshi2002@gmail.com",
      color: "accent"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/sakshi-chauhan-022862229/",
      color: "primary"
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
      href: "https://www.linkedin.com/in/sakshi-chauhan-022862229/",
      color: "secondary"
    },
     {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      href: "https://www.instagram.com/chauhan.sakshi2002/",
      color: "secondary"
    }
  ];

  return (
    <section 
      className="pt-35 pb-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-[#212020]/80"></div>
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

      <div className="container relative z-20 mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="relative mb-4">
            <motion.h2 
              className="text-4xl lg:text-8xl font-bold text-white/5 absolute inset-0 flex items-center justify-center mt-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let's Connect
            </motion.h2>
            <motion.h2 
              className="text-4xl lg:text-7xl font-bold text-white relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Let's Connect
            </motion.h2>
          </motion.div>
          <motion.p 
            className="text-lg text-white/80 max-w-2xl mx-auto mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Below are the details to reach out to me!
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Contact Information Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.2 + index * 0.2,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <Card 
                  className="group bg-[#212020]/50 backdrop-blur-sm border-white/20 hover:shadow-elevated hover:scale-105 transition-all duration-300 h-full"
                >
                  <CardContent className="p-6 text-center flex flex-col items-center justify-center h-full">
                    <motion.div 
                      className="inline-flex p-4 rounded-full bg-[#A3E635] text-black mb-4 group-hover:shadow-glow-primary transition-all duration-300"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {contact.icon}
                    </motion.div>
                    <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wide">{contact.label}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{contact.value}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Have a Question Section */}
       

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