import { ResultType } from '../types';

export const severityDescriptions: Record<ResultType['severity'], string> = {
  'No DR': 'No signs of diabetic retinopathy detected in the retinal image.',
  'Mild': 'Presence of at least one microaneurysm with no other visible diabetic retinopathy lesions.',
  'Moderate': 'Presence of microaneurysms, cotton wool spots, or soft exudates without signs of severe NPDR.',
  'Severe': 'Presence of numerous intraretinal hemorrhages, definite venous beading, or prominent IRMA.',
  'Proliferative DR': 'Presence of neovascularization, vitreous hemorrhage, or preretinal hemorrhage.'
};

export const severityRecommendations: Record<ResultType['severity'], string[]> = {
  'No DR': [
    'Continue regular annual diabetic eye exams',
    'Maintain good blood sugar control',
    'Follow a healthy lifestyle with proper diet and exercise'
  ],
  'Mild': [
    'Schedule follow-up eye exam in 6-12 months',
    'Monitor blood sugar levels closely',
    'Consult with your primary care physician'
  ],
  'Moderate': [
    'Schedule follow-up eye exam in 3-6 months',
    'Consult with an ophthalmologist about treatment options',
    'Strict blood sugar and blood pressure control'
  ],
  'Severe': [
    'Immediate consultation with a retina specialist',
    'Possible need for laser treatment',
    'Frequent monitoring of eye condition'
  ],
  'Proliferative DR': [
    'Urgent referral to a retina specialist',
    'High likelihood of requiring immediate intervention',
    'Possible treatments include laser photocoagulation or anti-VEGF injections'
  ]
};

export const generateMockResult = (severity: ResultType['severity']): ResultType => {
  const confidenceMap: Record<ResultType['severity'], number> = {
    'No DR': 0.94,
    'Mild': 0.87,
    'Moderate': 0.82,
    'Severe': 0.91,
    'Proliferative DR': 0.95
  };

  return {
    severity,
    confidence: confidenceMap[severity],
    description: severityDescriptions[severity],
    recommendations: severityRecommendations[severity]
  };
};