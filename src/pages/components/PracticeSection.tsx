import React from 'react';
import { motion } from 'framer-motion';
import { Users2, Bot, ShieldCheck, Zap, Workflow as WorkflowIcon, MessageSquareCode } from 'lucide-react';

const PracticeSection = () => {
    const multiAgentFeatures = [
        {
            title: '动态团队编排 (Dynamic Orchestration)',
            desc: '不再是一个 Agent 做所有事。系统会根据任务动态雇佣“经理”、“执行者”和“审阅者”。',
            icon: Users2,
            color: 'text-blue-400'
        },
        {
            title: '自主对话协商 (Autonomous Negotiation)',
            desc: 'Agent 之间可以通过对话交换信息、分配子任务并达成共识，无需人工干预。',
            icon: MessageSquareCode,
            color: 'text-purple-400'
        },
        {
            title: '分级反馈机制 (Hierarchical Feedback)',
            desc: '高级 Agent (Critic) 对初级 Agent 的产出进行多轮审计，确保输出质量达到工业标准。',
            icon: ShieldCheck,
            color: 'text-emerald-400'
        }
    ];

    return (
        <section className="mb-24">
            <div className="mb-16">
                <h2 className="section-title">
                    <span className="text-gradient">Multi-Agent</span> 协作范式
                </h2>
                <p className="section-subtitle max-w-2xl">
                    从“单兵作战”到“团队协作”。多智能体系统 (MAS) 是解决极端复杂任务、实现真正自动化生产力的关键。
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {multiAgentFeatures.map((f, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -5 }}
                        className="glass-card p-8 glass-card-hover group"
                    >
                        <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${f.color} group-hover:scale-110 transition-transform duration-500`}>
                            <f.icon size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">{f.title}</h3>
                        <p className="text-slate-400 leading-relaxed">
                            {f.desc}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Visual Architecture Chart Placeholder */}
            <div className="mt-16 glass-card p-10 bg-slate-900/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Zap size={200} className="text-brand-500" />
                </div>
                
                <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-bold mb-6 uppercase tracking-wider">
                            典型的多智能体架构
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-6">Manager-Worker 架构</h3>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            在复杂的企业软件开发中，Manager Agent 负责接收需求并拆解，Coder Agent 编写代码，Tester Agent 进行测试，最后由 Reviewer Agent 审核。这种分工极大降低了 LLM 的幻觉率。
                        </p>
                        <ul className="space-y-4">
                            {[
                                '角色分离：专注特定领域',
                                '纠错循环：多重验证保障质量',
                                '无限扩展：可随时加入新技能节点'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="w-full lg:w-[400px] aspect-square relative flex items-center justify-center">
                        {/* CSS Animation Nodes */}
                        <div className="relative w-full h-full">
                            <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-2 border-dashed border-white/5 rounded-full"
                            />
                            
                            {/* Central Manager */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 glass-card border-brand-500/40 flex flex-col items-center justify-center z-20">
                                <Bot className="text-brand-400" size={32} />
                                <span className="text-[10px] text-brand-200 mt-1 uppercase font-bold">Manager</span>
                            </div>

                            {/* Orbiting Workers */}
                            {[0, 120, 240].map((deg, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ 
                                        rotate: [deg, deg + 360],
                                    }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 pointer-events-none"
                                >
                                    <div 
                                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 glass-card border-white/10 flex flex-col items-center justify-center pointer-events-auto"
                                        style={{ transform: `rotate(-${deg}deg)` }}
                                    >
                                        <WorkflowIcon className="text-slate-400" size={20} />
                                        <span className="text-[8px] text-slate-500 mt-1 uppercase font-bold">Worker</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PracticeSection;