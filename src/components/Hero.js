"use client";
import React from "react";
import { motion } from "framer-motion";
import AnimatedCode from "./AnimatedCode";

const Hero = () => {
    return (
        <section 
            className="relative h-screen flex flex-col justify-center items-center 
            bg-black text-white text-center overflow-hidden bg-cover bg-center"
        >
            {/* Background Parallax Effect */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/stars.jpg')" }}
            />

            {/* Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative text-5xl md:text-7xl font-bold text-white drop-shadow-lg"
            >
                Hi, I'm <span className="text-blue-400">Dhananjay</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="relative mt-4 text-lg md:text-2xl text-gray-300"
            >
                Web Developer | UI/UX Enthusiast | AI Innovator
            </motion.p>

            {/* Call-to-Action Button */}
            <motion.a
                href="#projects"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-lg text-white text-lg font-semibold"
            >
                View My Work
            </motion.a>
        </section>
    );
};

export default Hero;
