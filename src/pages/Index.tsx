
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import ScrollToTop from '../components/ScrollToTop';
import { ThemeProvider } from '../contexts/ThemeContext';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        {/* Subtle background gradient */}
        <div className="fixed inset-0 -z-50">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/10 via-transparent to-purple-50/10 dark:from-blue-950/5 dark:via-transparent dark:to-purple-950/5" />
        </div>

        <Header />

        <main className="relative">
          {/* Hero section with enhanced spacing */}
          <section id="about" className="min-h-screen flex items-center justify-center">
            <About />
          </section>

          {/* Content sections with reduced spacing */}
          <div className="space-y-8">
            <motion.section
              id="education"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="container mx-auto px-4 py-12"
            >
              <Education />
            </motion.section>

            <motion.section
              id="skills"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="container mx-auto px-4 py-12"
            >
              <Skills />
            </motion.section>

            <motion.section
              id="projects"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="container mx-auto px-4 py-12"
            >
              <Projects />
            </motion.section>

            <motion.section
              id="achievements"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="container mx-auto px-4 py-12"
            >
              <Achievements />
            </motion.section>

            <motion.section
              id="certifications"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="container mx-auto px-4 py-12"
            >
              <Certifications />
            </motion.section>

            <motion.section
              id="contact"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="container mx-auto px-4 py-12"
            >
              <Contact />
            </motion.section>
          </div>
        </main>

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
};

export default Index;
