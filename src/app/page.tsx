"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const sections = {
  about: <About />,
  projects: <Projects />,
  contact: <Contact />,
};

export default function App() {
  const [active, setActive] = useState<keyof typeof sections>("about");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const menuItems = [
    { key: "about", label: "About" },
    { key: "projects", label: "Projects" },
    { key: "contact", label: "Contact" },
  ] as const;

  function handleMenuClick(key: keyof typeof sections) {
    setActive(key);
    setSidebarOpen(false);
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans flex">
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded bg-gray-800 hover:bg-gray-700 focus:outline-none"
        aria-label="Open menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <aside className="hidden md:flex w-40 h-screen fixed top-0 left-0 flex-col justify-center items-center p-6 space-y-8 bg-black z-40">
        <nav className="space-y-6 text-center">
          {menuItems.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`block hover:underline flex items-center justify-center gap-2 ${
                active === key ? "font-bold underline" : ""
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </aside>
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 w-64 h-full bg-black p-6 z-50 flex flex-col space-y-8"
          >
            <button
              onClick={() => setSidebarOpen(false)}
              className="self-end p-2 rounded hover:bg-gray-700 focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <nav className="flex flex-col space-y-6 text-left">
              {menuItems.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => handleMenuClick(key)}
                  className={`flex items-center gap-3 text-lg hover:underline ${
                    active === key ? "font-bold underline" : ""
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 md:ml-40 p-8 flex justify-center items-center min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl w-full"
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
    <div className="text-center max-w-xl mx-auto">
      <Image
        src="/aysumaharramova.jpg"
        alt="Aysu Maharramova"
        width={160}
        height={160}
        className="w-40 h-40 rounded-full mx-auto mb-6 mt-8 shadow-lg object-cover object-[0_90%]"
      />
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="leading-relaxed text-base">
        I&apos;m Aysu Maharramova, a Front-End Developer from Azerbaijan
        specializing in building modern, responsive, and accessible web apps
        with React, Next.js, TypeScript, and JavaScript. I enjoy crafting
        elegant interfaces and continually improving my skills.
      </p>
    </div>
  );
}

function Projects() {
  return (
    <div className="bg-black text-white min-h-screen py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-6">
        {/* Card 1 */}
        <div
          className="bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition flex flex-col overflow-hidden"
          style={{ minWidth: "45%", maxWidth: "400px" }}
        >
          <Image
            src="/printly.png"
            alt="Printly"
            width={400}
            height={160}
            className="w-full h-40 object-cover"
          />
          <div className="p-4 flex flex-col flex-grow justify-between">
            <h3 className="text-xl font-semibold mb-2">Printly </h3>
            <p className="text-gray-400 text-sm mb-4 flex-grow">
              The website is an innovative startup project that connects users
              with printing houses. Additionally, I have also developed a CRM
              website for the company.
            </p>
            <div className="flex gap-4">
              <a
                href="https://printly.az/en"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-3 py-1 text-sm rounded hover:bg-blue-700 transition"
              >
                Live Site
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition flex flex-col overflow-hidden"
          style={{ minWidth: "45%", maxWidth: "400px" }}
        >
          <Image
            src="/altinyildizclassics.png"
            alt="Altin Yildiz"
            width={400}
            height={160}
            className="w-full h-40 object-cover"
          />
          <div className="p-4 flex flex-col flex-grow justify-between">
            <h3 className="text-xl font-semibold mb-2">
              Altin Yildiz Classics
            </h3>
            <p className="text-gray-400 text-sm mb-4 flex-grow">
              I built an exact clone of the Altınyıldız Classics website,
              replicating its design and functionality using Next.js and
              TypeScript.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/aysumaharramovaa/altinyildizclassics"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-3 py-1 text-sm rounded hover:bg-gray-200 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition flex flex-col overflow-hidden"
          style={{ minWidth: "45%", maxWidth: "400px" }}
        >
          <Image
            src="/saytaz.png"
            alt="saytaz"
            width={400}
            height={160}
            className="w-full h-40 object-cover"
          />
          <div className="p-4 flex flex-col flex-grow justify-between">
            <h3 className="text-xl font-semibold mb-2">Sayt.az</h3>
            <p className="text-gray-400 text-sm mb-4 flex-grow">
              A user-friendly cost calculator web app that helps estimate
              expenses efficiently.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/aysumaharramovaa/sayt.az"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-3 py-1 text-sm rounded hover:bg-gray-200 transition"
              >
                GitHub
              </a>
              <a
                href="https://sayt-az-self.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-3 py-1 text-sm rounded hover:bg-blue-700 transition"
              >
                Live Site
              </a>
            </div>
          </div>
        </div>

        <div
          className="bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition flex flex-col overflow-hidden"
          style={{ minWidth: "45%", maxWidth: "400px" }}
        >
          <Image
            src="/orkhan.png"
            alt="Orkhan Gurbanli portfolio"
            width={400}
            height={160}
            className="w-full h-40 object-cover"
          />
          <div className="p-4 flex flex-col flex-grow justify-between">
            <h3 className="text-xl font-semibold mb-2">Portfolio</h3>
            <p className="text-gray-400 text-sm mb-4 flex-grow">
              For Orkhan Gurbanli’s personal portfolio as a Content Creator &
              Copywriter. I built a visually appealing website using modern
              tools like Next.js and TypeScript.
            </p>

            
            <div className="flex gap-4">
              <a
                href="https://github.com/aysumaharramovaa/orkhanPortfolyo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-3 py-1 text-sm rounded hover:bg-gray-200 transition"
              >
                GitHub
              </a>
              <a
                href="https://orkhan-portfolyo.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-3 py-1 text-sm rounded hover:bg-blue-700 transition"
              >
                Live Site
              </a>
            </div>

          </div>
        </div>

        {/* Card 4 */}
        <div
          className="bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition flex flex-col overflow-hidden"
          style={{ minWidth: "45%", maxWidth: "400px" }}
        >
          <Image
            src="/apple.png"
            alt="apple"
            width={400}
            height={160}
            className="w-full h-40 object-cover"
          />
          <div className="p-4 flex flex-col flex-grow justify-between">
            <h3 className="text-xl font-semibold mb-2">
              iPhone 15 Series for iPhone Website
            </h3>
            <p className="text-gray-400 text-sm mb-4 flex-grow">
              A responsive landing page showcasing the iPhone 15 series, built
              with JavaScript and modern web technologies.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/aysumaharramovaa/apple"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-3 py-1 text-sm rounded hover:bg-gray-200 transition"
              >
                GitHub
              </a>
              <a
                href="https://apple-xi-jet.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-3 py-1 text-sm rounded hover:bg-blue-700 transition"
              >
                Live Site
              </a>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div
          className="bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition flex flex-col overflow-hidden"
          style={{ minWidth: "45%", maxWidth: "400px" }}
        >
          <Image
            src="/papajohns.png"
            alt="papajohns"
            width={400}
            height={160}
            className="w-full h-40 object-cover"
          />
          <div className="p-4 flex flex-col flex-grow justify-between">
            <h3 className="text-xl font-semibold mb-2">PapaJohns</h3>
            <p className="text-gray-400 text-sm mb-4 flex-grow">
              A clean and responsive website for PapaJohns, built with HTML and
              CSS.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/aysumaharramovaa/PapaJohns"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-3 py-1 text-sm rounded hover:bg-gray-200 transition"
              >
                GitHub
              </a>
              <a
                href="https://papa-johns-kappa.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-3 py-1 text-sm rounded hover:bg-blue-700 transition"
              >
                Live Site
              </a>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div
          className="bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition flex flex-col overflow-hidden"
          style={{ minWidth: "45%", maxWidth: "400px" }}
        >
          <Image
            src="/medical.png"
            alt="medical"
            width={400}
            height={160}
            className="w-full h-40 object-cover"
          />
          <div className="p-4 flex flex-col flex-grow justify-between">
            <h3 className="text-xl font-semibold mb-2">Medical</h3>
            <p className="text-gray-400 text-sm mb-4 flex-grow">
              A clean and responsive medical website built with HTML and CSS.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/aysumaharramovaa/medical"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-3 py-1 text-sm rounded hover:bg-gray-200 transition"
              >
                GitHub
              </a>
              <a
                href="https://medical-one-amber.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-3 py-1 text-sm rounded hover:bg-blue-700 transition"
              >
                Live Site
              </a>
            </div>
          </div>
        </div>

        {/* Card 7 */}
        <div
          className="bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition flex flex-col overflow-hidden"
          style={{ minWidth: "45%", maxWidth: "400px" }}
        >
          <Image
            src="/foody.png"
            alt="foody"
            width={400}
            height={160}
            className="w-full h-40 object-cover"
          />

          <div className="p-4 flex flex-col flex-grow justify-between">
            <h3 className="text-xl font-semibold mb-2">Foody</h3>
            <p className="text-gray-400 text-sm mb-4 flex-grow">
              A clean, responsive, and user-friendly foody website built with
              HTML and CSS.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/aysumaharramovaa/foody"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-3 py-1 text-sm rounded hover:bg-gray-200 transition"
              >
                GitHub
              </a>
              <a
                href="https://foody-amber.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-3 py-1 text-sm rounded hover:bg-blue-700 transition"
              >
                Live Site
              </a>
            </div>
          </div>
        </div>

        {/* Card 8 */}
        <div
          className="bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition flex flex-col overflow-hidden"
          style={{ minWidth: "45%", maxWidth: "400px" }}
        >
          <Image
            src="/passport.png"
            alt="passport"
            width={400}
            height={160}
            className="w-full h-40 object-cover"
          />

          <div className="p-4 flex flex-col flex-grow justify-between">
            <h3 className="text-xl font-semibold mb-2">Passport</h3>
            <p className="text-gray-400 text-sm mb-4 flex-grow">
              A clean, responsive, and user-friendly passport-related website
              built with HTML and CSS.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/aysumaharramovaa/passport"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-3 py-1 text-sm rounded hover:bg-gray-200 transition"
              >
                GitHub
              </a>
              <a
                href="https://passport-sable.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-3 py-1 text-sm rounded hover:bg-blue-700 transition"
              >
                Live Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <p className="mb-3">📧 Email: aysumeheremovaa@gmail.com</p>

      <p className=" mb-3">
        💻 GitHub:{" "}
        <a
          href="https://github.com/aysumaharramovaa"
          target="_blank"
          rel="noopener noreferrer"
          className=" italic no-underline hover:underline hover:text-blue-500 transition-colors"
        >
          aysumaharramovaa
        </a>
      </p>

      <p>
        💼 LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/aysumaharramova/"
          target="_blank"
          rel="noopener noreferrer"
          className="italic no-underline hover:underline hover:text-blue-500 transition-colors"
        >
          aysumaharramova
        </a>
      </p>

      <div className="text-center mt-6">
        <a
          href="/Aysu Maharramova.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-5 py-2 rounded font-semibold hover:bg-gray-200 transition"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
