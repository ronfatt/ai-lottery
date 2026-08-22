import React from 'react';
import { useDemo } from '../../../context/DemoContext';
import { Target, Flag, ArrowRight, Sparkles, Trophy, Globe, Smartphone, Flame, CloudSun, Swords, Film, TrendingUp, LineChart } from 'lucide-react';

export const GamesHubView: React.FC = () => {
  const { navigate } = useDemo();

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12 font-sans">
      
      {/* Header */}
      <div className="pb-4 border-b border-white/10 space-y-1">
        <div className="flex items-center gap-2 text-xs font-mono text-lime-400 font-bold">
          <Sparkles className="w-4 h-4" />
          <span>PREDICTION SUPER APP MATRIX // 全品类可验证预测超级应用矩阵</span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
          全品类预测游戏中心 (GAMES HUB)
        </h2>
        <p className="text-xs font-mono text-slate-200">
          以香港六合彩数字预测为核心基本盘，无缝延展至 F1 赛车、香港赛马日、科技新品发布会及加密市场宏观事件。
        </p>
      </div>

      {/* Primary Game Cards Grid (Core, Featured, Trending Sports, New Tech, Market Crypto) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        
        {/* Card 1: CORE GAME - ORACLE 49 Number Prediction */}
        <div className="rounded-3xl bg-surface-100/95 border-2 border-lime-400 backdrop-blur-2xl shadow-glow-lime/20 flex flex-col justify-between overflow-hidden group">
          
          <div className="h-36 w-full relative overflow-hidden bg-surface-200">
            <img 
              src="/images/oracle_matrix_nexus.jpg" 
              alt="ORACLE 49 Quantum Numbers Matrix" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/50 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-lime-400 text-black uppercase shadow-sm">
                🎯 CORE GAME
              </span>
            </div>
            <div className="absolute bottom-2 right-3">
              <span className="text-[10px] font-mono text-lime-400 font-bold bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-lime-400/30">
                01–49 数字矩阵
              </span>
            </div>
          </div>

          <div className="p-4 space-y-3 flex-1 flex flex-col justify-between font-mono text-xs">
            <div className="space-y-1.5">
              <h3 className="font-display font-black text-base text-white">
                ORACLE 49 数字预测
              </h3>
              <p className="text-[11px] text-slate-200 leading-relaxed">
                基于<strong>香港六合彩公开摇号</strong>（6正码 + 1特别号）进行形态与数字预测，支持 8合1 SUPER CALL。
              </p>
              <div className="p-2 rounded-xl bg-surface-200/80 border border-white/5 text-[10px] text-slate-300">
                参考：香港六合彩公开摇号客观数据
              </div>
            </div>

            <button
              onClick={() => navigate('/app/predict')}
              className="w-full py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-glow-lime text-xs"
            >
              <span>立即体验 (PLAY NOW)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Card 2: FEATURED - F1 PREDICTION */}
        <div className="rounded-3xl bg-surface-100/95 border-2 border-cyber-amber/60 backdrop-blur-2xl shadow-[0_0_40px_rgba(245,158,11,0.2)] flex flex-col justify-between overflow-hidden group">
          
          <div className="h-36 w-full relative overflow-hidden bg-surface-200">
            <img 
              src="/images/f1_team_cars.jpg" 
              alt="F1 Team Cars Sepang Pit Straight" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/50 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-cyber-amber text-black uppercase shadow-sm">
                ⭐ FEATURED
              </span>
            </div>
            <div className="absolute bottom-2 right-3">
              <span className="text-[10px] font-mono text-cyber-amber font-bold bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-cyber-amber/30">
                50,000 USDT 奖池
              </span>
            </div>
          </div>

          <div className="p-4 space-y-3 flex-1 flex flex-col justify-between font-mono text-xs">
            <div className="space-y-1.5">
              <h3 className="font-display font-black text-base text-white">
                F1 赛车极速预测
              </h3>
              <p className="text-[11px] text-slate-200 leading-relaxed">
                预测分站冠军、车队胜出、领奖台前三、周六杆位与雪邦热带雨战等多达 10 项遥测指标。
              </p>
              <div className="p-2 rounded-xl bg-surface-200/80 border border-white/5 text-[10px] text-slate-300">
                首发：2026 F1 马来西亚雪邦大奖赛
              </div>
            </div>

            <button
              onClick={() => navigate('/app/events/f1-malaysia-2026')}
              className="w-full py-2.5 rounded-xl bg-cyber-amber hover:bg-amber-400 text-black font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm text-xs"
            >
              <span>进入赛事 (JOIN EVENT)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Card 3: TRENDING SPORTS - HONG KONG HORSE RACING */}
        <div className="rounded-3xl bg-surface-100/95 border-2 border-emerald-500/60 backdrop-blur-2xl shadow-[0_0_40px_rgba(16,185,129,0.2)] flex flex-col justify-between overflow-hidden group">
          
          <div className="h-36 w-full relative overflow-hidden bg-surface-200">
            <img 
              src="/images/hk_racing_banner.jpg" 
              alt="Hong Kong Horse Racing Night Track" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/50 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-emerald-500 text-black uppercase shadow-sm">
                🔥 TRENDING
              </span>
            </div>
            <div className="absolute bottom-2 right-3">
              <span className="text-[10px] font-mono text-emerald-400 font-bold bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-emerald-500/30">
                沙田 / 跑马地
              </span>
            </div>
          </div>

          <div className="p-4 space-y-3 flex-1 flex flex-col justify-between font-mono text-xs">
            <div className="space-y-1.5">
              <h3 className="font-display font-black text-base text-white">
                香港赛马日推演
              </h3>
              <p className="text-[11px] text-slate-200 leading-relaxed">
                基于公开可查的香港赛马赛果参考，推演头马独赢、前三名次、骑师对抗与全日 SUPER 8。
              </p>
              <div className="p-2 rounded-xl bg-surface-200/80 border border-white/5 text-[10px] text-slate-300">
                参考：香港赛马公开赛果参考
              </div>
            </div>

            <button
              onClick={() => navigate('/app/events/hk-racing')}
              className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm text-xs"
            >
              <span>进入赛马日 (ENTER RACE)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Card 4: NEW CATEGORY - TECH LAUNCH PREDICTION */}
        <div className="rounded-3xl bg-surface-100/95 border-2 border-cyan-400 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,229,255,0.3)] flex flex-col justify-between overflow-hidden group">
          
          <div className="h-36 w-full relative overflow-hidden bg-surface-200">
            <img 
              src="/images/tech_launch_banner.jpg" 
              alt="October Smartphone Watch 2026 Keynote Stage" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/50 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-cyan-400 text-black uppercase shadow-sm flex items-center gap-1">
                <span>🚀 NEW</span>
              </span>
            </div>
            <div className="absolute bottom-2 right-3">
              <span className="text-[10px] font-mono text-cyan-300 font-bold bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-cyan-500/30">
                12 大科技品牌
              </span>
            </div>
          </div>

          <div className="p-4 space-y-3 flex-1 flex flex-col justify-between font-mono text-xs">
            <div className="space-y-1.5">
              <h3 className="font-display font-black text-base text-white">
                10月科技发布观象台
              </h3>
              <p className="text-[11px] text-slate-200 leading-relaxed">
                推演哪些智能手机品牌将在 10 月正式发布新机、具体发布日期与谁先官宣。
              </p>
              <div className="p-2 rounded-xl bg-surface-200/80 border border-cyan-500/20 text-[10px] text-cyan-300">
                核验：官方新闻稿 / 发布会公告
              </div>
            </div>

            <button
              onClick={() => navigate('/app/events/tech-october-2026')}
              className="w-full py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-[0_0_25px_rgba(0,229,255,0.4)] text-xs"
            >
              <span>进入科技台 (ENTER TECH)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Card 5: MARKET / CRYPTO - CRYPTO PREDICTION (Section 01 & 29) */}
        <div className="rounded-3xl bg-surface-100/95 border-2 border-cyber-amber backdrop-blur-2xl shadow-[0_0_50px_rgba(245,158,11,0.3)] flex flex-col justify-between overflow-hidden group">
          
          <div className="h-36 w-full relative overflow-hidden bg-surface-200">
            <img 
              src="/images/crypto_market_banner.jpg" 
              alt="Crypto Market Bitcoin $100K Prediction Terminal" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/50 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-cyber-amber text-black uppercase shadow-sm flex items-center gap-1">
                <span>🔥 TRENDING</span>
              </span>
            </div>
            <div className="absolute bottom-2 right-3">
              <span className="text-[10px] font-mono text-amber-300 font-bold bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-cyber-amber/30">
                BTC $100K 挑战
              </span>
            </div>
          </div>

          <div className="p-4 space-y-3 flex-1 flex flex-col justify-between font-mono text-xs">
            <div className="space-y-1.5">
              <h3 className="font-display font-black text-base text-white">
                加密市场事件推演
              </h3>
              <p className="text-[11px] text-slate-200 leading-relaxed">
                推演 BTC 10万美元里程碑、月度收盘区间、宏观监管事件与官方大事件。
              </p>
              <div className="p-2 rounded-xl bg-surface-200/80 border border-cyber-amber/20 text-[10px] text-amber-300">
                核验：CMC 现货公价与官方披露
              </div>
            </div>

            <button
              onClick={() => navigate('/app/events/crypto')}
              className="w-full py-2.5 rounded-xl bg-cyber-amber hover:bg-amber-400 text-black font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-[0_0_25px_rgba(245,158,11,0.4)] text-xs"
            >
              <span>进入加密推演 (ENTER CRYPTO)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Future / Upcoming Locked Expansion Cards */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between pb-2 border-b border-white/10 font-mono text-xs">
          <span className="text-slate-300 uppercase tracking-widest font-bold">
            FUTURE PREDICTION EXPANSIONS // 规划接入的更多预测品类
          </span>
          <span className="text-slate-300">去中心化预言机节点就绪</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
          
          <div className="p-4 rounded-2xl bg-surface-50 border border-white/10 opacity-70 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xl">🎮</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-surface-200 text-slate-200 font-bold">COMING SOON</span>
            </div>
            <h4 className="font-bold text-white text-sm">全球电子竞技</h4>
            <p className="text-xs text-slate-300">英雄联盟全球总决赛 / CS2 Major 战果。</p>
          </div>

          <div className="p-4 rounded-2xl bg-surface-50 border border-white/10 opacity-70 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xl">🎬</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-surface-200 text-slate-200 font-bold">COMING SOON</span>
            </div>
            <h4 className="font-bold text-white text-sm">全球文娱盛典</h4>
            <p className="text-xs text-slate-300">奥斯卡金像奖归属与流媒体榜单。</p>
          </div>

          <div className="p-4 rounded-2xl bg-surface-50 border border-white/10 opacity-70 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xl">☀️</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-surface-200 text-slate-200 font-bold">COMING SOON</span>
            </div>
            <h4 className="font-bold text-white text-sm">全球气象与天文</h4>
            <p className="text-xs text-slate-300">极端气温指数与 SpaceX 发射窗口。</p>
          </div>

          <div className="p-4 rounded-2xl bg-surface-50 border border-white/10 opacity-70 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xl">🏛️</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-surface-200 text-slate-200 font-bold">COMING SOON</span>
            </div>
            <h4 className="font-bold text-white text-sm">全球宏观决议</h4>
            <p className="text-xs text-slate-300">全球央行利率决议与通胀指标推演。</p>
          </div>

        </div>
      </div>

    </div>
  );
};
