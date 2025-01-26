"use client";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <div className="absolute top-[350px] left-24">
    
        <button
          onClick={() => {}}
          className="relative px-6 py-3 rounded-full font-medium text-white 
            bg-gradient-to-r from-purple-400 to-pink-400
            hover:from-purple-500 hover:to-pink-500
            transform transition-all duration-200 hover:scale-105
            shadow-lg hover:shadow-purple-500/25"
        >
          Get my resume
        </button>
      </div>
  );
}
