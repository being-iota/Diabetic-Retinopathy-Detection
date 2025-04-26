import React from 'react';
import { Heart, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About This Project</h3>
            <p className="text-gray-300">
              This project uses a CNN model to detect diabetic retinopathy in retinal images,
              helping with early diagnosis and prevention of vision loss.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-teal-300 transition">Documentation</a></li>
              <li><a href="#" className="hover:text-teal-300 transition">Research Paper</a></li>
              <li><a href="#" className="hover:text-teal-300 transition">Dataset Information</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="flex items-center mb-2">
              <Mail className="h-5 w-5 mr-2 text-gray-300" />
              <a href="mailto:contact@example.com" className="text-gray-300 hover:text-teal-300 transition">
                contact@example.com
              </a>
            </div>
            <div className="flex items-center">
              <Github className="h-5 w-5 mr-2 text-gray-300" />
              <a href="https://github.com/shank250/Mini-Project-Diabetic-retinopathy" 
                 className="text-gray-300 hover:text-teal-300 transition" target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p className="flex items-center justify-center">
            Built with <Heart className="h-4 w-4 mx-1 text-red-500" /> in 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;