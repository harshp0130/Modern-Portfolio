import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Calendar, MapPin, Coffee, Code, Briefcase, Users, TrendingUp, Star, Zap, Heart, Sparkles, Globe, Target, Shield, BookOpen, Trophy } from 'lucide-react';

const Achievements: React.FC = () => {
  const [hoveredAchievement, setHoveredAchievement] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const achievements = [
    {
      title: 'SAP Certified Associate - Backend developer-ABAP  ',
      issuer: 'Meta (Facebook)',
      date: 'June 2025',
      type: 'Certification',
      category: 'certification',
      description: 'SAP concepts.',
      image: '/assets/images.png',
      skills: ['SAP', 'ABAP', 'Softwware Development'],
      gradient: 'from-blue-500 to-cyan-500',
      glow: 'shadow-blue-500/25',
      icon: Code,
      credentialUrl: 'https://www.credly.com/badges/d9b82597-e863-44ab-9ddd-b51fa6adf4e5/public_url',
    },
    // {
    //   title: 'Full Stack Web Development',
    //   issuer: 'freeCodeCamp',
    //   date: 'Nov 2024',
    //   type: 'Certificate',
    //   category: 'certification',
    //   description: 'Comprehensive full-stack development covering frontend, backend, databases, and deployment strategies.',
    //   image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
    //   gradient: 'from-green-500 to-emerald-500',
    //   glow: 'shadow-green-500/25',
    //   icon: Globe,
    //   credentialUrl: '#',
    // },
    // {
    //   title: 'JavaScript Algorithms & Data Structures',
    //   issuer: 'freeCodeCamp',
    //   date: 'Oct 2024',
    //   type: 'Certificate',
    //   category: 'certification',
    //   description: 'Advanced JavaScript programming, ES6+ features, algorithms, and data structure implementations.',
    //   image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   skills: ['JavaScript', 'ES6+', 'Algorithms', 'Data Structures'],
    //   gradient: 'from-yellow-500 to-orange-500',
    //   glow: 'shadow-yellow-500/25',
    //   icon: BookOpen,
    //   credentialUrl: '#',
    // },
    // {
    //   title: 'AWS Cloud Practitioner',
    //   issuer: 'Amazon Web Services',
    //   date: 'Sep 2024',
    //   type: 'Certification',
    //   category: 'certification',
    //   description: 'Foundational understanding of AWS cloud services, architecture, security, and pricing models.',
    //   image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   skills: ['AWS', 'Cloud Computing', 'DevOps', 'Infrastructure'],
    //   gradient: 'from-orange-500 to-red-500',
    //   glow: 'shadow-orange-500/25',
    //   icon: Shield,
    //   credentialUrl: '#',
    // },
    // {
    //   title: 'Git & GitHub Mastery',
    //   issuer: 'GitHub',
    //   date: 'Aug 2024',
    //   type: 'Achievement',
    //   category: 'achievement',
    //   description: 'Advanced version control, collaboration workflows, and open-source contribution best practices.',
    //   image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
    //   gradient: 'from-purple-500 to-pink-500',
    //   glow: 'shadow-purple-500/25',
    //   icon: Star,
    //   credentialUrl: '#',
    // },
    // {
    //   title: 'Hackathon Winner',
    //   issuer: 'TechFest 2024',
    //   date: 'Jul 2024',
    //   type: 'Award',
    //   category: 'award',
    //   description: 'First place in 48-hour hackathon for building an innovative web application solving real-world problems.',
    //   image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   skills: ['Innovation', 'Problem Solving', 'Team Work', 'Rapid Development'],
    //   gradient: 'from-indigo-500 to-purple-500',
    //   glow: 'shadow-indigo-500/25',
    //   icon: Trophy,
    //   credentialUrl: '#',
    // },
    // {
    //   title: 'Best Student Project',
    //   issuer: 'University Tech Fair',
    //   date: 'Jun 2024',
    //   type: 'Award',
    //   category: 'award',
    //   description: 'Recognition for outstanding final year project demonstrating technical excellence and innovation.',
    //   image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   skills: ['Project Management', 'Technical Excellence', 'Innovation', 'Presentation'],
    //   gradient: 'from-pink-500 to-rose-500',
    //   glow: 'shadow-pink-500/25',
    //   icon: Award,
    //   credentialUrl: '#',
    // },
    // {
    //   title: 'Open Source Contributor',
    //   issuer: 'GitHub Community',
    //   date: 'May 2024',
    //   type: 'Achievement',
    //   category: 'achievement',
    //   description: 'Active contributor to open-source projects with multiple merged pull requests and community recognition.',
    //   image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   skills: ['Open Source', 'Community', 'Code Review', 'Documentation'],
    //   gradient: 'from-teal-500 to-cyan-500',
    //   glow: 'shadow-teal-500/25',
    //   icon: Heart,
    //   credentialUrl: '#',
    // },
  ];

  const categories = [
    { id: 'all', label: 'All Achievements', count: achievements.length },
    { id: 'certification', label: 'Certifications', count: achievements.filter(a => a.category === 'certification').length },
    { id: 'award', label: 'Awards', count: achievements.filter(a => a.category === 'award').length },
    
  ];

  const filteredAchievements = selectedCategory === 'all' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory);

  const stats = [
    { number: '8+', label: 'Total Achievements', icon: Trophy },
    { number: '4', label: 'Certifications', icon: Award },
    { number: '2024', label: 'Most Recent', icon: Calendar },
    { number: '100%', label: 'Completion Rate', icon: Star },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-orange-600/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-red-600/20 rounded-full blur-3xl"
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
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-full opacity-60"
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
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8"
            >
              <Trophy size={16} />
              <span>Achievements & Certifications</span>
            </motion.div>

            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-8">
              <span className="block">My</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600">
                Achievements
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              A collection of certifications, awards, and recognitions that showcase my commitment to continuous learning 
              and professional growth in the field of software development.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="group relative text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl mb-3"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {category.label} ({category.count})
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredAchievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  onHoverStart={() => setHoveredAchievement(index)}
                  onHoverEnd={() => setHoveredAchievement(null)}
                  className={`group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden transition-all duration-700 border-2 border-gray-100 dark:border-gray-700 ${hoveredAchievement === index ? `shadow-2xl ${achievement.glow}` : 'shadow-lg'}`}
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 transition-opacity duration-500`}
                    animate={{ opacity: hoveredAchievement === index ? 0.05 : 0 }}
                  />

                  {/* Floating Orbs */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                      className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${achievement.gradient} rounded-full opacity-20 blur-xl`}
                      animate={{ 
                        scale: hoveredAchievement === index ? 1.5 : 1,
                        rotate: hoveredAchievement === index ? 180 : 0
                      }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>

                  {/* Certificate Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover"
                      animate={{ 
                        scale: hoveredAchievement === index ? 1.1 : 1,
                        filter: hoveredAchievement === index ? 'brightness(1.1)' : 'brightness(1)'
                      }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <motion.div 
                      className={`absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-gradient-to-r ${achievement.gradient} text-white text-xs font-semibold flex items-center space-x-1`}
                      animate={{ 
                        scale: hoveredAchievement === index ? 1.05 : 1,
                        y: hoveredAchievement === index ? -2 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <achievement.icon size={12} />
                      <span>{achievement.type}</span>
                    </motion.div>

                    {/* Date */}
                    <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-xl text-white text-xs font-medium">
                      {achievement.date}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6">
                    <motion.h3
                      className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                      animate={{ y: hoveredAchievement === index ? -3 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {achievement.title}
                    </motion.h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                      {achievement.issuer}
                    </p>
                    
                    <motion.p
                      className="text-gray-500 dark:text-gray-400 text-sm mb-4 leading-relaxed"
                      animate={{ opacity: hoveredAchievement === index ? 0.9 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {achievement.description}
                    </motion.p>

                    {/* Skills/Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {achievement.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg"
                          initial={{ opacity: 0, scale: 0.8, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ 
                            delay: (index * 0.1) + (skillIndex * 0.05),
                            duration: 0.4,
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Button */}
                    {achievement.credentialUrl && (
                      <motion.a
                        href={achievement.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${achievement.gradient} text-white rounded-xl text-sm font-semibold hover:shadow-lg transition-all duration-300`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>View Certificate</span>
                        <ExternalLink size={14} />
                      </motion.a>
                    )}
                  </div>

                  {/* Hover Border Effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${achievement.gradient} opacity-0 pointer-events-none`}
                    animate={{ opacity: hoveredAchievement === index ? 0.1 : 0 }}
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
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-yellow-400/20 to-orange-600/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-red-600/20 rounded-full blur-3xl"
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
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8"
            >
              <Sparkles size={16} />
              <span>Keep Growing</span>
            </motion.div>

            <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-8">
              <span className="block">Always Learning,</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600">
                Always Growing
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              These achievements represent my commitment to continuous learning and professional development. 
              I'm always working towards new certifications and expanding my skill set.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="/contact"
                className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-2xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Let's Connect</span>
                <ExternalLink size={24} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="/projects"
                className="group inline-flex items-center space-x-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-orange-600 hover:text-orange-600 dark:hover:text-orange-400 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Trophy size={24} />
                <span>View My Work</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;