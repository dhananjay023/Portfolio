"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Password Manager",
    description: "A secure password management app with MongoDB storage.",
    image: "/assets/password-manager.png",
    link: "https://dhananjay023.github.io/PassVault/",
  },
  {
    title: "Spotify Website",
    description: "A sleek, Spotify-inspired website with dynamic UI and smooth animations.",
    image: "/assets/spotify.jfif", // Ensure correct format
    link: "https://dhananjay023.github.io/Spotify/",
  },
  {
    title: "AI Interview Simulator",
    description: "An AI-powered interview preparation tool using Flask & Firebase.",
    image: "/assets/interview-simulator.jfif", // Ensure correct format
    link: "https://your-project-link.com",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white py-16 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-blue-400"
      >
        My Projects
      </motion.h2>

      <div className="mt-12 flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="block bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform w-80 hover:shadow-xl"
          >
            {/* ✅ Use Next.js Image Component */}
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                // cover // ✅ Fixed Image Size
                className="rounded-t-lg object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <span className="text-blue-400 mt-4 inline-block hover:text-blue-300 transition-colors">
                View Project →
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
