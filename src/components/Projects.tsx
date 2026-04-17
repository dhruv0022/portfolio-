"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Lock, Shield } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "MediBook",
      tagline: "HIPAA-compliant healthcare platform securing 1000+ patient records",
      description: "A secure, end-to-end encrypted platform with intelligent scheduling, automated notifications, and role-based access control.",
      impact: "Zero appointment conflicts through real-time availability checking",
      techStack: ["Next.js", "Node.js", "MongoDB", "AWS S3", "TypeScript", "Tailwind"],
      securityHighlights: [
        "AES-256 encryption for medical records",
        "JWT authentication with refresh tokens",
        "HIPAA compliance measures",
        "Input sanitization & XSS prevention"
      ],
      liveDemo: "#",
      github: "https://github.com/dhruv0022/medibook",
      caseStudy: "#"
    },
    {
      title: "FleetFlow",
      tagline: "Real-time fleet management with predictive maintenance",
      description: "End-to-end fleet management solution with GPS tracking, maintenance scheduling, and fuel analytics.",
      impact: "Reduced vehicle downtime by 30% through predictive alerts",
      techStack: ["React", "Node.js", "PostgreSQL", "Socket.io", "Mapbox", "Express"],
      securityHighlights: [
        "Role-based access control",
        "Data encryption at rest and in transit",
        "API rate limiting",
        "Secure WebSocket connections"
      ],
      liveDemo: "#",
      github: "https://github.com/dhruv0022/fleetflow",
      caseStudy: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Secure, scalable applications built with clean architecture and user-centric design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400">{project.title}</h3>
                    <p className="text-gray-300 italic mt-1">{project.tagline}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Shield className="text-cyan-400" size={20} />
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{project.description}</p>

                <div className="mb-6">
                  <h4 className="font-bold text-cyan-400 mb-2">Impact:</h4>
                  <p className="text-gray-300">{project.impact}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-cyan-400 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-cyan-400 mb-2">Security Highlights:</h4>
                  <ul className="space-y-2">
                    {project.securityHighlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <Lock className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-800">
                  <a
                    href={project.liveDemo}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <GitBranch size={16} className="mr-1" />
                    GitHub
                  </a>
                  <a
                    href={project.caseStudy}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Case Study
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
