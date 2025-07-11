import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Coffee, Code, Briefcase, Award, Users, TrendingUp, Star, Zap, Heart,  Sparkles, Globe, Target } from 'lucide-react';


const About: React.FC = () => {
  const [hoveredExperience, setHoveredExperience] = useState<number | null>(null);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'As a student',
      period: '2022 - Present',
      description: 'Built projects using React, Node.js, and MongoDB. Currently exploring ML with Python.',
      gradient: 'from-blue-500 via-purple-500 to-indigo-600',
      glow: 'shadow-blue-500/25',
      icon: Briefcase,
      achievements: ['MERN', 'AI/ML', 'Frontend'],
    },
    {
      title: 'Java Developer Internr',
      company: 'Private Organization',
      period: 'May 2025 - June 2025',
      description: 'Worked on Spring Boot APIs, SQL, and backend logic in a real-world Java environment.',
      gradient: 'from-green-500 via-emerald-500 to-teal-600',
      glow: 'shadow-green-500/25',
      icon: Users,
      achievements: ['JAVA', 'Spring-Boot', 'APIs'],
    },
    // {
    //   title: 'Frontend Engineer',
    //   company: 'Shopify',
    //   period: '2019 - 2021',
    //   description: 'Built merchant dashboard features used by 2M+ sellers. Improved Core Web Vitals scores by 40% through performance optimizations.',
    //   gradient: 'from-orange-500 via-red-500 to-pink-600',
    //   glow: 'shadow-orange-500/25',
    //   icon: TrendingUp,
    //   achievements: ['2M+ sellers impacted', '40% performance boost', 'Core Web Vitals optimization'],
    // },
    // {
    //   title: 'Software Engineer',
    //   company: 'Palantir Technologies',
    //   period: '2018 - 2019',
    //   description: 'Developed data visualization tools for government clients. Built React components handling complex datasets with D3.js integration.',
    //   gradient: 'from-purple-500 via-pink-500 to-rose-600',
    //   glow: 'shadow-purple-500/25',
    //   icon: Code,
    //   achievements: ['Government clients', 'Complex data visualization', 'D3.js integration'],
    // },
  ];

  const values = [
    {
      title: 'Clean Architecture',
      description: 'Writing maintainable, scalable, and well-documented code that stands the test of time and enables team collaboration.',
      icon: Code,
      gradient: 'from-blue-500 to-cyan-500',
      glow: 'shadow-blue-500/25',
    },
    {
      title: 'User-Centered Design',
      description: 'Putting the user first in every design decision and development choice, creating intuitive and accessible experiences.',
      icon: Heart,
      gradient: 'from-pink-500 to-rose-500',
      glow: 'shadow-pink-500/25',
    },
    {
      title: 'Continuous Learning',
      description: 'Staying up-to-date with the latest technologies and best practices, always pushing the boundaries of what\'s possible.',
      icon: Sparkles,
      gradient: 'from-purple-500 to-indigo-500',
      glow: 'shadow-purple-500/25',
    },
    {
      title: 'Team Collaboration',
      description: 'Working effectively with cross-functional teams and communicating clearly with stakeholders at all levels.',
      icon: Users,
      gradient: 'from-green-500 to-emerald-500',
      glow: 'shadow-green-500/25',
    },
    {
      title: 'Performance Excellence',
      description: 'Building fast, efficient applications that provide excellent user experiences and scale to millions of users.',
      icon: Zap,
      gradient: 'from-yellow-500 to-orange-500',
      glow: 'shadow-yellow-500/25',
    },
    {
      title: 'Innovation Mindset',
      description: 'Always looking for creative solutions and new ways to solve problems, pushing the envelope of web development.',
      icon: Target,
      gradient: 'from-red-500 to-pink-500',
      glow: 'shadow-red-500/25',
    },
  ];

  const stats = [
    { number: '5+', label: 'Projects Deployed', icon: Calendar },
    { number: 'Freshie', label: ' Actively growing developer', icon: Globe },
    { number: '8+', label: 'Collaborated with peers', icon: Users },
    { number: '10+', label: 'GitHub Repos', icon: Star },
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8"
              >
                <Sparkles size={16} />
                <span>About Me</span>
              </motion.div>

              <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-8">
                <span className="block">Meet</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Harsh Patel
                </span>
              </h1>
              
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
    I'm a final-year Computer Science Engineering student with a passion for building full-stack web applications and exploring the exciting world of Artificial Intelligence and Machine Learning. Over the past few years, I’ve worked on a variety of personal and academic projects that span both frontend and backend development.
                </p>
                <p>

My tech stack includes modern tools like React, Node.js, Express, MongoDB, and Tailwind CSS. I focus on writing clean, scalable code and enjoy bringing ideas to life through thoughtful UI/UX and robust APIs. Lately, I’ve also been diving into machine learning concepts, working on small experiments with Python, scikit-learn, and TensorFlow.
              </p>
I’m a self-driven learner who thrives in hands-on environments, constantly exploring new technologies and best practices. Whether it’s deploying a MERN stack app or understanding the logic behind an ML algorithm, I’m always excited to solve problems and build meaningful solutions.
              <p>
Currently, I’m looking forward to contributing to real-world projects, collaborating with other developers, and growing as a full-stack engineer and AI enthusiast.


                </p>
              </div>
              
              <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-600 dark:text-gray-300">
                <motion.div 
                  className="flex items-center space-x-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <MapPin size={16} />
                  <span>India / Gujarat / Remote Friendly</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Calendar size={16} />
                  <span> Open to internships / freelance</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Coffee size={16} />
                  <span>Chai Ke Liye Naa Nhi Kahunga </span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/harsh.jpg"
                  alt="Harsh Patel"
                  className="w-full h-96 object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl -z-10"
                animate={{ rotate: [0, 2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl -z-20 opacity-50"
                animate={{ rotate: [0, -2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="group text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-3"
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
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
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
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8"
            >
              <Briefcase size={16} />
              <span>Professional Journey</span>
            </motion.div>

            <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-8">
              <span className="block">My Career</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                Timeline
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
             A journey of continuous learning, building real-world projects, and exploring technologies that power modern applications.
            </p>
          </motion.div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
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
                onHoverStart={() => setHoveredExperience(index)}
                onHoverEnd={() => setHoveredExperience(null)}
                className={`group relative bg-white dark:bg-gray-800 p-10 rounded-3xl border-2 border-gray-100 dark:border-gray-700 transition-all duration-700 ${hoveredExperience === index ? `shadow-2xl ${exp.glow}` : 'shadow-lg'}`}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 rounded-3xl transition-opacity duration-500`}
                  animate={{ opacity: hoveredExperience === index ? 0.05 : 0 }}
                />

                {/* Floating Orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
                  <motion.div
                    className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${exp.gradient} rounded-full opacity-20 blur-xl`}
                    animate={{ 
                      scale: hoveredExperience === index ? 1.5 : 1,
                      rotate: hoveredExperience === index ? 180 : 0
                    }}
                    transition={{ duration: 0.8 }}
                  />
                </div>

                <div className="relative z-10 flex items-start space-x-6">
                  {/* Icon */}
                  <motion.div 
                    className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${exp.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                    animate={{ 
                      scale: hoveredExperience === index ? 1.1 : 1,
                      rotate: hoveredExperience === index ? 5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <exp.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <motion.h3
                          className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                          animate={{ y: hoveredExperience === index ? -3 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {exp.title}
                        </motion.h3>
                        <p className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                          {exp.company}
                        </p>
                      </div>
                      <motion.span 
                        className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${exp.gradient} text-white rounded-xl text-sm font-semibold mt-2 lg:mt-0`}
                        animate={{ scale: hoveredExperience === index ? 1.05 : 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {exp.period}
                      </motion.span>
                    </div>
                    
                    <motion.p
                      className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                      animate={{ opacity: hoveredExperience === index ? 0.9 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {exp.description}
                    </motion.p>

                    {/* Achievements */}
                    <div className="flex flex-wrap gap-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.span
                          key={achIndex}
                          className="px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-600"
                          initial={{ opacity: 0, scale: 0.8, y: 10 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ 
                            delay: (index * 0.1) + (achIndex * 0.05),
                            duration: 0.4,
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {achievement}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${exp.gradient} opacity-0 pointer-events-none`}
                  animate={{ opacity: hoveredExperience === index ? 0.1 : 0 }}
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

      {/* Values/Principles */}
      <section className="py-32 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
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
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8"
            >
              <Heart size={16} />
              <span>Core Values</span>
            </motion.div>

            <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-8">
              <span className="block">What Drives</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
                My Work
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide my approach to development and shape every project I work on
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                onHoverStart={() => setHoveredValue(index)}
                onHoverEnd={() => setHoveredValue(null)}
                className={`group relative bg-white dark:bg-gray-900 p-8 rounded-3xl border-2 border-gray-100 dark:border-gray-700 transition-all duration-700 ${hoveredValue === index ? `shadow-2xl ${value.glow}` : 'shadow-lg'}`}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 rounded-3xl transition-opacity duration-500`}
                  animate={{ opacity: hoveredValue === index ? 0.05 : 0 }}
                />

                {/* Floating Orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
                  <motion.div
                    className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-full opacity-20 blur-xl`}
                    animate={{ 
                      scale: hoveredValue === index ? 1.3 : 1,
                      rotate: hoveredValue === index ? 90 : 0
                    }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {/* Icon */}
                <motion.div 
                  className={`relative z-10 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl mb-6 shadow-lg`}
                  animate={{ 
                    scale: hoveredValue === index ? 1.1 : 1,
                    rotate: hoveredValue === index ? 5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.h3
                    className="text-xl font-bold text-gray-900 dark:text-white mb-4"
                    animate={{ y: hoveredValue === index ? -3 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {value.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-gray-600 dark:text-gray-300 leading-relaxed"
                    animate={{ opacity: hoveredValue === index ? 0.9 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {value.description}
                  </motion.p>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${value.gradient} opacity-0 pointer-events-none`}
                  animate={{ opacity: hoveredValue === index ? 0.1 : 0 }}
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
    </div>
  );
};

export default About;