import React from 'react';
import { Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#040608] border-t border-white/10 py-12 text-metal-300 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-lg text-white">
                ORACLE <span className="text-lime-400">49</span>
              </span>
            </div>
            <p className="text-[11px] text-metal-400 leading-relaxed">
              全球可验证数字预测竞技平台。
              真实世界公开开奖 + 预测竞技 + 区块链存证 + 天梯排名 + 社交竞技。
            </p>
            <div className="flex items-center gap-2 text-[10px] text-lime-400">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
              <span>主网运行环境：实时正常</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-2">
            <span className="text-white font-bold text-xs uppercase tracking-wider block">
              生态产品
            </span>
            <ul className="space-y-1.5 text-[11px]">
              <li><a href="#live-demo" className="hover:text-lime-400 transition-colors">核心玩法交互测试</a></li>
              <li><a href="#game-modes" className="hover:text-lime-400 transition-colors">7 大预测玩法沙盒</a></li>
              <li><a href="#prediction-iq" className="hover:text-lime-400 transition-colors">Prediction IQ 声誉分</a></li>
              <li><a href="#technology" className="hover:text-lime-400 transition-colors">区块链密码学架构</a></li>
            </ul>
          </div>

          {/* Col 3: Economics */}
          <div className="space-y-2">
            <span className="text-white font-bold text-xs uppercase tracking-wider block">
              商业与合规
            </span>
            <ul className="space-y-1.5 text-[11px]">
              <li><a href="#business-model" className="hover:text-lime-400 transition-colors">商业变现模型</a></li>
              <li><a href="#business-model" className="hover:text-lime-400 transition-colors">品牌赞助引擎</a></li>
              <li><a href="#roadmap" className="hover:text-lime-400 transition-colors">战略发展路线图</a></li>
              <li><a href="#concept" className="hover:text-lime-400 transition-colors">非博彩合规哲学</a></li>
            </ul>
          </div>

          {/* Col 4: Links & GitHub */}
          <div className="space-y-2">
            <span className="text-white font-bold text-xs uppercase tracking-wider block">
              开源代码与技术协议
            </span>
            <div className="space-y-2 text-[11px]">
              <a
                href="https://github.com/ronfatt/ai-lottery.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-metal-300 hover:text-white bg-surface-100 px-3 py-2 rounded-lg border border-white/10"
              >
                <Github className="w-4 h-4" />
                <span>github.com/ronfatt/ai-lottery</span>
              </a>
              <p className="text-[10px] text-metal-400">
                官方协议代码库与开源可验证智能合约。
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-metal-400">
          <div>
            © 2026 ORACLE 49 预测协议版权所有。专为全球 Web3 与数字预测竞技爱好者设计。
          </div>

          <div className="flex items-center gap-4">
            <span>SHA-256 密码学存证</span>
            <span>零庄家对抗优势</span>
            <span>以智力声誉为核心</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
