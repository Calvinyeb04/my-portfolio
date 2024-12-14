"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { BsLightningChargeFill } from 'react-icons/bs';
import { FaAws, FaBrain, FaChartLine, FaChurch, FaCloud, FaCode, FaCogs, FaHandshake, FaJava, FaLaptopCode, FaLightbulb, FaMobile, FaNetworkWired, FaProjectDiagram, FaRocket, FaServer, FaSyncAlt, FaTruck, FaUsers, FaVideo, FaCheckCircle, FaGithub, FaDatabase, FaChartBar, FaFilm, FaRobot } from 'react-icons/fa';
import { IoIosSpeedometer } from 'react-icons/io';
import { SiCplusplus, SiDocker, SiFigma, SiGit, SiJavascript, SiMongodb, SiMysql, SiNodedotjs, SiPython, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { 
  FaBitcoin, 
  FaStar, 
  FaFile, 
  FaWallet, 
  FaArrowRight 
} from 'react-icons/fa';


const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="h-screen bg-black" />
});

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { icon: <SiJavascript className="text-yellow-600" />, name: "JavaScript" },
        { icon: <SiPython className="text-blue-600" />, name: "Python" },
        { icon: <FaJava className="text-red-500" />, name: "Java" },
        { icon: <SiCplusplus className="text-blue-700" />, name: "C++" },
        { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { icon: <SiReact className="text-cyan-500" />, name: "React" },
        { icon: <SiNodedotjs className="text-green-600" />, name: "Node.js" },
        { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind" },
        { icon: <FaServer className="text-purple-600" />, name: "REST APIs" },
      ]
    },
    {
      title: "Database & Cloud",
      skills: [
        { icon: <SiMysql className="text-blue-500" />, name: "MySQL" },
        { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
        { icon: <FaAws className="text-orange-500" />, name: "AWS" },
        { icon: <SiDocker className="text-blue-400" />, name: "Docker" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { icon: <SiGit className="text-orange-600" />, name: "Git" },
        { icon: <FaCode className="text-blue-500" />, name: "VS Code" },
        { icon: <SiFigma className="text-purple-500" />, name: "Figma" },
        { icon: <FaMobile className="text-gray-700" />, name: "Mobile Dev" },
      ]
    }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

  return (
    <main className="relative overflow-x-hidden" ref={containerRef}>
      {/* First section with the first Spline scene */}
      <section id="home" className="h-screen relative">
        <Spline
        scene="https://prod.spline.design/C7EGsyMouJ4K5BH9/scene.splinecode" 
        />
        
        {/* Add this scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          style={{ opacity, scale }}
        >
          <motion.div 
            className="flex flex-col items-center gap-2"
            initial={{ y: 0 }}
            animate={{ 
              y: [0, 10, 0],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <div className="text-white/80 font-medium tracking-wide text-sm">
              Scroll Down
            </div>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
              <motion.div 
                className="w-full h-3 bg-white/80 rounded-full"
                animate={{
                  y: [0, 14, 0],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
            </div>
            <motion.div
              className="w-4 h-4"
              animate={{
                y: [0, 5, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2
                }
              }}
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                className="w-full h-full text-white/80"
              >
                <path 
                  d="M12 4L12 20M12 20L18 14M12 20L6 14" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About section with second Spline scene */}
      <section id="about" className="min-h-screen relative">
        <div className="absolute inset-0">
          <Spline
        scene="https://prod.spline.design/Lq54kq3C9dU3aA0G/scene.splinecode" 
        />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-6 py-20">
          {/* Main Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Crafting Digital Excellence
            </h1>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Where Innovation Meets Implementation
            </p>
          </motion.div>

          <motion.div 
            className="grid gap-12"
            variants={{
              animate: {
                transition: { staggerChildren: 0.15 }
              }
            }}
            initial="initial"
            animate="animate"
          >
            {/* About Me Section - Full Width */}
            <motion.div 
              className="glass-card p-10 rounded-2xl shadow-xl"
              {...fadeIn}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-16 bg-gradient-to-b from-purple-600 to-blue-600"></div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-800 flex items-center gap-3">
                    <FaBrain className="text-purple-500 text-5xl" />
                    About Me
                  </h2>
                  <p className="text-xl text-gray-600 mt-2 flex items-center gap-2">
                    <FaLightbulb className="text-yellow-500" />
                    Transforming Ideas into Digital Reality
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <p className="text-gray-800 text-lg leading-relaxed">
                    As a dynamic 2nd-year Computer Science major at the University of Cincinnati, 
                    I bring a unique blend of technical expertise and creative problem-solving to every project. 
                    My journey in technology is driven by an insatiable curiosity and a commitment to excellence.
                  </p>
                  <p className="text-gray-800 text-lg leading-relaxed">
                    Beyond coding, I'm passionate about creating solutions that make a real difference. 
                    Whether it's developing intuitive user interfaces or architecting robust backend systems, 
                    I approach each challenge with enthusiasm and dedication.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="bg-white/30 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <FaRocket className="text-blue-500" />
                      Core Values
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-gray-700">
                        <FaLightbulb className="text-yellow-500 text-xl" /> 
                        Innovation-Driven Development
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <FaSyncAlt className="text-green-500 text-xl" /> 
                        Continuous Learning
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <FaUsers className="text-blue-500 text-xl" /> 
                        Collaborative Problem-Solving
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/30 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <FaCloud className="text-cyan-500" />
                      Current Focus
                    </h3>
                    <p className="text-gray-700 flex items-center gap-2">
                      <BsLightningChargeFill className="text-yellow-500" />
                      Exploring cutting-edge web technologies and cloud computing solutions while
                      maintaining a strong foundation in computer science fundamentals.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Professional Journey - Enhanced */}
            <motion.div id="experience" className="glass-card p-10 rounded-2xl shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-16 bg-gradient-to-b from-blue-600 to-cyan-600"></div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-800 flex items-center gap-3">
                    <FaProjectDiagram className="text-blue-500 text-5xl" />
                    Professional Journey
                  </h2>
                  <p className="text-xl text-gray-600 mt-2 flex items-center gap-2">
                    <FaRocket className="text-orange-500" />
                    Building Tomorrow's Solutions Today
                  </p>
                </div>
              </div>
　　 　　　　　<div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div className="bg-white/30 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <FaTruck className="text-blue-600" />
                      Software Developer Intern @ TQL
                    </h3>
                    <p className="text-gray-600 mb-4">Fall 2024</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-gray-700">
                        <FaCogs className="text-purple-500 mt-1" />
                        Developing innovative logistics solutions using cutting-edge technologies
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <IoIosSpeedometer className="text-green-500 mt-1" />
                        Implementing scalable features that enhance operational efficiency
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <FaHandshake className="text-blue-500 mt-1" />
                        Collaborating with cross-functional teams to deliver robust solutions
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/30 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <FaLaptopCode className="text-cyan-600" />
                      Full-Stack Developer @ TechElevate
                    </h3>
                    <p className="text-gray-600 mb-4">Summer 2024 – Present</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-gray-700">
                        <FaMobile className="text-purple-500 mt-1" />
                        Leading development of responsive web applications
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <FaServer className="text-green-500 mt-1" />
                        Implementing modern frontend frameworks and backend solutions
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <IoIosSpeedometer className="text-orange-500 mt-1" />
                        Optimizing application performance and user experience
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-white/30 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <FaChurch className="text-purple-600" />
                      IT Specialist @ Ghana SDA Church
                    </h3>
                    <p className="text-gray-600 mb-4">2023 – Present</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-gray-700">
                        <FaVideo className="text-red-500 mt-1" />
                        Revolutionized digital worship experience through modern streaming solutions
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <FaNetworkWired className="text-blue-500 mt-1" />
                        Led technical team in implementing and maintaining AV systems
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <FaCloud className="text-cyan-500 mt-1" />
                        Developed digital solutions for remote community engagement
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/40 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <FaChartLine className="text-green-500" />
                      Key Achievements
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-gray-700">
                        <FaProjectDiagram className="text-purple-500" /> Led 3 major technical projects
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <IoIosSpeedometer className="text-blue-500" /> Improved system efficiency by 40%
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <FaProjectDiagram className="text-purple-500" /> Mentored 5 junior developers
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Technical Arsenal Section */}
            <motion.div id="skills" className="glass-card p-10 rounded-2xl shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-16 bg-gradient-to-b from-green-500 to-emerald-600"></div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-800">Technical Arsenal</h2>
                  <p className="text-xl text-gray-600 mt-2">Tools & Technologies I Work With</p>
                </div>
              </div>

              <div className="space-y-12">
                {skillCategories.map((category, idx) => (
                  <div key={idx} className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          className="group relative bg-white/20 backdrop-blur-sm p-6 rounded-xl 
                            hover:bg-white/30 transition-all duration-300 transform hover:-translate-y-2"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 
                            rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          <div className="relative flex flex-col items-center gap-3">
                            <div className="text-3xl transform group-hover:scale-110 
                              transition-transform duration-300">
                              {skill.icon}
                            </div>
                            <span className="font-medium text-gray-800 group-hover:text-gray-900">
                              {skill.name}
                            </span>
                          </div>
                          
                          {/* Hover Effect Border */}
                          <div className="absolute inset-0 border-2 border-transparent hover:border-purple-500/30 
                            rounded-xl transition-colors duration-300" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

           

          </motion.div>

          
        </div>
     {/* Projects Section */}
<section id="projects" className="min-h-screen relative">
  <div className="absolute inset-0">
    <Spline scene="https://prod.spline.design/bkrOa4QKtd9kGFmk/scene.splinecode" />
  </div>

  <div className="relative z-10 container mx-auto px-6 py-20">
    {/* Projects Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Featured Projects</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
    </div>

    <motion.div className="grid md:grid-cols-2 gap-8">
      {/* AstroFlow Card */}
      <motion.div 
        className="bg-black/80 rounded-2xl overflow-hidden
          border-2 border-white/20 shadow-2xl hover:border-purple-500/50
          transform-gpu transition-all duration-300 hover:scale-[1.02]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
      >
        <div className="relative h-48 bg-gradient-to-br from-blue-900 to-purple-900 p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">AstroFlow</h3>
              <p className="text-purple-300 font-medium text-lg">
                AI-Driven Document Collaboration
              </p>
            </div>
            <div className="bg-black/30 p-3 rounded-xl">
              <FaBrain className="text-5xl text-purple-400" />
            </div>
          </div>
          
          <div className="absolute bottom-4 left-6 right-6 flex justify-between">
            <div className="bg-black/50 px-4 py-1.5 rounded-full flex items-center gap-2">
              <FaUsers className="text-purple-400" />
              <span className="text-white font-medium">5k+ Users</span>
            </div>
            <div className="bg-black/50 px-4 py-1.5 rounded-full flex items-center gap-2">
              <FaCloud className="text-blue-400" />
              <span className="text-white font-medium">Enterprise</span>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            Transform teamwork with innovative document collaboration. Combining real-time editing 
            with AI-powered features for enhanced productivity.
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-purple-400 mt-1.5 flex-shrink-0 text-lg" />
              <span className="text-gray-200">Real-time collaboration with AI assistance</span>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-purple-400 mt-1.5 flex-shrink-0 text-lg" />
              <span className="text-gray-200">Version control & secure cloud storage</span>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-purple-400 mt-1.5 flex-shrink-0 text-lg" />
              <span className="text-gray-200">Cross-platform accessibility</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-900/80 text-blue-200 px-4 py-1.5 rounded-full text-sm font-medium">
              React
            </span>
            <span className="bg-green-900/80 text-green-200 px-4 py-1.5 rounded-full text-sm font-medium">
              Node.js
            </span>
            <span className="bg-purple-900/80 text-purple-200 px-4 py-1.5 rounded-full text-sm font-medium">
              TensorFlow
            </span>
            <span className="bg-orange-900/80 text-orange-200 px-4 py-1.5 rounded-full text-sm font-medium">
              AWS
            </span>
          </div>

          <div className="flex gap-4 pt-2">
            <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 
              text-white py-3 rounded-xl hover:opacity-90 transition-opacity 
              flex items-center justify-center gap-2 font-medium text-lg">
              <span>View Project</span>
              <FaArrowRight />
            </button>
            <a href="https://github.com/yourusername/astroflow" 
              className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-colors"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub className="text-2xl text-white" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* ASTRO Fitness Card */}
      <motion.div 
        className="bg-black/80 rounded-2xl overflow-hidden
          border-2 border-white/20 shadow-2xl hover:border-green-500/50
          transform-gpu transition-all duration-300 hover:scale-[1.02]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
      >
        <div className="relative h-48 bg-gradient-to-br from-green-900 to-teal-900 p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">ASTRO Fitness</h3>
              <p className="text-teal-300 font-medium text-lg">
                Redefining Wellness Through Technology
              </p>
            </div>
            <div className="bg-black/30 p-3 rounded-xl">
              <FaRocket className="text-5xl text-teal-400" />
            </div>
          </div>
          
          <div className="absolute bottom-4 left-6 right-6 flex justify-between">
            <div className="bg-black/50 px-4 py-1.5 rounded-full flex items-center gap-2">
              <FaMobile className="text-teal-400" />
              <span className="text-white font-medium">Mobile App</span>
            </div>
            <div className="bg-black/50 px-4 py-1.5 rounded-full flex items-center gap-2">
              <FaUsers className="text-green-400" />
              <span className="text-white font-medium">10k+ Users</span>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            A comprehensive fitness application crafted to empower users on their wellness journey, 
            integrating fitness, nutrition, and sustainability.
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-green-400 mt-1.5 flex-shrink-0 text-lg" />
              <span className="text-gray-200">Custom workout plans with AI-driven recommendations</span>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-green-400 mt-1.5 flex-shrink-0 text-lg" />
              <span className="text-gray-200">Comprehensive nutrition tracking and meal planning</span>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-green-400 mt-1.5 flex-shrink-0 text-lg" />
              <span className="text-gray-200">Community features and progress sharing</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-900/80 text-blue-200 px-4 py-1.5 rounded-full text-sm font-medium">
              React Native
            </span>
            <span className="bg-green-900/80 text-green-200 px-4 py-1.5 rounded-full text-sm font-medium">
              Node.js
            </span>
            <span className="bg-cyan-900/80 text-cyan-200 px-4 py-1.5 rounded-full text-sm font-medium">
              MongoDB
            </span>
          </div>

          <div className="flex gap-4 pt-2">
            <button className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 
              text-white py-3 rounded-xl hover:opacity-90 transition-opacity 
              flex items-center justify-center gap-2 font-medium text-lg">
              <span>View Project</span>
              <FaArrowRight />
            </button>
            <a href="https://github.com/yourusername/astro-fitness" 
              className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-colors"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub className="text-2xl text-white" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* ASTRO Crypto Card */}
      <motion.div 
        className="bg-black/80 rounded-2xl overflow-hidden
          border-2 border-white/20 shadow-2xl hover:border-orange-500/50
          transform-gpu transition-all duration-300 hover:scale-[1.02]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
      >
        <div className="relative h-48 bg-gradient-to-br from-orange-900 to-yellow-900 p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">ASTRO Crypto</h3>
              <p className="text-yellow-300 font-medium text-lg">
                Empowering Cryptocurrency Enthusiasts
              </p>
            </div>
            <div className="bg-black/30 p-3 rounded-xl">
              <FaBitcoin className="text-5xl text-yellow-400" />
            </div>
          </div>
          
          <div className="absolute bottom-4 left-6 right-6 flex justify-between">
            <div className="bg-black/50 px-4 py-1.5 rounded-full flex items-center gap-2">
              <FaWallet className="text-orange-400" />
              <span className="text-white font-medium">Crypto Platform</span>
            </div>
            <div className="bg-black/50 px-4 py-1.5 rounded-full flex items-center gap-2">
              <FaChartLine className="text-yellow-400" />
              <span className="text-white font-medium">Real-time Data</span>
            </div>
          </div>
        </div>

        {/* Complete the ASTRO Crypto Card content */}
        <div className="p-6 space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            A state-of-the-art platform for tracking cryptocurrency prices, analyzing market trends, 
            and managing portfolios with advanced tools for both novice and seasoned traders.
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-orange-400 mt-1.5 flex-shrink-0 text-lg" />
              <span className="text-gray-200">Real-time tracking of top cryptocurrencies</span>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-orange-400 mt-1.5 flex-shrink-0 text-lg" />
              <span className="text-gray-200">Customizable alerts for price changes and trends</span>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-orange-400 mt-1.5 flex-shrink-0 text-lg" />
              <span className="text-gray-200">Professional-grade charts and technical analysis</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-900/80 text-blue-200 px-4 py-1.5 rounded-full text-sm font-medium">
              React
            </span>
            <span className="bg-green-900/80 text-green-200 px-4 py-1.5 rounded-full text-sm font-medium">
              Node.js
            </span>
            <span className="bg-yellow-900/80 text-yellow-200 px-4 py-1.5 rounded-full text-sm font-medium">
              Web3.js
            </span>
            <span className="bg-red-900/80 text-red-200 px-4 py-1.5 rounded-full text-sm font-medium">
              Redis
            </span>
          </div>

          <div className="flex gap-4 pt-2">
            <button className="flex-1 bg-gradient-to-r from-orange-600 to-yellow-600 
              text-white py-3 rounded-xl hover:opacity-90 transition-opacity 
              flex items-center justify-center gap-2 font-medium text-lg">
              <span>View Project</span>
              <FaArrowRight />
            </button>
            <a href="https://github.com/yourusername/astro-crypto" 
              className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-colors"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub className="text-2xl text-white" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* AstroFlicks Card */}
      <motion.div 
        className="bg-black/80 rounded-2xl overflow-hidden
          border-2 border-white/20 shadow-2xl hover:border-red-500/50
          transform-gpu transition-all duration-300 hover:scale-[1.02]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
      >
        <div className="relative h-48 bg-gradient-to-br from-red-900 to-pink-900 p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">AstroFlicks</h3>
              <p className="text-pink-300 font-medium text-lg">
                Your Personalized Entertainment Guide
              </p>
            </div>
            <div className="bg-black/30 p-3 rounded-xl">
              <FaVideo className="text-5xl text-pink-400" />
            </div>
          </div>
          
          <div className="absolute bottom-4 left-6 right-6 flex justify-between">
            <div className="bg-black/50 px-4 py-1.5 rounded-full flex items-center gap-2">
              <FaFilm className="text-pink-400" />
              <span className="text-white font-medium">Entertainment</span>
            </div>
            <div className="bg-black/50 px-4 py-1.5 rounded-full flex items-center gap-2">
              <FaRobot className="text-red-400" />
              <span className="text-white font-medium">AI-Powered</span>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            An innovative application designed to simplify the decision-making process for movie and TV show enthusiasts,
            leveraging web scraping and AI for personalized recommendations.
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-red-400 mt-1.5 flex-shrink-0 text-lg" />
              <span className="text-gray-200">Intelligent search with advanced filtering options</span>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-red-400 mt-1.5 flex-shrink-0 text-lg" />
              <span className="text-gray-200">Data-driven recommendations from multiple sources</span>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-red-400 mt-1.5 flex-shrink-0 text-lg" />
              <span className="text-gray-200">Custom watchlists and progress tracking</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="bg-yellow-900/80 text-yellow-200 px-4 py-1.5 rounded-full text-sm font-medium">
              Python
            </span>
            <span className="bg-blue-900/80 text-blue-200 px-4 py-1.5 rounded-full text-sm font-medium">
              React
            </span>
            <span className="bg-green-900/80 text-green-200 px-4 py-1.5 rounded-full text-sm font-medium">
              SQLite
            </span>
            <span className="bg-purple-900/80 text-purple-200 px-4 py-1.5 rounded-full text-sm font-medium">
              BeautifulSoup
            </span>
          </div>

          <div className="flex gap-4 pt-2">
            <button className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 
              text-white py-3 rounded-xl hover:opacity-90 transition-opacity 
              flex items-center justify-center gap-2 font-medium text-lg">
              <span>Explore Project</span>
              <FaArrowRight />
            </button>
            <a href="https://github.com/yourusername/astroflicks" 
              className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-colors"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub className="text-2xl text-white" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>
         
 </section>
    </main>
  );
}
