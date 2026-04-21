"use client";

import { motion } from "framer-motion";
import { AwardIcon } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React/Next.js", level: 90, projects: 3 },
        { name: "TypeScript", level: 85, projects: 3 },
        { name: "Tailwind CSS", level: 90, projects: 3 },
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 85, projects: 3 },
        { name: "Express.js", level: 85, projects: 2 },
        { name: "REST APIs", level: 90, projects: 3 },
      ]
    },
    {
      name: "Security",
      skills: [
        { name: "Authentication (JWT)", level: 85, projects: 2 },
        { name: "Encryption", level: 75, projects: 1 },
        { name: "AWS Security", level: 70, certified: true },
      ]
    },
    {
      name: "Database",
      skills: [
        { name: "MongoDB", level: 80, projects: 2 },
        { name: "PostgreSQL", level: 75, projects: 1 },
        { name: "Mongoose", level: 80, projects: 2 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proficiency levels based on real-world application and project experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">{category.name}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-teal-500 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-1 text-sm text-gray-400">
                      <span>{skill.projects ? `${skill.projects} projects` : ""}</span>
                      {skill.certified && (
                        <span className="flex items-center">
                          <AwardIcon size={14} className="text-yellow-400 mr-1" />
                          Certified
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 glass-card rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <div className="bg-gray-800 border-2 border-cyan-400 rounded-xl p-4 inline-block">
                <AwardIcon size={80} className="text-cyan-400" />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8 text-center md:text-left">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">AWS Certified Cloud Practitioner</h3>
              <p className="text-gray-300 mb-4">
                Validated expertise in cloud infrastructure, security, and compliance on the AWS platform.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
