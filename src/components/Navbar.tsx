import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Menu, X, ArrowUpRight, Sparkles, LogIn } from 'lucide-react';
import { useDemo } from '../context/DemoContext';

interface NavbarProps {
  onOpenDeckModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDeckModal }) => {
  const { navigate } = useDemo();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('concept');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = [
        'concept',
        'how-it-works',
        'game-modes',
        'prediction-iq',
        'technology',
        'business-model',
        'roadmap',
      ];

      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '核心概念', href: '#concept', id: 'concept' },
    { label: '运行机制', href: '#how-it-works', id: 'how-it-works' },
    { label: '游戏玩法', href: '#game-modes', id: 'game-modes' },
    { label: '预测智商', href: '#prediction-iq', id: 'prediction-iq' },
    { label: '链上技术', href: '#technology', id: 'technology' },
    { label: '商业模型', href: '#business-model', id: 'business-model' },
    { label: '发展路线', href: '#roadmap', id: 'roadmap' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#06080B]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] py-3.5'
            : 'bg-gradient-to-b from-[#06080B]/90 via-[#06080B]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 rounded-lg bg-surface-100 border border-lime-400/30 flex items-center justify-center overflow-hidden group-hover:border-lime-400 transition-colors shadow-glow-lime/20">
                <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-mono font-black text-sm text-lime-400 tracking-tighter">
                  49
                </span>
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-lime-400 animate-ping opacity-75" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display font-black tracking-wider text-base sm:text-lg text-white">
                    ORACLE <span className="text-lime-400">49</span>
                  </span>
                  <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-lime-400/10 text-lime-400 border border-lime-400/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-400 inline-block mr-1 animate-pulse" />
                    主网环境
                  </span>
                </div>
                <span className="text-[10px] font-mono text-metal-300 tracking-widest hidden md:block">
                  全球可验证数字预测竞技平台
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 bg-surface-100/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`relative px-3 py-1 rounded-full text-xs font-mono font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-lime-400 font-semibold'
                        : 'text-metal-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavTab"
                        className="absolute inset-0 bg-lime-400/10 border border-lime-400/30 rounded-full"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenDeckModal}
                className="px-3 py-2 rounded-lg text-xs font-mono text-metal-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center gap-1.5"
              >
                <span>投资人商业计划书</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-metal-300" />
              </button>

              {/* ENTER DEMO Button */}
              <button
                onClick={() => navigate('/login')}
                className="relative group px-4 py-2 rounded-xl text-xs font-mono font-black uppercase tracking-wider bg-lime-400 hover:bg-lime-300 text-black transition-all shadow-[0_0_25px_rgba(0,255,102,0.45)] hover:shadow-[0_0_35px_rgba(0,255,102,0.7)] flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>进入演示平台 (ENTER DEMO)</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => navigate('/login')}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-black bg-lime-400 text-black shadow-glow-lime"
              >
                进入 DEMO
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-surface-100 border border-white/10 text-metal-200 hover:text-white"
                aria-label="切换菜单"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#06080B]/95 backdrop-blur-2xl border-b border-white/10 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm font-mono text-metal-200 hover:text-lime-400 hover:bg-white/5 flex items-center justify-between border border-transparent hover:border-white/5"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-metal-400" />
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDeckModal();
                  }}
                  className="w-full py-3 rounded-lg text-xs font-mono font-bold bg-white/10 text-white border border-white/15 text-center flex items-center justify-center gap-2"
                >
                  <span>索取投资人商业计划书</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate('/login');
                  }}
                  className="w-full py-3 rounded-lg text-xs font-mono font-black bg-lime-400 text-black text-center shadow-glow-lime flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>进入完整会员演示控制台</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
