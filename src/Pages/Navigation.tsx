import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/", id: "home" },
    { label: "About", href: "/about", id: "about" },
    { label: "Experience", href: "/experience", id: "experience" },
    { label: "Projects", href: "/projects", id: "projects" },
    { label: "Services", href: "/services", id: "services" },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#212020] backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-[#212020] backdrop-blur-md"
        }`}
        role="navigation"
        aria-label="Main navigation"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo/Brand Section */}
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/" className="flex items-center space-x-3">
                <motion.div
                  className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#A3E635] to-[#84CC16] rounded-lg shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <Code className="w-6 h-6 text-black" />
                </motion.div>
                <div className="hidden sm:block">
                  <h1 className="text-lg font-bold text-white">Portfolio</h1>
                  <p className="text-xs text-gray-400">Developer</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation (always visible) */}
            <motion.div
              className="flex items-center space-x-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.6 + index * 0.1,
                  }}
                >
                  <Link
                    to={item.href}
                    className={`relative px-2 py-1 text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 group hover:text-sm ${
                      location.pathname === item.href
                        ? "text-[#A3E635] bg-[#A3E635]/10"
                        : "text-white/80 hover:text-[#A3E635] hover:bg-white/5"
                    }`}
                    aria-current={location.pathname === item.href ? "page" : undefined}
                  >
                    {item.label}
                    <motion.span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#A3E635] transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 ${
                        location.pathname === item.href ? "scale-x-100" : ""
                      }`}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Desktop Action Buttons */}
            <motion.div
              className="hidden lg:flex items-center space-x-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    className="bg-gradient-to-r from-[#A3E635] to-[#84CC16] text-black hover:from-[#84CC16] hover:to-[#A3E635] px-6 py-2 rounded-full font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Get In Touch
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Removed mobile menu toggle button */}
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;
