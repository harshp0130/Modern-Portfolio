import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Stars, Zap } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="relative">
      <motion.button
        onClick={toggleDarkMode}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="group relative w-16 h-8 rounded-full p-1 transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
        style={{
          background: darkMode 
            ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' 
            : 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)'
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Track Background with animated gradient */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-20"
          animate={{
            background: darkMode
              ? ['linear-gradient(45deg, #3b82f6, #8b5cf6)', 'linear-gradient(45deg, #8b5cf6, #3b82f6)']
              : ['linear-gradient(45deg, #f97316, #eab308)', 'linear-gradient(45deg, #eab308, #f97316)']
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        />

        {/* Sliding Toggle Ball */}
        <motion.div
          className="relative w-6 h-6 rounded-full shadow-lg flex items-center justify-center overflow-hidden"
          animate={{
            x: darkMode ? 32 : 0,
            background: darkMode 
              ? 'linear-gradient(135deg, #1e40af 0%, #3730a3 100%)'
              : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
          }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 30,
            duration: 0.6
          }}
        >
          {/* Inner glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: darkMode
                ? isHovered 
                  ? '0 0 20px rgba(59, 130, 246, 0.8), inset 0 0 20px rgba(59, 130, 246, 0.3)'
                  : '0 0 10px rgba(59, 130, 246, 0.5), inset 0 0 10px rgba(59, 130, 246, 0.2)'
                : isHovered
                  ? '0 0 20px rgba(251, 191, 36, 0.8), inset 0 0 20px rgba(251, 191, 36, 0.3)'
                  : '0 0 10px rgba(251, 191, 36, 0.5), inset 0 0 10px rgba(251, 191, 36, 0.2)'
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Icon Container */}
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              {darkMode ? (
                <motion.div
                  key="moon"
                  initial={{ opacity: 0, rotate: -180, scale: 0 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 180, scale: 0 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                  className="relative"
                >
                  <Moon size={14} className="text-blue-100" />
                  
                  {/* Animated stars around moon */}
                  <AnimatePresence>
                    {isHovered && (
                      <>
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ 
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0],
                              rotate: 360
                            }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ 
                              duration: 1.5,
                              repeat: Infinity,
                              delay: i * 0.2,
                              ease: "easeInOut"
                            }}
                            className="absolute"
                            style={{
                              top: `${-8 + Math.sin(i * 120 * Math.PI / 180) * 12}px`,
                              left: `${-8 + Math.cos(i * 120 * Math.PI / 180) * 12}px`,
                            }}
                          >
                            <Stars size={3} className="text-blue-300" />
                          </motion.div>
                        ))}
                      </>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ opacity: 0, rotate: 180, scale: 0 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -180, scale: 0 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                  className="relative"
                >
                  <Sun size={14} className="text-orange-600" />
                  
                  {/* Animated rays around sun */}
                  <AnimatePresence>
                    {isHovered && (
                      <>
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ 
                              opacity: [0, 1, 0],
                              scale: [0, 1.5, 0],
                              rotate: [0, 180, 360]
                            }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ 
                              duration: 1,
                              repeat: Infinity,
                              delay: i * 0.1,
                              ease: "easeInOut"
                            }}
                            className="absolute w-0.5 h-3 bg-gradient-to-t from-transparent via-orange-400 to-transparent rounded-full"
                            style={{
                              top: '50%',
                              left: '50%',
                              transformOrigin: 'center bottom',
                              transform: `translate(-50%, -100%) rotate(${i * 60}deg)`,
                            }}
                          />
                        ))}
                      </>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Floating particles in track */}
        <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${
                darkMode ? 'bg-blue-400' : 'bg-orange-300'
              }`}
              style={{
                left: `${15 + (i * 8)}%`,
                top: '50%',
              }}
              animate={{
                y: isHovered ? [0, -8, 0] : [0, -4, 0],
                opacity: isHovered ? [0.3, 1, 0.3] : [0.2, 0.6, 0.2],
                scale: isHovered ? [1, 1.5, 1] : [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5 + (i * 0.1),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1
              }}
            />
          ))}
        </div>

        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: darkMode
              ? isHovered 
                ? '0 0 30px rgba(59, 130, 246, 0.6)'
                : '0 0 15px rgba(59, 130, 246, 0.3)'
              : isHovered
                ? '0 0 30px rgba(251, 191, 36, 0.6)'
                : '0 0 15px rgba(251, 191, 36, 0.3)'
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Lightning effect on click */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute -top-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                <Zap size={12} className={darkMode ? 'text-blue-400' : 'text-orange-400'} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -40, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
            className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none"
          >
            <div className={`px-3 py-1.5 rounded-lg text-xs font-medium shadow-lg border ${
              darkMode 
                ? 'bg-gray-800 text-blue-200 border-blue-500/30' 
                : 'bg-white text-orange-800 border-orange-200'
            }`}>
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
              
              {/* Tooltip arrow */}
              <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
                darkMode ? 'border-t-gray-800' : 'border-t-white'
              }`} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;