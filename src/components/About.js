"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-900 text-white py-20 px-6 flex flex-col items-center">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg"
      >
        <Image
          src="/profile.png" // Ensure image is in `public/` directory
          alt="Dhananjay Varshney"
          width={288}
          height={288}
          className="object-cover"
        />
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-blue-400 mt-8"
      >
        About Me
      </motion.h2>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-6 max-w-2xl text-lg text-gray-300 text-center leading-relaxed px-4"
      >
        <p>
          I&apos;m <strong className="text-white">Dhananjay Varshney</strong>, a passionate developer specializing in{" "}
          <strong className="text-blue-300">React, Next.js, and UI/UX design</strong>. I love crafting immersive digital experiences while continuously learning and improving.
        </p>
        <p className="mt-5">
          Currently, I’m focused on <strong className="text-blue-300">AI-powered projects</strong> and <strong className="text-blue-300">3D portfolio designs</strong> with{" "}
          <strong className="text-blue-300">Three.js</strong>, exploring new ways to innovate and push creative boundaries.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
