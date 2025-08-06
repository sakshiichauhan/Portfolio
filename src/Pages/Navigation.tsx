import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

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
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-[#212020] backdrop-blur-xl border-b border-white/10 shadow-lg" 
            : "bg-[#212020] backdrop-blur-md"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo/Brand Section */}
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#A3E635] to-[#84CC16] rounded-lg shadow-lg">
                  <Code className="w-6 h-6 text-black" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg font-bold text-white">Portfolio</h1>
                  <p className="text-xs text-gray-400">Developer</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group hover:text-base ${
                    location.pathname === item.href
                      ? "text-[#A3E635] bg-[#A3E635]/10"
                      : "text-white/80 hover:text-[#A3E635] hover:bg-white/5"
                  }`}
                  aria-current={location.pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#A3E635] transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 ${
                    location.pathname === item.href ? "scale-x-100" : ""
                  }`} />
                </Link>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link to="/contact">
                <Button
                  className="bg-gradient-to-r from-[#A3E635] to-[#84CC16] text-black hover:from-[#84CC16] hover:to-[#A3E635] px-6 py-2 rounded-full font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10 rounded-lg z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? "max-h-screen opacity-100" 
              : "max-h-0 opacity-0 overflow-hidden"
          }`}>
            <div className="py-4 space-y-1 bg-black/95 backdrop-blur-xl border-t border-white/10">
              {navItems.map((item) => (
                <Link
                  key={item.id}
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
                      <div className="w-2 h-2 bg-[#A3E635] rounded-full" />
                    )}
                  </div>
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Link to="/contact" onClick={closeMobileMenu}>
                  <Button
                    className="w-full bg-gradient-to-r from-[#A3E635] to-[#84CC16] text-black hover:from-[#84CC16] hover:to-[#A3E635] px-6 py-3 rounded-lg font-medium text-sm shadow-lg transition-all duration-300"
                  >
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navigation;