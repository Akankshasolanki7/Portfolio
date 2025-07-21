
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Download, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navigationItems = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleDownloadResume = () => {
    // Open Google Drive resume link in new tab
    const resumeUrl = 'https://drive.google.com/file/d/1WLnf1oMEe9xgdvQLdiGPQmMkWTyRMVqh/view?usp=sharing';
    window.open(resumeUrl, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  // Track active section and scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      // Calculate scroll progress
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / documentHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Track active section
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection('about')}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
              AS
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-foreground">Akanksha Solanki</h1>
              <p className="text-xs text-muted-foreground">Full Stack Developer</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-2">
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center gap-2"
            >
              <Download size={16} />
              Download CV
            </Button>

            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="sm"
              className="p-2"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </Button>

            {/* Mobile menu button */}
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              size="sm"
              className="lg:hidden p-2"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            className="lg:hidden mt-4 pb-4 border-t border-border/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-2 mt-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="mt-4">
              <Button
                onClick={handleDownloadResume}
                variant="outline"
                size="sm"
                className="w-full flex items-center gap-2"
              >
                <Download size={16} />
                Download CV
              </Button>
            </div>
          </motion.nav>
        )}

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-border/20">
          <motion.div
            className="h-full bg-primary"
            style={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
