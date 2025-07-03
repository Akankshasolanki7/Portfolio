
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Code, Database, Globe, Settings, Star, TrendingUp, Filter } from 'lucide-react';

const Skills = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-600" size={28} />,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "C", level: 75 },
        { name: "SQL", level: 85 }
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50"
    },
    {
      title: "Frontend Development",
      icon: <Globe className="text-green-600" size={28} />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Tailwind CSS", level: 85 }
      ],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50"
    },
    {
      title: "Backend & Database",
      icon: <Database className="text-purple-600" size={28} />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "RESTful APIs", level: 90 }
      ],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50"
    },
    {
      title: "Tools & Libraries",
      icon: <Settings className="text-orange-600" size={28} />,
      skills: [
        { name: "Git", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
        { name: "NumPy", level: 80 },
        { name: "Pandas", level: 85 },
        { name: "Matplotlib", level: 75 }
      ],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/50 dark:to-red-950/50"
    }
  ];

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
          <TrendingUp className="text-primary" size={32} />
          <h2 className="text-4xl font-bold text-foreground">Technical Skills</h2>
        </div>
        <p className="text-lg text-muted-foreground mb-6">Technologies I work with and my proficiency levels</p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory('all')}
            className="flex items-center gap-2"
          >
            <Filter size={16} />
            All Skills
          </Button>
          {skillCategories.map((category, index) => (
            <Button
              key={index}
              variant={selectedCategory === category.title ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category.title)}
            >
              {category.title}
            </Button>
          ))}
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {skillCategories
          .filter(category => selectedCategory === 'all' || selectedCategory === category.title)
          .map((category, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className={`${category.bgGradient} border-none hover:shadow-lg transition-shadow duration-300 h-full`}>
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-xl bg-gradient-to-r ${category.gradient} text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  <div className="ml-auto">
                    <Star className="text-yellow-500" size={20} />
                  </div>
                </div>

                <div className="space-y-4 flex-1">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
