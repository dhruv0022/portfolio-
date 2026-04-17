"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function About() {
  const journey = [
    {
      year: "2018-2022",
      title: "Bachelor's in Computer Science",
      description: "Graduated with honors, focused on cybersecurity and software engineering"
    },
    {
      year: "2023-2024",
      title: "Mobile Solutions Developer",
      description: "Conestoga College program focusing on full-stack mobile development"
    },
    {
      year: "2024",
      title: "AWS Certified Cloud Practitioner",
      description: "Validated cloud infrastructure and security knowledge"
    },
    {
      year: "2024",
      title: "Built MediBook & FleetFlow",
      description: "Developed secure healthcare and fleet management platforms"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a full-stack developer who believes <span className="text-cyan-400 font-semibold">security isn't optional</span> and <span className="text-cyan-400 font-semibold">clean code is self-documenting</span>.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-2/5"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">My Journey</h3>
              <div className="space-y-6">
                {journey.map((item, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-cyan-400/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-cyan-400"></div>
                    <p className="text-sm text-cyan-400 font-semibold">{item.year}</p>
                    <h4 className="text-lg font-bold mt-1">{item.title}</h4>
                    <p className="text-gray-300 mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-3/5"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">What Drives Me</h3>
              <p className="text-gray-300 mb-6">
                I'm fascinated by the intersection of security and user experience. How do we build systems that are both ironclad secure AND delightfully easy to use? That's the challenge I love solving.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="glass-card p-4 rounded-lg">
                  <Calendar className="text-cyan-400 mb-2" size={24} />
                  <h4 className="font-bold mb-1">Currently Learning</h4>
                  <p className="text-sm text-gray-300">Advanced React patterns</p>
                </div>

                <div className="glass-card p-4 rounded-lg">
                  <MapPin className="text-cyan-400 mb-2" size={24} />
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-sm text-gray-300">PEI, Canada</p>
                </div>

                <div className="glass-card p-4 rounded-lg">
                  <Clock className="text-cyan-400 mb-2" size={24} />
                  <h4 className="font-bold mb-1">Availability</h4>
                  <p className="text-sm text-gray-300">Open to opportunities</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}