import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToUpload = () => {
    const uploadSection = document.getElementById('upload');
    if (uploadSection) {
      uploadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gray-50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            AI-Powered Diabetic Retinopathy Detection
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Upload your retinal images and get instant AI analysis to detect signs of diabetic retinopathy.
            Early detection can prevent vision loss.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <button
              onClick={scrollToUpload}
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105"
            >
              Upload Image
            </button>
            <a 
              href="#info"
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium transition-all"
            >
              Learn More
            </a>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown className="mx-auto h-8 w-8 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;