import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    { label: "Experience", href: "/experience", id: "experience" },
    { label: "Projects", href: "/projects", id: "projects" },
    { label: "Skills", href: "/skills", id: "skills" },
    { label: "Achievements", href: "/achievements", id: "achievements" },
    { label: "Contact", href: "/contact", id: "contact" }
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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

            {/* Desktop Navigation */}
            <motion.div 
              className="hidden lg:flex items-center space-x-1"
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
                    delay: 0.6 + index * 0.1 
                  }}
                >
                  <Link
                    to={item.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group hover:text-base ${
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

            {/* Mobile Menu Button */}
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.0 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 rounded-lg z-50"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                className="lg:hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <motion.div 
                  className="py-4 space-y-1 bg-black/95 backdrop-blur-xl border-t border-white/10"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.2 + index * 0.1 
                      }}
                    >
                      <Link
                        to={item.href}
                        onClick={closeMobileMenu}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                          location.pathname === item.href
                            ? "text-[#A3E635] bg-[#A3E635]/10 border-l-4 border-[#A3E635]"
                            : "text-white/80 hover:text-[#A3E635] hover:bg-white/5"
                        }`}
                        aria-current={location.pathname === item.href ? "page" : undefined}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{item.label}</span>
                          {location.pathname === item.href && (
                            <motion.div 
                              className="w-2 h-2 bg-[#A3E635] rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div 
                    className="pt-4 border-t border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                  >
                    <Link to="/contact" onClick={closeMobileMenu}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button
                          className="w-full bg-gradient-to-r from-[#A3E635] to-[#84CC16] text-black hover:from-[#84CC16] hover:to-[#A3E635] px-6 py-3 rounded-lg font-medium text-sm shadow-lg transition-all duration-300"
                        >
                          Get In Touch
                        </Button>
                      </motion.div>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40"
            onClick={closeMobileMenu}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;