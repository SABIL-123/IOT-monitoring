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
      "text-sm font-medium transition-colors hover:text-brand-600",
      active ? "text-brand-600" : "text-muted-text"
    )}
  >
    {label}
  </button>
);

const FooterLink = ({ label }: { label: string }) => (
  <li>
    <a href="#" className="text-sm text-slate-500 hover:text-brand-600 transition-colors">
      {label}
    </a>
  </li>
);

// --- Landing Page Sections ---

const Hero = ({ onGetStarted }: { onGetStarted: () => void }) => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 bg-light-bg">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2" />
    <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/10 border border-brand-500/20 rounded-full text-brand-600 text-xs font-bold uppercase tracking-widest">
          <Leaf className="w-4 h-4" />
          The Future of Agriculture
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-black leading-[1.1] brand-text-gradient">
          Revolusi Pertanian <br /> Sorgum Cerdas.
        </h1>
        <p className="text-lg text-muted-text max-w-xl leading-relaxed">
          Optimalkan hasil panen sorgum Anda dengan teknologi IoT mutakhir dan analisis data berbasis AI. Pantau, analisa, dan bertindak dengan presisi.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button 
            onClick={onGetStarted}
            className="px-8 py-4 brand-gradient text-white rounded-2xl font-bold shadow-xl shadow-brand-500/20 hover:scale-105 transition-all flex items-center justify-center gap-2 group"
          >
            Mulai Pantau Lahan
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-slate-100 border border-slate-200 text-dark-text rounded-2xl font-bold hover:bg-slate-200 transition-all">
            Pelajari Teknologi Kami
          </button>
        </div>
        <div className="flex items-center gap-8 pt-8">
          <div>
            <p className="text-2xl font-bold text-dark-text">500+</p>
            <p className="text-xs text-slate-400 uppercase tracking-widest">Petani Aktif</p>
          </div>
          <div className="w-px h-10 bg-slate-200" />
          <div>
            <p className="text-2xl font-bold text-dark-text">1.2K</p>
            <p className="text-xs text-slate-400 uppercase tracking-widest">Sensor Terpasang</p>
          </div>
          <div className="w-px h-10 bg-slate-200" />
          <div>
            <p className="text-2xl font-bold text-dark-text">99.9%</p>
            <p className="text-xs text-slate-400 uppercase tracking-widest">Uptime Sistem</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative"
      >
        <div className="glass-brand p-4 rounded-[2rem] border-2 border-brand-500/20 shadow-2xl relative z-10">
          <img 
            src="https://picsum.photos/seed/sorghum-field/800/600" 
            alt="Sorghum Agriculture" 
            className="rounded-[1.5rem] w-full h-auto object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl border border-slate-200 shadow-xl hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-500/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">Hasil Panen</p>
                <p className="text-lg font-bold text-dark-text">+24% Meningkat</p>
              </div>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 glass-brand p-6 rounded-2xl border border-brand-500/20 shadow-xl hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent-blue/20 rounded-full flex items-center justify-center">
                <Activity className="w-5 h-5 text-accent-blue" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-slate-500 font-bold uppercase">Sensor Live</p>
                <div className="flex gap-1">
                  <div className="w-1.5 h-4 bg-accent-blue rounded-full" />
                  <div className="w-1.5 h-6 bg-accent-blue/60 rounded-full" />
                  <div className="w-1.5 h-8 bg-accent-blue rounded-full" />
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
  <section id="features" className="py-24 bg-light-surface">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
        <h2 className="text-4xl font-display font-bold">Mengapa Memilih Kami?</h2>
        <p className="text-muted-text leading-relaxed">
          Kami menggabungkan keahlian agronomi tradisional dengan inovasi teknologi untuk memberikan hasil terbaik bagi pertanian Indonesia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "IoT Real-time",
            desc: "Pantau kelembaban, suhu, dan nutrisi tanah secara langsung dari mana saja.",
            icon: Activity,
            color: "bg-accent-blue/10 text-accent-blue"
          },
          {
            title: "AI Analysis",
            desc: "Analisis cerdas untuk memprediksi waktu panen dan mendeteksi anomali pertumbuhan.",
            icon: Zap,
            color: "bg-brand-500/10 text-brand-600"
          },
          {
            title: "Security & Trust",
            desc: "Data Anda aman tersimpan dengan enkripsi tingkat tinggi untuk privasi maksimal.",
            icon: ShieldCheck,
            color: "bg-emerald-500/10 text-emerald-600"
          }
        ].map((feat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="glass-card p-10 border border-slate-200 hover:border-brand-500/30 transition-all"
          >
            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6", feat.color)}>
              <feat.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-dark-text mb-4">{feat.title}</h3>
            <p className="text-muted-text leading-relaxed">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" className="py-24 relative overflow-hidden bg-light-bg">
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[150px] -z-10 -translate-x-1/2 translate-y-1/2" />
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div className="max-w-xl space-y-4">
          <h2 className="text-4xl font-display font-bold">Apa Kata Mereka?</h2>
          <p className="text-muted-text">Pengalaman nyata dari para mitra petani yang telah merasakan manfaat Sorgummology.</p>
        </div>
        <div className="flex gap-4">
          <div className="p-4 bg-slate-100 rounded-full border border-slate-200 cursor-pointer hover:bg-slate-200 transition-all">
            <ArrowRight className="w-6 h-6 rotate-180 text-dark-text" />
          </div>
          <div className="p-4 brand-gradient rounded-full shadow-lg shadow-brand-500/20 cursor-pointer hover:scale-105 transition-all">
            <ArrowRight className="w-6 h-6 text-white" />
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
          <div key={i} className="glass-card p-10 relative bg-white border border-slate-200">
            <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-500/5" />
            <p className="text-lg text-slate-700 italic mb-8 relative z-10">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full border border-brand-500/30" />
              <div>
                <p className="font-bold text-dark-text">{t.name}</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest">{t.role}</p>
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
    className="glass-card p-6 bg-white border border-slate-200"
  >
    <div className="flex items-start justify-between mb-4">
      <div className={cn("p-3 rounded-2xl shadow-inner", color)}>
        <Icon className="w-6 h-6" />
      </div>
      {trend && (
        <span className={cn(
          "text-[10px] font-bold px-2 py-1 rounded-full",
          trend.positive ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600"
        )}>
          {trend.positive ? '+' : '-'}{trend.value}%
        </span>
      )}
    </div>
    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{label}</p>
    <div className="flex items-baseline gap-1 mt-1">
      <h3 className="text-3xl font-bold text-dark-text">{value}</h3>
      <span className="text-sm font-medium text-slate-400">{unit}</span>
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
    <div className="space-y-10 pt-28 max-w-7xl mx-auto container px-6 pb-24 min-h-screen bg-light-bg">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 brand-gradient rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
              <Activity className="w-6 h-6" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold brand-text-gradient">Dasbor Monitor</h1>
          </div>
          <p className="text-muted-text flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Status: Aktif & Stabil
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={handleRefresh} className="p-3 bg-slate-100 hover:bg-slate-200 rounded-2xl border border-slate-200 transition-all group">
            <RefreshCw className={cn("w-5 h-5 text-slate-500 group-hover:text-brand-600", isRefreshing && "animate-spin")} />
          </button>
          <button className="p-3 bg-slate-100 hover:bg-slate-200 rounded-2xl border border-slate-200 transition-all text-slate-500">
            <Bell className="w-5 h-5" />
          </button>
          <button className="px-6 py-3 brand-gradient rounded-2xl shadow-lg shadow-brand-500/30 text-white font-bold flex items-center gap-2 hover:opacity-90 transition-all">
            <Settings className="w-5 h-5" />
            <span className="hidden sm:inline">Konfigurasi</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Kelembaban" value={42.5} unit="%" icon={Droplets} color="bg-blue-100 text-blue-600 border border-blue-200" trend={{ value: '2.4', positive: true }} />
        <StatCard label="Suhu" value={28} unit="°C" icon={Thermometer} color="bg-brand-100 text-brand-600 border border-brand-200" trend={{ value: '0.5', positive: false }} />
        <StatCard label="Cahaya" value={850} unit="lx" icon={Sun} color="bg-amber-100 text-amber-600 border border-amber-200" />
        <StatCard label="Angin" value={12.4} unit="km/h" icon={Wind} color="bg-slate-100 text-slate-600 border border-slate-200" trend={{ value: '1.2', positive: true }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-card p-8 min-h-[400px] bg-white border border-slate-200">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={MOCK_IOT_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorMoisture" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#16a34a" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#16a34a" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
              <XAxis dataKey="timestamp" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10, fontFamily: 'JetBrains Mono'}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10, fontFamily: 'JetBrains Mono'}} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                itemStyle={{ fontSize: '12px', fontFamily: 'JetBrains Mono' }}
              />
              <Legend verticalAlign="top" align="right" iconType="circle" iconSize={6} wrapperStyle={{ paddingBottom: '30px' }} />
              <Area type="monotone" dataKey="soilMoisture" name="Kelembaban" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorMoisture)" />
              <Area type="monotone" dataKey="temperature" name="Suhu" stroke="#16a34a" strokeWidth={3} fillOpacity={1} fill="url(#colorTemp)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-8">
          <div className="glass-brand p-8 rounded-3xl border border-brand-500/20 bg-brand-50/50">
            <h3 className="font-bold flex items-center gap-2 mb-6 text-brand-700">
              <Zap className="w-5 h-5 text-brand-600" />
              Efisiensi Energi
            </h3>
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden mb-3">
              <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} className="h-full brand-gradient" />
            </div>
            <p className="text-[10px] text-brand-600 font-mono font-bold">BATERAI: 98%</p>
          </div>
          <div className="glass-card p-6 bg-white border border-slate-200">
            <h3 className="text-sm font-bold text-dark-text mb-6">Informasi Cuaca</h3>
            <div className="flex items-center gap-4">
              <Sun className="w-12 h-12 text-amber-500" />
              <div>
                <p className="text-2xl font-bold text-dark-text">32°C</p>
                <p className="text-xs text-slate-500">Cerah Berawan</p>
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
    <div className="min-h-screen bg-light-bg text-dark-text selection:bg-brand-500/30">
      {/* Universal Navigator */}
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6",
        isScrolled ? "py-4 glass border-b border-slate-200" : "py-8 bg-transparent"
      )}>
        <div className="container mx-auto flex items-center justify-between">
          <div 
            onClick={() => setView('landing')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 brand-gradient rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-500/20 group-hover:scale-110 transition-transform">
              <Sun className="w-6 h-6" />
            </div>
            <span className="font-display font-bold text-xl brand-text-gradient">Sorgummology</span>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            <NavLink label="Teknologi" active={view === 'landing'} onClick={() => setView('landing')} />
            <NavLink label="Fitur" active={view === 'landing'} onClick={() => setView('landing')} />
            <NavLink label="Testimoni" active={view === 'landing'} onClick={() => setView('landing')} />
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setView(view === 'landing' ? 'dashboard' : 'landing')}
              className={cn(
                "hidden sm:flex px-6 py-2.5 rounded-xl font-bold text-sm transition-all",
                view === 'landing' 
                  ? "brand-gradient text-white shadow-lg shadow-brand-500/20 hover:scale-105" 
                  : "bg-slate-100 text-dark-text border border-slate-200 hover:bg-slate-200"
              )}
            >
              {view === 'landing' ? 'Buka Dasbor' : 'Kembali Beranda'}
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
                <button key={item} className="text-2xl font-display font-bold text-left text-slate-500 hover:text-dark-text transition-all">
                  {item}
                </button>
              ))}
              <hr className="border-slate-100 my-4" />
              <button 
                onClick={() => { setView('dashboard'); setMobileMenuOpen(false); }}
                className="w-full py-4 brand-gradient text-white rounded-2xl font-bold"
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
              <DashboardView />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="bg-light-surface border-t border-slate-200 pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center gap-3">
                <Sun className="w-8 h-8 text-brand-600" />
                <span className="font-display font-bold text-2xl brand-text-gradient">Sorgummology</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Ekosistem cerdas untuk masa depan kedaulatan pangan melalui sorgum.
              </p>
              <div className="flex gap-4">
                <Instagram className="w-5 h-5 text-slate-400 hover:text-brand-600 cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-slate-400 hover:text-brand-600 cursor-pointer transition-colors" />
                <Facebook className="w-5 h-5 text-slate-400 hover:text-brand-600 cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h4 className="text-dark-text font-bold mb-6">Produk</h4>
              <ul className="space-y-4">
                <FooterLink label="IoT Monitoring" />
                <FooterLink label="AI Analytics" />
                <FooterLink label="Smart Supply Chain" />
              </ul>
            </div>

            <div>
              <h4 className="text-dark-text font-bold mb-6">Tautan</h4>
              <ul className="space-y-4">
                <FooterLink label="Tentang Kami" />
                <FooterLink label="Kisah Petani" />
                <FooterLink label="Pusat Bantuan" />
              </ul>
            </div>

            <div>
              <h4 className="text-dark-text font-bold mb-6">Hubungi</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-slate-500">
                  <Mail className="w-4 h-4 text-brand-600" />
                  kontak@sorgummology.id
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-500">
                  <MapPin className="w-4 h-4 text-brand-600" />
                  Jawa Timur, Indonesia
                </li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-400 text-center border-t border-slate-100 pt-8">© 2026 Sorgummology. Seluruh Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}
