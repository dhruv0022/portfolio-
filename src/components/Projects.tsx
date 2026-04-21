"use client";

import { motion } from "framer-motion";
import { Briefcase, CalendarDays, ExternalLink, GitBranch, Lock, Shield } from "lucide-react";

export default function Projects() {
  const experiences = [
    {
      company: "Goodlli Salon Management Platform",
      role: "Application Developer",
      period: "Jan 2022 - Dec 2022",
      summary: "Built a production-ready cross-platform salon management app with Flutter and Dart for 100+ active salons.",
      liveDemo: "https://play.google.com/store/apps/details?id=com.goodlii",
      achievements: [
        "Designed real-time appointment booking flows that reduced booking processing time by 60%",
        "Integrated RESTful APIs for authentication, booking management, and service listings",
        "Built 25+ reusable Flutter UI components with scalable state management patterns",
        "Collaborated in an Agile team with code reviews and Git workflows while maintaining high code quality",
        "Delivered responsive Android and iOS experiences for salon staff and business owners"
      ],
      techStack: ["Flutter", "Dart", "REST APIs", "Android", "iOS", "Git", "Agile"]
    }
  ];

  const projects = [
    {
      title: "MediBook",
      tagline: "Full-stack healthcare platform with secure scheduling and patient data protection",
      description: "Architected a TypeScript-based healthcare platform with appointment scheduling, role-based access control, encrypted notes, and automated reminders.",
      impact: "Conflict detection and reminder workflows supported appointment scheduling for 500+ users",
      techStack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
      securityHighlights: [
        "AES-256 encryption for medical records",
        "JWT authentication and secure session management",
        "Role-based access control for patients, doctors, and admins",
        "Automated notification workflows for appointment reminders"
      ],
      liveDemo: "#",
      github: "https://github.com/dhruv0022/medibook",
      caseStudy: "#"
    },
    {
      title: "FleetFlow",
      tagline: "Asset management platform with analytics, search, and operational visibility",
      description: "Developed a full-stack MERN application for managing large asset inventories with filtering, dashboards, and performance-focused API design.",
      impact: "Managed 10,000+ assets with sub-200ms API responses and reduced platform error rates by 85%",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Recharts", "REST APIs"],
      securityHighlights: [
        "Role-based access control",
        "Optimized database indexing for fast, reliable queries",
        "Comprehensive input validation across API endpoints",
        "Production-ready environment setup with CI/CD workflow support"
      ],
      liveDemo: "#",
      github: "https://github.com/dhruv0022/fleetflow",
      caseStudy: "#"
    },
    {
      title: "CS Department Website",
      tagline: "Department website and content management system for Conestoga College",
      description: "Designed and developed a complete website for the Computer Science department with dynamic content management for faculty and staff.",
      impact: "Enabled non-technical faculty to update course information, announcements, and student resources without developer support",
      techStack: ["PHP", "JavaScript", "MySQL", "HTML5", "CSS3", "cPanel"],
      securityHighlights: [
        "MySQL-backed content management workflows",
        "Full hosting setup with domain and cPanel configuration",
        "SSL certificate implementation for secure access",
        "Structured admin experience for safe content updates"
      ],
      liveDemo: "#",
      github: "https://github.com/21parth/ACSIT-Web",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Projects & Experience</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Selected work spanning healthcare, operations, education, and mobile product development
          </p>
        </motion.div>

        <div className="mb-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-2">Professional Experience</p>
                  <h3 className="text-2xl font-bold">{experience.role}</h3>
                  <p className="text-lg text-gray-300 mt-1">{experience.company}</p>
                </div>

                <div className="inline-flex items-center gap-2 text-sm text-gray-300">
                  <CalendarDays size={16} className="text-cyan-400" />
                  <span>{experience.period}</span>
                </div>
              </div>

              <p className="text-gray-300 mb-6">{experience.summary}</p>

              <div className="mb-6">
                <h4 className="font-bold text-cyan-400 mb-3 flex items-center gap-2">
                  <Briefcase size={18} />
                  Key Contributions
                </h4>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <Shield className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-cyan-400 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 mt-6 border-t border-gray-800">
                <a
                  href={experience.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <ExternalLink size={16} className="mr-1" />
                  View on Google Play
                </a>
              </div>
            </motion.div>
          ))}
        </div>

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

                {(project.liveDemo !== "#" || project.github !== "#" || project.caseStudy !== "#") && (
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-800">
                    {project.liveDemo !== "#" && (
                      <a
                        href={project.liveDemo}
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Live Demo
                      </a>
                    )}
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <GitBranch size={16} className="mr-1" />
                        GitHub
                      </a>
                    )}
                    {project.caseStudy !== "#" && (
                      <a
                        href={project.caseStudy}
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Case Study
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
