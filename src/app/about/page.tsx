"use client";

import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { FaRobot, FaLaptopCode, FaFutbol, FaUser, FaLightbulb, FaBriefcase, FaHandsHelping } from 'react-icons/fa';

export default function CalvinPortfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Spline Background */}
      <div className="fixed inset-0 z-0">
        <Spline
          className="w-full h-full"
          scene="https://prod.spline.design/W0tw675xYg3fnb0w/scene.splinecode"
        />
      </div>

      {/* Content Overlay */}
      <motion.div 
        className="relative z-10 min-h-screen p-8 md:p-12 max-w-[1400px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section - Left Aligned */}
        <motion.div 
          variants={cardVariants}
          className="ml-4 mb-16 mt-8"
        >
          <h1 className="text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text mb-4">
            Calvin Yeboah
          </h1>
          <p className="text-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text font-medium">
            Computer Science Major | University of Cincinnati
          </p>
        </motion.div>

        {/* Main Content - Asymmetric Grid */}
        <div className="grid grid-cols-12 gap-8 ml-4">
          {/* About Section - Wide */}
          <motion.section
            variants={cardVariants}
            className="col-span-6 glass-card p-8 backdrop-blur-[2px] bg-gradient-to-br from-purple-500/30 to-pink-500/30 
              rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform 
              hover:scale-[1.02] hover:rotate-1"
            style={{ perspective: '1000px' }}
          >
            <h2 className="text-3xl font-bold text-pink-500 flex items-center gap-3">
              <FaUser className="text-pink-400 text-3xl animate-pulse" />
              <span className="text-gradient-to-r from-pink-500 to-purple-500">About Me</span>
            </h2>
            <p className="text-white/90 leading-relaxed text-lg font-medium">
              Hello! I'm Calvin Yeboah, a passionate and driven 2nd-year Computer Science major with a minor in Information Technology 
              at the University of Cincinnati. I thrive on exploring the endless possibilities of technology.
            </p>
          </motion.section>

          {/* Passion Section - Narrow, Offset */}
          <motion.section
            variants={cardVariants}
            className="col-span-5 col-start-8 glass-card p-8 backdrop-blur-[2px] bg-gradient-to-br from-cyan-500/30 to-blue-500/30 
              rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <h2 className="text-3xl font-bold text-blue-500 flex items-center gap-3">
              <FaLightbulb className="text-yellow-400 text-3xl animate-pulse" />
              <span className="text-gradient-to-r from-blue-500 to-cyan-500">My Passion</span>
            </h2>
            <p className="text-white/90 leading-relaxed text-lg font-medium">
              From building projects to tackling coding challenges, I find joy in every aspect of programming.
            </p>
          </motion.section>

          {/* Experience Section - Offset */}
          <motion.section
            variants={cardVariants}
            className="col-span-7 col-start-2 glass-card p-8 backdrop-blur-[2px] bg-gradient-to-br from-pink-500/30 to-orange-500/30 
              rounded-2xl border border-white/20 hover:bg-white/20"
          >
            <h2 className="text-3xl font-bold text-orange-500 flex items-center gap-3">
              <FaBriefcase className="text-orange-400 text-3xl animate-pulse" />
              <span className="text-gradient-to-r from-orange-500 to-red-500">Experience</span>
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: "Software Developer Intern",
                  company: "TQL",
                  period: "Fall 2024",
                  description: "Contributed to designing and developing efficient software solutions."
                },
                {
                  title: "Volunteer Developer",
                  company: "TechElevate",
                  period: "Summer 2024 – Present",
                  description: "Working as a full-stack developer on responsive web applications."
                }
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    translateZ: 20 
                  }}
                  className="p-6 rounded-xl bg-white/5 border-l-4 border-pink-500/50 transform transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    {index === 0 ? 
                      <FaLaptopCode className="text-cyan-400 animate-pulse" /> : 
                      <FaHandsHelping className="text-green-400 animate-pulse" />
                    }
                    <span className={index === 0 ? "text-cyan-400" : "text-green-400"}>{exp.title}</span>
                  </h3>
                  <p className="text-pink-300">{exp.company} | {exp.period}</p>
                  <p className="text-white/80 mt-2">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Leadership Section - Different Offset */}
          <motion.section
            variants={cardVariants}
            className="col-span-5 col-start-6 glass-card p-8 backdrop-blur-[2px] bg-gradient-to-br from-blue-500/30 to-cyan-500/30 
              rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-6">
              Leadership
            </h2>
            <div className="space-y-4">
              {[
                { icon: <FaRobot />, title: "Robotics Club", desc: "Exploring robotics innovation" },
                { icon: <FaLaptopCode />, title: "UC IT Expo", desc: "Event organization" },
                { icon: <FaFutbol />, title: "Soccer Team Lead", desc: "Team management" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    x: 10,
                    rotateY: 5,
                    scale: 1.02
                  }}
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/20"
                >
                  <span className="text-cyan-300 text-xl">{item.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white/90">{item.title}</h3>
                    <p className="text-white/80 text-lg">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact Section - Wide */}
          <motion.section
            variants={cardVariants}
            className="col-span-8 glass-card p-8 backdrop-blur-[2px] bg-gradient-to-br from-purple-500/30 to-pink-500/30 
              rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-6">
              Connect
            </h2>
            <div className="flex flex-wrap gap-4">
              {[
                { name: "LinkedIn", href: "https://linkedin.com/in/calvinyeboah", class: "from-blue-400/90 to-cyan-500/90" },
                { name: "GitHub", href: "https://github.com/calvinyeboah", class: "from-purple-400/90 to-pink-500/90" },
                { name: "Email", href: "mailto:calvin.yeboah@example.com", class: "from-pink-400/90 to-orange-500/90" }
              ].map((link, index) => (
                <motion.a
                  key={index}
                  whileHover={{ 
                    scale: 1.1,
                    rotateZ: 2,
                    translateY: -5 
                  }}
                  whileTap={{ scale: 0.95 }}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 bg-gradient-to-r ${link.class} text-white rounded-full 
                    shadow-lg hover:shadow-white/25 font-medium backdrop-blur-sm`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
}