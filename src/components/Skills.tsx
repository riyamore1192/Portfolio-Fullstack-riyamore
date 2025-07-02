import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Shield, Globe, Palette, Server } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"]
    },
    {
      category: "Backend",
      icon: Server,
      color: "from-green-500 to-teal-500",
      skills: ["Node.js","Express.js"]
    },
    {
      category: "Database",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: ["MySQL"]
    },
    {
      category: "Authentication",
      icon: Shield,
      color: "from-orange-500 to-red-500",
      skills: ["JWT Authentication", "Authorization"]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <motion.h2 
            className="text-4xl font-bold text-slate-800 mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2
            }}
          >
            My Skills
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-blue-600 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p 
            className="text-xl text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Technologies and tools I work with to build modern web applications
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="bg-slate-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="text-center mb-6">
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <category.icon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-slate-800"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {category.category}
                </motion.h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    custom={skillIndex}
                    variants={skillVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#3b82f6",
                      color: "#ffffff",
                      transition: { duration: 0.2 }
                    }}
                    className="px-4 py-2 bg-white text-slate-700 rounded-lg font-medium text-center border border-slate-200 transition-colors duration-200"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-200/20 rounded-full blur-xl"
            animate={{
              y: [0, 15, 0],
              x: [0, -15, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;