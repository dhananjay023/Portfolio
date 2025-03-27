"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-4 px-6 z-50 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Portfolio</h1>
      <ul className="flex gap-6">
        {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
          <li key={item}>
            <Link href={`/#${item.toLowerCase()}`} className="hover:text-gray-400 transition">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
