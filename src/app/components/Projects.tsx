"use client";
import { motion } from "framer-motion";
import { Smooch_Sans } from "next/font/google";
import Image from "next/image";

const San = Smooch_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const projects = [
  {
    title: "LexiNews",
    description: "LexiNews is a real-time news aggregation platform designed to deliver the latest news from around the world with seamless multi-language support. It leverages the NewsData.io API to fetch global news and utilizes LibreTranslate, hosted locally, for on-the-fly translation, ensuring accessibility for users in different languages.",
    technologies: ["Next.js","Node.js","Tailwind"],
    image: "/images/lexinews.jpg", 
    link: "https://github.com/Smaksh-09/LexiNews"
  },
  {
    title: "Learner.ai",
    description:"Learner.ai is a platform that offers personalized Learning based on quize performance. Implemented an interactive quiz system to assess user's knowledge and adapt learning material accordingly. Integrated AI-generated content, including key concepts, real-world applications, and advanced insights.",
    technologies:["Next.js", "React", "Tailwind CSS", "Axios", "Framer Motion"],
    image:"/Learner.jpg",
    link:"https://learnerai-production-1899.up.railway.app/",
  },
  {
    title: "NeuroSight",
    description:"NeuroSight is a web application that provides AI-powered analysis of MRI scans for the brain, lungs, and skin to detect potential tumors or abnormalities. It also includes additional features like a symptom checker, a personalized nutrition planner, and a dashboard for goal tracking and reminders. User health data and scan history are securely stored for easy access and tracking",
    technologies:["Next.js, GSAP, Framer Motion, MongoDB, AI-powered analysis."],
    image:"/NeuroSight.jpg",
    link:"https://neurosightai.up.railway.app/",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen pt-16 md:pt-24 pb-16 md:pb-32 bg-black relative px-4 sm:px-6">
     
      <div className="absolute inset-0 -bottom-40 bg-gradient-to-t from-purple-500/5 via-pink-500/5 to-transparent blur-3xl opacity-20 pointer-events-none"></div>
      
      
      <div className={San.className}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-2">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>
      </div>

      
      <div className="container mx-auto mt-12 md:mt-20">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
            className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-16 md:mb-32"
          >
            
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-2">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-gray-800 text-sm text-gray-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-purple-400 hover:text-purple-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                View Project →
              </motion.a>
            </div>

            
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative overflow-hidden rounded-xl border border-gray-700 shadow-lg">
                <div className="aspect-video relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}