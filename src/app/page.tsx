"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = {
  about: <About />,
  projects: <Projects />,
  contact: <Contact />,
};

export default function App() {
  const [active, setActive] = useState<keyof typeof sections>("about");

  return (
    <div className="min-h-screen flex font-sans bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 flex flex-col justify-center items-center p-6 space-y-8">
        <nav className="space-y-6 text-center">
          <button
            onClick={() => setActive("about")}
            className={`block hover:underline ${
              active === "about" ? "font-bold underline" : ""
            }`}
          >
            About
          </button>
          <button
            onClick={() => setActive("projects")}
            className={`block hover:underline ${
              active === "projects" ? "font-bold underline" : ""
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActive("contact")}
            className={`block hover:underline ${
              active === "contact" ? "font-bold underline" : ""
            }`}
          >
            Contact
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex justify-center items-center p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl w-full"
          >
            {sections[active]}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function About() {
  return (
    <div className="text-center">
      <img
        src="/aysumaharramova.jpg"
        alt="Aysu Maharramova"
        className="w-40 h-40 rounded-full mx-auto mb-6 mt-8 shadow-lg object-cover object-[0_90%]"
      />
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p>
        I'm Aysu Maharramova, a passionate Front-End Developer based in
        Azerbaijan. I specialize in building modern, responsive, and accessible
        web applications using technologies like React, Next.js, TypeScript, and
        JavaScript. I enjoy turning complex problems into simple, elegant
        interfaces and constantly strive to improve my skills and deliver
        high-quality digital experiences.
      </p>
    </div>
  );
}

function Projects() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">My Projects</h2>
    </div>
  );
}

function Contact() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p>Email: aysumeheremovaa@gmail.com</p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/aysumaharramovaa"
          target="_blank"
          rel="noopener noreferrer"
        >
          aysumaharramovaa
        </a>
      </p>
      <p>LinkedIn: { }
        <a
        href="https://www.linkedin.com/in/aysumaharramova/" 
        target="_blank"
        rel="noopener noreferrer">
          aysumaharramova
      </a>
      </p>
    </div>
  );
}
