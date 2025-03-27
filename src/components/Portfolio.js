"use client";
import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-black text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full p-4 bg-gray-900 opacity-90 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      
      {/* Hero Section */}
      <header className="h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/hero-background.jpg')" }}>
        <h1 className="text-5xl font-bold">Dhananjay Varshney</h1>
        <p className="text-xl mt-4">Sleek, Professional Portfolio</p>
      </header>
      
      {/* About Section */}
      <section id="about" className="h-screen flex flex-col justify-center items-center p-10">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="max-w-2xl text-center mt-4">A brief description of expertise, interests, and background.</p>
      </section>

      {/* Other sections here */}
    </div>
  );
};

export default Portfolio;
