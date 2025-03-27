"use client";
import { motion } from "framer-motion";

export default function AnimatedCode() {
  return (
    <motion.div
      className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-black text-green-400 p-4 font-mono text-sm overflow-hidden rounded-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.pre
        animate={{ y: [-100, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
      >
        {`function helloWorld() {
  console.log("Hello, Dhananjay!");
}
setInterval(helloWorld, 1000);
`}
      </motion.pre>
    </motion.div>
  );
}
