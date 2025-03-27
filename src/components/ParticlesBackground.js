"use client";
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // ✅ UNCOMMENT THIS

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine); // ✅ Initialize particles
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: { color: "transparent" }, // ✅ Make sure background is transparent
                particles: {
                    number: { value: 100 },
                    shape: { type: "circle" },
                    opacity: { value: 0.5 },
                    size: { value: 3 },
                    move: { enable: true, speed: 1 },
                    links: { enable: true, distance: 120, color: "#ffffff" },
                },
            }}
            className="absolute inset-0 w-full h-full"
        />
    );
};

export default ParticlesBackground;
