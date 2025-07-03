
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Github, Linkedin, Heart, MessageCircle, Send, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission - replace with actual form handling
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:solankiakanksha98@gmail.com?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const contactMethods = [
    {
      icon: <Mail size={28} />,
      label: "Email Me",
      href: "mailto:solankiakanksha98@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
      description: "Drop me a line"
    },
    {
      icon: <Github size={28} />,
      label: "GitHub",
      href: "https://github.com/Akankshasolanki7",
      gradient: "from-gray-700 to-gray-900",
      description: "Check my code"
    },
    {
      icon: <Linkedin size={28} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/akanksha-solanki-a3a69828b",
      gradient: "from-blue-600 to-blue-800",
      description: "Let's connect"
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
          <MessageCircle className="text-primary" size={32} />
          <h2 className="text-4xl font-bold text-foreground">Get In Touch</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I'm always interested in hearing about new opportunities and connecting with fellow developers.
          Let's create something amazing together!
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="border shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="text-primary" size={24} />
                <h3 className="text-2xl font-bold">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                      <User size={16} />
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                      <Mail size={16} />
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="flex items-center gap-2 mb-2">
                    <MessageCircle size={16} />
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="flex items-center gap-2 mb-2">
                    <MessageSquare size={16} />
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </Button>

                {submitStatus === 'success' && (
                  <p className="text-green-600 text-center">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="border shadow-lg h-full">
            <CardContent className="p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-center">Other Ways to Connect</h3>

              <div className="space-y-4 flex-1">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="w-full h-auto py-4 flex items-center gap-4 hover:bg-primary/5 transition-colors duration-200"
                    >
                      <a href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${method.gradient} text-white shadow-lg`}>
                          {method.icon}
                        </div>
                        <div className="text-left">
                          <span className="font-semibold block">{method.label}</span>
                          <p className="text-xs text-muted-foreground">{method.description}</p>
                        </div>
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 pt-6 border-t text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-center text-muted-foreground">
                  <p className="text-sm">
                    © {new Date().getFullYear()} Akanksha Solanki. All rights reserved.
                  </p>
                  <p className="text-xs mt-1">
                    Made with <Heart size={14} className="inline text-red-500" /> by Akanksha Solanki
                  </p>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
