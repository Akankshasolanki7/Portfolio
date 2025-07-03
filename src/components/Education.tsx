
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: "Kalinga Institute of Industrial Technology",
      degree: "B.Tech in Information Technology",
      duration: "Sep 2022 - Present",
      grade: "CGPA: 8.54/10",
      icon: "🎓"
    },
    {
      institution: "DAV Public School, Hehal",
      degree: "CBSE Class XII",
      duration: "Mar 2021",
      grade: "85.8%",
      icon: "📚"
    },
    {
      institution: "AL-Momin International School",
      degree: "CBSE Class X",
      duration: "Mar 2019",
      grade: "88.4%",
      icon: "🏫"
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
          <GraduationCap className="text-blue-600" size={40} />
          Education
        </h2>
        <p className="text-lg text-muted-foreground">My academic journey</p>
      </motion.div>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{edu.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{edu.institution}</h3>
                    <p className="text-lg text-muted-foreground mb-1">{edu.degree}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{edu.duration}</span>
                      <span className="font-semibold text-blue-600">{edu.grade}</span>
                    </div>
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

export default Education;
