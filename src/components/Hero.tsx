"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

type Particle = {
  id: number;
  width: number;
  height: number;
  top: number;
  left: number;
  animationDuration: number;
};

export default function Hero() {
  const roles = [
    "Full-Stack Developer",
    "Security Enthusiast",
    "AWS Certified",
    "Problem Solver"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate particles with fixed random values
  useEffect(() => {
    const generateParticles = () => {
      const particleArray: Particle[] = [];
      for (let i = 0; i < 20; i++) {
        particleArray.push({
          id: i,
          width: Math.random() * 10 + 2,
          height: Math.random() * 10 + 2,
          top: Math.random() * 100,
          left: Math.random() * 100,
          animationDuration: Math.random() * 4 + 2
        });
      }
      setParticles(particleArray);
    };

    generateParticles();
  }, []);

  useEffect(() => {
    const handleType = () => {
      const currentIndex = loopNum % roles.length;
      const fullText = roles[currentIndex];

      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(100);
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, roles, typingSpeed]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-cyan-500 opacity-20"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              animation: `pulse ${particle.animationDuration}s infinite alternate`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-cyan-400">Dhruv Panchal</span>
          </h1>

          <div className="text-xl md:text-3xl mb-8 h-8">
            <span className="inline-block">{displayText}</span>
            <span className="inline-block w-1 h-8 ml-1 bg-cyan-400 animate-blink"></span>
          </div>
        </div>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-300">
          Building secure, scalable applications with a focus on clean architecture and user-centric design
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            View Projects
          </a>
          <a
            href="/Dhruv-Panchal-Resume.txt"
            download="Dhruv-Panchal-Resume.txt"
            className="px-8 py-3 border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white font-semibold rounded-lg transition-all duration-300"
          >
            Download Resume
          </a>
        </div>

        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 max-w-2xl mx-auto backdrop-blur-sm border border-gray-700">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <pre className="text-left text-cyan-400 font-mono text-sm md:text-base">
{`> whoami
Dhruv Panchal - Full-Stack Developer

> ls projects
MediBook.tsx  FleetFlow.tsx  Portfolio.tsx

> cat about.txt
Building secure, scalable applications...`}
          </pre>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-cyan-400" size={32} />
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.2; }
          100% { transform: scale(1.5); opacity: 0.1; }
        }

        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }

        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  );
}
