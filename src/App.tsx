import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Bell, 
  Search, 
  Droplets, 
  Thermometer, 
  Sun, 
  Wind,
  Settings,
  RefreshCw,
  Zap,
  Leaf,
  Info,
  Calendar,
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Mail,
  Instagram,
  Twitter,
  Facebook,
  Quote,
  Map,
  Database,
  Power
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  Cell
} from 'recharts';
import { cn } from './lib/utils';
import { MOCK_IOT_DATA } from './constants';

type ViewMode = 'landing' | 'dashboard';

// --- Shared Internal Components ---

const NavLink = ({ label, active, onClick, href }: { label: string, active?: boolean, onClick: () => void, href?: string }) => (
  <button 
    onClick={() => {
      if (href?.startsWith('#')) {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          onClick();
          return;
        }
      }
      onClick();
    }}
    className={cn(
      "text-sm font-black uppercase tracking-[0.15em] transition-all duration-300 relative py-2",
      active ? "text-brand-600 scale-110" : "text-slate-400 hover:text-dark-text hover:scale-105"
    )}
  >
    {label}
  </button>
);

const FooterLink = ({ label }: { label: string }) => (
  <li>
    <a href="#" className="text-sm text-slate-400 hover:text-brand-500 transition-colors">
      {label}
    </a>
  </li>
);

// --- Landing Page Sections ---

const Hero = ({ onGetStarted }: { onGetStarted: () => void }) => (
  <section id="home" className="relative min-h-[95vh] flex items-center overflow-hidden pt-32 lg:pt-40 bg-light-bg">
    {/* Decorative Blobs */}
    <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/10 rounded-full blur-[100px] animate-pulse" />
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue/10 rounded-full blur-[100px] animate-pulse delay-700" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-brand-500/5 rounded-full blur-[180px] -z-10" />

    <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-10 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-500/10 border border-brand-500/20 rounded-full text-brand-700 text-xs font-bold uppercase tracking-widest shadow-sm">
          <Leaf className="w-4 h-4 text-brand-600" />
          Masa Depan Pertanian Indonesia
        </div>
        <h1 className="text-6xl md:text-8xl font-display font-black leading-tight brand-text-gradient tracking-tight">
          Panen Lebih <br /> <span className="text-dark-text">Banyak & Cerdas.</span>
        </h1>
        <p className="text-xl text-muted-text max-w-xl leading-relaxed font-medium">
          Sorgummology membantu petani meningkatkan produktivitas hingga 40% dengan bantuan sensor IoT pintar dan analisis kecerdasan buatan.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 pt-4">
          <button 
            onClick={onGetStarted}
            className="px-10 py-5 brand-gradient text-white rounded-2xl font-black text-lg shadow-2xl shadow-brand-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group"
          >
            Mulai Pantau Lahan
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
          <button className="px-10 py-5 bg-white border-2 border-slate-100 text-dark-text rounded-2xl font-black text-lg hover:bg-slate-50 hover:border-brand-500/20 shadow-xl transition-all">
            Pelajari Teknologi
          </button>
        </div>
        
        <div className="flex items-center gap-12 pt-10">
          <div className="space-y-1">
            <p className="text-3xl font-black text-dark-text">500+</p>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Petani Aktif</p>
          </div>
          <div className="w-px h-12 bg-slate-200" />
          <div className="space-y-1">
            <p className="text-3xl font-black text-dark-text">1.2K</p>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">IoT Terpasang</p>
          </div>
          <div className="w-px h-12 bg-slate-200" />
          <div className="space-y-1">
            <p className="text-3xl font-black text-mist-500">24%</p>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Efisiensi Hasil</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', damping: 15 }}
        className="relative"
      >
        <div className="relative z-10 group">
          <div className="absolute -inset-4 bg-brand-500/20 rounded-[2.5rem] blur-2xl group-hover:bg-brand-500/30 transition-all duration-500" />
          <div className="glass-brand p-5 rounded-[2.5rem] border-2 border-brand-500/30 shadow-2xl relative bg-white/40 backdrop-blur-3xl overflow-hidden">
            <img 
              src="https://picsum.photos/seed/agritech/800/600" 
              alt="Sorghum Agriculture Tech" 
              className="rounded-[2rem] w-full h-auto object-cover shadow-2xl"
              referrerPolicy="no-referrer"
            />
            {/* Realtime floating badge */}
            <div className="absolute top-10 right-10 flex items-center gap-2 bg-emerald-500 text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-tighter animate-bounce shadow-lg shadow-emerald-500/40">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              Live Data
            </div>
          </div>
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 glass p-8 rounded-[2rem] border border-slate-200 shadow-2xl bg-white/90 backdrop-blur-xl z-20"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-brand-500/20 rounded-2xl flex items-center justify-center shadow-inner">
                <TrendingUp className="w-8 h-8 text-brand-600" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-black uppercase tracking-widest">Optimasi Hasil</p>
                <p className="text-2xl font-black text-dark-text">+38% <span className="text-brand-500 font-bold text-sm">per panen</span></p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-10 -right-10 glass-brand p-8 rounded-[2rem] border border-brand-500/30 shadow-2xl bg-white/80 backdrop-blur-xl z-20"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-accent-blue/10 rounded-2xl flex items-center justify-center">
                <Droplets className="w-8 h-8 text-accent-blue" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Kandungan Air</p>
                <div className="flex gap-1.5 items-end">
                  <div className="w-2 h-4 bg-accent-blue rounded-full" />
                  <div className="w-2 h-8 bg-accent-blue rounded-full" />
                  <div className="w-2 h-6 bg-accent-blue rounded-full" />
                  <div className="w-2 h-10 bg-accent-blue rounded-full" />
                  <p className="text-lg font-black text-dark-text ml-2">74%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

const FeatureSection = () => (
  <section id="features" className="py-32 bg-slate-50 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(#16a34a 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
    <div className="absolute -top-24 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-[120px]" />
    <div className="absolute -bottom-24 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px]" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
        <h2 className="text-5xl md:text-6xl font-display font-black tracking-tight text-dark-text">Solusi Cerdas untuk Petani.</h2>
        <div className="w-24 h-1.5 brand-gradient mx-auto rounded-full" />
        <p className="text-xl text-muted-text leading-relaxed font-medium">
          Kami mengintegrasikan teknologi terbaik untuk memastikan setiap jengkal lahan Anda terpantau dengan akurasi yang tak tertandingi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          {
            title: "IoT Real-time",
            desc: "Pantau kelembaban, suhu, dan nutrisi tanah secara langsung dari smartphone Anda kapan pun.",
            icon: Activity,
            color: "bg-blue-500",
            lightColor: "bg-blue-50 text-blue-600",
            shadow: "shadow-blue-500/20",
            hoverBorder: "hover:border-blue-500/40"
          },
          {
            title: "Analisis AI",
            desc: "Algoritma cerdas kami memprediksi waktu panen ideal dan memberikan peringatan dini anomali.",
            icon: Zap,
            color: "bg-brand-500",
            lightColor: "bg-brand-50 text-brand-600",
            shadow: "shadow-brand-500/20",
            hoverBorder: "hover:border-brand-500/40"
          },
          {
            title: "Keamanan Data",
            desc: "Keamanan berlapis memastikan data pertanian Anda tetap rahasia dan terlindungi sepenuhnya.",
            icon: ShieldCheck,
            color: "bg-accent-red",
            lightColor: "bg-red-50 text-red-600",
            shadow: "shadow-red-500/20",
            hoverBorder: "hover:border-accent-red/40"
          }
        ].map((feat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -15 }}
            className={cn(
              "glass-card p-12 border-2 border-slate-100 bg-white group transition-all duration-500",
              feat.hoverBorder
            )}
          >
            <div className={cn(
              "w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-all duration-500 shadow-xl",
              feat.color,
              feat.shadow
            )}>
              <feat.icon className="w-10 h-10 text-white" />
            </div>
            <div className={cn("inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6", feat.lightColor)}>
              Smart Technology
            </div>
            <h3 className="text-3xl font-black text-dark-text mb-6">{feat.title}</h3>
            <p className="text-lg text-muted-text leading-relaxed font-medium">
              {feat.desc}
            </p>
            <div className="pt-8 flex items-center gap-2 text-dark-text font-black text-sm cursor-pointer hover:gap-4 transition-all">
              Pelajari Selengkapnya
              <ChevronRight className="w-5 h-5 text-brand-600" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      name: "Agus Salim",
      role: "Ketua Kelompok Tani Bunga Desa",
      text: "Sistem IoT ini sangat membantu kami menghemat air hingga 40%. Sekarang pengairan sangat presisi lahan kami kini lebih produktif.",
      img: "https://i.pravatar.cc/150?u=agus",
      tint: "bg-blue-50/50 border-blue-100"
    },
    {
      name: "Siti Rahayu",
      role: "Pemilik Lahan Sorgum Organik",
      text: "Prediksi panen dari AI-nya sangat akurat. Kami bisa menjadwalkan pembeli lebih awal sekarang dan mengatur logistik lebih efisien.",
      img: "https://i.pravatar.cc/150?u=siti",
      tint: "bg-brand-50/50 border-brand-100"
    },
    {
      name: "Hendra Wijaya",
      role: "Agronomis",
      text: "Antarmukanya sangat mudah digunakan bahkan bagi petani yang belum mahir teknologi sekalipun. Dokumentasinya lengkap.",
      img: "https://i.pravatar.cc/150?u=hendra",
      tint: "bg-red-50/30 border-red-100"
    },
    {
      name: "Budi Santoso",
      role: "Petani Milenial",
      text: "Teknologi ini mengubah cara pandang saya terhadap pertanian. Data real-time membuat keputusan jadi jauh lebih berdasar.",
      img: "https://i.pravatar.cc/150?u=budi",
      tint: "bg-amber-50/50 border-amber-100"
    }
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
          <div className="max-w-xl space-y-4">
            <h2 className="text-4xl font-display font-black text-dark-text tracking-tight">Apa Kata Mereka?</h2>
            <div className="w-16 h-1.5 brand-gradient rounded-full" />
            <p className="text-lg text-muted-text font-medium leading-relaxed">Pengalaman nyata dari para mitra petani yang telah merasakan manfaat Sorgummology.</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={prev}
              className="p-4 bg-slate-100 rounded-full border-2 border-slate-200 cursor-pointer hover:bg-white hover:border-brand-500 transition-all shadow-sm active:scale-90"
            >
              <ArrowRight className="w-5 h-5 rotate-180 text-dark-text" />
            </button>
            <button 
              onClick={next}
              className="p-4 brand-gradient rounded-full shadow-xl shadow-brand-500/20 cursor-pointer hover:scale-110 transition-all active:scale-95"
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div className="relative h-[320px] md:h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="absolute inset-0"
            >
              <div className={cn(
                "glass-card p-10 md:p-14 border-2 rounded-[2.5rem] h-full flex flex-col justify-center relative overflow-hidden bg-white shadow-xl",
                items[currentIndex].tint
              )}>
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/40 rounded-full translate-x-24 -translate-y-24 blur-3xl opacity-50" />
                <Quote className="absolute top-8 right-8 w-16 h-16 text-brand-500/5 rotate-12" />
                
                <div className="relative z-10 max-w-4xl">
                  <p className="text-xl md:text-2xl text-slate-700 italic font-bold mb-8 leading-tight">
                    "{items[currentIndex].text}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <img 
                      src={items[currentIndex].img} 
                      alt={items[currentIndex].name} 
                      className="w-14 h-14 rounded-2xl border-4 border-white shadow-xl" 
                    />
                    <div>
                      <p className="font-black text-xl text-dark-text">{items[currentIndex].name}</p>
                      <p className="text-brand-600 font-black uppercase tracking-[0.25em] text-[10px] mt-0.5">{items[currentIndex].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-3 mt-12">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-500",
                currentIndex === i ? "w-12 brand-gradient" : "w-2 bg-slate-200 hover:bg-slate-300"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Dashboard Component (Monitoring Lab with Sidebar & CRUD) ---

type SensorType = 'Cahaya' | 'Angin' | 'pH' | 'Moisture';
type SensorStatus = 'active' | 'inactive' | 'warning';
type PlotStatus = 'optimal' | 'maintenance' | 'critical';

interface PlotSensor {
  id: string;
  type: SensorType;
  value: number;
  unit: string;
  status: SensorStatus;
}

interface Plot {
  id: string;
  name: string;
  status: PlotStatus;
  sensors: PlotSensor[];
}

const SensorModal = ({ 
  isOpen, 
  onClose, 
  onSave, 
  sensor 
}: { 
  isOpen: boolean, 
  onClose: () => void, 
  onSave: (data: Partial<PlotSensor>) => void,
  sensor?: PlotSensor | null
}) => {
  const [formData, setFormData] = useState<Partial<PlotSensor>>({
    type: 'Moisture',
    value: 0,
    status: 'active'
  });

  useEffect(() => {
    if (sensor) {
      setFormData({
        type: sensor.type,
        value: sensor.value,
        status: sensor.status
      });
    }
  }, [sensor]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-dark-text/40 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden"
      >
        <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div>
            <h3 className="text-xl font-black">{sensor ? 'Edit Sensor Node' : 'Register New Sensor'}</h3>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Laboratory Equipment Config</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white rounded-xl transition-all">
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        <div className="p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Jenis Sensor</label>
            <select 
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
              className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold focus:ring-2 focus:ring-brand-500 outline-none transition-all"
            >
              <option value="Cahaya">Pencahayaan (Lux)</option>
              <option value="Angin">Kecepatan Angin (km/h)</option>
              <option value="pH">Kandungan pH (pH)</option>
              <option value="Moisture">Kelembaban (%)</option>
            </select>
          </div>

          <div className="p-6 bg-brand-50 border border-brand-100 rounded-3xl flex flex-col items-center text-center">
            <Activity className="w-8 h-8 text-brand-600 mb-2" />
            <p className="text-[10px] font-black uppercase text-brand-400 tracking-widest">Real-time Reading</p>
            <p className="text-3xl font-black text-brand-700 tracking-tighter">
              {sensor ? sensor.value : '--'}
            </p>
            <p className="text-[9px] text-brand-600/60 mt-1">*Nilai diperbarui otomatis dari perangkat keras.</p>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Status Hardware</label>
            <div className="grid grid-cols-3 gap-3">
              {(['active', 'warning', 'inactive'] as SensorStatus[]).map((st) => (
                <button
                  key={st}
                  type="button"
                  onClick={() => setFormData({ ...formData, status: st })}
                  className={cn(
                    "py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                    formData.status === st 
                      ? (st === 'active' ? "bg-emerald-500 text-white" : st === 'warning' ? "bg-amber-500 text-white" : "bg-slate-500 text-white")
                      : "bg-slate-100 text-slate-400 hover:bg-slate-200"
                  )}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-8 bg-slate-50 flex gap-4">
          <button 
            onClick={onClose}
            className="flex-1 py-4 font-black text-xs uppercase tracking-widest text-slate-400 hover:text-dark-text transition-all"
          >
            Batalkan
          </button>
          <button 
            onClick={() => onSave(formData)}
            className="flex-[2] py-4 brand-gradient text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-brand-500/20 hover:scale-[1.02] active:scale-95 transition-all"
          >
            {sensor ? 'Simpan Perubahan' : 'Instal Sensor'}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const DashboardView = ({ onBack }: { onBack: () => void }) => {
  const [activeTab, setActiveTab] = useState<'Overview' | SensorType>('Overview');
  const [selectedPlotId, setSelectedPlotId] = useState<string>('P-01');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSensor, setEditingSensor] = useState<PlotSensor | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Weekly data simulation state
  const [weeklyData, setWeeklyData] = useState<{ day: string; value: number }[]>([]);

  // Local state for CRUD simulation
  const [plots, setPlots] = useState<Plot[]>([
    {
      id: 'P-01',
      name: 'Plot Utara A1',
      status: 'optimal',
      sensors: [
        { id: 'S1', type: 'Moisture', value: 45, unit: '%', status: 'active' },
        { id: 'S2', type: 'pH', value: 6.5, unit: 'pH', status: 'active' },
        { id: 'S3', type: 'Cahaya', value: 850, unit: 'lux', status: 'active' },
      ]
    },
    {
      id: 'P-02',
      name: 'Plot Utara A2',
      status: 'maintenance',
      sensors: [
        { id: 'S4', type: 'Moisture', value: 12, unit: '%', status: 'warning' },
        { id: 'S5', type: 'pH', value: 5.2, unit: 'pH', status: 'active' },
        { id: 'S6', type: 'Angin', value: 15, unit: 'km/h', status: 'active' },
      ]
    },
    {
      id: 'P-03',
      name: 'Plot Timur B1',
      status: 'optimal',
      sensors: [
        { id: 'S7', type: 'Moisture', value: 42, unit: '%', status: 'active' },
        { id: 'S8', type: 'pH', value: 6.8, unit: 'pH', status: 'active' },
      ]
    }
  ]);

  const sidebarMenus = [
    { id: 'Overview', label: 'Overview', icon: Map },
    { id: 'Cahaya', label: 'Sensor Cahaya', icon: Sun },
    { id: 'Angin', label: 'Sensor Angin', icon: Wind },
    { id: 'pH', label: 'Sensor pH', icon: Activity },
    { id: 'Moisture', label: 'Sensor Moist', icon: Droplets },
  ];

  const selectedPlot = plots.find(p => p.id === selectedPlotId) || plots[0];
  
  // Generate weekly chart data when plot or tab changes
  useEffect(() => {
    const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
    const baseVal = activeTab === 'Overview' 
      ? (selectedPlot.sensors[0]?.value || 50) 
      : (selectedPlot.sensors.find(s => s.type === activeTab)?.value || 50);

    const data = days.map(day => ({
      day,
      value: Math.max(0, Math.floor(baseVal + (Math.random() * 20 - 10)))
    }));
    setWeeklyData(data);
  }, [selectedPlotId, activeTab, selectedPlot.sensors]);

  const avgValue = weeklyData.length > 0 
    ? Math.round(weeklyData.reduce((acc, curr) => acc + curr.value, 0) / weeklyData.length)
    : 0;

  const trend = weeklyData.length > 1 
    ? (weeklyData[weeklyData.length - 1].value >= weeklyData[0].value ? 'naik' : 'turun')
    : 'stabil';
  
  // Filter logic
  const filteredPlots = activeTab === 'Overview' 
    ? plots 
    : plots.filter(p => p.sensors.some(s => s.type === activeTab));

  // --- CRUD Actions ---
  const openAddModal = () => {
    setEditingSensor(null);
    setIsModalOpen(true);
  };

  const openEditModal = (sensor: PlotSensor) => {
    setEditingSensor(sensor);
    setIsModalOpen(true);
  };

  const handleSaveSensor = (data: Partial<PlotSensor>) => {
    // For simulation, if creating, assign a random value based on type
    const simulatedValue = editingSensor ? editingSensor.value : (
      data.type === 'Cahaya' ? Math.floor(Math.random() * 1000) + 200 :
      data.type === 'pH' ? Number((Math.random() * 3 + 4.5).toFixed(1)) :
      data.type === 'Angin' ? Math.floor(Math.random() * 30) + 5 :
      Math.floor(Math.random() * 50) + 10
    );

    if (editingSensor) {
      // Update
      setPlots(prev => prev.map(p => 
        p.id === selectedPlotId 
          ? { 
              ...p, 
              sensors: p.sensors.map(s => s.id === editingSensor.id ? { 
                ...s, 
                ...data, 
                unit: data.type === 'Cahaya' ? 'lux' : data.type === 'Angin' ? 'km/h' : data.type === 'pH' ? 'pH' : '%' 
              } : s) 
            }
          : p
      ));
    } else {
      // Create
      const newSensor: PlotSensor = {
        id: `S${Date.now()}`,
        type: data.type || 'Moisture',
        value: simulatedValue,
        unit: data.type === 'Cahaya' ? 'lux' : data.type === 'Angin' ? 'km/h' : data.type === 'pH' ? 'pH' : '%',
        status: data.status || 'active'
      };
      
      setPlots(prev => prev.map(p => 
        p.id === selectedPlotId 
          ? { ...p, sensors: [...p.sensors, newSensor] }
          : p
      ));
    }
    setIsModalOpen(false);
  };

  const toggleSensorStatus = (sensorId: string) => {
    setPlots(prev => prev.map(p => 
      p.id === selectedPlotId 
        ? { 
            ...p, 
            sensors: p.sensors.map(s => s.id === sensorId ? { 
              ...s, 
              status: s.status === 'inactive' ? 'active' : 'inactive' 
            } : s) 
          }
        : p
    ));
  };

  const getHealthInsight = () => {
    const moisture = selectedPlot.sensors.find(s => s.type === 'Moisture')?.value;
    const ph = selectedPlot.sensors.find(s => s.type === 'pH')?.value;
    const warningSensors = selectedPlot.sensors.filter(s => s.status === 'warning');

    if (warningSensors.length > 0) return { 
      msg: "Terdeteksi anomali pada perangkat keras. Periksa node sensor.",
      color: "text-amber-600 bg-amber-50"
    };
    if (moisture !== undefined && moisture < 20) return { 
      msg: "Lahan sangat kering. Butuh pengairan segera (Kesehatan di bawah rata-rata).",
      color: "text-rose-600 bg-rose-50 border-rose-100"
    };
    if (ph !== undefined && (ph < 5 || ph > 8)) return { 
      msg: "Kadar pH tidak ideal. Kesehatan tanah menurun (Butuh pemupukan korektif).",
      color: "text-rose-600 bg-rose-50 border-rose-100"
    };
    
    return { 
      msg: "Kondisi Lahan Optimal. Seluruh parameter berada pada rentang ideal.",
      color: "text-emerald-600 bg-emerald-50 border-emerald-100"
    };
  };

  const insight = getHealthInsight();

  const handleDeleteSensor = (sensorId: string) => {
    if (window.confirm('Hapus node sensor ini dari sistem?')) {
      setPlots(prev => prev.map(p => 
        p.id === selectedPlotId 
          ? { ...p, sensors: p.sensors.filter(s => s.id !== sensorId) }
          : p
      ));
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F1F5F9] text-dark-text overflow-x-hidden">
      
      <SensorModal 
        isOpen={isModalOpen} 
        sensor={editingSensor}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveSensor}
      />

      {/* Sidebar Overlay for Mobile */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Navigation */}
      <aside className={cn(
        "w-64 bg-white border-r border-slate-200 flex flex-col h-screen fixed left-0 top-0 z-50 transition-transform duration-300 transform lg:translate-x-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 brand-gradient rounded-lg flex items-center justify-center text-white shadow-lg">
              <Activity className="w-5 h-5" />
            </div>
            <p className="font-black tracking-tight text-lg brand-text-gradient">Sorgummology</p>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-2 text-slate-400">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-grow p-4 space-y-2 overflow-y-auto pt-6">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-4 mb-4">Main Menu</p>
          {sidebarMenus.map((menu) => (
            <button
              key={menu.id}
              onClick={() => {
                setActiveTab(menu.id as any);
                setIsSidebarOpen(false);
              }}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all group",
                activeTab === menu.id 
                  ? "bg-brand-500 text-white shadow-lg shadow-brand-500/20" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-dark-text"
              )}
            >
              <menu.icon className={cn("w-5 h-5", activeTab === menu.id ? "text-white" : "text-slate-400 group-hover:text-brand-500")} />
              {menu.label}
            </button>
          ))}
          <div className="pt-10">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-4 mb-4">System</p>
            <button onClick={onBack} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm text-slate-500 hover:bg-rose-50 hover:text-rose-600 transition-all">
              <ArrowRight className="w-5 h-5 rotate-180" />
              Keluar Panel
            </button>
          </div>
        </nav>

        <div className="p-6 bg-slate-50 border-t border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
               <img src="https://i.pravatar.cc/150?u=admin" alt="Admin" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-xs font-black text-dark-text">Admin Tani</p>
              <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-tighter">Verified Chief</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow lg:ml-64 p-4 sm:p-8 min-h-screen">
        <div className="max-w-6xl mx-auto space-y-8">
          
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden p-3 bg-white border border-slate-200 rounded-2xl text-slate-500 shadow-sm"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight">{activeTab === 'Overview' ? 'Pusat Kontrol Lahan' : `Monitoring ${activeTab}`}</h1>
                <p className="text-slate-500 font-medium text-xs sm:text-sm">{filteredPlots.length} Lahan terdeteksi.</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-3 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
               <div className="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl text-xs font-black">
                 SERVER: STABLE
               </div>
            </div>
          </header>

          {/* AI Health Insight Banner */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            key={selectedPlotId}
            className={cn(
              "p-6 rounded-[2rem] border flex items-center gap-5 shadow-sm transition-all duration-500",
              insight.color
            )}
          >
            <div className="w-12 h-12 rounded-2xl bg-white/50 backdrop-blur-md flex items-center justify-center shadow-inner">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-60 leading-none mb-1">Status Analitik Lahan: {selectedPlot.name}</p>
              <p className="text-sm font-black tracking-tight">{insight.msg}</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Plot Grid Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden relative">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-black text-xl flex items-center gap-2">
                    <Map className="w-5 h-5 text-brand-500" />
                    Grid Peta Lahan
                  </h2>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">Live Indicators</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {filteredPlots.map((plot) => (
                    <button
                      key={plot.id}
                      onClick={() => setSelectedPlotId(plot.id)}
                      className={cn(
                        "p-6 rounded-[2rem] border-2 transition-all relative overflow-hidden text-left group",
                        selectedPlotId === plot.id 
                          ? "border-brand-500 bg-brand-50 shadow-xl shadow-brand-500/10" 
                          : "border-slate-50 bg-white hover:border-slate-200 shadow-sm"
                      )}
                    >
                      <div className="flex justify-between items-start mb-6">
                        <span className="font-mono text-[10px] font-bold text-slate-400">{plot.id}</span>
                        <div className="flex gap-1">
                          {/* Show icons of sensors present in this plot */}
                          {['Cahaya', 'Angin', 'pH', 'Moisture'].map(type => {
                            const hasSensor = plot.sensors.some(s => s.type === type);
                            if (!hasSensor) return null;
                            return (
                              <div key={type} className="w-1.5 h-1.5 rounded-full bg-brand-500" title={type} />
                            )
                          })}
                        </div>
                      </div>
                      <p className={cn(
                        "font-black text-sm mb-1 transition-colors",
                        selectedPlotId === plot.id ? "text-brand-700" : "text-dark-text"
                      )}>
                        {plot.name}
                      </p>
                      <div className="text-[10px] font-bold text-slate-400 capitalize flex items-center gap-2">
                        <span className={cn("inline-block w-2 h-2 rounded-full", 
                          plot.status === 'optimal' ? 'bg-emerald-500' : 'bg-amber-500'
                        )} />
                        {plot.status}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sensor Management Area (CRUD) */}
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="font-black text-xl flex items-center gap-2">
                      <Settings className="w-5 h-5 text-slate-400" />
                      Manajemen Sensor: {selectedPlot.name}
                    </h2>
                    <p className="text-xs text-slate-400 font-medium mt-1">Kelola perangkat keras pada lahan ini.</p>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={openAddModal}
                      className="inline-flex items-center gap-2 px-5 py-2.5 brand-gradient text-white rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-brand-500/20 hover:scale-105 active:scale-95 transition-all"
                    >
                      <Zap className="w-4 h-4" />
                      Instal Perangkat
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {selectedPlot.sensors.length > 0 ? (
                    selectedPlot.sensors.map((sensor) => (
                      <div key={sensor.id} className="group p-5 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-between hover:bg-white hover:shadow-xl hover:border-brand-100 transition-all">
                        <div className="flex items-center gap-5">
                          <div className={cn(
                            "w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm relative overflow-hidden transition-all",
                            sensor.status === 'active' ? "bg-emerald-50 text-emerald-600 border border-emerald-100" :
                            sensor.status === 'warning' ? "bg-amber-50 text-amber-600 border border-amber-100" :
                            "bg-slate-100 text-slate-400 border border-slate-200"
                          )}>
                             {sensor.type === 'Cahaya' ? <Sun className="w-6 h-6" /> : 
                              sensor.type === 'Angin' ? <Wind className="w-6 h-6" /> :
                              sensor.type === 'pH' ? <Activity className="w-6 h-6" /> : <Droplets className="w-6 h-6" />}
                          </div>
                          <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{sensor.type} Node</p>
                            <div className="flex items-center gap-2">
                              <p className="text-xl font-black text-dark-text tracking-tighter">{sensor.value}</p>
                              <span className="text-[10px] font-bold text-slate-400 uppercase">{sensor.unit}</span>
                              <span className={cn(
                                "ml-2 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-tighter",
                                sensor.status === 'active' ? "bg-emerald-100 text-emerald-600" :
                                sensor.status === 'warning' ? "bg-amber-100 text-amber-600" :
                                "bg-slate-200 text-slate-500"
                              )}>
                                {sensor.status}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => toggleSensorStatus(sensor.id)}
                            className={cn(
                              "p-3 border rounded-xl transition-all shadow-sm",
                              sensor.status === 'inactive' 
                                ? "bg-rose-50 border-rose-100 text-rose-500 hover:bg-emerald-50 hover:text-emerald-500 hover:border-emerald-100" 
                                : "bg-emerald-50 border-emerald-100 text-emerald-600 hover:bg-rose-50 hover:text-rose-500 hover:border-rose-100"
                            )}
                            title={sensor.status === 'inactive' ? 'Aktifkan Sensor' : 'Matikan Sensor'}
                          >
                            <Power className="w-5 h-5" />
                          </button>
                          <button 
                            onClick={() => openEditModal(sensor)}
                            className="p-3 bg-white border border-slate-200 text-slate-400 hover:text-brand-500 hover:border-brand-200 rounded-xl transition-all shadow-sm"
                            title="Konfigurasi Sensor"
                          >
                            <Settings className="w-5 h-5" />
                          </button>
                          <button 
                            onClick={() => handleDeleteSensor(sensor.id)}
                            className="p-3 bg-white border border-slate-200 text-slate-300 hover:text-rose-500 hover:border-rose-200 rounded-xl transition-all shadow-sm"
                            title="Hapus Sensor"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="py-16 text-center border-2 border-dashed border-slate-100 rounded-[2.5rem]">
                      <Database className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                      <p className="text-slate-400 font-bold text-sm">Belum ada sensor yang terdaftar pada lahan ini.</p>
                      <button onClick={openAddModal} className="mt-4 text-brand-500 font-black text-xs uppercase tracking-widest hover:underline">Tambah Sekarang</button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Panel: Active Monitoring Summary */}
            <div className="space-y-8">
              <div className="bg-dark-text text-white p-8 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 rounded-full blur-3xl" />
                <h3 className="text-2xl font-black mb-6">Unit Stats (7 Hari)</h3>
                
                {/* Weekly Weekly Chart */}
                <div className="h-40 w-full mb-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyData}>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', fontSize: '10px', fontWeight: 'bold' }}
                        itemStyle={{ color: '#10b981' }}
                        cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                      />
                      <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                        {weeklyData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === weeklyData.length - 1 ? '#10b981' : '#10b98144'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-6">
                  <div className="p-5 bg-white/5 border border-white/10 rounded-[2rem]">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Analisis Status Lahan</p>
                    <div className={cn(
                      "p-4 rounded-2xl flex items-center gap-4 border transition-all duration-500",
                      insight.msg.includes("Optimal") 
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" 
                        : "bg-rose-500/10 border-rose-500/20 text-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.1)]"
                    )}>
                      {insight.msg.includes("Optimal") ? (
                        <>
                          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                            <ShieldCheck className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-xs font-black uppercase tracking-widest leading-none mb-1">Status: NORMAL</p>
                            <p className="text-[10px] font-bold opacity-70">Lahan siap panen & sehat.</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center">
                            <Info className="w-6 h-6 rotate-180" />
                          </div>
                          <div>
                            <p className="text-xs font-black uppercase tracking-widest leading-none mb-1">Status: TIDAK AMAN</p>
                            <p className="text-[10px] font-bold opacity-70 text-rose-400/80">Butuh penanganan segera!</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="p-5 bg-white/5 border border-white/10 rounded-[2rem] flex justify-between items-center">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Rata-rata Mingguan</p>
                      <p className="text-3xl font-black text-emerald-400">{avgValue}</p>
                    </div>
                    <div className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-black uppercase flex items-center gap-1",
                      trend === 'naik' ? "bg-emerald-500/20 text-emerald-400" : "bg-rose-500/20 text-rose-400"
                    )}>
                      {trend === 'naik' ? <ArrowRight className="w-3 h-3 -rotate-45" /> : <ArrowRight className="w-3 h-3 rotate-45" />}
                      Trend {trend}
                    </div>
                  </div>
                  
                  <div className="p-5 bg-white/5 border border-white/10 rounded-[2rem]">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status Lahan</p>
                    <div className="flex items-center gap-3 mt-2">
                       <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                       <span className="font-black text-sm uppercase tracking-wide">Sync: Terhubung</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-sm">
                <h4 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-6">Admin Logs</h4>
                <div className="space-y-4">
                  {[
                    { time: '10:42', msg: 'Update Parameter P-01', type: 'info' },
                    { time: '09:15', msg: 'Sistem Sinkronisasi Berhasil', type: 'system' },
                    { time: '07:30', msg: 'Log Masuk: Admin Tani', type: 'system' },
                  ].map((log, i) => (
                    <div key={i} className="flex gap-3 text-[11px] font-bold">
                       <span className="font-mono text-slate-300">{log.time}</span>
                       <span className="text-slate-600">{log.msg}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// --- App Root ---

export default function App() {
  const [view, setView] = useState<ViewMode>('landing');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen bg-light-bg text-dark-text selection:bg-brand-500/30">
      {/* Universal Navigator - Floating Card Style (Only visible in landing) */}
      {view === 'landing' && (
        <header className={cn(
          "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-7xl",
          isScrolled ? "top-4" : "top-8"
        )}>
          <div className={cn(
            "flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500",
            isScrolled 
              ? "bg-white/80 backdrop-blur-xl border border-slate-200 shadow-2xl" 
              : "bg-white/50 backdrop-blur-md border border-white/40 shadow-xl"
          )}>
            <div 
              onClick={() => setView('landing')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 brand-gradient rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-500/20 group-hover:scale-110 transition-transform">
                <Sun className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-xl brand-text-gradient hidden sm:block">Sorgummology</span>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              <NavLink label="Teknologi" href="#home" active={view === 'landing'} onClick={() => { setView('landing'); }} />
              <NavLink label="Fitur" href="#features" active={view === 'landing'} onClick={() => { setView('landing'); }} />
              <NavLink label="Testimoni" href="#testimonials" active={view === 'landing'} onClick={() => { setView('landing'); }} />
            </nav>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => setView(view === 'landing' ? 'dashboard' : 'landing')}
                className={cn(
                  "hidden sm:flex px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-brand-500/10 active:scale-95",
                  view === 'landing' 
                    ? "brand-gradient text-white hover:scale-105" 
                    : "bg-slate-100 text-dark-text border border-slate-200 hover:bg-slate-200"
                )}
              >
                {view === 'landing' ? 'Buka Dasboard' : 'Beranda'}
              </button>
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-slate-500 hover:text-dark-text transition-colors"
              >
                <Menu className="w-7 h-7" />
              </button>
            </div>
          </div>
        </header>
      )}

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] glass flex flex-col p-8 bg-white"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-3">
                <Sun className="w-7 h-7 text-brand-600" />
                <span className="font-display font-bold text-xl brand-text-gradient">Sorgummology</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-slate-100 rounded-xl text-slate-400">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {['Teknologi', 'Fitur', 'Testimoni'].map(item => (
                <button 
                  key={item} 
                  onClick={() => {
                    const id = item === 'Teknologi' ? '#home' : item === 'Fitur' ? '#features' : '#testimonials';
                    const el = document.querySelector(id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    setMobileMenuOpen(false);
                    setView('landing');
                  }}
                  className="text-2xl font-display font-bold text-left text-slate-500 hover:text-dark-text transition-all"
                >
                  {item}
                </button>
              ))}
              <hr className="border-slate-100 my-4" />
              <button 
                onClick={() => { setView('dashboard'); setMobileMenuOpen(false); }}
                className="w-full py-4 brand-gradient text-white rounded-2xl font-bold"
              >
                Buka Dasboard
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <AnimatePresence mode="wait">
          {view === 'landing' ? (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Hero onGetStarted={() => setView('dashboard')} />
              <FeatureSection />
              <Testimonials />
              
              <section className="py-24 bg-light-bg">
                <div className="container mx-auto px-6">
                  <div className="glass-brand p-12 md:p-20 rounded-[3rem] border border-brand-500/10 text-center relative overflow-hidden bg-brand-50/20">
                    <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                      <h2 className="text-4xl md:text-6xl font-display font-bold">Siap Mengubah Hasil Tani Anda?</h2>
                      <p className="text-lg text-muted-text leading-relaxed">Gabung dengan komunitas petani cerdas sekarang dan rasakan perbedaannya dengan teknologi IoT kami.</p>
                      <button 
                        onClick={() => setView('dashboard')}
                        className="px-10 py-5 brand-gradient text-white rounded-2xl font-bold text-lg hover:shadow-2xl transition-all"
                      >
                        Mulai Gratis Sekarang
                      </button>
                    </div>
                    <div className="absolute top-0 left-0 w-96 h-96 bg-brand-500/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <DashboardView onBack={() => setView('landing')} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {view === 'landing' && (
        <footer className="bg-slate-950 border-t border-white/5 pt-24 pb-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
              <div className="lg:col-span-1 space-y-6">
                <div className="flex items-center gap-3">
                  <Sun className="w-8 h-8 text-brand-500" />
                  <span className="font-display font-bold text-2xl brand-text-gradient">Sorgummology</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Ekosistem cerdas untuk masa depan kedaulatan pangan melalui sorgum.
                </p>
                <div className="flex gap-4">
                  <Instagram className="w-5 h-5 text-slate-500 hover:text-brand-500 cursor-pointer transition-colors" />
                  <Twitter className="w-5 h-5 text-slate-500 hover:text-brand-500 cursor-pointer transition-colors" />
                  <Facebook className="w-5 h-5 text-slate-500 hover:text-brand-500 cursor-pointer transition-colors" />
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6 font-display uppercase tracking-widest text-xs">Produk</h4>
                <ul className="space-y-4">
                  <FooterLink label="IoT Monitoring" />
                  <FooterLink label="AI Analytics" />
                  <FooterLink label="Smart Supply Chain" />
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6 font-display uppercase tracking-widest text-xs">Tautan</h4>
                <ul className="space-y-4">
                  <FooterLink label="Tentang Kami" />
                  <FooterLink label="Kisah Petani" />
                  <FooterLink label="Pusat Bantuan" />
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6 font-display uppercase tracking-widest text-xs">Hubungi</h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm text-slate-400">
                    <Mail className="w-4 h-4 text-brand-500" />
                    kontak@sorgummology.id
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-400">
                    <MapPin className="w-4 h-4 text-brand-500" />
                    Jawa Timur, Indonesia
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-slate-600 text-center border-t border-white/5 pt-8">© 2026 Sorgummology. Seluruh Hak Cipta Dilindungi.</p>
          </div>
        </footer>
      )}
    </div>
  );
}
