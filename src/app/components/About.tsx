"use client";
import { motion } from "framer-motion";
import { Smooch_Sans } from "next/font/google";
import SocialIcons from "./Iconss";

const San = Smooch_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function About() {
  return (
    <section id="contact" className="min-h-screen pt-16 md:pt-24 pb-16 md:pb-32 bg-black relative px-4 sm:px-6">
      <div className="absolute inset-0 -bottom-40 bg-gradient-to-t from-purple-500/5 via-pink-500/5 to-transparent blur-3xl opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto">
        <div className={San.className}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <h2 className="text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
                About Me
              </span>
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed mb-12 md:mb-20 text-center px-4"
        >
          <p>
            I&apos;m a passionate Full Stack Developer with a strong foundation in the MERN stack and experience in building dynamic, user-friendly applications. With a keen interest in AI-driven solutions, I&apos;m currently working on projects like LexiNews, a multilingual news aggregator. My skills extend beyond web development, as I have a solid grasp of data structures and algorithms, enhancing my problem-solving abilities. Always eager to learn and innovate, I aim to create impactful digital experiences that merge technology with real-world applications.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <SocialIcons />
        </div>
      </div>
    </section>
  );
}

