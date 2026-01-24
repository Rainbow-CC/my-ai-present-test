import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Search, Code2, CheckCircle2, RefreshCcw, ArrowRight } from 'lucide-react';

const WorkflowSection = () => {
    const [step, setStep] = useState(0);

    const steps = [
        { 
            title: '意图解析 (Intent)', 
            icon: Search,
            description: '用户输入模糊指令。Agent 使用语义分析技术拆解意图，识别核心目标及隐含约束。',
            color: 'text-blue-400',
            borderColor: 'border-blue-400/30'
        },
        { 
            title: '自主规划 (Plan)', 
            icon: Code2,
            description: '根据目标，Agent 生成一系列子任务。如果任务复杂，它会选择合适的 Workflow 模板或动态生成 DAG。',
            color: 'text-purple-400',
            borderColor: 'border-purple-400/30'
        },
        { 
            title: '工具调用 (Action)', 
            icon: Play,
            description: 'Agent 并行或串行执行子任务：查询知识库、调用 API、执行脚本。',
            color: 'text-brand-400',
            borderColor: 'border-brand-400/30'
        },
        { 
            title: '反思与校正 (Critique)', 
            icon: RefreshCcw,
            description: '这是关键。Agent 检查执行结果是否符合预期。如果不符合，它将重新规划并修正。',
            color: 'text-amber-400',
            borderColor: 'border-amber-400/30'
        },
        { 
            title: '最终交付 (Output)', 
            icon: CheckCircle2,
            description: '确认结果无误后，将结构化数据或最终报告交付给用户。',
            color: 'text-emerald-400',
            borderColor: 'border-emerald-400/30'
        }
    ];

    return (
        <section className="mb-24 relative">
            <div className="mb-12">
                <h2 className="section-title">
                    从单点交互到 <span className="text-gradient">闭环工作流</span>
                </h2>
                <p className="section-subtitle max-w-2xl">
                    不仅仅是对话。Agentic Workflow 通过“规划-执行-反思”循环，将传统 LLM 的不确定性转化为工业级的交付能力。
                </p>
            </div>

            <div className="relative">
                {/* Desktop Progress Line */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 hidden lg:block" />
                
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
                    {steps.map((s, index) => {
                        const Icon = s.icon;
                        const isPast = step > index;
                        const isCurrent = step === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setStep(index)}
                                className={`glass-card p-6 cursor-pointer transition-all duration-300 relative group ${
                                    isCurrent ? `ring-2 ${s.borderColor} bg-white/10` : 'opacity-60 hover:opacity-90'
                                }`}
                            >
                                {index < steps.length - 1 && (
                                    <ArrowRight className="absolute -right-3 top-1/2 -translate-y-1/2 text-white/20 hidden lg:block group-hover:text-white/40 transition-colors" />
                                )}
                                
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${s.color} bg-white/5`}>
                                    <Icon size={24} />
                                </div>
                                
                                <h3 className={`font-bold mb-2 ${isCurrent ? 'text-white' : 'text-slate-400'}`}>
                                    {index + 1}. {s.title}
                                </h3>
                                
                                {isCurrent && (
                                    <motion.div layoutId="activeStep" className="h-1 w-full bg-brand-500 absolute bottom-0 left-0 rounded-b-2xl" />
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-12 glass-card p-8 bg-gradient-to-br from-white/5 to-transparent border-white/10"
                >
                    <div className="flex flex-col md:flex-row gap-10 items-start">
                        <div className={`p-8 rounded-3xl bg-slate-950 border border-white/5 shadow-2xl ${steps[step].color}`}>
                            {React.createElement(steps[step].icon, { size: 48 })}
                        </div>
                        <div className="flex-1">
                            <h4 className="text-2xl font-bold text-white mb-4">{steps[step].title}</h4>
                            <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
                                {steps[step].description}
                            </p>
                            <div className="mt-8 flex gap-4">
                                <button className="btn-primary">
                                    查看示例案例
                                </button>
                                <button className="px-6 py-3 rounded-full border border-white/10 text-slate-300 hover:bg-white/5 transition-colors">
                                    核心代码实现
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    );
};

export default WorkflowSection;
