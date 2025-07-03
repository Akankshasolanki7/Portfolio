
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Virtual Internship – Python Full Stack Development",
      issuer: "AICTE",
      date: "Oct 2024 – Dec 2024",
      type: "Internship",
      color: "bg-blue-100 dark:bg-blue-900"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Mar 2025",
      type: "Certification",
      color: "bg-orange-100 dark:bg-orange-900"
    },
    {
      title: "Data Analytics and Visualization Job Simulation",
      issuer: "Accenture",
      date: "May 2024",
      type: "Simulation",
      color: "bg-purple-100 dark:bg-purple-900"
    },
    {
      title: "Machine Learning",
      issuer: "IBM",
      date: "June 2025",
      type: "Certification",
      color: "bg-green-100 dark:bg-green-900"
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
          <Award className="text-green-600" size={40} />
          Training & Certifications
        </h2>
        <p className="text-lg text-muted-foreground">Professional development and learning</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className={`hover:shadow-lg transition-shadow duration-300 ${cert.color} border-none h-full`}>
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="outline" className="text-xs">
                    {cert.type}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{cert.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-muted-foreground font-medium">{cert.issuer}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certifications;
