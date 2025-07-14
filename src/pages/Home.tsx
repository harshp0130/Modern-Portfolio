import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Code2, Zap, Users, Star, Globe, TrendingUp, Sparkles, Coffee, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const features = [
    {
      icon: Code2,
      title: 'Frontend Architecture',
      description: 'Building scalable React applications with modern TypeScript patterns and micro-frontend architectures.',
      gradient: 'from-blue-500 via-purple-500 to-indigo-600',
      glow: 'shadow-blue-500/25',
      stats: 'Built for scale',
    },
    {
      icon: Zap,
      title: 'Performance Engineering',
      description: 'Optimizing Core Web Vitals, bundle sizes, and runtime performance for lightning-fast user experiences.',
      gradient: 'from-green-500 via-emerald-500 to-teal-600',
      glow: 'shadow-green-500/25',
      stats: 'Focused on speed',
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Actively learning and applying frontend best practices while contributing to key technical decisions in team and solo projects.',
      gradient: 'from-orange-500 via-red-500 to-pink-600',
      glow: 'shadow-orange-500/25',
      stats: ' Peer collaboration',
    },
  ];

  const achievements = [
    { number: '5+', label: 'Projects', icon: Star },
    { number: 'Fresher', label: 'Actively growing developer', icon: Globe },
    { number: '10+', label: 'GitHub Repos', icon: TrendingUp },
    { number: '8+', label: 'Collaborated with peers', icon: Sparkles },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-400/30 to-pink-600/30 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              opacity: [0.5, 0.3, 0.5]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-full blur-2xl"
            animate={{ 
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
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

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg"
            >
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span>Available for new opportunities</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-6"
            >
              <span className="block text-lg sm:text-xl font-medium text-gray-600 dark:text-gray-400 mb-4">
                Hey there, I'm
              </span>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse">
                  Harsh Patel
                </span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
                FULL STACK {' '}
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold"
                  whileHover={{ scale: 1.05 }}
                >
                  DEVELOPER
                </motion.span>
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                Building scalable web applications that millions of users love, with a focus on performance, accessibility, and developer experience.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            >
              <Link to="/projects">
                <motion.div
                  className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-2xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Explore My Work</span>
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                  
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ padding: '2px' }}
                  >
                    <div className="w-full h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl" />
                  </motion.div>
                </motion.div>
              </Link>
              
              <Link to="/contact">
                <motion.div
                  className="group inline-flex items-center space-x-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Coffee size={24} />
                  <span>Let's Chat</span>
                </motion.div>
              </Link>
            </motion.div>

            {/* Achievement Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="group relative text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-3"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <achievement.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          whileHover={{ scale: 1.2 }}
        >
          <ChevronDown size={32} />
        </motion.button>
      </section>

      {/* What I Do Section */}
      <section className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8"
            >
              <Sparkles size={16} />
              <span>What I Do Best</span>
            </motion.div>

            <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-8">
              <span className="block">Crafting Digital</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Experiences
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
             I specialize in building high-performance, scalable frontend applications with a focus on clean architecture and developer experience. Passionate about crafting intuitive interfaces that can support millions of users. Currently exploring opportunities to contribute to impactful products and open-source projects.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                onHoverStart={() => setHoveredFeature(index)}
                onHoverEnd={() => setHoveredFeature(null)}
                className={`group relative bg-white dark:bg-gray-800 p-10 rounded-3xl border-2 border-gray-100 dark:border-gray-700 transition-all duration-700 ${hoveredFeature === index ? `shadow-2xl ${feature.glow}` : 'shadow-lg'}`}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 rounded-3xl transition-opacity duration-500`}
                  animate={{ opacity: hoveredFeature === index ? 0.05 : 0 }}
                />

                {/* Floating Orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
                  <motion.div
                    className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-full opacity-20 blur-xl`}
                    animate={{ 
                      scale: hoveredFeature === index ? 1.5 : 1,
                      rotate: hoveredFeature === index ? 180 : 0
                    }}
                    transition={{ duration: 0.8 }}
                  />
                  <motion.div
                    className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-full opacity-15 blur-lg`}
                    animate={{ 
                      scale: hoveredFeature === index ? 1.3 : 1,
                      rotate: hoveredFeature === index ? -90 : 0
                    }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  />
                </div>

                {/* Icon */}
                <motion.div 
                  className={`relative z-10 inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-8 shadow-lg`}
                  animate={{ 
                    scale: hoveredFeature === index ? 1.1 : 1,
                    rotate: hoveredFeature === index ? 5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                  
                  {/* Pulse effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-75`}
                    animate={{ 
                      scale: hoveredFeature === index ? [1, 1.3, 1] : 1,
                      opacity: hoveredFeature === index ? [0.75, 0.3, 0.75] : 0.75
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: hoveredFeature === index ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.h3
                    className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                    animate={{ y: hoveredFeature === index ? -3 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                    animate={{ opacity: hoveredFeature === index ? 0.9 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.description}
                  </motion.p>

                  {/* Stats */}
                  <motion.div
                    className={`inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${feature.gradient} text-white rounded-xl text-sm font-semibold`}
                    animate={{ scale: hoveredFeature === index ? 1.05 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TrendingUp size={16} />
                    <span>{feature.stats}</span>
                  </motion.div>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.gradient} opacity-0 pointer-events-none`}
                  animate={{ opacity: hoveredFeature === index ? 0.1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ 
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'xor',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    padding: '2px'
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8"
            >
              <Heart size={16} />
              <span>Let's Create Something Amazing</span>
            </motion.div>

            <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-8">
              <span className="block">Ready to Build the</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Future Together?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              I'm always excited to collaborate on challenging projects that push the boundaries 
              of what's possible with modern web technologies. Let's turn your vision into reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <motion.div
                  className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-2xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Start a Conversation</span>
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Link>
              
              <Link to="/projects">
                <motion.div
                  className="group inline-flex items-center space-x-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Sparkles size={24} />
                  <span>View My Portfolio</span>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;