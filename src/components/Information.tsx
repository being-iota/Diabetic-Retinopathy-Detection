import React from 'react';
import { Info, BookOpen, Eye, AlertCircle } from 'lucide-react';

const Information: React.FC = () => {
  return (
    <section id="info" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Understanding Diabetic Retinopathy</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn about the condition, its causes, symptoms, and why early detection is crucial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Info className="h-6 w-6 text-teal-500 mr-2" />
              <h3 className="text-xl font-semibold">What is Diabetic Retinopathy?</h3>
            </div>
            <p className="text-gray-600">
              Diabetic retinopathy is a diabetes complication affecting the eyes. It's caused by damage to the 
              blood vessels in the retina (the light-sensitive tissue at the back of the eye). If left untreated, 
              it can lead to blindness. It's the leading cause of vision impairment and blindness among working-age adults.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Eye className="h-6 w-6 text-teal-500 mr-2" />
              <h3 className="text-xl font-semibold">Symptoms</h3>
            </div>
            <p className="text-gray-600 mb-4">
              In early stages, diabetic retinopathy often has no symptoms. As it progresses, symptoms may include:
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Spots or dark strings floating in your vision (floaters)</li>
              <li>Blurred vision</li>
              <li>Fluctuating vision</li>
              <li>Dark or empty areas in your vision</li>
              <li>Vision loss</li>
              <li>Difficulty perceiving colors</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 text-teal-500 mr-2" />
              <h3 className="text-xl font-semibold">Stages of Diabetic Retinopathy</h3>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-gray-800">Mild Non-Proliferative Retinopathy</h4>
                <p className="text-gray-600">Small balloon-like swellings in the retina's tiny blood vessels.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Moderate Non-Proliferative Retinopathy</h4>
                <p className="text-gray-600">Some blood vessels that nourish the retina become blocked.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Severe Non-Proliferative Retinopathy</h4>
                <p className="text-gray-600">More blood vessels become blocked, depriving areas of the retina of blood supply.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Proliferative Retinopathy</h4>
                <p className="text-gray-600">New, abnormal blood vessels grow along the retina and into the vitreous gel.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <AlertCircle className="h-6 w-6 text-teal-500 mr-2" />
              <h3 className="text-xl font-semibold">Importance of Early Detection</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Early detection of diabetic retinopathy is crucial for effective treatment. Most vision loss from 
              diabetic retinopathy can be prevented with:
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Early detection through regular eye exams</li>
              <li>Timely treatment</li>
              <li>Careful management of diabetes (controlling blood sugar, blood pressure, and cholesterol)</li>
              <li>Regular follow-up care</li>
            </ul>
            <p className="mt-4 text-gray-600">
              Our AI detection system aims to make early screening more accessible, but should always be 
              followed by professional medical consultation.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://www.aao.org/eye-health/diseases/what-is-diabetic-retinopathy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
          >
            Learn more from the American Academy of Ophthalmology
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Information;