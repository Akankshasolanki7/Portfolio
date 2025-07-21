
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Calendar, Phone, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const personalInfo = {
    email: 'solankiakanksha98@gmail.com',
    phone: '+91 9876543210', // Add your actual phone number
    location: 'India',
    availability: 'Available for opportunities'
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch (err) {
      console.error('Failed to copy phone:', err);
    }
  };

  const handleDownloadResume = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1WLnf1oMEe9xgdvQLdiGPQmMkWTyRMVqh/view?usp=sharing';
    window.open(resumeUrl, '_blank');
  };

  return (
    <motion.section
      className="relative text-center py-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Akanksha Solanki
        </motion.h1>

        <motion.div
          className="mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Aspiring Software Engineer & Full-Stack Developer
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About Me</h2>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto px-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            I'm an aspiring software engineer and full-stack developer currently pursuing my B.Tech in Computer Science from KIIT, Bhubaneswar.
            With a passion for coding and problem-solving, I enjoy tackling complex challenges and turning ideas into functional, user-friendly applications.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground">
            I believe in continuous learning and growth, which is why I solve DSA problems on platforms like LeetCode.
            Beyond technical skills, I value effective communication, teamwork, and delivering solutions that make a positive impact.
          </p>
        </motion.div>
      </motion.div>



      {/* Quick Stats */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {[
          { label: 'Projects', value: '10+' },
          { label: 'Technologies', value: '15+' },
          { label: 'DSA Problems', value: '300+' }
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="text-center p-6 rounded-lg bg-card border hover:shadow-md transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>



      {/* Action Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <Button
          onClick={handleDownloadResume}
          size="lg"
          className="bg-primary hover:bg-primary/90"
        >
          <Calendar size={20} className="mr-2" />
          Download Resume
        </Button>

        <Button variant="outline" size="lg" asChild>
          <a href="mailto:solankiakanksha98@gmail.com" className="flex items-center gap-2">
            <Mail size={20} />
            Contact Me
          </a>
        </Button>

        <Button variant="outline" size="lg" asChild>
          <a href="https://github.com/Akankshasolanki7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Github size={20} />
            GitHub
          </a>
        </Button>

        <Button variant="outline" size="lg" asChild>
          <a href="https://www.linkedin.com/in/akanksha-solanki-a3a69828b" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Linkedin size={20} />
            LinkedIn
          </a>
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default About;
