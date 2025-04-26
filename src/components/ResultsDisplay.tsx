import React from 'react';
import { AlertCircle, CheckCircle, AlertTriangle, AlertOctagon, Skull } from 'lucide-react';
import { ResultType } from '../types';

interface ResultsDisplayProps {
  result: ResultType;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result }) => {
  const getSeverityIcon = () => {
    switch (result.severity) {
      case 'No DR':
        return <CheckCircle className="h-8 w-8 text-green-500" />;
      case 'Mild':
        return <AlertCircle className="h-8 w-8 text-yellow-500" />;
      case 'Moderate':
        return <AlertTriangle className="h-8 w-8 text-orange-500" />;
      case 'Severe':
        return <AlertOctagon className="h-8 w-8 text-red-500" />;
      case 'Proliferative DR':
        return <Skull className="h-8 w-8 text-purple-700" />;
      default:
        return <AlertCircle className="h-8 w-8 text-gray-500" />;
    }
  };

  const getSeverityColor = () => {
    switch (result.severity) {
      case 'No DR':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Mild':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Moderate':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Severe':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Proliferative DR':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="h-full">
      <div className={`p-4 rounded-lg mb-4 border ${getSeverityColor()}`}>
        <div className="flex items-center">
          {getSeverityIcon()}
          <div className="ml-3">
            <h4 className="font-semibold text-lg">{result.severity}</h4>
            <div className="text-sm opacity-75">
              Confidence: {(result.confidence * 100).toFixed(1)}%
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-medium text-gray-700 mb-2">Description:</h4>
        <p className="text-gray-600">{result.description}</p>
      </div>

      <div>
        <h4 className="font-medium text-gray-700 mb-2">Recommendations:</h4>
        <ul className="space-y-2">
          {result.recommendations.map((recommendation, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-4 h-4 mt-1 mr-2 bg-teal-500 rounded-full flex-shrink-0"></span>
              <span className="text-gray-600">{recommendation}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500 italic">
          Note: This is an AI-assisted analysis and should not replace professional medical advice.
          Please consult with a healthcare provider for proper diagnosis and treatment.
        </p>
      </div>
    </div>
  );
};

export default ResultsDisplay;