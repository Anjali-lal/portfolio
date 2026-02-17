import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Django",
    "Tailwind CSS",
    "Git / GitHub",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-violet-50 via-pink-50 to-violet-100 py-20 px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-violet-700 mb-10 text-center"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="text-lg md:text-xl text-gray-700 max-w-3xl text-center leading-relaxed"
      >
        Hi, I’m <span className="text-violet-600 font-semibold">Anjali Lal</span> from
        Kollam — a dedicated and detail-oriented{" "}
        <span className="text-pink-600 font-semibold">
          Python Full Stack Trainee
        </span>{" "}
        at Arcite, Ernakulam. I’m passionate about designing and developing
        responsive, user-friendly web applications that blend clean UI with
        efficient functionality. With a strong interest in front-end development
        and full-stack integration, I continuously explore new technologies to
        refine my craft and bring ideas to life.
      </motion.p>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-12 w-full max-w-4xl"
      >
        <h3 className="text-3xl font-semibold text-violet-700 text-center mb-8">
          Technical Skills
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.1 }}
              className="px-6 py-2 bg-gradient-to-r from-violet-200 to-pink-200 text-violet-700 font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
