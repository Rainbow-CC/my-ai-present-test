import React, { useState } from 'react';

const ConceptsSection = () => {
    const [selectedConcept, setSelectedConcept] = useState('agent');

    const concepts = {
        agent: {
            title: 'AI Agent (智能体) 概述',
            description: 'AI Agent 一般由大语言模型 (充当大脑), 调度/编排系统 (充当触发器和任务决策), 工具调用 (充当手脚), 记忆与学习 (充当经验), 多模态感知 (充当眼睛和耳朵) 等组成',
        },
        llm: {
            title: '核心：LLM (大语言模型)',
            description: '大语言模型是AI智能体的认知核心。它不直接执行任务，而是像人类大脑一样，负责理解指令、进行常识推理、生成文本和制定初步计划。它的强大之处在于对自然语言的深刻理解，为智能体的“智能”表现奠定了基础。',
        },
        perception: {
            title: '能力演进：感知 (Perception)',
            description: '感知能力是智能体“耳听八方、眼观六路”的能力。它能从外部世界收集并处理信息，包括用户输入的指令、文档内容、网页数据等。这是智能体理解问题和获取相关背景知识的第一步，是其行动的输入源。',
        },
        planning: {
            title: '能力演进：规划 (Planning)',
            description: '规划是智能体“如何做”的核心，它将宏大目标分解为可执行步骤。这主要通过两种方式实现：\n1. 自主规划： 面对开放式任务，LLM大脑会自主进行任务拆解、逻辑推理和自我纠错，展现出极高的灵活性和智能。 \n2. 工作流规划： 对于有固定流程的业务（如审批、报告生成），我们会预先设计好稳定的工作流（Workflow）。智能体严格按此“蓝图”执行，确保了任务的稳定性和可控性。企业级应用常常将两者结合，以实现灵活性与稳定性的平衡。',
        },
        action: {
            title: '能力演进：行动 (Action)',
            description: '为了执行规划，智能体需要“亲自动手”。行动能力让它能够调用外部API、访问数据库、搜索网页，甚至操作其他软件。这极大地扩展了它的能力边界，使其能获取实时信息、执行实际操作，而不仅仅是纸上谈兵。',
        },
        memory: {
            title: '能力演进：记忆 (Memory)',
            description: '为了保证任务的连贯性，智能体需要“记忆”。它通过短期记忆（对话上下文）和长期记忆（知识库）来记住用户的身份、历史指令和任务进度。这使得长期、复杂的多轮交互成为可能。',
        },
    };

    return (
        <section className="mb-24 scroll-mt-20">
            <div className="text-center mb-12">
                <h2 className="section-title">AI智能体核心技术解密</h2>
                <p className="section-subtitle mt-4 max-w-3xl mx-auto">深入理解AI智能体的技术架构、核心组件及能力边界，揭示其超越“聊天机器人”的本质。</p>
            </div>

            <div className="w-full max-w-6xl mx-auto flex flex-col gap-8">
                <div className="w-full">
                    <div className="bg-blue-50/60 border-2 border-dashed border-blue-200 rounded-xl p-6 pt-10 md:p-8 md:pt-12 relative">
                        <h3
                            id="concept-agent"
                            onClick={() => setSelectedConcept('agent')}
                            className={`absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-100 px-4 py-1 rounded-full text-blue-800 font-bold text-lg shadow-sm cursor-pointer ai-agent-heading ${selectedConcept === 'agent' ? 'selected' : ''}`}
                        >
                            AI Agent (智能体)
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:items-center">
                            <div id="concept-llm" onClick={() => setSelectedConcept('llm')} className={`card p-6 interactive-card text-center h-full flex flex-col justify-center ${selectedConcept === 'llm' ? 'selected' : ''}`}>
                                <h3 className="font-bold text-3xl mb-2">LLM</h3>
                                <p className="text-gray-500 font-semibold text-lg">推理大脑</p>
                                <p className="text-sm mt-2">智能体的认知核心</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div id="concept-perception" onClick={() => setSelectedConcept('perception')} className={`card p-4 interactive-card text-center ${selectedConcept === 'perception' ? 'selected' : ''}`}>
                                    <h4 className="font-semibold text-lg">感知</h4>
                                    <p className="text-sm text-gray-500">理解环境</p>
                                </div>
                                <div id="concept-planning" onClick={() => setSelectedConcept('planning')} className={`card p-4 interactive-card text-center ${selectedConcept === 'planning' ? 'selected' : ''}`}>
                                    <h4 className="font-semibold text-lg">规划</h4>
                                    <p className="text-sm text-gray-500">分解任务</p>
                                </div>
                                <div id="concept-memory" onClick={() => setSelectedConcept('memory')} className={`card p-4 interactive-card text-center ${selectedConcept === 'memory' ? 'selected' : ''}`}>
                                    <h4 className="font-semibold text-lg">记忆</h4>
                                    <p className="text-sm text-gray-500">上下文/知识库</p>
                                </div>
                                <div id="concept-action" onClick={() => setSelectedConcept('action')} className={`card p-4 interactive-card text-center ${selectedConcept === 'action' ? 'selected' : ''}`}>
                                    <h4 className="font-semibold text-lg">行动</h4>
                                    <p className="text-sm text-gray-500">调用工具</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-white p-8 rounded-xl shadow-inner h-[300px] overflow-y-auto relative">
                    <h4 className="font-bold text-2xl mb-4 text-blue-600">{concepts[selectedConcept].title}</h4>
                    <p className="text-lg whitespace-pre-line">{concepts[selectedConcept].description}</p>
                </div>
            </div>

            <div className="mt-16 max-w-6xl mx-auto">
                <h3 className="text-2xl font-bold text-center mb-6">AI Agent VS 传统程序</h3>
                <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">AI Agent 并非传统程序的plus版，而是针对特定任务的补充。</p>
                <div className="card p-6 bg-white border border-gray-200">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left table-auto">
                            <thead>
                                <tr className="bg-gray-100 text-gray-700">
                                    <th className="px-4 py-3 font-bold rounded-tl-lg">特点</th>
                                    <th className="px-4 py-3 font-bold">AI Agent</th>
                                    <th className="px-4 py-3 font-bold rounded-tr-lg">传统程序 (脚本、应用)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-200">
                                    <td className="px-4 py-3 font-medium text-gray-900">工作模式</td>
                                    <td className="px-4 py-3 text-gray-700">基于<strong>意图理解</strong>与<strong>自主决策</strong>，能理解模糊指令并规划执行路径。</td>
                                    <td className="px-4 py-3 text-gray-700">基于<strong>确定性规则</strong>与<strong>指令驱动</strong>，严格按照预设逻辑执行。</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="px-4 py-3 font-medium text-gray-900">任务类型</td>
                                    <td className="px-4 py-3 text-gray-700">适合<strong>非结构化、高复杂度、动态变化</strong>的任务。</td>
                                    <td className="px-4 py-3 text-gray-700">适合<strong>结构化、重复性高、逻辑固定</strong>的任务。</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="px-4 py-3 font-medium text-gray-900">核心优势</td>
                                    <td className="px-4 py-3 text-gray-700"><strong>灵活性、自适应性</strong>，能处理不确定性，并自我纠错。</td>
                                    <td className="px-4 py-3 text-gray-700"><strong>高效、稳定、可预测</strong>，结果精确无误。</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="px-4 py-3 font-medium text-gray-900">适用场景</td>
                                    <td className="px-4 py-3 text-gray-700">复杂的数据分析、多步自动化流程、智能客服、内容创作辅助。</td>
                                    <td className="px-4 py-3 text-gray-700">实时计算、数据库操作、批量文件处理、高频交易。</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-medium text-gray-900">局限性</td>
                                    <td className="px-4 py-3 text-gray-700">成本高，结果有一定随机性，不适合需要高精度的任务。</td>
                                    <td className="px-4 py-3 text-gray-700">缺乏灵活性，无法处理超出预设规则范围的异常情况。</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConceptsSection;
