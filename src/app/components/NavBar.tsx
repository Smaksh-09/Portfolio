"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Smooch_Sans } from "next/font/google";

const San = Smooch_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Blur strip that appears on scroll */}
      <motion.div
        className="fixed top-0 left-0 w-full h-[72px] bg-black/30 backdrop-blur-xl z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-60">
          <div className="flex items-center justify-between h-16 z-60">
            <motion.div
              className={`${San.className} text-xl font-bold`}
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent text-4xl bg-clip-text">
                Smaksh
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white relative px-3 py-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-gray-300 hover:text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  className="w-full h-0.5 bg-current transform origin-left"
                  animate={{ rotate: mobileMenuOpen ? 45 : 0 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-current"
                  animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-current transform origin-left"
                  animate={{ rotate: mobileMenuOpen ? -45 : 0 }}
                />
              </div>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            className="md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: mobileMenuOpen ? "auto" : 0,
              opacity: mobileMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {mobileMenuOpen && (
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-md"
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            )}
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="relative h-[2px] bg-gradient-to-r from-purple-400 to-pink-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: scrolled ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ transformOrigin: "0%" }}
          />
        </div>
      </motion.nav>
    </>
  );
}