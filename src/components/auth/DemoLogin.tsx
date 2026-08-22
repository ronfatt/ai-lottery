import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDemo } from '../../context/DemoContext';
import { ShieldCheck, Lock, Mail, ArrowRight, Sparkles, UserCheck, KeyRound, Globe } from 'lucide-react';

export const DemoLogin: React.FC = () => {
  const { loginAsRon, navigate } = useDemo();
  const [email, setEmail] = useState('ron@oracle49.network');
  const [password, setPassword] = useState('••••••••••••');
  const [isLoading, setIsLoading] = useState(false);

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      loginAsRon();
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#06080B] text-white flex flex-col justify-between relative overflow-hidden selection:bg-[#00FF66] selection:text-black">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-lime-400/5 blur-[160px] pointer-events-none" />

      {/* Top Brand Bar */}
      <header className="p-6 flex items-center justify-between max-w-7xl mx-auto w-full relative z-10">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-3 group"
        >
          <div className="w-9 h-9 rounded-lg bg-surface-100 border border-lime-400/40 flex items-center justify-center font-mono font-black text-lime-400 shadow-glow-lime/20">
            49
          </div>
          <div className="text-left">
            <span className="font-display font-black text-lg text-white block leading-tight">
              ORACLE <span className="text-lime-400">49</span>
            </span>
            <span className="text-[9px] font-mono text-metal-400 tracking-wider">
              全球可验证预测竞技平台
            </span>
          </div>
        </button>

        <button
          onClick={() => navigate('/')}
          className="px-3.5 py-1.5 rounded-lg text-xs font-mono text-metal-300 hover:text-white bg-surface-100 border border-white/10 flex items-center gap-1.5 transition-all"
        >
          <Globe className="w-3.5 h-3.5 text-lime-400" />
          <span>返回官方主页</span>
        </button>
      </header>

      {/* Center Auth Card */}
      <div className="max-w-md w-full mx-auto p-4 relative z-10 my-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-surface-100/90 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.8)] space-y-6"
        >
          
          {/* Header */}
          <div className="space-y-1.5 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/30 text-xs font-mono text-lime-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>会员交互式演示控制台</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
              欢迎回到神谕网络
            </h2>
            <p className="text-xs font-mono text-metal-300">
              Welcome Back, Oracle. 输入凭证或直接以演示身份进入。
            </p>
          </div>

          {/* Quick 1-Click Demo Account Login (Recommended for Investors) */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-surface-200/90 to-surface-300/90 border-2 border-lime-400 shadow-glow-lime/20 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-lime-400 text-black flex items-center justify-center font-mono font-black text-base shadow-md">
                  R.ON
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono font-bold text-sm text-white">R.ON</span>
                    <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-lime-400/20 text-lime-400 border border-lime-400/30 font-bold">
                      神谕大师
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-metal-300">
                    预测智商 (IQ): <strong className="text-lime-400">782</strong> · 8 份分红
                  </span>
                </div>
              </div>

              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-lime-400 text-black font-bold">
                推荐演示
              </span>
            </div>

            <button
              onClick={loginAsRon}
              className="w-full py-3 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-glow-lime"
            >
              <UserCheck className="w-4 h-4" />
              <span>以 R.ON 身份一键登入演示 (ENTER AS R.ON)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 text-[10px] font-mono text-metal-400 uppercase">
            <div className="h-px bg-white/10 flex-1" />
            <span>或使用标准账号登录</span>
            <div className="h-px bg-white/10 flex-1" />
          </div>

          {/* Regular Login Form */}
          <form onSubmit={handleCustomSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-metal-300 block">注册邮箱 / 账号：</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-metal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-surface-200 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs font-mono text-white focus:outline-none focus:border-lime-400"
                  placeholder="name@oracle49.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs font-mono">
                <label className="text-metal-300">访问密码：</label>
                <span className="text-[10px] text-lime-400/80 hover:underline cursor-pointer">
                  忘记密钥？
                </span>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-metal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-surface-200 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs font-mono text-white focus:outline-none focus:border-lime-400"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-xl bg-surface-200 hover:bg-surface-300 text-white font-mono text-xs font-bold uppercase tracking-wider border border-white/10 flex items-center justify-center gap-2 transition-all"
            >
              {isLoading ? (
                <span>正在校验链上签名...</span>
              ) : (
                <>
                  <KeyRound className="w-4 h-4 text-cyber-blue" />
                  <span>登入平台 (SIGN IN)</span>
                </>
              )}
            </button>
          </form>

        </motion.div>
      </div>

      {/* Footer */}
      <footer className="p-6 text-center text-[11px] font-mono text-metal-400 relative z-10">
        ORACLE 49 去中心化预测协议 · 演示沙盒模式 · 数据仅用于本地交互测试
      </footer>
    </div>
  );
};
