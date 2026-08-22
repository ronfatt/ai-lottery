import React from 'react';
import { useDemo } from '../../../context/DemoContext';
import { Target, Flag, Lock, ArrowRight, Sparkles, Trophy, Globe, TrendingUp, Film, Gamepad2 } from 'lucide-react';

export const GamesHubView: React.FC = () => {
  const { navigate } = useDemo();

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Header */}
      <div className="pb-4 border-b border-white/10 space-y-1">
        <div className="flex items-center gap-2 text-xs font-mono text-lime-400 font-bold">
          <Gamepad2 className="w-4 h-4" />
          <span>PREDICTION MATRIX // 预测游戏大厅</span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
          全品类可验证预测游戏中心
        </h2>
        <p className="text-xs font-mono text-metal-300">
          始于数字预测，延展至全球汽车运动、体育、金融市场与文娱事件。
        </p>
      </div>

      {/* Main 2 Active Game Cards with Visual Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card 1: Core Number Prediction with Matrix Visual */}
        <div className="rounded-3xl bg-surface-100/95 border-2 border-lime-400 backdrop-blur-2xl shadow-glow-lime/20 flex flex-col justify-between overflow-hidden group">
          
          {/* Top Visual Image */}
          <div className="h-48 w-full relative overflow-hidden bg-surface-200">
            <img 
              src="/images/oracle_matrix_nexus.jpg" 
              alt="ORACLE 49 Quantum Numbers Matrix" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/50 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-black bg-lime-400 text-black uppercase shadow-sm">
                🎯 CORE GAME // 核心基本盘游戏
              </span>
            </div>
            <div className="absolute bottom-3 right-4">
              <span className="text-xs font-mono text-lime-400 font-bold bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-lime-400/30">
                01–49 高频开奖
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                ORACLE 49 数字预测网络
              </h3>

              <p className="text-xs font-mono text-metal-200 leading-relaxed">
                基于<strong>香港六合彩公开摇号数据</strong>（6正码 + 1特别号码）进行 01–49 数字猎手、焦点单码、奇偶天平、高低半区与 SUPER CALL 超级推演卡。
              </p>

              <div className="p-3.5 rounded-xl bg-surface-200/80 border border-white/5 font-mono text-xs text-metal-300 space-y-1">
                <div>• 参考数据源：<strong>香港六合彩公开摇号 (HK Mark Six Reference)</strong></div>
                <div>• 存证方式：SHA-256 承诺哈希 + 区块链时间戳</div>
              </div>
            </div>

            <button
              onClick={() => navigate('/app/predict')}
              className="w-full py-4 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-glow-lime"
            >
              <span>立即进入数字预测 (PLAY NOW)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Card 2: Featured F1 Prediction with Pit Straight 4-Car Visual */}
        <div className="rounded-3xl bg-surface-100/95 border-2 border-cyber-amber/60 backdrop-blur-2xl shadow-[0_0_50px_rgba(245,158,11,0.2)] flex flex-col justify-between overflow-hidden group">
          
          {/* Top Visual Image */}
          <div className="h-48 w-full relative overflow-hidden bg-surface-200">
            <img 
              src="/images/f1_team_cars.jpg" 
              alt="F1 Team Cars Sepang Pit Straight" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/50 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-black bg-cyber-amber text-black uppercase shadow-sm">
                ⭐ FEATURED // 特色推荐赛事
              </span>
            </div>
            <div className="absolute bottom-3 right-4">
              <span className="text-xs font-mono text-cyber-amber font-bold bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-cyber-amber/30">
                50,000 USDT 奖池
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                2026 F1 马来西亚雪邦大奖赛 (SEPANG)
              </h3>

              <p className="text-xs font-mono text-metal-200 leading-relaxed">
                亚洲旗舰汽车运动重磅回归！推演分站冠军、车队胜出、排位杆位、领奖台席位、安全车与热带雨战等多达 10 项遥测指标。
              </p>

              <div className="p-3.5 rounded-xl bg-surface-200/80 border border-white/5 font-mono text-xs text-metal-300 space-y-1">
                <div>• 参考数据源：<strong>FIA 官方排位赛与正赛成绩遥测</strong></div>
                <div>• 专属声誉：累积 F1 IQ 评级与围场大师勋章</div>
              </div>
            </div>

            <button
              onClick={() => navigate('/app/events/f1-malaysia-2026')}
              className="w-full py-4 rounded-xl bg-cyber-amber hover:bg-amber-400 text-black font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_30px_rgba(245,158,11,0.4)]"
            >
              <span>进入 F1 特色赛事预测 (JOIN EVENT)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Future Locked Expansion Cards */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between pb-2 border-b border-white/10 font-mono text-xs">
          <span className="text-metal-400 uppercase tracking-widest font-bold">
            FUTURE EXPANSION PREDICTIONS // 即将开放的宏观预测宇宙
          </span>
          <span className="text-metal-400">正在接入去中心化预言机节点</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
          
          <div className="p-6 rounded-2xl bg-surface-50 border border-white/5 opacity-60 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-2xl">⚽</span>
              <span className="px-2 py-0.5 rounded text-[9px] bg-surface-200 text-metal-400">COMING SOON</span>
            </div>
            <h4 className="font-bold text-white text-base">全球顶级足球联赛</h4>
            <p className="text-[11px] text-metal-400">英超 / 欧冠单场进球数、半全场与关键事件推演。</p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-50 border border-white/5 opacity-60 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-2xl">📈</span>
              <span className="px-2 py-0.5 rounded text-[9px] bg-surface-200 text-metal-400">COMING SOON</span>
            </div>
            <h4 className="font-bold text-white text-base">加密资产宏观波动</h4>
            <p className="text-[11px] text-metal-400">比特币每周极值、以太坊波动率与美联储决议。</p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-50 border border-white/5 opacity-60 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-2xl">🎬</span>
              <span className="px-2 py-0.5 rounded text-[9px] bg-surface-200 text-metal-400">COMING SOON</span>
            </div>
            <h4 className="font-bold text-white text-base">全球文娱与热点</h4>
            <p className="text-[11px] text-metal-400">奥斯卡金像奖归属、全球首周末票房与流媒体榜单。</p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-50 border border-white/5 opacity-60 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-2xl">🌍</span>
              <span className="px-2 py-0.5 rounded text-[9px] bg-surface-200 text-metal-400">COMING SOON</span>
            </div>
            <h4 className="font-bold text-white text-base">世界大事件预言机</h4>
            <p className="text-[11px] text-metal-400">SpaceX 发射窗口、极端气温与公开科学突破。</p>
          </div>

        </div>
      </div>

    </div>
  );
};
