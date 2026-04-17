"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("dhruv.panchal@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Let's Connect</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to build something secure and scalable together?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-cyan-400 mt-1 mr-4 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <div className="flex items-center mt-1">
                      <span className="text-gray-300">panchaldhruv05@gmail.com</span>
                      <button
                        onClick={copyEmail}
                        className="ml-3 p-2 rounded-full hover:bg-gray-800 transition-colors"
                        aria-label="Copy email"
                      >
                        {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-cyan-400 mt-1 mr-4 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-300 mt-1">+1 (548) 398-4627</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-cyan-400 mt-1 mr-4 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-gray-300 mt-1">PE, Canada (Remote)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-cyan-400 mb-4">Availability</h4>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-gray-300">Open to new opportunities</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">Best time to reach me: 9AM-5PM EST</p>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-cyan-400 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/dhruv0022"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dhruv-panchal-32b5251ba/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Send a Message</h3>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}