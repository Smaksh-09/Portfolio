"use client";
import { HoverEffect } from "./CardSpotlight";

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

export default function Skills() {
  return (
    <section className="min-h-screen pt-[40rem] pb-32">
      <h2 className="text-4xl font-bold text-white mb-16 text-center">Skills & Technologies</h2>
      <div className="container mx-auto px-4">
        <HoverEffect 
          items={skills} 
          className="max-w-6xl mx-auto" 
        />
      </div>
    </section>
  );
}