"use client";
import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Smooch_Sans } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
const San=Smooch_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
})
const skills = [
  {
    title: "Frontend Development",
    description: "React.js, Next.js, Tailwind CSS, TypeScript, HTML5, CSS3",
    link: "/skills/frontend",
  },
  {
    title: "Backend Development",
    description: "Node.js, Express.js, MongoDB, PostgreSQL, REST APIs",
    link: "/skills/backend",
  },
  {
    title: "Programming Languages",
    description: "JavaScript, Python, Java, C++",
    link: "/skills/languages",
  },
  {
    title: "Developer Tools",
    description: "Git, GitHub, VS Code, Postman, Docker",
    link: "/skills/tools",
  },
  {
    title: "Cloud Services",
    description: "AWS, Firebase, Vercel, Netlify",
    link: "/skills/cloud",
  },
  {
    title: "Other Skills",
    description: "UI/UX Design, Responsive Design, SEO, Agile Development",
    link: "/skills/other",
  },
];

const SkillsSection = () => {
  return (
    <section 
      id="skills"
      className="min-h-screen pt-24 mt-20 pb-32 relative" // Added relative positioning
    >
      <div className="absolute inset-0 -bottom-40 bg-gradient-to-t from-purple-500/20 via-pink-500/20 to-transparent blur-3xl opacity-40 pointer-events-none"></div>
      <div className={San.className}>
        <h2 className="text-4xl font-bold text-white mb-10 text-center">Tech Stack & Expertise</h2>
      </div>
      <div className="container mx-auto px-4 relative z-10"> {/* Added z-10 to keep cards above gradient */}
        <HoverEffect 
          items={skills} 
          className="max-w-6xl mx-auto" 
        />
      </div>
    </section>
  );
};

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export default SkillsSection;
