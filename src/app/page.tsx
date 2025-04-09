"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FaArrowRight, FaAws, FaBitcoin, FaBrain, FaBriefcase, FaCertificate, FaChartLine, FaCheckCircle, FaChurch, FaCloud, FaCode, FaCogs, FaDocker, FaEnvelope, FaFile, FaFilm, FaGithub, FaGoogle, FaGraduationCap, FaHandshake, FaJava, FaLaptopCode, FaLightbulb, FaLinkedin, FaMicrosoft, FaMobile, FaNetworkWired, FaProjectDiagram, FaRobot, FaRocket, FaServer, FaSyncAlt, FaTools, FaTruck, FaVideo, FaWallet, FaSearch, FaUsers } from 'react-icons/fa';
import { SiCplusplus, SiDocker, SiFigma, SiGit, SiJavascript, SiMongodb, SiMysql, SiNodedotjs, SiPython, SiReact, SiTailwindcss, SiTypescript, SiNextdotjs } from 'react-icons/si';

// Dynamically import Spline component with loading fallback
const SplineComponent = dynamic(() => import('@/components/SplineComponent'), {
  ssr: false,
  loading: () => <div className="h-screen bg-black" />
});

// Add these hover effect utilities at the top of the file
const projectHoverEffect = {
  rest: { scale: 1, transition: { duration: 0.2 } },
  hover: { scale: 1.02, transition: { duration: 0.2 } }
};

const buttonHoverEffect = {
  rest: { scale: 1, opacity: 0.9 },
  hover: { scale: 1.05, opacity: 1 }
};

export default function Home() {
  const [splineLoaded, setSplineLoaded] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Simplified Spline load handler
  const handleSplineLoad = useCallback(() => {
    console.log('Spline loaded');
  }, []);

  // Preload essential assets
  useEffect(() => {
    const preloadAssets = async () => {
      // Preload images and other assets here
      try {
        await Promise.all([
          // Add any critical images/assets to preload
          new Promise(resolve => {
            const img = new Image();
            img.onload = resolve;
            img.src = '/your-critical-image.png'; // Add your critical images
          }),
          // Add more assets as needed
        ]);
      } catch (error) {
        console.error('Asset preloading error:', error);
      }
    };

    preloadAssets();
  }, []);

  // Add intersection observer for smooth scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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

  // Update the additionalProjects array
  const additionalProjects = [
    {
      title: "ASTRO Fitness",
      description: "A comprehensive fitness application empowering users on their wellness journey.",
      icon: FaRocket,
      iconBg: "text-teal-400",
      gradient: "from-green-900 to-teal-900",
      tags: ["React Native", "Node.js", "MongoDB"],
      features: [
        "Custom workout plans with AI-driven recommendations",
        "Comprehensive nutrition tracking and meal planning",
        "Community features and progress sharing"
      ],
      github: "https://github.com/Calvinyeb04/astro-fitness",
      demo: "https://astro-fitness-demo.vercel.app"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Business intelligence platform providing real-time insights and predictive analytics.",
      icon: FaChartLine,
      iconBg: "text-green-400",
      gradient: "from-blue-900 to-indigo-900",
      tags: ["Python", "D3.js", "PostgreSQL", "Machine Learning"],
      features: [
        "Real-time data processing and visualization",
        "Advanced analytics and reporting",
        "Customizable dashboards and metrics"
      ],
      github: "https://github.com/Calvinyeb04/data-analytics",
      demo: "https://data-analytics-demo.vercel.app"
    }
  ];

  return (
    <>

      <main className="relative overflow-x-hidden" ref={containerRef}>
        {/* First Spline scene */}
        <section id="home" className="h-screen relative">
          <SplineComponent
            scene="https://prod.spline.design/C7EGsyMouJ4K5BH9/scene.splinecode"
            onLoad={handleSplineLoad}
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

        {/* About section */}
        <section id="about" className="min-h-screen relative bg-[#EBBBB1] py-20">

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
                      Calvin Yeboah | Software Engineer
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <p className="text-gray-800 text-lg leading-relaxed">
                      Driven Information Technology student at the University of Cincinnati, blending robust software engineering principles from a Computer Science minor with practical experience in full-stack development. Proficient in Java Spring Boot, ASP.NET Core, and C#, with a proven track record of architecting and implementing scalable microservices, RESTful APIs, and enterprise-level solutions.
                    </p>
                    <p className="text-gray-800 text-lg leading-relaxed">
                      Possessing advanced database management skills, including extensive SQL expertise, MongoDB proficiency, and experience handling large datasets within Microsoft SQL Server Management Studio. Combining technical prowess with project management acumen, utilizing tools like ProjectLibre, I am eager to contribute to innovative projects in a dynamic software engineering or IT environment.
                    </p>
                    <div className="bg-white/30 p-6 rounded-xl mt-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FaEnvelope className="text-purple-600" />
                        Contact Information
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-gray-700">
                          <FaEnvelope className="text-blue-500 mt-1" /> 
                          <span>yeboahcalvin04@gmail.com</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                          <FaMobile className="text-green-500 mt-1" /> 
                          <span>(513) 368-5646</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                          <FaLinkedin className="text-blue-600 mt-1" /> 
                          <a href="https://www.linkedin.com/in/calyeb/" className="hover:text-blue-600 transition-colors">linkedin.com/in/calyeb</a>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                          <FaGithub className="text-gray-800 mt-1" /> 
                          <a href="https://github.com/Calvinyeb04" className="hover:text-blue-600 transition-colors">github.com/Calvinyeb04</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-white/30 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FaCode className="text-blue-500" />
                        Technical Expertise
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-gray-700">
                          <FaCode className="text-yellow-500 mt-1" /> 
                          <span><strong>Languages:</strong> Java, C#, Python, JavaScript, C++, TypeScript, SQL, Bash</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                          <FaServer className="text-green-500 mt-1" /> 
                          <span><strong>Frameworks:</strong> Spring Boot, ASP.NET Core, React, Node.js, Express.js</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                          <SiMongodb className="text-green-600 mt-1" /> 
                          <span><strong>Databases:</strong> SQL Server, MongoDB, MySQL, PostgreSQL, Redis</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                          <FaCloud className="text-blue-500 mt-1" /> 
                          <span><strong>Cloud & DevOps:</strong> AWS, Azure, Google Cloud, Docker, Git, CI/CD</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white/30 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FaGraduationCap className="text-purple-600" />
                        Education
                      </h3>
                      <div className="space-y-2">
                        <p className="text-gray-800 font-medium">University of Cincinnati</p>
                        <p className="text-gray-700">Bachelor of Science in Information Technology</p>
                        <p className="text-gray-700">Minor in Computer Science</p>
                        <p className="text-gray-700">GPA: 3.8 | Aug 2022 - May 2027</p>
                      </div>
                    </div>
                    <div className="bg-white/30 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FaCertificate className="text-yellow-500" />
                        Certifications
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-gray-700">
                          <FaMicrosoft className="text-blue-500 mt-1" /> 
                          <span>Microsoft Certified: Azure DevOps (Dec 2024)</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                          <FaNetworkWired className="text-blue-600 mt-1" /> 
                          <span>Cisco Networking (Nov 2024)</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                          <FaGoogle className="text-red-500 mt-1" /> 
                          <span>Google Analytics Individual Qualification (Jun 2024)</span>
                        </li>
                      </ul>
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
                      Building Experience & Developing Solutions
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-8">
                    <div className="bg-white/30 p-6 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                        <FaLaptopCode className="text-blue-600" />
                        Full Stack Intern @ TechElevate
                      </h3>
                      <p className="text-gray-600 mb-4">August 2024 - December 2024</p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-gray-700">
                          <FaCode className="text-purple-500 mt-1" />
                          Contributed to scalable web applications using React, Python, and MongoDB, focusing on performance optimization
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                          <FaDocker className="text-blue-500 mt-1" />
                          Gained experience with CI/CD pipelines, utilizing Docker and AWS to automate deployments
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                          <FaUsers className="text-green-500 mt-1" />
                          Actively participated in Agile Scrum ceremonies, contributing to sprint planning and daily stand-ups
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white/30 p-6 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                        <FaChurch className="text-purple-600" />
                        IT Technician @ Ghana SDA Church
                      </h3>
                      <p className="text-gray-600 mb-4">July 2023 - June 2024</p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-gray-700">
                          <FaTools className="text-red-500 mt-1" />
                          Provided comprehensive IT support for live events, resolving technical issues promptly
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                          <FaCogs className="text-blue-500 mt-1" />
                          Performed system maintenance and upgrades, ensuring optimal performance and minimizing downtime
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                          <FaUsers className="text-green-500 mt-1" />
                          Trained end-users on software and hardware, enhancing their productivity and technical proficiency
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-white/30 p-6 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                        <FaCode className="text-cyan-600" />
                        Freelance Developer @ Fiverr
                      </h3>
                      <p className="text-gray-600 mb-4">January 2022 - Present</p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-gray-700">
                          <FaLaptopCode className="text-purple-500 mt-1" />
                          <span>Delivered 50+ custom web applications and solutions for diverse international clients</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                          <FaServer className="text-green-500 mt-1" />
                          <span>Specialized in React, Node.js, and MongoDB stack with 4.9/5 average rating</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                          <FaProjectDiagram className="text-orange-500 mt-1" />
                          <span>Maintained 95% client satisfaction rate with efficient project delivery and communication</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white/30 p-6 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                        <FaUsers className="text-green-600" />
                        Teaching Assistant/Mentor @ Ready2Earn
                      </h3>
                      <p className="text-gray-600 mb-4">June 2023 - August 2023</p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-gray-700">
                          <FaLaptopCode className="text-blue-500 mt-1" />
                          Led the Web Development Team, providing instruction on HTML, JavaScript, and Node.js
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                          <FaUsers className="text-purple-500 mt-1" />
                          Oversaw development team projects, managed task allocation, and ensured successful delivery
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white/30 p-6 rounded-xl mt-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FaBriefcase className="text-gray-700" />
                        Previous Roles
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-gray-700">
                          <FaTruck className="text-orange-500 mt-1" /> 
                          <div>
                            <span className="font-medium">Fulfillment Associate @ The Home Depot</span>
                            <p className="text-sm text-gray-600">Feb 2022 - Aug 2022</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                          <FaHandshake className="text-blue-500 mt-1" /> 
                          <div>
                            <span className="font-medium">Customer Service Associate @ Amazon</span>
                            <p className="text-sm text-gray-600">Feb 2021 - Jan 2022</p>
                          </div>
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
        </section>

        {/* Projects Section - Modified */}
        <section id="projects" className="min-h-screen relative bg-[#EBBBB1]">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 right-40 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 py-20">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl font-bold text-gray-800 mb-4">
                Crafting Digital Solutions
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Transforming Ideas into Innovative Applications
              </p>
            </motion.div>

            <div className="flex justify-center gap-4 mb-8">
              {['all', 'web', 'mobile', 'data'].map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium 
                    transition-all duration-300 ${
                    filter === category 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </div>

            <div className="relative max-w-md mx-auto mb-8">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-white/10 rounded-lg
                  border border-white/20 text-white placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <FaSearch className="absolute right-4 top-1/2 transform 
                -translate-y-1/2 text-gray-400" />
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* AstroFlow */}
              <motion.div 
                className="bg-black/80 rounded-2xl overflow-hidden
                  border-2 border-white/20 shadow-2xl hover:border-green-500/50
                  transform-gpu transition-all duration-300"
                variants={projectHoverEffect}
                initial="rest"
                whileHover="hover"
              >
                <div className="relative h-48 bg-gradient-to-br from-green-900 to-teal-700 p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">ASTRO-CRYPTO</h3>
                      <p className="text-green-200 font-medium text-lg">
                        Cryptocurrency Tracking Platform
                      </p>
                    </div>
                    <div className="bg-black/30 p-3 rounded-xl">
                      <FaBitcoin className="text-5xl text-green-400" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-6 right-6 flex justify-between">
                    <div className="bg-black/50 px-4 py-1.5 rounded-full flex items-center gap-2">
                      <FaChartLine className="text-green-400" />
                      <span className="text-white font-medium">Real-Time Data</span>
                    </div>
                    <div className="bg-black/50 px-4 py-1.5 rounded-full flex items-center gap-2">
                      <FaWallet className="text-teal-400" />
                      <span className="text-white font-medium">Portfolio Management</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    A comprehensive cryptocurrency tracking platform with real-time data, advanced trading tools, 
                    and portfolio management features for crypto enthusiasts and investors.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-400 mt-1.5 flex-shrink-0 text-lg" />
                      <span className="text-gray-200">Real-time cryptocurrency price tracking and alerts</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-400 mt-1.5 flex-shrink-0 text-lg" />
                      <span className="text-gray-200">Portfolio management with performance analytics</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-400 mt-1.5 flex-shrink-0 text-lg" />
                      <span className="text-gray-200">Advanced trading tools with historical data analysis</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-900/80 text-blue-200 px-4 py-1.5 rounded-full text-sm font-medium">
                      React.js
                    </span>
                    <span className="bg-yellow-900/80 text-yellow-200 px-4 py-1.5 rounded-full text-sm font-medium">
                      JavaScript
                    </span>
                    <span className="bg-blue-900/80 text-blue-200 px-4 py-1.5 rounded-full text-sm font-medium">
                      ASP.NET Web API
                    </span>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <motion.a
                      href="https://github.com/Calvinyeb04/astro-crypto"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 
                        text-white py-3 rounded-xl
                        flex items-center justify-center gap-2 font-medium text-lg
                        relative overflow-hidden group"
                      variants={buttonHoverEffect}
                      initial="rest"
                      whileHover="hover"
                    >
                      <div className="absolute inset-0 bg-white/10 transform translate-y-full 
                        transition-transform group-hover:translate-y-0"></div>
                      <span className="relative">View Project</span>
                      <FaArrowRight className="relative text-xl transition-transform 
                        group-hover:translate-x-1" />
                    </motion.a>
                    
                    <motion.a
                      href="https://github.com/Calvinyeb04/astro-crypto"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 p-3 rounded-xl group
                        hover:bg-white/20 transition-all duration-300"
                      variants={buttonHoverEffect}
                      initial="rest"
                      whileHover="hover"
                    >
                      <FaGithub className="text-2xl text-white transition-transform 
                        group-hover:scale-110" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Network Monitoring System */}
              <motion.div 
                className="bg-black/80 rounded-2xl overflow-hidden
                  border-2 border-white/20 shadow-2xl hover:border-purple-500/50
                  transform-gpu transition-all duration-300"
                variants={projectHoverEffect}
                initial="rest"
                whileHover="hover"
              >
                <div className="relative h-48 bg-gradient-to-br from-purple-900 to-indigo-700 p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">Network Monitoring System</h3>
                      <p className="text-purple-200 font-medium text-lg">
                        Automated Incident Management
                      </p>
                    </div>
                    <div className="bg-black/30 p-3 rounded-xl">
                      <FaNetworkWired className="text-5xl text-purple-400" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-6 right-6 flex justify-between">
                    <div className="bg-black/50 px-4 py-1.5 rounded-full flex items-center gap-2">
                      <FaSyncAlt className="text-purple-400" />
                      <span className="text-white font-medium">Real-Time</span>
                    </div>
                    <div className="bg-black/50 px-4 py-1.5 rounded-full flex items-center gap-2">
                      <FaTools className="text-indigo-400" />
                      <span className="text-white font-medium">Automation</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    An automated system that monitors network devices, detects issues such as network downtime or unauthorized access, 
                    and triggers automated incident management actions.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-purple-400 mt-1.5 flex-shrink-0 text-lg" />
                      <span className="text-gray-200">Python backend for network monitoring and automation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-purple-400 mt-1.5 flex-shrink-0 text-lg" />
                      <span className="text-gray-200">React dashboard for real-time monitoring and alerts</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-purple-400 mt-1.5 flex-shrink-0 text-lg" />
                      <span className="text-gray-200">Integrated database for logging and historical analysis</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-900/80 text-blue-200 px-4 py-1.5 rounded-full text-sm font-medium">
                      Python
                    </span>
                    <span className="bg-purple-900/80 text-purple-200 px-4 py-1.5 rounded-full text-sm font-medium">
                      React
                    </span>
                    <span className="bg-green-900/80 text-green-200 px-4 py-1.5 rounded-full text-sm font-medium">
                      MongoDB
                    </span>
                    <span className="bg-blue-900/80 text-blue-200 px-4 py-1.5 rounded-full text-sm font-medium">
                      MySQL
                    </span>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <motion.a
                      href="https://github.com/Calvinyeb04/network-monitor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 
                        text-white py-3 rounded-xl
                        flex items-center justify-center gap-2 font-medium text-lg
                        relative overflow-hidden group"
                      variants={buttonHoverEffect}
                      initial="rest"
                      whileHover="hover"
                    >
                      <div className="absolute inset-0 bg-white/10 transform translate-y-full 
                        transition-transform group-hover:translate-y-0"></div>
                      <span className="relative">View Project</span>
                      <FaArrowRight className="relative text-xl transition-transform 
                        group-hover:translate-x-1" />
                    </motion.a>
                    
                    <motion.a
                      href="https://github.com/Calvinyeb04/network-monitor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 p-3 rounded-xl group
                        hover:bg-white/20 transition-all duration-300"
                      variants={buttonHoverEffect}
                      initial="rest"
                      whileHover="hover"
                    >
                      <FaGithub className="text-2xl text-white transition-transform 
                        group-hover:scale-110" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* ASTRO-CRYPTO */}
              <motion.div 
                className="bg-black/80 rounded-2xl overflow-hidden
                  border-2 border-white/20 shadow-2xl hover:border-green-500/50
                  transform-gpu transition-all duration-300"
                variants={projectHoverEffect}
                initial="rest"
                whileHover="hover"
              >
                <div className="relative h-48 bg-gradient-to-br from-green-900 to-teal-700 p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">ASTRO-CRYPTO</h3>
                      <p className="text-green-200 font-medium text-lg">
                        Cryptocurrency Tracking Platform
                      </p>
                    </div>
                    <div className="bg-black/30 p-3 rounded-xl">
                      <FaBitcoin className="text-5xl text-green-400" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-6 right-6 flex justify-between">
                    <div className="bg-black/50 px-4 py-1.5 rounded-full flex items-center gap-2">
                      <FaChartLine className="text-green-400" />
                      <span className="text-white font-medium">Real-Time Data</span>
                    </div>
                    <div className="bg-black/50 px-4 py-1.5 rounded-full flex items-center gap-2">
                      <FaWallet className="text-teal-400" />
                      <span className="text-white font-medium">Portfolio Management</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    A comprehensive cryptocurrency tracking platform with real-time data, advanced trading tools, 
                    and portfolio management features for crypto enthusiasts and investors.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-400 mt-1.5 flex-shrink-0 text-lg" />
                      <span className="text-gray-200">Real-time cryptocurrency price tracking and alerts</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-400 mt-1.5 flex-shrink-0 text-lg" />
                      <span className="text-gray-200">Portfolio management with performance analytics</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-400 mt-1.5 flex-shrink-0 text-lg" />
                      <span className="text-gray-200">Advanced trading tools with historical data analysis</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-900/80 text-blue-200 px-4 py-1.5 rounded-full text-sm font-medium">
                      React.js
                    </span>
                    <span className="bg-yellow-900/80 text-yellow-200 px-4 py-1.5 rounded-full text-sm font-medium">
                      JavaScript
                    </span>
                    <span className="bg-blue-900/80 text-blue-200 px-4 py-1.5 rounded-full text-sm font-medium">
                      ASP.NET Web API
                    </span>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <motion.a
                      href="https://github.com/Calvinyeb04/astro-crypto"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 
                        text-white py-3 rounded-xl
                        flex items-center justify-center gap-2 font-medium text-lg
                        relative overflow-hidden group"
                      variants={buttonHoverEffect}
                      initial="rest"
                      whileHover="hover"
                    >
                      <div className="absolute inset-0 bg-white/10 transform translate-y-full 
                        transition-transform group-hover:translate-y-0"></div>
                      <span className="relative">View Project</span>
                      <FaArrowRight className="relative text-xl transition-transform 
                        group-hover:translate-x-1" />
                    </motion.a>
                    
                    <motion.a
                      href="https://github.com/Calvinyeb04/astro-crypto"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 p-3 rounded-xl group
                        hover:bg-white/20 transition-all duration-300"
                      variants={buttonHoverEffect}
                      initial="rest"
                      whileHover="hover"
                    >
                      <FaGithub className="text-2xl text-white transition-transform 
                        group-hover:scale-110" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* AstroFlicks */}
              <motion.div 
                className="bg-black/80 rounded-2xl overflow-hidden
                  border-2 border-white/20 shadow-2xl hover:border-red-500/50
                  transform-gpu transition-all duration-300"
                variants={projectHoverEffect}
                initial="rest"
                whileHover="hover"
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
                    <motion.a
                      href="https://github.com/Calvinyeb04/astroflicks"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 
                        text-white py-3 rounded-xl
                        flex items-center justify-center gap-2 font-medium text-lg
                        relative overflow-hidden group"
                      variants={buttonHoverEffect}
                      initial="rest"
                      whileHover="hover"
                    >
                      <div className="absolute inset-0 bg-white/10 transform translate-y-full 
                        transition-transform group-hover:translate-y-0"></div>
                      <span className="relative">View Project</span>
                      <FaArrowRight className="relative text-xl transition-transform 
                        group-hover:translate-x-1" />
                    </motion.a>
                    
                    <motion.a
                      href="https://github.com/Calvinyeb04/astroflicks"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 p-3 rounded-xl group
                        hover:bg-white/20 transition-all duration-300"
                      variants={buttonHoverEffect}
                      initial="rest"
                      whileHover="hover"
                    >
                      <FaGithub className="text-2xl text-white transition-transform 
                        group-hover:scale-110" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* View More Projects Button */}
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {showAllProjects && (
                <motion.div 
                  className="grid lg:grid-cols-2 gap-10 mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ staggerChildren: 0.1 }}
                >
                  {additionalProjects.map((project, index) => (
                    <motion.div 
                      key={index}
                      className="bg-black/80 rounded-2xl overflow-hidden
                        border-2 border-white/20 shadow-2xl hover:border-green-500/50
                        transform-gpu transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-6`}>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-gray-200 font-medium text-lg">
                              {project.description}
                            </p>
                          </div>
                          <div className="bg-black/30 p-3 rounded-xl">
                            <project.icon className={`text-5xl ${project.iconBg}`} />
                          </div>
                        </div>
                      </div>

                      <div className="p-6 space-y-6">
                        <div className="space-y-3">
                          {project.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <FaCheckCircle className={`${project.iconBg} mt-1.5 flex-shrink-0 text-lg`} />
                              <span className="text-gray-200">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, idx) => (
                            <span key={idx} className="bg-blue-900/80 text-blue-200 px-4 py-1.5 rounded-full text-sm font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-4 pt-2">
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 
                              text-white py-3 rounded-xl
                              flex items-center justify-center gap-2 font-medium text-lg
                              relative overflow-hidden group"
                            variants={buttonHoverEffect}
                            initial="rest"
                            whileHover="hover"
                          >
                            <div className="absolute inset-0 bg-white/10 transform translate-y-full 
                              transition-transform group-hover:translate-y-0"></div>
                            <span className="relative">View Project</span>
                            <FaArrowRight className="relative text-xl transition-transform 
                              group-hover:translate-x-1" />
                          </motion.a>
                          
                          <motion.a
                            href={`https://github.com/Calvinyeb04/${project.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 p-3 rounded-xl group
                              hover:bg-white/20 transition-all duration-300"
                            variants={buttonHoverEffect}
                            initial="rest"
                            whileHover="hover"
                          >
                            <FaGithub className="text-2xl text-white transition-transform 
                              group-hover:scale-110" />
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
              
              <motion.button 
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="inline-flex items-center gap-3 bg-gradient-to-r 
                  from-purple-600 to-pink-600 text-white px-10 py-4 rounded-xl 
                  transition-all duration-300 shadow-lg shadow-purple-500/30 
                  hover:shadow-xl relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-white/10 transform translate-y-full 
                  transition-transform group-hover:translate-y-0"></div>
                <span className="relative text-lg font-semibold">
                  {showAllProjects ? 'Show Less' : 'View More Projects'}
                </span>
                <motion.div
                  animate={{ 
                    rotate: showAllProjects ? 180 : 0,
                    x: showAllProjects ? -5 : 5 
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <FaArrowRight className="text-xl" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen relative bg-[#EBBBB1] transform-gpu">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5"></div>
          
          {/* 3D Geometric Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-2xl transform rotate-45 animate-float"></div>
            <div className="absolute top-40 right-40 w-24 h-24 bg-white/10 rounded-full transform animate-float-delay"></div>
            <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-white/10 rounded-3xl transform -rotate-12 animate-float-slow"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 py-20">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-6xl font-bold text-gray-800 mb-6 drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]
                transform hover:scale-105 transition-transform duration-300">
                Let&apos;s Connect
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8 transform hover:scale-x-110 transition-transform"></div>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Ready to collaborate or just want to say hi? Reach out through any of these platforms!
              </p>
            </motion.div>

            {/* Social Media Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              variants={{
                show: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="show"
            >
              {[
                {
                  icon: FaGithub,
                  label: "GitHub",
                  link: "https://github.com/Calvinyeb04",
                  color: "from-gray-800 to-gray-900",
                  shadowColor: "shadow-gray-800/30"
                },
                {
                  icon: FaLinkedin,
                  label: "LinkedIn",
                  link: "https://www.linkedin.com/in/calyeb/",
                  color: "from-blue-500 to-blue-700",
                  shadowColor: "shadow-blue-500/30"
                },
                {
                  icon: FaEnvelope,
                  label: "Email",
                  link: "mailto:yeboahcalvin04@gmail.com",
                  color: "from-red-500 to-red-700",
                  shadowColor: "shadow-red-500/30"
                },
                {
                  icon: FaFile,
                  label: "Resume",
                  link: "/resume/CalvinYeboah.Resume.pdf",
                  color: "from-emerald-500 to-emerald-700",
                  shadowColor: "shadow-emerald-500/30"
                }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-8 rounded-2xl bg-gradient-to-br ${item.color} 
                    transform hover:-translate-y-2 hover:scale-105 transition-all duration-300
                    shadow-lg ${item.shadowColor} hover:shadow-2xl
                    border border-white/10 backdrop-blur-sm
                    group`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <div className="flex flex-col items-center">
                    <item.icon className="text-5xl text-white mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold text-white">{item.label}</h3>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="mt-16 text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto
                transform hover:scale-105 transition-transform duration-300
                shadow-xl border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="space-y-4">
                <p className="text-gray-800 text-lg flex items-center justify-center gap-3">
                  <span className="font-semibold flex items-center gap-2">
                    <FaEnvelope className="text-purple-600" />
                    Email:
                  </span>
                  <span className="hover:text-purple-700 transition-colors">yeboahcalvin04@gmail.com</span>
                </p>
                <p className="text-gray-800 text-lg flex items-center justify-center gap-3">
                  <span className="font-semibold flex items-center gap-2">
                    <FaEnvelope className="text-purple-600" />
                    Phone:
                  </span>
                  <span className="hover:text-purple-700 transition-colors">(513) 368-5646</span>
                </p>
              </div>
            </motion.div>

            {/* Resume Download Button */}
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <a
                href="/resume/CalvinYeboah.Resume.pdf"
                download
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 
                  text-white px-10 py-4 rounded-xl hover:opacity-90 transition-all duration-300
                  shadow-lg shadow-purple-500/30 hover:shadow-xl hover:-translate-y-1
                  transform hover:scale-105 backdrop-blur-sm border border-white/10"
              >
                <FaFile className="text-xl" />
                <span className="text-lg font-semibold">Download Resume</span>
              </a>
            </motion.div>
          </div>

          {/* Add some decorative elements */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/10 to-transparent"></div>
        </section>

        {/* Add a floating tech stack indicator */}
        <motion.div
          className="fixed bottom-8 right-8 bg-black/90 backdrop-blur-lg
            rounded-full py-2 px-4 border border-white/10 shadow-xl
            flex items-center gap-3 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <span className="text-white/80 text-sm">Built with:</span>
          <div className="flex gap-2">
            <SiReact className="text-blue-400 text-xl" title="React" />
            <SiNextdotjs className="text-white text-xl" title="Next.js" />
            <SiTailwindcss className="text-cyan-400 text-xl" title="Tailwind CSS" />
            <FaCode className="text-purple-400 text-xl" title="TypeScript" />
          </div>
        </motion.div>

        {/* Add a scroll progress indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r 
            from-blue-500 to-purple-500 transform origin-left z-50"
          style={{ scaleX: scrollYProgress }}
        />
      </main>
    </>
  );
}