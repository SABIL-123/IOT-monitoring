export interface IoTData {
  timestamp: string;
  soilMoisture: number;
  temperature: number;
  humidity: number;
  light: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  points: number;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  thumbnail: string;
  progress: number;
  modules: number;
}

export interface SCMStep {
  id: string;
  status: string;
  location: string;
  timestamp: string;
  details: string;
  icon: string;
}

export type ModuleType = 'dashboard' | 'iot' | 'edu' | 'scm' | 'catalog' | 'olahan' | 'crm' | 'kiosk';
