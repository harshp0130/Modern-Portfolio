import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Comming Soon',
      description: 'Coming Soon.',
      image: 'Coming Soon',
      technologies: ['React', 'TypeScript', 'GraphQL', 'Micro-frontends', 'Tailwind CSS', 'Jest'],
      githubUrl: 'https://github.com/alexchen-dev/stripe-connect',
      liveUrl: 'https://connect.stripe.com',
      category: 'enterprise' as const,
      impact: '45% faster',
      stars: undefined,
    },
    // {
    //   title: 'React Performance Toolkit',
    //   description: 'Open-source toolkit for React performance monitoring and optimization. Features bundle analysis, component profiling, and Core Web Vitals tracking. Used by 500+ companies worldwide.',
    //   image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['React', 'Webpack', 'Rollup', 'Web Vitals API', 'TypeScript', 'Node.js'],
    //   githubUrl: 'https://github.com/alexchen-dev/react-perf-toolkit',
    //   liveUrl: 'https://react-perf-toolkit.dev',
    //   category: 'open-source' as const,
    //   impact: '500+ users',
    //   stars: '2.5k',
    // },
    // {
    //   title: 'Airbnb Host Onboarding',
    //   description: 'Complete redesign of host listing creation flow. Implemented progressive disclosure patterns and real-time validation, increasing completion rates by 35% and reducing support tickets.',
    //   image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['React', 'Next.js', 'Framer Motion', 'React Hook Form', 'Storybook', 'Cypress'],
    //   githubUrl: 'https://github.com/alexchen-dev/airbnb-onboarding',
    //   liveUrl: 'https://airbnb.com/host',
    //   category: 'enterprise' as const,
    //   impact: '35% increase',
    //   stars: undefined,
    // },
    // {
    //   title: 'Neural Network Visualizer',
    //   description: 'Interactive web application for visualizing neural network architectures and training processes. Built with D3.js and WebGL for smooth 60fps animations with complex datasets.',
    //   image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['React', 'D3.js', 'WebGL', 'Three.js', 'TensorFlow.js', 'Canvas API'],
    //   githubUrl: 'https://github.com/alexchen-dev/neural-viz',
    //   liveUrl: 'https://neural-viz.alexchen.dev',
    //   category: 'personal' as const,
    //   impact: undefined,
    //   stars: '1.2k',
    // },
    // {
    //   title: 'Shopify Merchant Analytics',
    //   description: 'Real-time analytics dashboard processing 10M+ events daily. Built custom charting components and implemented efficient data fetching strategies for large datasets with sub-second load times.',
    //   image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['React', 'D3.js', 'React Query', 'WebSockets', 'Recharts', 'Redis'],
    //   githubUrl: 'https://github.com/alexchen-dev/shopify-analytics',
    //   liveUrl: 'https://shopify.com/admin/analytics',
    //   category: 'enterprise' as const,
    //   impact: '10M+ events',
    //   stars: undefined,
    // },
    // {
    //   title: 'Design System Components',
    //   description: 'Comprehensive design system used across 15+ teams at Airbnb. Built with accessibility-first approach, comprehensive Storybook documentation, and automated visual regression testing.',
    //   image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['React', 'Storybook', 'Styled Components', 'Jest', 'Chromatic', 'Figma'],
    //   githubUrl: 'https://github.com/alexchen-dev/design-system',
    //   liveUrl: 'https://design-system.alexchen.dev',
    //   category: 'open-source' as const,
    //   impact: '15+ teams',
    //   stars: '800',
    // },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              A curated collection of projects showcasing enterprise-scale applications, 
              open-source contributions, and experimental work in frontend engineering.
            </p>
            
            {/* Stats */}
            <div className="flex justify-center space-x-8 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Open to Internship/Freelance</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Fresher</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Actively Growing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always excited to collaborate on challenging projects that push the boundaries 
              of what's possible with modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Work Together
              </motion.a>
              <motion.a
                href="https://github.com/alexchen-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-4 rounded-xl font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All on GitHub
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;