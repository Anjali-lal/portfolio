import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code, School } from "lucide-react";

const educationData = [
  {
    title: "Python Full Stack Development",
    place: "Arcite, Ernakulam",
    desc: "Currently training in full-stack web development with Python, React, and modern frameworks.",
    year: "2025",
    icon: <Code className="w-6 h-6 text-violet-600" />,
  },
  {
    title: "B.Tech in Computer Science",
    place: "Baselius Mathews II College of Engineering, Bharanikkavu",
    desc: "Developed strong foundations in programming, algorithms, and software development practices.",
    year: "2024",
    icon: <GraduationCap className="w-6 h-6 text-violet-600" />,
  },
  {
    title: "Plus One & Plus Two",
    place: "HSS Sasthamkotta",
    desc: "Focused on Computer Science and Mathematics stream with early exposure to programming concepts.",
    year: "2020",
    icon: <School className="w-6 h-6 text-violet-600" />,
  },
  {
    title: "10th Grade",
    place: "JMHS Bharanikkavu",
    desc: "Completed secondary education with a strong academic record and keen interest in technology.",
    year: "2018",
    icon: <School className="w-6 h-6 text-violet-600" />,
  },
];

export default function Education() {
  return (
    <section id="education" className="min-h-screen">
    <section id="education" className="bg-gray-50 py-28 px-6 md:px-20 min-h-screen">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-titleGradient">
        Education
      </h2>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto before:absolute before:top-0 before:left-1/2 before:transform before:-translate-x-1/2 before:h-full before:w-1 before:bg-gradient-to-b before:from-violet-500 before:to-pink-400">
        {educationData.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className={`relative flex flex-col md:flex-row items-center mb-16 transform transition-transform duration-300 hover:scale-[1.02] ${
              i % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-violet-500 w-6 h-6 rounded-full z-10 flex items-center justify-center shadow-lg">
              {edu.icon}
            </div>

            {/* Content Card */}
            <div
              className={`bg-white shadow-lg rounded-2xl p-6 md:w-5/12 border border-gray-200 hover:shadow-2xl transition-all duration-300 ${
                i % 2 === 0 ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"
              }`}
            >
              <h3 className="text-2xl font-semibold text-violet-700">{edu.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{edu.place}</p>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">{edu.desc}</p>
              <span className="block mt-4 text-sm font-medium text-pink-600">{edu.year}</span>
            </div>
          </motion.div>
        ))}
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
    </section>
  );
}
