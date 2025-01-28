"use client";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { motion } from "framer-motion";

export default function SocialIcons() {
  return (
    <div className="flex items-center absolute right-40 mt-5  bg-gray-900 z-50">
        
      <motion.div
        className="flex space-x-6 bg-gray-800 p-6 rounded-xl shadow-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.a
          href="https://github.com/Smaksh-09"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-white text-4xl hover:text-gray-400 transition-colors"
          whileHover={{ rotate: 10, scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <SiGithub />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/smaksh-dhawan0777"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-blue-500 text-4xl hover:text-gray-400 transition-colors"
          whileHover={{ rotate: 10, scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="https://x.com/Smaksh_Dhawan?t=VuArcUm1iw-Be_9jx-ELWQ&s=08"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-blue-400 text-4xl hover:text-gray-400 transition-colors"
          whileHover={{ rotate: 10, scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <RiTwitterXLine />
        </motion.a>
      </motion.div>
    </div>
  );
}

