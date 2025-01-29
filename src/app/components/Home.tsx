"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bona_Nova_SC, Smooch_Sans } from "next/font/google";


const San=Smooch_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
})

const texts = ["MERN Stack Developer","Building Scalable & Modern Web Applications", "Tech Enthusiast"];

export const Text = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex items-start justify-start bg-gray-900 text-white pl-24 pt-48">
      <div className={San.className}>
        {/* Static Text */}
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
         {"<HelloWorld name=Smaksh />"}
        </motion.h1>

        {/* Dynamic Text */}
        <AnimatePresence mode="wait">
          <motion.h2
            key={index}
            className="text-4xl font-medium bg-gradient-to-r from-purple-400 to-pink-400 inline-block text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            }}
            exit={{
              opacity: 0,
              y: -20,
              filter: "blur(10px)",
              transition: {
                duration: 0.4,
                ease: "easeIn",
              },
            }}
          >
            {texts[index]}
          </motion.h2>
        </AnimatePresence>
      </div>
    </div>
  );
}
