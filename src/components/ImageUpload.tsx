import React, { useState, useRef } from 'react';
import { Upload, X } from 'lucide-react';
import { ResultType } from '../types';
import { generateMockResult } from '../utils/mockData';
import ResultsDisplay from './ResultsDisplay';

const ImageUpload: React.FC = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ResultType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (!file.type.match('image.*')) {
      setError('Please upload an image file (JPEG, PNG)');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('File size should be less than 5MB');
      return;
    }

    setError(null);
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setUploadedImage(e.target.result as string);
        processImage();
      }
    };
    reader.readAsDataURL(file);
  };

  const processImage = () => {
    setIsLoading(true);
    setResult(null);
    
    setTimeout(() => {
      const severityLevels: ResultType['severity'][] = ['No DR', 'Mild', 'Moderate', 'Severe', 'Proliferative DR'];
      const randomSeverity = severityLevels[Math.floor(Math.random() * severityLevels.length)];
      
      const mockResult = generateMockResult(randomSeverity);
      setResult(mockResult);
      setIsLoading(false);
    }, 2000);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const resetUpload = () => {
    setUploadedImage(null);
    setResult(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section id="upload" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Upload Retinal Image</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Upload a clear, high-quality retinal image for analysis. Our AI will process the 
            image and provide an assessment of diabetic retinopathy severity.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!uploadedImage ? (
            <div 
              className={`border-2 border-dashed rounded-lg p-8 text-center ${
                dragActive ? 'border-teal-500 bg-teal-50' : 'border-gray-300 bg-white'
              } transition-all`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                onChange={handleChange}
                accept="image/*"
              />
              
              <Upload className="h-16 w-16 mx-auto mb-4 text-gray-400" />
              
              <h3 className="text-xl font-semibold mb-2">Drag and drop your image here</h3>
              <p className="text-gray-500 mb-4">or</p>
              
              <button
                onClick={handleButtonClick}
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg transition-all"
              >
                Browse Files
              </button>
              
              <p className="mt-4 text-sm text-gray-500">
                Supported formats: JPEG, PNG. Max file size: 5MB
              </p>
              
              {error && (
                <div className="mt-4 text-red-500 bg-red-50 p-3 rounded-lg">
                  {error}
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Uploaded Image</h3>
                <button
                  onClick={resetUpload}
                  className="text-gray-500 hover:text-gray-700"
                  title="Remove image"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <div className="relative pb-[100%] bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={uploadedImage}
                      alt="Uploaded retinal image"
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  {isLoading ? (
                    <div className="h-full flex flex-col justify-center items-center">
                      <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                      <p className="text-gray-600">Analyzing image...</p>
                    </div>
                  ) : result ? (
                    <ResultsDisplay result={result} />
                  ) : null}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageUpload;