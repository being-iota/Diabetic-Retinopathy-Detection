import React from 'react';
import { Eye } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-teal-500 to-teal-600 shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Eye className="h-8 w-8 text-white mr-2" />
          <h1 className="text-xl md:text-2xl font-bold text-white">Diabetic Retinopathy Detection</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="text-white hover:text-teal-200 transition">Home</a></li>
            <li><a href="#about" className="text-white hover:text-teal-200 transition">About</a></li>
            <li><a href="#upload" className="text-white hover:text-teal-200 transition">Upload</a></li>
            <li><a href="#info" className="text-white hover:text-teal-200 transition">Information</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;