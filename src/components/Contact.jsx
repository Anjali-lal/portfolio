import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 text-gray-100 py-28 px-6 md:px-16 min-h-screen">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-titleGradient">
        Contact Me
      </h2>

      {/* Container */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-16 md:gap-24">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-gray-800 shadow-lg rounded-2xl p-10 border border-gray-700 font-mono"
        >
          <form className="flex flex-col gap-5">
            <label className="flex flex-col gap-1">
              <span className="text-violet-400">Name</span>
              <input
                type="text"
                placeholder="Your Name"
                className="bg-gray-900 border border-violet-500 rounded-lg p-4 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-violet-400">Email</span>
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-900 border border-violet-500 rounded-lg p-4 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-violet-400">Message</span>
              <textarea
                placeholder="Your Message"
                rows={6}
                className="bg-gray-900 border border-violet-500 rounded-lg p-4 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
              ></textarea>
            </label>
            <button
              type="submit"
              className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 text-white font-mono py-3 rounded-lg hover:opacity-90 transition duration-300 border border-transparent hover:border-violet-400"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col items-center justify-center gap-10"
        >
          <h3 className="text-2xl font-semibold text-violet-400 mb-6 font-mono text-center">
            Connect with me
          </h3>
          <div className="flex gap-10">
            <a
              href="https://www.linkedin.com/in/anjali-lal-9246112a1/"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-lg border border-violet-500 hover:shadow-lg hover:shadow-violet-500 transition transform hover:scale-110"
            >
              <Linkedin className="w-10 h-10 text-violet-500" />
            </a>
            <a
              href="https://github.com/Anjali-lal"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-lg border border-violet-500 hover:shadow-lg hover:shadow-violet-500 transition transform hover:scale-110"
            >
              <Github className="w-10 h-10 text-violet-500" />
            </a>
            <a
              href="mailto:anjalilal038@gmail.com"
              className="p-4 rounded-lg border border-violet-500 hover:shadow-lg hover:shadow-violet-500 transition transform hover:scale-110"
            >
              <Mail className="w-10 h-10 text-violet-500" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Gradient Title Animation */}
      <style>{`
        @keyframes titleGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-titleGradient {
          background-size: 200% 200%;
          animation: titleGradient 6s ease infinite;
        }
      `}</style>
    </section>
  );
}
