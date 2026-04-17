import { Mail, Link, User } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Dhruv Panchal. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="mailto:dhruv.panchal@example.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com/dhruvpanchal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <User size={24} />
            </a>
            <a
              href="https://linkedin.com/in/dhruvpanchal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Link size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
          <p className="mt-1">Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  );
}