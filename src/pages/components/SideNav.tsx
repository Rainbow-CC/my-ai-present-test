import React from 'react';
import { LayoutDashboard, Workflow, Lightbulb, Zap } from 'lucide-react';

interface SideNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const SideNav: React.FC<SideNavProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'concepts', label: '核心架构', icon: Lightbulb },
    { id: 'workflow', label: '智能体工作流', icon: Workflow },
    { id: 'practice', label: '多智能体协作', icon: Zap },
  ];

  return (
    <nav className="w-20 md:w-64 h-screen border-r border-white/10 bg-slate-900/50 backdrop-blur-xl flex flex-col p-4 z-50 transition-all duration-300">
      <div className="flex items-center gap-3 px-2 mb-10 mt-2">
        <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-brand-500/20 border border-white/10">
          <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
        </div>
        <span className="font-bold text-xl tracking-tight hidden md:block text-white">CIIT-AI-SHARE</span>
      </div>

      <div className="space-y-2 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20' 
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Icon size={22} className={isActive ? 'text-white' : 'group-hover:scale-110 transition-transform'} />
              <span className="font-medium hidden md:block">{item.label}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white hidden md:block" />
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-auto p-2">
        <div className="glass-card p-4 hidden md:block">
          <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2">当前版本</p>
          <p className="text-sm text-slate-300">2026 智能体理论 v2.0</p>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;