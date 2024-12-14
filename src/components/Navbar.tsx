"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash, BsChevronDown } from "react-icons/bs";
import { FaTools, FaBriefcase, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) * 0.01;
      const moveY = (clientY - window.innerHeight / 2) * 0.01;
      setMousePosition({ x: moveX, y: moveY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navItems = [
    { 
      name: "Home", 
      section: "home", 
      icon: <AiOutlineHome className="text-xl" /> 
    },
    { 
      name: "About", 
      section: "about", 
      icon: <BsPerson className="text-xl" />,
      dropdownItems: [
        { name: "Experience", section: "experience", icon: <FaBriefcase className="text-lg" /> },
        { name: "Skills", section: "skills", icon: <FaTools className="text-lg" /> }
      ]
    },
    { 
      name: "Projects", 
      section: "projects", 
      icon: <BsCodeSlash className="text-xl" /> 
    },
    {
      name: "Contact",
      section: "contact",
      icon: <FaEnvelope className="text-xl" />
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setOpenDropdown(null);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full top-6 z-50 px-4"
    >
      <motion.div 
        className="max-w-5xl mx-auto"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
          transition: 'transform 0.6s cubic-bezier(0.17, 0.67, 0.83, 0.67)'
        }}
      >
        <div className="flex justify-center items-center">
          <motion.div 
            className="flex gap-8 p-4 rounded-2xl"
            style={{
              background: 'linear-gradient(145deg, rgba(30,30,30,0.8), rgba(20,20,20,0.7))',
              backdropFilter: 'blur(15px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => {
                    setHoveredIndex(index);
                    if (item.dropdownItems) {
                      setOpenDropdown(item.name);
                    }
                  }}
                  onHoverEnd={() => {
                    setHoveredIndex(null);
                    setOpenDropdown(null);
                  }}
                  onClick={() => {
                    if (!item.dropdownItems) {
                      setActiveIndex(index);
                      scrollToSection(item.section);
                    }
                  }}
                >
                  <motion.div className="relative overflow-hidden cursor-pointer">
                    <motion.span className="relative flex items-center gap-2 px-4 py-2 text-lg font-medium tracking-wide text-white">
                      <motion.div
                        animate={{
                          scale: hoveredIndex === index ? 1.2 : 1,
                          rotate: hoveredIndex === index ? 360 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.icon}
                      </motion.div>
                      <span>{item.name}</span>
                      {item.dropdownItems && (
                        <motion.div
                          animate={{ rotate: openDropdown === item.name ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <BsChevronDown />
                        </motion.div>
                      )}
                    </motion.span>

                    {(hoveredIndex === index || activeIndex === index) && !openDropdown && (
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-[2px]"
                        layoutId="underline"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        style={{
                          background: 'linear-gradient(to right, #FF8A80, #FF80AB, #EA80FC)',
                          boxShadow: '0 0 10px rgba(255,130,130,0.5)'
                        }}
                      />
                    )}
                  </motion.div>

                  <AnimatePresence>
                    {openDropdown === item.name && item.dropdownItems && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 py-2 min-w-[160px] rounded-xl"
                        style={{
                          background: 'linear-gradient(145deg, rgba(30,30,30,0.95), rgba(20,20,20,0.95))',
                          backdropFilter: 'blur(15px)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        {item.dropdownItems.map((dropdownItem, dropIndex) => (
                          <motion.div
                            key={dropIndex}
                            className="px-4 py-2 hover:bg-white/10 cursor-pointer"
                            whileHover={{ x: 5 }}
                            onClick={() => scrollToSection(dropdownItem.section)}
                          >
                            <div className="flex items-center gap-3 text-white/90">
                              <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.3 }}
                              >
                                {dropdownItem.icon}
                              </motion.div>
                              <span>{dropdownItem.name}</span>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
}