import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Clock, Globe, Sparkles, Heart, Zap } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@harshpatel.dev',
      link: 'mailto:hello@harshpatel.dev',
      description: 'Drop me a line anytime',
      gradient: 'from-blue-500 to-cyan-500',
      glow: 'shadow-blue-500/25',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      description: 'Let\'s have a quick chat',
      gradient: 'from-green-500 to-emerald-500',
      glow: 'shadow-green-500/25',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'San Francisco, CA',
      link: '#',
      description: 'Available for in-person meetings',
      gradient: 'from-purple-500 to-pink-500',
      glow: 'shadow-purple-500/25',
    },
  ];

  const socialLinks = [
    { 
      icon: Github, 
      label: 'GitHub', 
      href: 'https://github.com/harshpatel-dev',
      gradient: 'from-gray-700 to-gray-900',
      description: 'Check out my code'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: 'https://linkedin.com/in/harshpatel-frontend',
      gradient: 'from-blue-600 to-blue-800',
      description: 'Let\'s connect professionally'
    },
    { 
      icon: Twitter, 
      label: 'Twitter', 
      href: 'https://twitter.com/harshpatel_dev',
      gradient: 'from-sky-400 to-sky-600',
      description: 'Follow my tech journey'
    },
  ];

  const features = [
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'I typically respond within 24 hours',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Globe,
      title: 'Global Availability',
      description: 'Open to remote collaboration worldwide',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: MessageCircle,
      title: 'Open Communication',
      description: 'Clear, honest, and transparent discussions',
      gradient: 'from-purple-500 to-indigo-500',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              opacity: [0.5, 0.3, 0.5]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100, -20],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8"
            >
              <MessageCircle size={16} />
              <span>Let's Connect</span>
            </motion.div>

            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-8">
              <span className="block">Ready to Work</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Together?
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              I'm always interested in hearing about new opportunities, especially those focused on 
              frontend architecture, performance optimization, or developer tooling. Let's create something amazing together!
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <motion.div
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl mb-3`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-10 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-2xl">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8"
                >
                  <Send size={14} />
                  <span>Send Message</span>
                </motion.div>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Conversation</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500"
                      placeholder="john@example.com"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 resize-none placeholder-gray-400 dark:placeholder-gray-500"
                      placeholder="Tell me about your project, ideas, or just say hello..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="group w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-2xl"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                    <motion.div
                      className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
                >
                  <Sparkles size={14} />
                  <span>Get In Touch</span>
                </motion.div>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Multiple Ways to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">Connect</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Choose your preferred method of communication. I'm here to help bring your ideas to life 
                  and discuss how we can work together on your next project.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    className={`group relative flex items-center space-x-6 p-6 bg-white dark:bg-gray-800 rounded-3xl border-2 border-gray-100 dark:border-gray-700 transition-all duration-700 ${hoveredContact === index ? `shadow-2xl ${info.glow}` : 'shadow-lg'}`}
                    whileHover={{ scale: 1.02, y: -3 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onHoverStart={() => setHoveredContact(index)}
                    onHoverEnd={() => setHoveredContact(null)}
                  >
                    {/* Animated Background Gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 rounded-3xl transition-opacity duration-500`}
                      animate={{ opacity: hoveredContact === index ? 0.05 : 0 }}
                    />

                    {/* Floating Orb */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
                      <motion.div
                        className={`absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-full opacity-20 blur-xl`}
                        animate={{ 
                          scale: hoveredContact === index ? 1.3 : 1,
                          rotate: hoveredContact === index ? 90 : 0
                        }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>

                    {/* Icon */}
                    <motion.div 
                      className={`relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-r ${info.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                      animate={{ 
                        scale: hoveredContact === index ? 1.1 : 1,
                        rotate: hoveredContact === index ? 5 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <info.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <div className="relative z-10 flex-1">
                      <motion.h3
                        className="text-xl font-bold text-gray-900 dark:text-white mb-1"
                        animate={{ y: hoveredContact === index ? -2 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {info.title}
                      </motion.h3>
                      <p className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-1">
                        {info.content}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {info.description}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <motion.div
                      className="relative z-10 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                      animate={{ x: hoveredContact === index ? 5 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Zap size={20} />
                    </motion.div>

                    {/* Hover Border Effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${info.gradient} opacity-0 pointer-events-none`}
                      animate={{ opacity: hoveredContact === index ? 0.1 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ 
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'xor',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        padding: '2px'
                      }}
                    />
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
                >
                  <Heart size={14} />
                  <span>Follow My Journey</span>
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Connect on Social Media
                </h3>
                
                <div className="grid grid-cols-1 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 transition-all duration-500 ${hoveredSocial === index ? 'shadow-xl' : 'shadow-md'}`}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      onHoverStart={() => setHoveredSocial(index)}
                      onHoverEnd={() => setHoveredSocial(null)}
                    >
                      <motion.div 
                        className={`w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                        animate={{ 
                          scale: hoveredSocial === index ? 1.1 : 1,
                          rotate: hoveredSocial === index ? 5 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <social.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {social.label}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {social.description}
                        </p>
                      </div>
                      
                      <motion.div
                        className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                        animate={{ x: hoveredSocial === index ? 3 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Zap size={16} />
                      </motion.div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;