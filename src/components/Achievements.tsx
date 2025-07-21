
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Google Girl Hackathon 2025",
      description: "Semifinalist",
      date: "Mar 2025",
      icon: "🏆",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Problem Solving",
      description: "Solved 300+ DSA problems on LeetCode, HackerRank, and GeeksforGeeks",
      date: "Ongoing",
      icon: "💻",
      color: "from-green-400 to-blue-500"
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
        <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
          <Trophy className="text-yellow-600" size={40} />
          Achievements
        </h2>
        <p className="text-lg text-muted-foreground">Milestones and recognitions</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full">
              <div className={`h-2 bg-gradient-to-r ${achievement.color}`}></div>
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground mb-2">{achievement.description}</p>
                    <span className="text-sm font-medium text-blue-600">{achievement.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Achievements;
