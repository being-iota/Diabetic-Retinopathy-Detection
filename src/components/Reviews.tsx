import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  location: string;
  content: string;
  rating: number;
  image: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    location: "New York, USA",
    content: "This AI-powered tool has revolutionized how we screen for diabetic retinopathy in our clinic. The accuracy and speed of detection have significantly improved our workflow.",
    rating: 5,
    image: "https://images.pexels.com/photos/5722166/pexels-photo-5722166.jpeg"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    location: "Toronto, Canada",
    content: "As an ophthalmologist, I'm impressed by the system's ability to detect early signs of DR. It's become an invaluable tool in our diagnostic process.",
    rating: 5,
    image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg"
  },
  {
    id: 3,
    name: "Dr. Emma Thompson",
    location: "London, UK",
    content: "The accuracy of this system has helped us identify cases that might have been missed. It's an excellent screening tool for primary care settings.",
    rating: 5,
    image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg"
  },
  {
    id: 4,
    name: "Dr. Raj Patel",
    location: "Mumbai, India",
    content: "This tool has been particularly valuable in our rural outreach programs. It's helping us reach and diagnose more patients than ever before.",
    rating: 5,
    image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg"
  }
];

const Reviews: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Healthcare Professionals Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by leading healthcare professionals worldwide for diabetic retinopathy screening.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-start space-x-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-800">{review.name}</h3>
                      <p className="text-gray-500 text-sm">{review.location}</p>
                    </div>
                    <Quote className="h-8 w-8 text-teal-500 opacity-50" />
                  </div>
                  <div className="flex items-center mt-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600">{review.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;