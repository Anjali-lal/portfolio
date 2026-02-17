import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Note App",
      description: "A simple note-taking app with local storage for saving your notes securely.",
      image: "/projects/note-app.jpg",
      link: "https://note-app-xbpq.vercel.app/",
    },
    {
      title: "To-Do List",
      description: "A minimal To-Do app that helps you organize your daily tasks efficiently.",
      image: "/projects/todo-list.png",
      link: "https://github.com/Anjali-lal/todo-list",
    },
    {
      title: "Netflix Clone",
      description: "A React-based Netflix clone with dynamic movie listings and authentication.",
      image: "/projects/netflix.jpg",
      link: "https://github.com/Anjali-lal/netflix-clone",
    },
    {
      title: "Portfolio",
      description: "My personal portfolio built with React, showcasing my projects and skills.",
      image: "/projects/portfolio.jpg",
      link: "https://github.com/Anjali-lal/portfolio",
    },
     {
      title: "E-Cart",
      description: "a simple website for buying appliances where add to cart,remove are there.",
      image: "/projects/E-Cart.jpg",
      link: "https://github.com/Anjali-lal/E-Cart",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-24 bg-gradient-to-b from-pink-100 via-violet-100 to-pink-50 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-violet-700 mb-12 text-center"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl px-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white text-gray-900 rounded-2xl shadow-xl border border-violet-200 overflow-hidden transition-transform hover:shadow-pink-200"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-violet-600">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-gradient-to-r from-pink-400 to-violet-500 text-white px-4 py-2 rounded-lg shadow-md hover:from-pink-500 hover:to-violet-600 transition-all"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
