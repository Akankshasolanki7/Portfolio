
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ExternalLink, Github, Star, Zap, Brain, Image, Headphones, Search, Filter } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState<string>('all');

  const projects = [
    {
      title: "ASD Prediction System",
      description: "Developed an autism prediction app using React and FastAPI with a 93% accurate Random Forest model trained on 800 samples. Built ML classification pipeline comparing algorithms, applied SMOTE balancing, deployed via Railway/Vercel.",
      technologies: ["React", "FastAPI", "scikit-learn", "Random Forest"],
      liveLink: "https://austin-umber.vercel.app",
      githubLink: "https://github.com/Akankshasolanki7/Autism-Prediction",
      gradient: "from-blue-500 to-purple-600",
      icon: <Brain className="text-white" size={24} />,
      category: "Machine Learning",
      accuracy: "93%"
    },
    {
      title: "Imagify - AI Image Generation Platform",
      description: "Built AI image generator with React.js, Node.js, MongoDB, and ClipDrop API for text-to-image conversion. Implemented JWT authentication and credit-based system for secure user management.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      liveLink: "https://imagify-frontend-chi.vercel.app",
      githubLink: "https://github.com/Akankshasolanki7/IMAGIFY",
      gradient: "from-green-500 to-blue-600",
      icon: <Image className="text-white" size={24} />,
      category: "AI Platform",
      accuracy: "AI-Powered"
    },
    {
      title: "Podstream - Podcast Platform",
      description: "Built podcast streaming platform with React, Node.js, MongoDB featuring audio player and file uploads. Developed responsive web application with authentication, search functionality, and cloud storage.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Cloudinary"],
      liveLink: "https://frontend-dyyxatrkm-akankshakhushi865-gmailcoms-projects.vercel.app",
      githubLink: "https://github.com/Akankshasolanki7/Podstream",
      gradient: "from-purple-500 to-pink-600",
      icon: <Headphones className="text-white" size={24} />,
      category: "Media Platform",
      accuracy: "Full-Stack"
    }
  ];

  // Get all unique technologies for filtering
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  );

  // Filter projects based on search term and selected technology
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesTech = selectedTech === 'all' || project.technologies.includes(selectedTech);

    return matchesSearch && matchesTech;
  });

  return (
    <motion.section
      className="py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-center mb-12"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 mb-4">
          <Zap className="text-primary" size={32} />
          <h2 className="text-4xl font-bold text-foreground">Featured Projects</h2>
        </div>
        <p className="text-lg text-muted-foreground mb-6">Some of my recent work showcasing different technologies</p>

        {/* Search and Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={selectedTech === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedTech('all')}
              className="flex items-center gap-2"
            >
              <Filter size={16} />
              All
            </Button>
            {allTechnologies.slice(0, 4).map((tech) => (
              <Button
                key={tech}
                variant={selectedTech === tech ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedTech(tech)}
                className="hidden sm:inline-flex"
              >
                {tech}
              </Button>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {filteredProjects.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setSelectedTech('all');
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 overflow-hidden min-h-[400px]">
              {/* Project header */}
              <div className={`h-32 bg-gradient-to-r ${project.gradient} relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
                    {project.icon}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-1 text-white/90 text-sm">
                    <Star size={14} className="text-yellow-300" />
                    <span>{project.accuracy}</span>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" asChild className={`flex-1 bg-gradient-to-r ${project.gradient} text-white border-none hover:opacity-90`}>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>

                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          ))
        )}
      </div>
    </motion.section>
  );
};

export default Projects;
