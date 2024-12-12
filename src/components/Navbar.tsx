"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GoProject } from "react-icons/go";
import { RiContactsLine } from "react-icons/ri";

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
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
    { name: "Home", path: "/", icon: <AiOutlineHome className="text-xl" /> },
    { name: "About", path: "/about", icon: <BsPerson className="text-xl" /> },
    { name: "Projects", path: "/projects", icon: <GoProject className="text-xl" /> },
    { name: "Contact", path: "/contact", icon: <RiContactsLine className="text-xl" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
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
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={item.path}>
                  <motion.div
                    className="relative overflow-hidden"
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    onClick={() => setActiveIndex(index)}
                  >
                    <motion.span
                      className="relative flex items-center gap-2 px-4 py-2 text-lg font-medium tracking-wide text-white"
                      style={{
                        position: 'relative',
                        zIndex: 10
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-xl"
                        initial={false}
                        animate={{
                          background: hoveredIndex === index
                            ? 'linear-gradient(45deg, rgba(255,138,128,0.2), rgba(255,128,171,0.2), rgba(234,128,252,0.2))'
                            : 'transparent'
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <div className="relative z-10 flex items-center gap-2">
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
                      </div>
                    </motion.span>
                    
                    <AnimatePresence>
                      {(hoveredIndex === index || activeIndex === index) && (
                        <motion.div
                          className="absolute bottom-0 left-0 w-full h-[2px]"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          exit={{ scaleX: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                          }}
                          style={{
                            background: 'linear-gradient(to right, #FF8A80, #FF80AB, #EA80FC)',
                            boxShadow: '0 0 10px rgba(255,130,130,0.5)'
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
}