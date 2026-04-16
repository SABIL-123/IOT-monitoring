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
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  Legend
} from 'recharts';
import { cn } from './lib/utils';
import { MOCK_IOT_DATA } from './constants';

type ViewMode = 'landing' | 'dashboard';

// --- Shared Internal Components ---

const NavLink = ({ label, active, onClick }: { label: string, active?: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={cn(
      "text-sm font-medium transition-colors hover:text-sunset-500",
      active ? "text-sunset-500" : "text-sunset-100/60"
    )}
  >
    {label}
  </button>
);

const FooterLink = ({ label }: { label: string }) => (
  <li>
    <a href="#" className="text-sm text-sunset-100/40 hover:text-sunset-500 transition-colors">
      {label}
    </a>
  </li>
);

// --- Landing Page Sections ---

const Hero = ({ onGetStarted }: { onGetStarted: () => void }) => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sunset-500/10 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2" />
    <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-sunset-500/10 border border-sunset-500/20 rounded-full text-sunset-400 text-xs font-bold uppercase tracking-widest">
          <Leaf className="w-4 h-4" />
          The Future of Agriculture
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-black leading-[1.1] sunset-text-gradient">
          Revolusi Pertanian <br /> Sorgum Cerdas.
        </h1>
        <p className="text-lg text-sunset-100/60 max-w-xl leading-relaxed">
          Optimalkan hasil panen sorgum Anda dengan teknologi IoT mutakhir dan analisis data berbasis AI. Pantau, analisa, dan bertindak dengan presisi.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button 
            onClick={onGetStarted}
            className="px-8 py-4 sunset-gradient text-white rounded-2xl font-bold shadow-xl shadow-sunset-500/20 hover:scale-105 transition-all flex items-center justify-center gap-2 group"
          >
            Mulai Pantau Lahan
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all">
            Pelajari Teknologi Kami
          </button>
        </div>
        <div className="flex items-center gap-8 pt-8">
          <div>
            <p className="text-2xl font-bold text-white">500+</p>
            <p className="text-xs text-sunset-100/40 uppercase tracking-widest">Petani Aktif</p>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div>
            <p className="text-2xl font-bold text-white">1.2K</p>
            <p className="text-xs text-sunset-100/40 uppercase tracking-widest">Sensor Terpasang</p>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div>
            <p className="text-2xl font-bold text-white">99.9%</p>
            <p className="text-xs text-sunset-100/40 uppercase tracking-widest">Uptime Sistem</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative"
      >
        <div className="glass-sunset p-4 rounded-[2rem] border-2 border-sunset-500/20 shadow-2xl relative z-10">
          <img 
            src="https://picsum.photos/seed/sorghum-field/800/600" 
            alt="Sorghum Agriculture" 
            className="rounded-[1.5rem] w-full h-auto object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl border border-white/10 shadow-xl hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-mist-500/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-mist-500" />
              </div>
              <div>
                <p className="text-xs text-sunset-100/40 font-bold uppercase">Hasil Panen</p>
                <p className="text-lg font-bold text-white">+24% Meningkat</p>
              </div>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 glass-sunset p-6 rounded-2xl border border-sunset-500/20 shadow-xl hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sunset-500/20 rounded-full flex items-center justify-center">
                <Activity className="w-5 h-5 text-sunset-500" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-sunset-100/40 font-bold uppercase">Sensor Live</p>
                <div className="flex gap-1">
                  <div className="w-1.5 h-4 bg-sunset-500 rounded-full" />
                  <div className="w-1.5 h-6 bg-sunset-500/60 rounded-full" />
                  <div className="w-1.5 h-8 bg-sunset-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const FeatureSection = () => (
  <section id="features" className="py-24 bg-dark-surface/30">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
        <h2 className="text-4xl font-display font-bold">Mengapa Memilih Kami?</h2>
        <p className="text-sunset-100/60 leading-relaxed">
          Kami menggabungkan keahlian agronomi tradisional dengan inovasi teknologi untuk memberikan hasil terbaik bagi pertanian Indonesia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "IoT Real-time",
            desc: "Pantau kelembaban, suhu, dan nutrisi tanah secara langsung dari mana saja.",
            icon: Activity,
            color: "bg-blue-500/20 text-blue-400"
          },
          {
            title: "AI Analysis",
            desc: "Analisis cerdas untuk memprediksi waktu panen dan mendeteksi anomali pertumbuhan.",
            icon: Zap,
            color: "bg-sunset-500/20 text-sunset-500"
          },
          {
            title: "Security & Trust",
            desc: "Data Anda aman tersimpan dengan enkripsi tingkat tinggi untuk privasi maksimal.",
            icon: ShieldCheck,
            color: "bg-mist-500/20 text-mist-500"
          }
        ].map((feat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="glass-card p-10 border border-white/5 hover:border-sunset-500/30 transition-all"
          >
            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6", feat.color)}>
              <feat.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{feat.title}</h3>
            <p className="text-sunset-100/60 leading-relaxed">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" className="py-24 relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sunset-500/5 rounded-full blur-[150px] -z-10 -translate-x-1/2 translate-y-1/2" />
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div className="max-w-xl space-y-4">
          <h2 className="text-4xl font-display font-bold">Apa Kata Mereka?</h2>
          <p className="text-sunset-100/60">Pengalaman nyata dari para mitra petani yang telah merasakan manfaat Sorgummology.</p>
        </div>
        <div className="flex gap-4">
          <div className="p-4 bg-white/5 rounded-full border border-white/10 cursor-pointer hover:bg-white/10 transition-all">
            <ArrowRight className="w-6 h-6 rotate-180" />
          </div>
          <div className="p-4 sunset-gradient rounded-full shadow-lg shadow-sunset-500/20 cursor-pointer hover:scale-105 transition-all">
            <ArrowRight className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            name: "Agus Salim",
            role: "Ketua Kelompok Tani Bunga Desa",
            text: "Sistem IoT ini sangat membantu kami menghemat air hingga 40%. Sekarang pengairan sangat presisi.",
            img: "https://i.pravatar.cc/150?u=agus"
          },
          {
            name: "Siti Rahayu",
            role: "Pemilik Lahan Sorgum Organik",
            text: "Prediksi panen dari AI-nya sangat akurat. Kami bisa menjadwalkan pembeli lebih awal sekarang.",
            img: "https://i.pravatar.cc/150?u=siti"
          },
          {
            name: "Hendra Wijaya",
            role: "Agronomis",
            text: "Antarmukanya sangat mudah digunakan bahkan bagi petani yang belum mahir teknologi sekalipun.",
            img: "https://i.pravatar.cc/150?u=hendra"
          }
        ].map((t, i) => (
          <div key={i} className="glass-card p-10 relative">
            <Quote className="absolute top-8 right-8 w-12 h-12 text-sunset-500/10" />
            <p className="text-lg text-sunset-100/80 italic mb-8 relative z-10">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full border border-sunset-500/30" />
              <div>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-xs text-sunset-100/40 uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Dashboard Component ---

const StatCard = ({ label, value, unit, icon: Icon, color, trend }: { 
  label: string, 
  value: string | number, 
  unit: string, 
  icon: any, 
  color: string,
  trend?: { value: string, positive: boolean }
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    className="glass-card p-6"
  >
    <div className="flex items-start justify-between mb-4">
      <div className={cn("p-3 rounded-2xl shadow-inner", color)}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      {trend && (
        <span className={cn(
          "text-[10px] font-bold px-2 py-1 rounded-full",
          trend.positive ? "bg-mist-500/10 text-mist-500" : "bg-red-500/10 text-red-500"
        )}>
          {trend.positive ? '+' : '-'}{trend.value}%
        </span>
      )}
    </div>
    <p className="text-xs text-sunset-100/40 font-medium uppercase tracking-wider">{label}</p>
    <div className="flex items-baseline gap-1 mt-1">
      <h3 className="text-3xl font-bold text-white">{value}</h3>
      <span className="text-sm font-medium text-sunset-100/30">{unit}</span>
    </div>
  </motion.div>
);

const DashboardView = () => {
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastUpdate(new Date());
    }, 1000);
  };

  return (
    <div className="space-y-10 pt-28 max-w-7xl mx-auto container px-6 pb-24 min-h-screen">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sunset-gradient rounded-xl flex items-center justify-center text-white shadow-lg shadow-sunset-500/20">
              <Activity className="w-6 h-6" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold sunset-text-gradient">Dasbor Monitor</h1>
          </div>
          <p className="text-sunset-100/60 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-mist-500 animate-pulse" />
            Status: Aktif & Stabil
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={handleRefresh} className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all group">
            <RefreshCw className={cn("w-5 h-5 text-white/60 group-hover:text-sunset-500", isRefreshing && "animate-spin")} />
          </button>
          <button className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all text-white/60">
            <Bell className="w-5 h-5" />
          </button>
          <button className="px-6 py-3 sunset-gradient rounded-2xl shadow-lg shadow-sunset-500/30 text-white font-bold flex items-center gap-2 hover:opacity-90 transition-all">
            <Settings className="w-5 h-5" />
            <span className="hidden sm:inline">Konfigurasi</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Kelembaban" value={42.5} unit="%" icon={Droplets} color="bg-blue-600/20 border border-blue-500/30" trend={{ value: '2.4', positive: true }} />
        <StatCard label="Suhu" value={28} unit="°C" icon={Thermometer} color="bg-sunset-600/20 border border-sunset-500/30" trend={{ value: '0.5', positive: false }} />
        <StatCard label="Cahaya" value={850} unit="lx" icon={Sun} color="bg-amber-600/20 border border-amber-500/30" />
        <StatCard label="Angin" value={12.4} unit="km/h" icon={Wind} color="bg-mist-600/20 border border-mist-500/30" trend={{ value: '1.2', positive: true }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-card p-8 min-h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={MOCK_IOT_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorMoisture" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EA6113" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#EA6113" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
              <XAxis dataKey="timestamp" axisLine={false} tickLine={false} tick={{fill: 'rgba(255,255,255,0.3)', fontSize: 10, fontFamily: 'JetBrains Mono'}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: 'rgba(255,255,255,0.3)', fontSize: 10, fontFamily: 'JetBrains Mono'}} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(10, 10, 10, 0.95)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(12px)' }}
                itemStyle={{ fontSize: '12px', fontFamily: 'JetBrains Mono' }}
              />
              <Legend verticalAlign="top" align="right" iconType="circle" iconSize={6} wrapperStyle={{ paddingBottom: '30px' }} />
              <Area type="monotone" dataKey="soilMoisture" name="Kelembaban" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorMoisture)" />
              <Area type="monotone" dataKey="temperature" name="Suhu" stroke="#EA6113" strokeWidth={3} fillOpacity={1} fill="url(#colorTemp)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-8">
          <div className="glass-sunset p-8 rounded-3xl border border-sunset-500/20 text-white">
            <h3 className="font-bold flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-sunset-400" />
              Efisiensi Energi
            </h3>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden mb-3">
              <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} className="h-full sunset-gradient" />
            </div>
            <p className="text-[10px] text-sunset-100/40 font-mono">BATERAI: 98%</p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-sm font-bold text-white mb-6">Informasi Cuaca</h3>
            <div className="flex items-center gap-4">
              <Sun className="w-12 h-12 text-sunset-400" />
              <div>
                <p className="text-2xl font-bold text-white">32°C</p>
                <p className="text-xs text-sunset-100/40">Cerah Berawan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    <div className="min-h-screen bg-dark-bg text-sunset-100 selection:bg-sunset-500/30">
      {/* Universal Navigator */}
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6",
        isScrolled ? "py-4 glass border-b border-white/5" : "py-8 bg-transparent"
      )}>
        <div className="container mx-auto flex items-center justify-between">
          <div 
            onClick={() => setView('landing')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 sunset-gradient rounded-xl flex items-center justify-center text-white shadow-lg shadow-sunset-500/20 group-hover:scale-110 transition-transform">
              <Sun className="w-6 h-6" />
            </div>
            <span className="font-display font-bold text-xl sunset-text-gradient">Sorgummology</span>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            <NavLink label="Teknologi" onClick={() => setView('landing')} />
            <NavLink label="Fitur" onClick={() => setView('landing')} />
            <NavLink label="Testimoni" onClick={() => setView('landing')} />
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setView(view === 'landing' ? 'dashboard' : 'landing')}
              className={cn(
                "hidden sm:flex px-6 py-2.5 rounded-xl font-bold text-sm transition-all",
                view === 'landing' 
                  ? "sunset-gradient text-white shadow-lg shadow-sunset-500/20 hover:scale-105" 
                  : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
              )}
            >
              {view === 'landing' ? 'Buka Dasbor' : 'Kembali Beranda'}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-white/60 hover:text-white transition-colors"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] glass flex flex-col p-8"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-3">
                <Sun className="w-7 h-7 text-sunset-500" />
                <span className="font-display font-bold text-xl sunset-text-gradient">Sorgummology</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-white/5 rounded-xl text-white/40">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {['Teknologi', 'Fitur', 'Testimoni'].map(item => (
                <button key={item} className="text-2xl font-display font-bold text-left text-white/60 hover:text-white transition-all">
                  {item}
                </button>
              ))}
              <hr className="border-white/5 my-4" />
              <button 
                onClick={() => { setView('dashboard'); setMobileMenuOpen(false); }}
                className="w-full py-4 sunset-gradient text-white rounded-2xl font-bold"
              >
                Buka Dasbor
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
              
              <section className="py-24">
                <div className="container mx-auto px-6">
                  <div className="glass-sunset p-12 md:p-20 rounded-[3rem] border border-sunset-500/20 text-center relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                      <h2 className="text-4xl md:text-6xl font-display font-bold">Siap Mengubah Hasil Tani Anda?</h2>
                      <p className="text-lg text-sunset-100/60 leading-relaxed">Gabung dengan komunitas petani cerdas sekarang dan rasakan perbedaannya dengan teknologi IoT kami.</p>
                      <button 
                        onClick={() => setView('dashboard')}
                        className="px-10 py-5 bg-white text-dark-bg rounded-2xl font-bold text-lg hover:shadow-2xl transition-all"
                      >
                        Mulai Gratis Sekarang
                      </button>
                    </div>
                    <div className="absolute top-0 left-0 w-96 h-96 bg-sunset-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
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
              <DashboardView />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="bg-dark-surface border-t border-white/5 pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center gap-3">
                <Sun className="w-8 h-8 text-sunset-500" />
                <span className="font-display font-bold text-2xl sunset-text-gradient">Sorgummology</span>
              </div>
              <p className="text-sunset-100/40 text-sm leading-relaxed">
                Ekosistem cerdas untuk masa depan kedaulatan pangan melalui sorgum.
              </p>
              <div className="flex gap-4">
                <Instagram className="w-5 h-5 text-white/40 hover:text-sunset-500 cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-white/40 hover:text-sunset-500 cursor-pointer transition-colors" />
                <Facebook className="w-5 h-5 text-white/40 hover:text-sunset-500 cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Produk</h4>
              <ul className="space-y-4">
                <FooterLink label="IoT Monitoring" />
                <FooterLink label="AI Analytics" />
                <FooterLink label="Smart Supply Chain" />
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Tautan</h4>
              <ul className="space-y-4">
                <FooterLink label="Tentang Kami" />
                <FooterLink label="Kisah Petani" />
                <FooterLink label="Pusat Bantuan" />
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Hubungi</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-sunset-100/40">
                  <Mail className="w-4 h-4 text-sunset-500" />
                  kontak@sorgummology.id
                </li>
                <li className="flex items-center gap-3 text-sm text-sunset-100/40">
                  <MapPin className="w-4 h-4 text-sunset-500" />
                  Jawa Timur, Indonesia
                </li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-sunset-100/20 text-center border-t border-white/5 pt-8">© 2026 Sorgummology. Seluruh Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}
