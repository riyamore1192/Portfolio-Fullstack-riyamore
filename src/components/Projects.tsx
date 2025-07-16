// import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, CheckCircle, MapPin, User } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A responsive portfolio website showcasing my projects and skills. Features smooth animations, contact form integration, and optimized performance with modern web technologies.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
      liveUrl: "https://portfolio-riyamore-fullstack.netlify.app",
      githubUrl: "https://github.com/riyamore1192/Portfolio-Fullstack-riyamore",
      icon: User,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "To Do List Application",
      description: "A comprehensive task management application with user authentication, real-time updates, and intuitive drag-and-drop functionality. Features include task categorization, due dates, priority levels, and progress tracking.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MySQL", "JWT", "Tailwind CSS"],
      liveUrl: "https://todo-list-applition.netlify.app/login",
      githubUrl: "https://github.com/riyamore1192/To-do-list-app",
      icon: CheckCircle,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Tour Booking App",
      description: "A full-stack travel booking platform with secure payment integration, tour package management, and user reviews. Includes admin dashboard for tour management and booking analytics.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MySQL", "JWT", "CSS"],
      // liveUrl: "https://example.com",
      githubUrl: "https://github.com/riyamore1192/Tour-web-clone",
      icon: MapPin,
      color: "from-blue-500 to-cyan-500",
    },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  return (
    <>
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">My Projects</h2>
            <motion.div
              className="w-20 h-1 bg-blue-600 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Here are some of the projects I've built to showcase my skills and passion for development
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <motion.div
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 transform md:-translate-x-0.5"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />

            <motion.div
              className="space-y-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={projectVariants}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-8 md:left-1/2 w-16 h-16 transform -translate-x-8 md:-translate-x-8 z-10"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                      delay: index * 0.2
                    }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  {/* Project Card */}
                  <motion.div
                    className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                      }`}
                    whileHover={{
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                      <div className="relative overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="absolute top-4 left-4 flex items-center space-x-2">
                          {/* <span className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-sm rounded-full font-medium`}>
                            {project.year}
                          </span> */}
                          <div className="flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                            <Calendar className="w-4 h-4 text-slate-600 mr-1" />
                            {/* <span className="text-slate-600 text-sm font-medium">{project.duration}</span> */}
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                        <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: techIndex * 0.1 + 0.5 }}
                              whileHover={{ scale: 1.1 }}
                              className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>

                        <div className="flex space-x-4">
                          <motion.a
                            href={project.liveUrl}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </motion.a>
                          <motion.a
                            href={project.githubUrl}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 px-4 py-2 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                          >
                            <Github className="w-4 h-4" />
                            <span>Code</span>
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Want to see more?</h3>
              <p className="text-slate-600 mb-6">
                I'm constantly working on new projects and learning new technologies.
                Check out my GitHub for more repositories and contributions.
              </p>
              <motion.a
                href="https://github.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors duration-200 font-medium"
              >
                <Github className="w-5 h-5" />
                <span>View All Projects</span>
              </motion.a>
            </div> */}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;