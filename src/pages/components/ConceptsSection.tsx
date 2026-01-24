import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Cpu, Database, Eye, MousePointer2, GitBranch } from 'lucide-react';

const ConceptsSection = () => {
    const [selectedId, setSelectedId] = useState('brain');

    const concepts = [
        {
            id: 'brain',
            title: '推理大脑 (Planning)',
            icon: Brain,
            color: 'text-pink-400',
            bg: 'bg-pink-400/10',
            description: '从“简单补全”到“深度推理”。最新的智能体使用多步推理循环（Reasoning Loops），如 ReAct、Reflection 或 Chain-of-Thought。它不仅仅是回答问题，而是能够进行反思、自我纠错并拆解复杂目标。',
        },
        {
            id: 'memory',
            title: '神经记忆 (Memory)',
            icon: Database,
            color: 'text-purple-400',
            bg: 'bg-purple-400/10',
            description: '分为短期记忆（Working Memory/Context）和长期记忆（RAG/Knowledge Graph）。现代 Agent 开始引入“情境感知记忆”，能够根据任务自动检索最相关的历史决策和专业知识。',
        },
        {
            id: 'tools',
            title: '能力扩展 (Action/Tools)',
            icon: Cpu,
            color: 'text-blue-400',
            bg: 'bg-blue-400/10',
            description: 'Agent 不再局限于对话。通过 Function Calling 和 API 编排，它成为了数字世界的“操作员”。它可以写代码、查实时数据、操作 Excel 甚至控制物理设备。',
        },
        {
            id: 'perception',
            title: '多模态感知 (Perception)',
            icon: Eye,
            color: 'text-emerald-400',
            bg: 'bg-emerald-400/10',
            description: '不再只读文字。它能看懂流程图、听懂语音指令、分析视频内容。多模态输入让 Agent 真正理解真实世界的复杂语境。',
        },
        {
            id: 'workflow',
            title: '确定性流 (Orchestration)',
            icon: GitBranch,
            color: 'text-amber-400',
            bg: 'bg-amber-400/10',
            description: '这是 2026 年的核心趋势：Agentic Workflow。通过将 LLM 嵌入到精心设计的有向无环图（DAG）中，用确定性的流程包裹不确定的生成，从而在企业级任务中达到 99% 以上的稳定性。',
        }
    ];

    const currentConcept = concepts.find(c => c.id === selectedId) || concepts[0];

    return (
        <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24"
        >
            <div className="mb-16">
                <h2 className="section-title">
                    <span className="text-gradient">Agentic 2.0</span> 核心架构
                </h2>
                <p className="section-subtitle max-w-2xl">
                    从“聊天机器人”进化为“数字员工”。现代智能体由五个核心支柱构建，形成了一个闭环的认知系统。
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Left Side: Buttons */}
                <div className="lg:col-span-5 space-y-4">
                    {concepts.map((concept) => {
                        const Icon = concept.icon;
                        const isActive = selectedId === concept.id;
                        return (
                            <button
                                key={concept.id}
                                onClick={() => setSelectedId(concept.id)}
                                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 flex items-center gap-4 ${
                                    isActive 
                                        ? 'glass-card bg-white/10 ring-1 ring-white/20' 
                                        : 'hover:bg-white/5 opacity-60 hover:opacity-100'
                                }`}
                            >
                                <div className={`p-3 rounded-xl ${concept.bg} ${concept.color}`}>
                                    <Icon size={24} />
                                </div>
                                <div>
                                    <h3 className={`font-bold text-lg ${isActive ? 'text-white' : 'text-slate-300'}`}>
                                        {concept.title}
                                    </h3>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Right Side: Content Box */}
                <div className="lg:col-span-7 h-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedId}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="glass-card p-10 min-h-[400px] flex flex-col justify-center relative overflow-hidden"
                        >
                            {/* Decorative Background Icon */}
                            <currentConcept.icon className={`absolute -right-10 -bottom-10 w-64 h-64 opacity-5 ${currentConcept.color}`} />
                            
                            <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center ${currentConcept.bg} ${currentConcept.color}`}>
                                <currentConcept.icon size={32} />
                            </div>
                            
                            <h3 className="text-3xl font-bold text-white mb-6 italic">“{currentConcept.title}”</h3>
                            <p className="text-xl text-slate-300 leading-relaxed z-10">
                                {currentConcept.description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <div className="mt-20">
              <div className="glass-card p-8 border-brand-500/20 bg-brand-500/5">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                      <MousePointer2 className="text-brand-400" />
                      核心范式转换
                    </h3>
                    <p className="text-slate-400 italic">
                      "2026 年的共识是：不要盲目追求大模型的规模，而要追求智能体工作流的精细程度。" —— Andrew Ng
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="px-6 py-4 rounded-xl bg-slate-900 border border-white/5 text-center">
                      <div className="text-2xl font-bold text-brand-400">Zero-Shot</div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">旧模式</div>
                    </div>
                    <div className="flex items-center text-slate-600">→</div>
                    <div className="px-6 py-4 rounded-xl bg-brand-600 border border-brand-400/20 text-center shadow-lg shadow-brand-600/20">
                      <div className="text-2xl font-bold text-white">Agentic</div>
                      <div className="text-xs text-brand-200 uppercase tracking-widest mt-1">新趋势</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </motion.section>
    );
};

export default ConceptsSection;