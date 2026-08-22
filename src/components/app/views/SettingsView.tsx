import React, { useState } from 'react';
import { useDemo } from '../../../context/DemoContext';
import { Settings, Shield, Bell, Globe, KeyRound, Check } from 'lucide-react';

export const SettingsView: React.FC = () => {
  const { showToast } = useDemo();
  const [notifyStreak, setNotifyStreak] = useState(true);
  const [notifyPool, setNotifyPool] = useState(true);
  const [notifyMember, setNotifyMember] = useState(true);

  const handleSave = () => {
    showToast('偏好设置已成功同步保存至本地配置！');
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Header */}
      <div className="pb-4 border-b border-white/10 space-y-1">
        <div className="flex items-center gap-2 text-xs font-mono text-lime-400 font-bold">
          <Settings className="w-4 h-4" />
          <span>PREFERENCES // 系统与偏好设置</span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
          账户与系统设置
        </h2>
        <p className="text-xs font-mono text-metal-300">
          管理通知偏好、链上安全密钥与界面显示语言
        </p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6 font-mono text-xs max-w-3xl">
        
        {/* Notification Settings */}
        <div className="p-6 rounded-3xl bg-surface-100 border border-white/10 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-white/10">
            <Bell className="w-4 h-4 text-lime-400" />
            <h3 className="font-display font-black text-base text-white">动态通知推送</h3>
          </div>

          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-xl bg-surface-200 cursor-pointer">
              <span className="text-white">预测连胜与排名跃升实时通知</span>
              <input
                type="checkbox"
                checked={notifyStreak}
                onChange={(e) => setNotifyStreak(e.target.checked)}
                className="w-4 h-4 accent-lime-400"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl bg-surface-200 cursor-pointer">
              <span className="text-white">全球分红池重大注资与月度结算提醒</span>
              <input
                type="checkbox"
                checked={notifyPool}
                onChange={(e) => setNotifyPool(e.target.checked)}
                className="w-4 h-4 accent-lime-400"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl bg-surface-200 cursor-pointer">
              <span className="text-white">下线成员晋升与直推佣金到账提醒</span>
              <input
                type="checkbox"
                checked={notifyMember}
                onChange={(e) => setNotifyMember(e.target.checked)}
                className="w-4 h-4 accent-lime-400"
              />
            </label>
          </div>
        </div>

        {/* Language & UI Mode */}
        <div className="p-6 rounded-3xl bg-surface-100 border border-white/10 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-white/10">
            <Globe className="w-4 h-4 text-cyber-blue" />
            <h3 className="font-display font-black text-base text-white">语言与显示环境</h3>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-surface-200 border border-lime-400/40 text-lime-400 font-bold flex items-center justify-between">
              <span>简体中文 (100% 汉化)</span>
              <Check className="w-4 h-4" />
            </div>
            <div className="p-3.5 rounded-xl bg-surface-200 border border-white/5 text-metal-400 flex items-center justify-between">
              <span>English (即将支持)</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="px-6 py-3 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-glow-lime"
        >
          <Check className="w-4 h-4" />
          <span>保存偏好设置</span>
        </button>

      </div>

    </div>
  );
};
