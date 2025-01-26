"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";

export const NewBackground = ({ children }: { children: React.ReactNode }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: 8 }).map((_, i) => ({
        x: `${Math.floor((i + 1) * (100 / 9))}%`,
        delay: i * 0.3,
        duration: 3 + (i % 3) * 2, 
        height: i % 2 === 0 ? "16rem" : "12rem", 
      })),
    []
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800">
      <div className="fixed inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent opacity-50"
            style={{
              left: particle.x,
              height: particle.height,
            }}
            initial={{ y: "-100%" }} 
            animate={{ y: "200%" }} 
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: particle.delay,
            }}
          />
        ))}

       
        <div className="relative z-10 flex min-h-screen items-center justify-center">
          {children}
        </div>

       
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-neutral-100/50 to-transparent dark:from-neutral-800/50 pointer-events-none" />
      </div>
    </div>
  );
};
