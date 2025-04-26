export interface ResultType {
  severity: 'No DR' | 'Mild' | 'Moderate' | 'Severe' | 'Proliferative DR';
  confidence: number;
  description: string;
  recommendations: string[];
}

export interface SampleImageType {
  id: string;
  url: string;
  alt: string;
  severity: ResultType['severity'];
}