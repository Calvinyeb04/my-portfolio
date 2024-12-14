"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(prev + 2, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center max-w-md px-4">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-8"
            >
              <FaRocket className="text-7xl text-purple-500" />
            </motion.div>
            
            <h2 className="text-3xl font-bold text-white mb-4">
              Loading Your Experience
            </h2>
            
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            
            <p className="text-gray-400 text-lg">
              {progress}% Complete
            </p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 