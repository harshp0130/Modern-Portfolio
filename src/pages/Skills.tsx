import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Code, Database, Palette, Server, Smartphone, Globe, Star, TrendingUp, Award, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const skillCategories = [
    {
      title: 'Frontend & Frameworks',
      icon: Code,
      gradient: 'from-blue-500 via-purple-500 to-indigo-600',
      glow: 'shadow-blue-500/25',
      skills: [
        { name: 'React', level: 80, years: 'Intermediate' },
        { name: 'TypeScript', level: 40, years: 'Beginner' },
        { name: 'Next.js', level: 75, years: 'Intermediate' },
        { name: 'React Query', level: 40, years: 'Exploring' },
        { name: 'Tailwind CSS', level: 85, years: 'Intermediate' },
        { name: 'Styled Components', level: 50, years: 'Beginner' },
      ],
    },
    // {
    //   title: 'Performance & Tooling',
    //   icon: Zap,
    //   gradient: 'from-green-500 via-emerald-500 to-teal-600',
    //   glow: 'shadow-green-500/25',
    //   skills: [
    //     { name: 'Webpack', level: 90, years: '5+' },
    //     { name: 'Vite', level: 85, years: '2+' },
    //     { name: 'Core Web Vitals', level: 95, years: '4+' },
    //     { name: 'Bundle Analysis', level: 90, years: '4+' },
    //     { name: 'GraphQL', level: 85, years: '3+' },
    //     { name: 'Micro-frontends', level: 80, years: '2+' },
    //   ],
    // },
    // {
    //   title: 'Testing & DevOps',
    //   icon: Database,
    //   gradient: 'from-orange-500 via-red-500 to-pink-600',
    //   glow: 'shadow-orange-500/25',
    //   skills: [
    //     { name: 'Jest', level: 90, years: '5+' },
    //     { name: 'React Testing Library', level: 95, years: '4+' },
    //     { name: 'Cypress', level: 85, years: '3+' },
    //     { name: 'Storybook', level: 90, years: '4+' },
    //     { name: 'GitHub Actions', level: 85, years: '3+' },
    //     { name: 'Docker', level: 75, years: '2+' },
    //   ],
    // },
    // {
    //   title: 'Data Visualization',
    //   icon: Palette,
    //   gradient: 'from-purple-500 via-pink-500 to-rose-600',
    //   glow: 'shadow-purple-500/25',
    //   skills: [
    //     { name: 'D3.js', level: 85, years: '4+' },
    //     { name: 'Recharts', level: 90, years: '3+' },
    //     { name: 'Canvas API', level: 80, years: '3+' },
    //     { name: 'WebGL', level: 75, years: '2+' },
    //     { name: 'Observable', level: 80, years: '2+' },
    //     { name: 'Figma', level: 85, years: '5+' },
    //   ],
    // },
  ];

  const tools = [
    { name: 'VS Code', category: 'Editor', icon: '💻' },
    { name: 'Git & GitHub', category: 'Version Control', icon: '🔧' },
    { name: 'Figma', category: 'Design', icon: '🎨' },
    { name: 'Postman', category: 'API Testing', icon: '📡' },
    // { name: 'Slack', category: 'Communication', icon: '💬' },
    // { name: 'Jira', category: 'Project Management', icon: '📋' },
    { name: 'Webpack', category: 'Build Tools', icon: '⚡' },
    { name: 'Vite', category: 'Build Tools', icon: '🚀' },
    // { name: 'Jest', category: 'Testing', icon: '🧪' },
    // { name: 'Cypress', category: 'E2E Testing', icon: '🔍' },
    { name: 'ESLint', category: 'Code Quality', icon: '✨' },
    { name: 'Prettier', category: 'Code Formatting', icon: '💅' },
    { name: 'ExpressJS', category: 'Backend', icon: '👨‍💻' },
  ];

  const achievements = [
    // { 
    //   number: '100M+', 
    //   label: 'Users Impacted', 
    //   icon: Globe,
    //   description: 'Applications serving millions globally',
    //   gradient: 'from-blue-500 to-cyan-500'
    // },
    // { 
    //   number: '60%', 
    //   label: 'Performance Gains', 
    //   icon: TrendingUp,
    //   description: 'Average improvement in Core Web Vitals',
    //   gradient: 'from-green-500 to-emerald-500'
    // },
    // { 
    //   number: '8', 
    //   label: 'Engineers Mentored', 
    //   icon: Award,
    //   description: 'Junior to senior developer growth',
    //   gradient: 'from-purple-500 to-pink-500'
    // },
    // { 
    //   number: '2.5k+', 
    //   label: 'GitHub Stars', 
    //   icon: Star,
    //   description: 'Open source contributions',
    //   gradient: 'from-orange-500 to-red-500'
    // },
  ];

  const handleResumeDownload = () => {
   const link = document.createElement("a");
  link.href = "/assets/Web Dev.pdf"; // path from public folder
  link.download = "/assets/Web Dev.pdf"; // file name on download
  link.click();
};

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-300 dark:bg-blue-900 rounded-full opacity-10 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300 dark:bg-purple-900 rounded-full opacity-10 animate-pulse" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-300 dark:bg-green-900 rounded-full opacity-10 animate-pulse" />
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
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6"
            >
              <Zap size={16} />
              <span>Technical Expertise</span>
            </motion.div>

            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="block">Skills &</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Experience
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Deep expertise in frontend engineering, performance optimization, and developer tooling. 
              Focused on building scalable applications that serve millions of users.
            </p>
            
            <motion.button
              onClick={handleResumeDownload}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              <span>Download Resume</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Core Competencies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Specialized skills developed through years of hands-on experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: categoryIndex * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                onHoverStart={() => setHoveredCategory(categoryIndex)}
                onHoverEnd={() => setHoveredCategory(null)}
                className={`relative bg-white dark:bg-gray-800 p-8 rounded-3xl border-2 border-gray-100 dark:border-gray-700 transition-all duration-700 ${hoveredCategory === categoryIndex ? `shadow-2xl ${category.glow}` : 'shadow-lg'}`}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 rounded-3xl transition-opacity duration-500`}
                  animate={{ opacity: hoveredCategory === categoryIndex ? 0.05 : 0 }}
                />

                {/* Floating Orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
                  <motion.div
                    className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-full opacity-20 blur-xl`}
                    animate={{ 
                      scale: hoveredCategory === categoryIndex ? 1.5 : 1,
                      rotate: hoveredCategory === categoryIndex ? 180 : 0
                    }}
                    transition={{ duration: 0.8 }}
                  />
                  <motion.div
                    className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-full opacity-15 blur-lg`}
                    animate={{ 
                      scale: hoveredCategory === categoryIndex ? 1.3 : 1,
                      rotate: hoveredCategory === categoryIndex ? -90 : 0
                    }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  />
                </div>

                {/* Header */}
                <div className="relative z-10 flex items-center space-x-4 mb-8">
                  <motion.div 
                    className={`p-4 bg-gradient-to-r ${category.gradient} rounded-2xl`}
                    animate={{ 
                      scale: hoveredCategory === categoryIndex ? 1.1 : 1,
                      rotate: hoveredCategory === categoryIndex ? 5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {category.skills.length} technologies
                    </p>
                  </div>
                </div>
                
                {/* Skills */}
                <div className="relative z-10 space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex} 
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-base font-semibold text-gray-800 dark:text-gray-200">
                            {skill.name}
                          </span>
                          <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                            {skill.years}
                          </span>
                        </div>
                        <motion.span 
                          className="text-sm font-bold text-gray-600 dark:text-gray-400"
                          animate={{ 
                            scale: hoveredCategory === categoryIndex ? 1.1 : 1,
                            color: hoveredCategory === categoryIndex ? '#3B82F6' : undefined
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full relative`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.2, 
                            delay: skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        >
                          {/* Shimmer effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              ease: "linear",
                              delay: skillIndex * 0.2
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.gradient} opacity-0 pointer-events-none`}
                  animate={{ opacity: hoveredCategory === categoryIndex ? 0.1 : 0 }}
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

      {/* Tools & Technologies */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Daily Workflow
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The tools and technologies that power my productivity
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group relative bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                {/* Icon */}
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                
                {/* Content */}
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {tool.category}
                </p>

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Impact & Recognition
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Measurable outcomes from my work at leading technology companies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700"
              >
                {/* Background gradient on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 rounded-3xl transition-opacity duration-500`}
                  whileHover={{ opacity: 0.05 }}
                />

                {/* Icon */}
                <motion.div 
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${achievement.gradient} rounded-2xl mb-6 relative z-10`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <achievement.icon className="w-10 h-10 text-white" />
                  
                  {/* Pulse effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${achievement.gradient} rounded-2xl opacity-75`}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.75, 0.3, 0.75]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                
                {/* Number */}
                <motion.div 
                  className="text-4xl font-bold text-gray-900 dark:text-white mb-2 relative z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {achievement.number}
                </motion.div>
                
                {/* Label */}
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 relative z-10">
                  {achievement.label}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 relative z-10">
                  {achievement.description}
                </p>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;