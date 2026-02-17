import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Home() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    
<section id="home" className="min-h-screen">
    <div className="relative flex flex-col min-h-screen text-violet-800 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-90 via-gray-50 to-gray -z-10"></div>

      {/* Floating Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 -z-0"
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 40 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.3 },
            color: { value: "#8b5cf6" },
            links: {
              enable: true,
              color: "#c4b5fd",
              opacity: 0.2,
              distance: 150,
            },
          },
          detectRetina: true,
        }}
      />

      {/* Main content */}
      <main className="flex flex-col md:flex-row items-center justify-center flex-grow px-6 md:px-16 py-24 gap-20 md:gap-36 z-10">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left max-w-lg"
        >
         
    <h1 className="text-6xl md:text-7xl font-extrabold mb-6 relative">
    {/* "Hi, I'm" in a different color */}
    <span className="text-violet-400 mr-2">Hi, I’m</span>
    
    {/* Name with gradient and subtle shadow */}
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-violet-900 drop-shadow-sm">
        Anjali Lal
    </span>
    </h1>



          {/* Animated Caption */}
          <div className="text-xl md:text-2xl text-gray-700 mb-8 font-medium tracking-wide">
            <TypeAnimation
              sequence={[
                "Python Full Stack Developer",
                1500,
                "Front-End Enthusiast",
                1500,
                "Creative Web Developer",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
          <a
            href="#projects"
            className="bg-gradient-to-r from-violet-500 to-pink-500 text-white px-6 py-3 rounded-lg shadow-md hover:from-violet-600 hover:to-pink-600 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="/AnjaliLal_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 py-3 rounded-lg shadow-md hover:from-pink-600 hover:to-violet-600 transition-all duration-300"
          >
            View CV
          </a>
        </div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-10 md:mt-0"
        >
          <img
            src="/profile.jpg" // Place your image in public/profile.jpg
            alt="Anjali Lal"
            className="w-64 h-64 md:w-72 md:h-72 rounded-full shadow-2xl object-cover border-4 border-violet-200"
          />
        </motion.div>
      </main>
    </div>
    </section>
  );
}

export default Home;
