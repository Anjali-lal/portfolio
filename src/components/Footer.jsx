import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-16 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-0 gap-6">
        <p className="text-gray-400 font-mono text-center md:text-left">
          © {new Date().getFullYear()} Anjali Lal. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/anjali-lal-9246112a1/" target="_blank" rel="noreferrer" className="hover:text-violet-400 transition">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/Anjali-lal?tab=repositories" target="_blank" rel="noreferrer" className="hover:text-violet-400 transition">
            <Github className="w-6 h-6" />
          </a>
          <a href="mailto:anjalilal038@gmail.com" className="hover:text-violet-400 transition">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
      <p className="text-gray-500 text-sm text-center mt-6 font-mono">Designed & Built by Anjali Lal</p>
    </footer>
  );
}
