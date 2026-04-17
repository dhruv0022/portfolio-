"use client";

import { motion } from "framer-motion";
import { Lock, Shield, Eye, Code } from "lucide-react";
import { useState } from "react";

export default function Security() {
  const [showAnswer, setShowAnswer] = useState(false);

  const securityPrinciples = [
    {
      icon: <Lock className="text-cyan-400" size={24} />,
      title: "Encryption by Default",
      example: "All sensitive data in MediBook encrypted with AES-256 before storage. Zero plain-text patient records."
    },
    {
      icon: <Shield className="text-cyan-400" size={24} />,
      title: "Input Validation",
      example: "Multi-layer validation: client-side (Zod), server-side (express-validator), database (Mongoose schemas)"
    },
    {
      icon: <Eye className="text-cyan-400" size={24} />,
      title: "Authentication & Authorization",
      example: "JWT with refresh tokens, role-based access control, and session management"
    },
    {
      icon: <Code className="text-cyan-400" size={24} />,
      title: "Secure Coding Practices",
      example: "OWASP Top 10 awareness, dependency scanning, and regular security audits"
    }
  ];

  const vulnerableCode = `
// Vulnerable code - Spot the security issue!
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // UNSAFE: Direct string concatenation in query
  const query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";

  db.query(query, (err, results) => {
    if (results.length > 0) {
      res.send('Login successful');
    } else {
      res.send('Invalid credentials');
    }
  });
});
  `;

  const secureCode = `
// Secure version with parameterized queries
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // SAFE: Parameterized query prevents SQL injection
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';

  db.query(query, [username, password], (err, results) => {
    if (results.length > 0) {
      res.send('Login successful');
    } else {
      res.send('Invalid credentials');
    }
  });
});
  `;

  return (
    <section id="security" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Security Spotlight</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my security-first development approach and awareness
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {securityPrinciples.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center mb-4">
                {principle.icon}
                <h3 className="text-xl font-bold ml-3 text-cyan-400">{principle.title}</h3>
              </div>
              <p className="text-gray-300">{principle.example}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Interactive Security Challenge</h3>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3">Can you spot the vulnerability in this code?</h4>
            <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
              {vulnerableCode}
            </pre>
          </div>

          {!showAnswer ? (
            <div className="text-center">
              <button
                onClick={() => setShowAnswer(true)}
                className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                Reveal Answer
              </button>
            </div>
          ) : (
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3 text-yellow-400">Security Issue Identified:</h4>
              <p className="text-gray-300 mb-4">
                This code is vulnerable to SQL injection attacks because it concatenates user input directly into the SQL query string.
              </p>

              <h4 className="text-lg font-semibold mb-3">Secure Version:</h4>
              <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm mb-4">
                {secureCode}
              </pre>

              <p className="text-gray-300">
                The secure version uses parameterized queries, which separate the SQL code from the data, preventing injection attacks.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}