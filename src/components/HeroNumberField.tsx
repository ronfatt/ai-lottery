import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Hash, Sparkles } from 'lucide-react';

export const HeroNumberField: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [lockedNumbers, setLockedNumbers] = useState<number[]>([7, 18, 27, 36, 41]);
  const [lockStage, setLockStage] = useState<'scanning' | 'locked' | 'verified'>('verified');
  const [hoveredNumber, setHoveredNumber] = useState<number | null>(null);

  // Generate 49 numbers (01 to 49)
  const numbers = Array.from({ length: 49 }, (_, i) => i + 1);

  // Automated locking demonstration loop
  useEffect(() => {
    const sequences = [
      [7, 18, 27, 36, 41],
      [3, 14, 22, 33, 49],
      [9, 16, 28, 35, 42],
      [5, 12, 23, 38, 47],
    ];
    let index = 0;

    const interval = setInterval(() => {
      setLockStage('scanning');
      setTimeout(() => {
        index = (index + 1) % sequences.length;
        setLockedNumbers(sequences[index]);
        setLockStage('locked');
        setTimeout(() => {
          setLockStage('verified');
        }, 1200);
      }, 1500);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  // Handle mouse move for subtle 3D magnetic reaction
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setHoveredNumber(null);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-2xl mx-auto aspect-square sm:aspect-[4/3] md:aspect-[16/11] p-4 sm:p-6 rounded-2xl bg-[#090D13]/80 border border-white/10 backdrop-blur-xl shadow-[0_0_50px_-10px_rgba(0,0,0,0.8)] overflow-hidden group"
    >
      {/* Decorative Grid & HUD telemetry */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient-hero pointer-events-none" />
      
      {/* HUD Corner Accents */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-lime-400/80" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-lime-400/80" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-lime-400/80" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-lime-400/80" />

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/5 text-[10px] font-mono text-metal-300">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
          <span className="tracking-widest uppercase text-white font-bold">神谕协议矩阵 01–49 实时网格</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-metal-400">区块纪元 #8849</span>
          <span className="text-lime-400">
            状态：{lockStage === 'verified' ? '哈希已验证' : lockStage === 'locked' ? '预测已锁定' : '扫描节点中'}
          </span>
        </div>
      </div>

      {/* Dynamic Laser Scanning Line Animation */}
      {lockStage === 'scanning' && (
        <motion.div
          initial={{ top: '0%' }}
          animate={{ top: '100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-lime-400 to-transparent shadow-[0_0_15px_#00FF66] z-20 pointer-events-none"
        />
      )}

      {/* 49 Numbers Interactive Matrix (7x7) */}
      <div className="relative z-10 grid grid-cols-7 gap-1.5 sm:gap-2 sm:p-2 my-auto h-[calc(100%-80px)] items-center">
        {numbers.map((num) => {
          const isLocked = lockedNumbers.includes(num);
          const isHovered = hoveredNumber === num;
          const numStr = num < 10 ? `0${num}` : `${num}`;

          // Parallax calculation
          const offsetX = mousePos.x * (num % 5 - 2) * 8;
          const offsetY = mousePos.y * (Math.floor(num / 7) - 3) * 8;

          return (
            <motion.button
              key={num}
              onMouseEnter={() => setHoveredNumber(num)}
              style={{
                transform: `translate(${offsetX}px, ${offsetY}px)`,
              }}
              whileHover={{ scale: 1.15, zIndex: 30 }}
              whileTap={{ scale: 0.92 }}
              className={`relative aspect-square rounded-lg flex items-center justify-center font-mono font-bold text-xs sm:text-sm md:text-base transition-all duration-300 ${
                isLocked
                  ? 'bg-lime-400 text-[#06080B] shadow-[0_0_20px_rgba(0,255,102,0.8)] border border-lime-300 font-extrabold z-20 scale-105'
                  : isHovered
                  ? 'bg-surface-300 text-white border border-lime-400/50 shadow-glow-lime/40'
                  : 'bg-surface-100/70 text-metal-300 border border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              <span>{numStr}</span>
              
              {/* Locked Corner Indicator */}
              {isLocked && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-black border border-lime-400"
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Bottom Cryptographic Status Seal */}
      <div className="relative z-10 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <div className={`px-2 py-0.5 rounded flex items-center gap-1.5 ${
            lockStage === 'verified'
              ? 'bg-lime-400/15 border border-lime-400/40 text-lime-400'
              : 'bg-surface-200 text-metal-300 border border-white/10'
          }`}>
            {lockStage === 'verified' ? (
              <>
                <ShieldCheck className="w-3.5 h-3.5 text-lime-400" />
                <span className="font-bold">哈希已验证 (HASH VERIFIED)</span>
              </>
            ) : lockStage === 'locked' ? (
              <>
                <Lock className="w-3.5 h-3.5 text-lime-400" />
                <span className="font-bold">预测已锁定 (LOCKED)</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5 text-cyber-blue animate-spin" />
                <span className="font-bold">共识扫描中...</span>
              </>
            )}
          </div>

          <div className="hidden sm:flex items-center gap-1 text-metal-300">
            <Hash className="w-3 h-3 text-metal-400" />
            <span className="text-[10px] truncate max-w-[140px] text-metal-400 font-mono">
              0x782C91A...E921
            </span>
          </div>
        </div>

        <div className="text-right">
          <span className="text-[10px] text-metal-300">链上封存号码：</span>
          <span className="text-lime-400 font-bold">
            [{lockedNumbers.map((n) => (n < 10 ? `0${n}` : `${n}`)).join(' · ')}]
          </span>
        </div>
      </div>
    </div>
  );
};
