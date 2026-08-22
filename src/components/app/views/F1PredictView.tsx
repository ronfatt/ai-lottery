import React, { useState } from 'react';
import { useDemo } from '../../../context/DemoContext';
import { 
  Flag, 
  Lock, 
  Sparkles, 
  CheckCircle2, 
  RotateCcw, 
  Flame, 
  Trophy, 
  CloudRain, 
  ShieldAlert, 
  Gauge, 
  Timer, 
  ChevronRight,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const F1PredictView: React.FC = () => {
  const { user, addF1Prediction } = useDemo();

  // F1 Selected Options State
  const [raceWinner, setRaceWinner] = useState('维斯塔潘 (VERSTAPPEN)');
  const [winningTeam, setWinningTeam] = useState('红牛车队 (Red Bull Racing)');
  const [polePosition, setPolePosition] = useState('维斯塔潘 (VERSTAPPEN)');
  const [p1Podium, setP1Podium] = useState('维斯塔潘');
  const [p2Podium, setP2Podium] = useState('诺里斯');
  const [p3Podium, setP3Podium] = useState('勒克莱尔');
  const [fastestLap, setFastestLap] = useState('诺里斯 (NORRIS)');
  const [hasSafetyCar, setHasSafetyCar] = useState<'YES' | 'NO'>('YES');
  const [hasRain, setHasRain] = useState<'YES' | 'NO'>('YES');
  const [winningMargin, setWinningMargin] = useState('3–7 秒区间');
  const [mclarenVsRedbull, setMclarenVsRedbull] = useState('红牛胜出');
  const [ferrariVsMercedes, setFerrariVsMercedes] = useState('法拉利胜出');

  const [isLocking, setIsLocking] = useState(false);
  const [lockedSuccess, setLockedSuccess] = useState(false);
  const [sealedHash, setSealedHash] = useState('');

  const driversList = [
    { name: '维斯塔潘 (VERSTAPPEN)', team: '红牛车队', number: '01', color: '#00E5FF' },
    { name: '诺里斯 (NORRIS)', team: '迈凯伦车队', number: '04', color: '#F59E0B' },
    { name: '勒克莱尔 (LECLERC)', team: '法拉利车队', number: '16', color: '#F43F5E' },
    { name: '拉塞尔 (RUSSELL)', team: '梅赛德斯车队', number: '63', color: '#00FF66' },
    { name: '汉密尔顿 (HAMILTON)', team: '法拉利车队', number: '44', color: '#F43F5E' },
    { name: '皮亚斯特里 (PIASTRI)', team: '迈凯伦车队', number: '81', color: '#F59E0B' },
  ];

  const handleLockSuper10 = async () => {
    if (isLocking || lockedSuccess) return;
    setIsLocking(true);

    const summary = `冠军: ${raceWinner} | 杆位: ${polePosition} | 前三: [${p1Podium}, ${p2Podium}, ${p3Podium}] | 最快圈: ${fastestLap} | 安全车: ${hasSafetyCar} | 雨战: ${hasRain} | 胜出差距: ${winningMargin}`;

    setTimeout(async () => {
      const res = await addF1Prediction(summary, '雪邦 SUPER 10 综合竞猜');
      setSealedHash(res.hash);
      setIsLocking(false);
      setLockedSuccess(true);

      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#F59E0B', '#00FF66', '#00E5FF', '#F43F5E'],
      });
    }, 1200);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Event Hero Header */}
      <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0C101A] via-[#15121E] to-[#0C101A] border-2 border-cyber-amber/50 backdrop-blur-2xl shadow-[0_0_60px_rgba(245,158,11,0.2)] relative overflow-hidden space-y-4">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-white/10 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyber-amber text-black font-black uppercase flex items-center gap-1 shadow-sm">
                <Flag className="w-3 h-3" />
                <span>⭐ FEATURED EVENT // 特色推荐赛事</span>
              </span>
              <span className="text-xs font-mono text-metal-300">
                2026 赛季第 18 站 · 亚洲旗舰重磅回归
              </span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-5xl text-white tracking-tight">
              2026 F1 马来西亚雪邦大奖赛 (SEPANG)
            </h2>
            <p className="text-xs font-mono text-metal-200">
              比赛日期：2026年10月02日 – 10月04日 · 官方排位与正赛遥测结果核验
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-surface-200/90 border border-cyber-amber/40 text-right font-mono space-y-1">
            <span className="text-[10px] text-cyber-amber uppercase font-bold block">
              品牌赞助预测奖池
            </span>
            <span className="font-black text-2xl text-cyber-amber">
              50,000 USDT
            </span>
            <span className="text-[10px] text-metal-400 block">+ VIP 围场观赛通行证</span>
          </div>
        </div>

        {/* Support Statement */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 font-mono text-xs text-metal-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-lime-400" />
            <span>ORACLE 49 预测引擎支持全球顶级汽车运动与遥测数据链上核验</span>
          </div>
          <div className="text-lime-400 font-bold">
            您的当前 F1 IQ: {user.f1IQ} 分 (全马排名 #{user.f1RankMalaysia})
          </div>
        </div>

      </div>

      {/* Sepang Super 10 Combined Card Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left 8 Cols: 10 F1 Prediction Dimensions */}
        <div className="lg:col-span-8 bg-surface-100/90 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-glass-card space-y-6">
          
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <h3 className="font-display font-black text-xl text-white">
                雪邦 SUPER 10 遥测竞猜卡 (SEPANG SUPER 10)
              </h3>
              <p className="text-xs font-mono text-metal-300">
                完成 10 项核心排位与正赛推演，一键锁定上链
              </p>
            </div>
            <span className="px-3 py-1 rounded-xl bg-lime-400/15 text-lime-400 border border-lime-400/30 text-xs font-mono font-bold">
              消耗 150 ⚡ 能量
            </span>
          </div>

          <div className="space-y-6 font-mono text-xs">
            
            {/* 1. Race Winner */}
            <div className="space-y-2 p-4 rounded-2xl bg-surface-200/80 border border-white/5">
              <span className="text-white font-bold block text-sm">01. 正赛分站冠军归属 (RACE WINNER)</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {driversList.map((d) => (
                  <button
                    key={d.name}
                    disabled={lockedSuccess}
                    onClick={() => setRaceWinner(d.name)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      raceWinner === d.name 
                        ? 'bg-cyber-amber/20 border-cyber-amber text-white font-bold shadow-sm' 
                        : 'bg-surface-100 text-metal-300 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <span className="text-cyber-amber font-bold block text-[10px]">#{d.number} {d.team}</span>
                    <span className="text-xs truncate block">{d.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Pole Position */}
            <div className="space-y-2 p-4 rounded-2xl bg-surface-200/80 border border-white/5">
              <span className="text-white font-bold block text-sm">02. 周六排位赛杆位 (POLE POSITION)</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {driversList.map((d) => (
                  <button
                    key={`pole-${d.name}`}
                    disabled={lockedSuccess}
                    onClick={() => setPolePosition(d.name)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      polePosition === d.name 
                        ? 'bg-lime-400/20 border-lime-400 text-white font-bold shadow-sm' 
                        : 'bg-surface-100 text-metal-300 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <span className="text-lime-400 font-bold block text-[10px]">#{d.number}</span>
                    <span className="text-xs truncate block">{d.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Podium Trio */}
            <div className="space-y-2 p-4 rounded-2xl bg-surface-200/80 border border-white/5">
              <span className="text-white font-bold block text-sm">03. 领奖台前三席位 (PODIUM P1 / P2 / P3)</span>
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-surface-100 border border-white/5 space-y-1">
                  <span className="text-cyber-amber font-bold text-[10px] block">🥇 冠军 P1</span>
                  <select 
                    value={p1Podium} 
                    disabled={lockedSuccess}
                    onChange={(e) => setP1Podium(e.target.value)}
                    className="w-full bg-surface-200 border border-white/10 rounded-lg p-1.5 text-xs text-white focus:outline-none"
                  >
                    <option value="维斯塔潘">维斯塔潘</option>
                    <option value="诺里斯">诺里斯</option>
                    <option value="勒克莱尔">勒克莱尔</option>
                    <option value="拉塞尔">拉塞尔</option>
                  </select>
                </div>

                <div className="p-3 rounded-xl bg-surface-100 border border-white/5 space-y-1">
                  <span className="text-metal-300 font-bold text-[10px] block">🥈 亚军 P2</span>
                  <select 
                    value={p2Podium} 
                    disabled={lockedSuccess}
                    onChange={(e) => setP2Podium(e.target.value)}
                    className="w-full bg-surface-200 border border-white/10 rounded-lg p-1.5 text-xs text-white focus:outline-none"
                  >
                    <option value="诺里斯">诺里斯</option>
                    <option value="维斯塔潘">维斯塔潘</option>
                    <option value="勒克莱尔">勒克莱尔</option>
                    <option value="皮亚斯特里">皮亚斯特里</option>
                  </select>
                </div>

                <div className="p-3 rounded-xl bg-surface-100 border border-white/5 space-y-1">
                  <span className="text-cyber-amber font-bold text-[10px] block">🥉 季军 P3</span>
                  <select 
                    value={p3Podium} 
                    disabled={lockedSuccess}
                    onChange={(e) => setP3Podium(e.target.value)}
                    className="w-full bg-surface-200 border border-white/10 rounded-lg p-1.5 text-xs text-white focus:outline-none"
                  >
                    <option value="勒克莱尔">勒克莱尔</option>
                    <option value="拉塞尔">拉塞尔</option>
                    <option value="汉密尔顿">汉密尔顿</option>
                    <option value="皮亚斯特里">皮亚斯特里</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 4 & 5: Safety Car & Tropical Rain */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-4 rounded-2xl bg-surface-200/80 border border-white/5 space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-cyber-amber" />
                  <span className="text-white font-bold">04. 正赛出动实体安全车？</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {(['YES', 'NO'] as const).map((opt) => (
                    <button
                      key={`sc-${opt}`}
                      disabled={lockedSuccess}
                      onClick={() => setHasSafetyCar(opt)}
                      className={`p-2.5 rounded-xl border font-bold text-center transition-all ${
                        hasSafetyCar === opt 
                          ? 'bg-cyber-amber text-black font-black' 
                          : 'bg-surface-100 text-metal-300 border-white/5'
                      }`}
                    >
                      {opt === 'YES' ? '是 (出动)' : '否 (全程绿旗)'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-200/80 border border-white/5 space-y-2">
                <div className="flex items-center gap-2">
                  <CloudRain className="w-4 h-4 text-cyber-blue" />
                  <span className="text-white font-bold">05. 雪邦突发热带雷暴雨战？</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {(['YES', 'NO'] as const).map((opt) => (
                    <button
                      key={`rain-${opt}`}
                      disabled={lockedSuccess}
                      onClick={() => setHasRain(opt)}
                      className={`p-2.5 rounded-xl border font-bold text-center transition-all ${
                        hasRain === opt 
                          ? 'bg-cyber-blue text-black font-black' 
                          : 'bg-surface-100 text-metal-300 border-white/5'
                      }`}
                    >
                      {opt === 'YES' ? '是 (雨胎决战)' : '否 (干地正赛)'}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* 6. Winning Margin */}
            <div className="p-4 rounded-2xl bg-surface-200/80 border border-white/5 space-y-2">
              <div className="flex items-center gap-2">
                <Timer className="w-4 h-4 text-lime-400" />
                <span className="text-white font-bold">06. 冠军领先亚军冲线差距 (WINNING MARGIN)</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['小于 3 秒', '3–7 秒区间', '7–15 秒区间', '15 秒以上巨大优势'].map((m) => (
                  <button
                    key={m}
                    disabled={lockedSuccess}
                    onClick={() => setWinningMargin(m)}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      winningMargin === m 
                        ? 'bg-lime-400 text-black font-bold' 
                        : 'bg-surface-100 text-metal-300 border-white/5'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Right 4 Cols: Telemetry Receipt Card */}
        <div className="lg:col-span-4 bg-surface-100/90 border-2 border-cyber-amber/40 rounded-3xl p-6 backdrop-blur-xl shadow-glass-card space-y-6">
          
          <div className="pb-4 border-b border-white/10">
            <span className="text-[10px] font-mono text-cyber-amber uppercase tracking-wider font-bold block">
              F1 TELEMETRY SEAL // 遥测锁票凭证
            </span>
            <h3 className="font-display font-black text-xl text-white mt-1">
              雪邦 SUPER 10 组合单
            </h3>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <div className="p-3 rounded-xl bg-surface-200/80 border border-white/5 space-y-1">
              <span className="text-metal-400 text-[10px] block uppercase">正赛分站冠军</span>
              <span className="font-bold text-cyber-amber text-sm">{raceWinner}</span>
            </div>

            <div className="p-3 rounded-xl bg-surface-200/80 border border-white/5 space-y-1">
              <span className="text-metal-400 text-[10px] block uppercase">排位杆位 / 领奖台</span>
              <span className="font-bold text-white text-xs">
                杆位: {polePosition.split(' ')[0]} | P1-3: [{p1Podium}, {p2Podium}, {p3Podium}]
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2.5 rounded-xl bg-surface-200/80 border border-white/5">
                <span className="text-metal-400 block">安全车:</span>
                <span className="text-cyber-amber font-bold">{hasSafetyCar === 'YES' ? '出动安全车' : '全程绿旗'}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-200/80 border border-white/5">
                <span className="text-metal-400 block">天气:</span>
                <span className="text-cyber-blue font-bold">{hasRain === 'YES' ? '雪邦雨战' : '干地'}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-lime-400/10 border border-lime-400/30">
              <span className="text-lime-400 text-[10px] block uppercase font-bold">潜在丰厚回报</span>
              <span className="text-white font-bold block">+800 XP · F1 IQ +25 · 50 USDT 活动奖池</span>
            </div>
          </div>

          {/* Action Trigger */}
          <div className="space-y-3 pt-2">
            {!lockedSuccess ? (
              <button
                onClick={handleLockSuper10}
                disabled={isLocking}
                className="w-full py-4 rounded-xl bg-cyber-amber hover:bg-amber-400 text-black font-mono text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(245,158,11,0.4)]"
              >
                {isLocking ? (
                  <>
                    <Sparkles className="w-4 h-4 animate-spin" />
                    <span>正在生成雪邦遥测哈希...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>锁定 SUPER 10 (LOCK PREDICTION)</span>
                  </>
                )}
              </button>
            ) : (
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-cyber-amber/15 border border-cyber-amber/50 text-cyber-amber font-mono text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>F1 雪邦 SUPER 10 已在链上封存！</span>
                  </div>
                  <span className="text-[10px] break-all text-metal-300 block">
                    存证哈希：{sealedHash}
                  </span>
                </div>

                <button
                  onClick={() => setLockedSuccess(false)}
                  className="w-full py-2.5 rounded-xl bg-surface-200 hover:bg-surface-300 text-metal-200 hover:text-white font-mono text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>重新调整遥测推演</span>
                </button>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
