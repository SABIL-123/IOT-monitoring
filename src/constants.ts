import { IoTData, Product, Course, SCMStep } from './types';

export const MOCK_IOT_DATA: IoTData[] = [
  { timestamp: '06:00', soilMoisture: 48, temperature: 22, humidity: 65, light: 50 },
  { timestamp: '08:00', soilMoisture: 45, temperature: 24, humidity: 60, light: 300 },
  { timestamp: '10:00', soilMoisture: 42, temperature: 26, humidity: 55, light: 600 },
  { timestamp: '12:00', soilMoisture: 40, temperature: 29, humidity: 50, light: 900 },
  { timestamp: '14:00', soilMoisture: 38, temperature: 30, humidity: 48, light: 850 },
  { timestamp: '16:00', soilMoisture: 41, temperature: 28, humidity: 52, light: 500 },
  { timestamp: '18:00', soilMoisture: 44, temperature: 25, humidity: 58, light: 200 },
  { timestamp: '20:00', soilMoisture: 46, temperature: 23, humidity: 62, light: 50 },
  { timestamp: '22:00', soilMoisture: 47, temperature: 22, humidity: 64, light: 10 },
  { timestamp: '00:00', soilMoisture: 48, temperature: 21, humidity: 66, light: 0 },
  { timestamp: '02:00', soilMoisture: 49, temperature: 20, humidity: 68, light: 0 },
  { timestamp: '04:00', soilMoisture: 50, temperature: 21, humidity: 70, light: 10 },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Sorgum Putih Premium',
    price: 45000,
    image: 'https://picsum.photos/seed/sorghum1/400/400',
    category: 'Biji-bijian',
    description: 'Biji sorgum putih pilihan dengan kualitas ekspor.',
    points: 100
  },
  {
    id: '2',
    name: 'Tepung Sorgum Halus',
    price: 35000,
    image: 'https://picsum.photos/seed/sorghum2/400/400',
    category: 'Tepung',
    description: 'Tepung sorgum bebas gluten untuk berbagai olahan kue.',
    points: 80
  },
  {
    id: '3',
    name: 'Snack Sorgum Cokelat',
    price: 15000,
    image: 'https://picsum.photos/seed/sorghum3/400/400',
    category: 'Camilan',
    description: 'Camilan sehat berbahan dasar sorgum dengan rasa cokelat.',
    points: 30
  },
];

export const MOCK_COURSES: Course[] = [
  {
    id: '1',
    title: 'Dasar Budidaya Sorgum',
    instructor: 'Dr. Ir. Ahmad',
    thumbnail: 'https://picsum.photos/seed/edu1/400/250',
    progress: 65,
    modules: 12
  },
  {
    id: '2',
    title: 'Manajemen Pasca Panen',
    instructor: 'Siti Aminah, M.Si',
    thumbnail: 'https://picsum.photos/seed/edu2/400/250',
    progress: 20,
    modules: 8
  },
];

export const MOCK_SCM: SCMStep[] = [
  {
    id: '1',
    status: 'Panen',
    location: 'Lahan A, Lamongan',
    timestamp: '2024-03-20 08:00',
    details: 'Pemanenan sorgum varietas Bioguma.',
    icon: 'Wheat'
  },
  {
    id: '2',
    status: 'Pengeringan',
    location: 'Gudang Pusat',
    timestamp: '2024-03-21 10:00',
    details: 'Proses pengeringan hingga kadar air 12%.',
    icon: 'Sun'
  },
  {
    id: '3',
    status: 'Pengemasan',
    location: 'Pabrik Pengolahan',
    timestamp: '2024-03-23 14:00',
    details: 'Pengemasan vakum 1kg.',
    icon: 'Package'
  },
];
