import React from 'react';
import { CheckCircle, AlertTriangle, BrainCircuit } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our application uses a Convolutional Neural Network (CNN) trained on the Messidor dataset
            to analyze retinal images and detect signs of diabetic retinopathy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg transition-all hover:shadow-md">
            <div className="mb-4 text-teal-500">
              <CheckCircle className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">1. Upload Your Image</h3>
            <p className="text-gray-600 text-center">
              Upload a high-quality retinal image. Our system accepts common image formats like JPG and PNG.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg transition-all hover:shadow-md">
            <div className="mb-4 text-teal-500">
              <BrainCircuit className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">2. AI Analysis</h3>
            <p className="text-gray-600 text-center">
              Our CNN model processes the image, analyzing patterns and features that indicate diabetic retinopathy.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg transition-all hover:shadow-md">
            <div className="mb-4 text-teal-500">
              <AlertTriangle className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">3. Get Results</h3>
            <p className="text-gray-600 text-center">
              Receive instant feedback on the severity level of diabetic retinopathy with recommended next steps.
            </p>
          </div>
        </div>
        
        <div className="mt-12 bg-gray-100 p-6 rounded-lg">
          <div className="text-center mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Important Disclaimer</h3>
          </div>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            This tool is designed to assist healthcare professionals and should not replace proper medical diagnosis.
            Always consult with an ophthalmologist or healthcare provider for proper evaluation and treatment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;