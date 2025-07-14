import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Clock, Globe, Sparkles, Heart, Zap, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  // Form validation
  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Simulate form submission (replace with actual API call)
  const submitForm = async (data: typeof formData) => {
    try {
      // Option 1: Using EmailJS (Recommended for client-side)
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_9ayx7c9', // Replace with your EmailJS service ID
          template_id: 'template_988rrq9', // Replace with your EmailJS template ID
          user_id: 'PS_Y9N4Kr9XnaPJDB', // Replace with your EmailJS public key
          template_params: {
            from_name: data.name,
            from_email: data.email,
            message: data.message,
            to_email: 'harshp0130@gmail.com', // Your email
          }
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      return { success: true };
    } catch (error) {
      console.error('Email sending error:', error);
      throw error;
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setFormStatus('loading');
    
    try {
      await submitForm(formData);
      setFormStatus('success');
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
      setFormErrors({});
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'harshp0130@gmail.com',
      link: 'mailto:harshp0130@gmail.com',
      description: 'Drop me a line anytime',
      gradient: 'from-blue-500 to-cyan-500',
      glow: 'shadow-blue-500/25',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+917567324089',
      link: 'tel:+917567324089',
      description: 'Let\'s have a quick chat',
      gradient: 'from-green-500 to-emerald-500',
      glow: 'shadow-green-500/25',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Valsad, Guajarat, India',
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
      href: 'https://github.com/harshp0130/',
      gradient: 'from-gray-700 to-gray-900',
      description: 'Check out my code'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/harshp0130/',
      gradient: 'from-blue-600 to-blue-800',
      description: 'Let\'s connect professionally'
    },
    // { 
    //   icon: Twitter, 
    //   label: 'Twitter', 
    //   href: 'https://twitter.com/harshpatel_dev',
    //   gradient: 'from-sky-400 to-sky-600',
    //   description: 'Follow my tech journey'
    // },
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
                
                {/* Success Message */}
                <AnimatePresence>
                  {formStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <div>
                        <p className="text-green-800 dark:text-green-200 font-semibold">Message sent successfully!</p>
                        <p className="text-green-600 dark:text-green-400 text-sm">I'll get back to you within 24 hours.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Error Message */}
                <AnimatePresence>
                  {formStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl flex items-center space-x-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                      <div>
                        <p className="text-red-800 dark:text-red-200 font-semibold">Failed to send message</p>
                        <p className="text-red-600 dark:text-red-400 text-sm">Please try again or contact me directly via email.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

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
                      className={`w-full px-6 py-4 border-2 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500 ${
                        formErrors.name 
                          ? 'border-red-300 dark:border-red-600' 
                          : 'border-gray-200 dark:border-gray-600'
                      }`}
                      placeholder="John Doe"
                      disabled={formStatus === 'loading'}
                    />
                    {formErrors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center space-x-1"
                      >
                        <AlertCircle size={14} />
                        <span>{formErrors.name}</span>
                      </motion.p>
                    )}
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
                      className={`w-full px-6 py-4 border-2 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500 ${
                        formErrors.email 
                          ? 'border-red-300 dark:border-red-600' 
                          : 'border-gray-200 dark:border-gray-600'
                      }`}
                      placeholder="john@example.com"
                      disabled={formStatus === 'loading'}
                    />
                    {formErrors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center space-x-1"
                      >
                        <AlertCircle size={14} />
                        <span>{formErrors.email}</span>
                      </motion.p>
                    )}
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
                      className={`w-full px-6 py-4 border-2 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 resize-none placeholder-gray-400 dark:placeholder-gray-500 ${
                        formErrors.message 
                          ? 'border-red-300 dark:border-red-600' 
                          : 'border-gray-200 dark:border-gray-600'
                      }`}
                      placeholder="Tell me about your project, ideas, or just say hello..."
                      disabled={formStatus === 'loading'}
                    />
                    {formErrors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center space-x-1"
                      >
                        <AlertCircle size={14} />
                        <span>{formErrors.message}</span>
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.button
                    type="submit"
                    className={`group w-full text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-2xl ${
                      formStatus === 'loading'
                        ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                        : formStatus === 'success'
                        ? 'bg-green-500 hover:bg-green-600'
                        : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700'
                    }`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    disabled={formStatus === 'loading'}
                  >
                    {formStatus === 'loading' ? (
                      <>
                        <Loader size={20} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : formStatus === 'success' ? (
                      <>
                        <CheckCircle size={20} />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                        <motion.div
                          className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      </>
                    )}
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