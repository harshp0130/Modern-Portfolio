import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code2, Star, Users, TrendingUp, ArrowUpRight, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  index: number;
  impact?: string;
  stars?: string;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  index,
  impact,
  stars,
  category,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const categoryConfig = {
    enterprise: {
      gradient: 'from-blue-500 via-purple-500 to-indigo-600',
      icon: Users,
      glow: 'shadow-blue-500/25',
      border: 'border-blue-200 dark:border-blue-800',
    },
    'open-source': {
      gradient: 'from-green-500 via-emerald-500 to-teal-600',
      icon: Star,
      glow: 'shadow-green-500/25',
      border: 'border-green-200 dark:border-green-800',
    },
    personal: {
      gradient: 'from-orange-500 via-red-500 to-pink-600',
      icon: Sparkles,
      glow: 'shadow-orange-500/25',
      border: 'border-orange-200 dark:border-orange-800',
    },
  };

  const config = categoryConfig[category];
  const CategoryIcon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay: index * 0.15, 
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`group relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden transition-all duration-700 ${config.border} border-2 ${isHovered ? `shadow-2xl ${config.glow}` : 'shadow-lg'}`}
    >
      {/* Animated Background Gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 transition-opacity duration-500`}
        animate={{ opacity: isHovered ? 0.05 : 0 }}
      />

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${config.gradient} rounded-full opacity-20 blur-xl`}
          animate={{ 
            scale: isHovered ? 1.5 : 1,
            rotate: isHovered ? 180 : 0
          }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br ${config.gradient} rounded-full opacity-15 blur-lg`}
          animate={{ 
            scale: isHovered ? 1.3 : 1,
            rotate: isHovered ? -90 : 0
          }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />
      </div>

      {/* Category Badge */}
      <motion.div 
        className={`absolute top-6 left-6 z-20 px-4 py-2 rounded-2xl bg-gradient-to-r ${config.gradient} text-white text-sm font-semibold flex items-center space-x-2 backdrop-blur-sm`}
        animate={{ 
          scale: isHovered ? 1.05 : 1,
          y: isHovered ? -2 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <CategoryIcon size={14} />
        <span className="capitalize">{category.replace('-', ' ')}</span>
      </motion.div>

      {/* Image Container */}
      <div className="relative h-72 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{ 
            scale: isHovered ? 1.15 : 1.05,
            filter: isHovered ? 'brightness(1.1) contrast(1.1)' : 'brightness(1) contrast(1)'
          }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Dynamic Gradient Overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent`}
          animate={{ opacity: isHovered ? 0.9 : 0.7 }}
          transition={{ duration: 0.4 }}
        />

        {/* Floating Action Buttons */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-4"
            >
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn p-4 bg-white/95 dark:bg-gray-800/95 rounded-2xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 backdrop-blur-md shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={24} className="text-gray-800 dark:text-gray-200 group-hover/btn:text-blue-600 transition-colors" />
              </motion.a>
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group/btn p-4 bg-gradient-to-r ${config.gradient} rounded-2xl hover:shadow-lg transition-all duration-300`}
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUpRight size={24} className="text-white" />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Overlay */}
        {(impact || stars) && (
          <motion.div 
            className="absolute bottom-6 right-6 flex space-x-3"
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {stars && (
              <motion.div 
                className="px-3 py-2 bg-black/70 backdrop-blur-md rounded-xl text-white text-sm flex items-center space-x-2 border border-white/20"
                whileHover={{ scale: 1.05 }}
              >
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{stars}</span>
              </motion.div>
            )}
            {impact && (
              <motion.div 
                className="px-3 py-2 bg-black/70 backdrop-blur-md rounded-xl text-white text-sm flex items-center space-x-2 border border-white/20"
                whileHover={{ scale: 1.05 }}
              >
                <TrendingUp size={14} className="text-green-400" />
                <span className="font-medium">{impact}</span>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="relative p-8">
        <motion.h3
          className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
          animate={{ y: isHovered ? -3 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
        
        <motion.p
          className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 leading-relaxed text-sm"
          animate={{ opacity: isHovered ? 0.9 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.slice(0, 4).map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: (index * 0.1) + (techIndex * 0.05),
                duration: 0.4,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gradient-to-r hover:${config.gradient} hover:text-white transition-all duration-300 cursor-default border border-gray-200 dark:border-gray-700`}
            >
              {tech}
            </motion.span>
          ))}
          {technologies.length > 4 && (
            <motion.span 
              className="px-3 py-1.5 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-xl border border-gray-300 dark:border-gray-600"
              whileHover={{ scale: 1.05 }}
            >
              +{technologies.length - 4} more
            </motion.span>
          )}
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-6">
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
              whileHover={{ x: 2 }}
            >
              <Github size={16} />
              <span>Source</span>
            </motion.a>
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
              whileHover={{ x: 2 }}
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </motion.a>
          </div>
          
          {/* Status Indicator */}
          <motion.div
            className="flex items-center space-x-2"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={`w-3 h-3 rounded-full bg-gradient-to-r ${config.gradient}`}
              animate={{ 
                scale: isHovered ? [1, 1.3, 1] : 1,
                opacity: isHovered ? [1, 0.7, 1] : 1
              }}
              transition={{ 
                duration: 1.5, 
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
            />
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Active</span>
          </motion.div>
        </div>
      </div>

      {/* Hover Border Effect */}
      <motion.div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${config.gradient} opacity-0 pointer-events-none`}
        animate={{ opacity: isHovered ? 0.1 : 0 }}
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
  );
};

export default ProjectCard;