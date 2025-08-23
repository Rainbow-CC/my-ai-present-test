import React, { useState, useEffect } from 'react';

// 头部组件
const Header = ({ activeTab, setActiveTab }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { id: 'concepts', title: '核心技术解密' },
        { id: 'workflow', title: '工作流构建实战' },
        { id: 'practice', title: '内部实践分享' },
    ];

    const handleNavClick = (targetId) => {
        setActiveTab(targetId);
        setMobileMenuOpen(false);
    };

    return (
        <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    <img src="logo.jpg" alt="企业Logo" className="h-8 mr-4" />
                    <div className="text-2xl font-bold text-gray-800">
                        <span className="text-blue-600">AI</span>智能体及应用实践分享
                    </div>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map(item => (
                        <a
                            key={item.id}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(item.id);
                            }}
                            className={`nav-link text-gray-600 font-medium pb-1 ${activeTab === item.id ? 'active' : ''}`}
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
                <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </nav>
            {isMobileMenuOpen && (
                <div className="md:hidden px-4 pt-2 pb-4 space-y-2">
                    {navItems.map(item => (
                         <a
                            key={item.id}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(item.id);
                            }}
                            className={`block nav-link text-gray-600 font-medium py-2 ${activeTab === item.id ? 'active' : ''}`}
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

// 核心技术解密组件
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

// 工作流构建实战组件
const WorkflowSection = () => {
    const [step, setStep] = useState(0);
    const totalSteps = 5;

    const handleNextStep = () => {
        setStep(prev => (prev >= totalSteps ? 0 : prev + 1));
    };

    const buttonText = [
        '开始搭建',
        '下一步：添加知识库',
        '下一步：设计工作流',
        '下一步：完成流程',
        '很好！',
        '重新开始'
    ];

    const stepDescriptions = [
        { title: '开始构建', content: '复杂任务需要清晰的流程。工作流将任务拆解为模块化节点，实现更高的稳定性与可控性。点击下方按钮，开始搭建我们的“公文助手”。' },
        { title: '第一步：业务分析与评估', content: '在动手构建前，首要任务是进行全面的分析与评估，确保我们的方向正确且投入值得。\n• 价值评估：明确智能体的业务产出是什么？\n• 可行性分析：这个任务适合用AI智能体来做吗？\n• 业务流程梳理：详细画出当前的业务流程图。'},
        { title: '第二步：知识库设计', content: '为了让公文符合规范，Agent需要“学习”公司的规定。\n• 明确知识范围\n• 文件准备 -> 文件切片 -> 知识点设计\n• 命中测试，迭代' },
        { title: '第三步：工作流设计', content: '此步骤是整个工作流的业务核心。\n• 模块化设计\n• 合理的分支设计\n• 调试与迭代\n• 失败处理' },
        { title: '第四步：发布、反馈、迭代', content: '发布是智能体设计的重点，但并非业务的终点。集成、应用智能体，收集用户反馈，不断更新与迭代，是完善智能体的必经之路。' },
        { title: '很好！', content: '我们已经成功搭建一个基础的“公文助手”工作流。更多的业务场景，请充分发挥自己的想象力。' }
    ];

    return (
        <section className="mb-24 scroll-mt-20">
            <div className="text-center mb-12">
                <h2 className="section-title">工作流型智能体构建实战</h2>
                <p className="section-subtitle mt-4 max-w-3xl mx-auto">以“公文助手”为例，我们将模拟在智能体平台上搭建一个工作流（Workflow）型智能体的全过程，体验从0到1的创造之旅。</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center mb-8">
                    <div className={`workflow-node ${step >= 1 ? 'active' : ''}`}><strong>开始</strong></div>
                    <div className={`workflow-connector h-0.5 bg-gray-300 flex-grow mx-4 hidden md:block ${step >= 2 ? 'active' : ''}`}></div>
                    <div className={`workflow-node ${step >= 2 ? 'active' : ''}`}><strong>知识库</strong></div>
                    <div className={`workflow-connector h-0.5 bg-gray-300 flex-grow mx-4 hidden md:block ${step >= 3 ? 'active' : ''}`}></div>
                    <div className={`workflow-node ${step >= 3 ? 'active' : ''}`}><strong>工作流设计</strong></div>
                    <div className={`workflow-connector h-0.5 bg-gray-300 flex-grow mx-4 hidden md:block ${step >= 4 ? 'active' : ''}`}></div>
                    <div className={`workflow-node ${step >= 4 ? 'active' : ''}`}><strong>结束</strong></div>
                </div>

                <div className="relative bg-gray-50 p-6 rounded-lg shadow-inner h-[300px] overflow-y-auto">
                    <h4 className="font-bold text-xl mb-2">{stepDescriptions[step].title}</h4>
                    <p className="whitespace-pre-line">{stepDescriptions[step].content}</p>
                </div>

                <div className="text-center mt-8">
                    <button onClick={handleNextStep} className="btn-primary font-bold py-4 px-10 rounded-full text-xl">{buttonText[step]}</button>
                </div>
            </div>
        </section>
    );
};

// 内部实践分享组件
const PracticeSection = () => {
    const [activeResource, setActiveResource] = useState(null);

    return (
        <section className="mb-24 scroll-mt-20">
            <div className="text-center mb-12">
                <h2 className="section-title">内部实践分享与需求共创</h2>
                <p className="section-subtitle mt-4 max-w-3xl mx-auto">借鉴公司已落地的成功案例，激发业务创新灵感，将您的业务痛点转化为可落地的AI需求。</p>
            </div>

            <div className="card p-8 mb-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">优秀案例：AI尽职调查报告助手</h3>
                <p className="text-gray-600 mb-4">传统尽调报告撰写耗时巨大，涉及大量信息搜集与分析。我们的AI尽调助手通过集成网页搜索、API查询、内部数据库检索等多种工具，能自动完成背景调查、风险排查等工作，并生成结构化报告初稿。</p>
                <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-4 rounded-r-lg">
                    <p className="font-bold">核心价值：</p>
                    <ul className="list-disc list-inside mt-2">
                        <li>尽调报告平均撰写时长缩短 <span className="font-bold text-xl">40%</span></li>
                        <li>关键风险点识别准确率显著提升</li>
                    </ul>
                </div>
            </div>

            <div className="md:flex gap-8 max-w-4xl mx-auto mt-16">
                <div className="card p-8 md:w-1/2 mb-8 md:mb-0">
                    <h3 className="text-2xl font-bold mb-4">AI需求<span className="text-red-600">征集中</span></h3>
                    <p className="text-gray-600 mb-4">应用AI，解决业务痛点；拥抱AI，拓展能力边界</p>
                    <div className="space-y-3">
                        <details className="bg-gray-50 p-4 rounded-lg cursor-pointer">
                            <summary className="font-medium">投行：京东邮件单据处理</summary>
                            <div className="mt-3 text-sm text-gray-700 border-t pt-3">
                                <p><strong>实现思路：</strong>通过AI智能体识别邮件附件中的单据，并自动提取关键信息，同步至业务系统，大幅减少人工录入工作。</p>
                            </div>
                        </details>
                        <details className="bg-gray-50 p-4 rounded-lg cursor-pointer">
                            <summary className="font-medium">财富部：AI智能审批</summary>
                            <div className="mt-3 text-sm text-gray-700 border-t pt-3">
                                <p><strong>实现思路：</strong>构建一个工作流，Agent接收审批申请后，自动调用内部数据库和合规知识库进行比对，对风险点进行初步预警和标注，提高审批效率。</p>
                            </div>
                        </details>
                    </div>
                    <button id="submit-idea-btn" className="btn-primary w-full mt-6 py-4 rounded-lg font-bold text-xl">AI需求征集(8.15)，请在邮件中回复我们</button>
                </div>
                
                <div className="card p-8 md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">开始学习吧</h3>
                    <p className="text-gray-600 mb-4">开启您的AI智能体之旅，别忘了我们的资源</p>
                    <div className="flex flex-col space-y-3">
                        {['兴知', '智能体平台操作手册', '其他资源'].map((item, index) => (
                            <div key={index} onClick={() => setActiveResource(index)} className={`resource-item block bg-gray-50 p-4 rounded-lg hover:bg-gray-100 cursor-pointer ${activeResource === index ? 'active' : ''}`}>
                                <h4 className="font-medium">{item}</h4>
                                <p className="text-sm text-gray-700 mt-1">
                                    {index === 0 && '"人工智能+" 培训班'}
                                    {index === 1 && '可参照：“百度千帆AppBuilder”，详细指引，助您快速上手平台功能。'}
                                    {index === 2 && '"人工智能+"工作小组将持续分享'}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


// 页脚组件
const Footer = () => (
    <footer className="bg-gray-800 text-white mt-16">
        <div className="container mx-auto px-4 py-6 text-center">
            <p>&copy; 2025 兴业信托·信息科技中心</p>
        </div>
    </footer>
);


// 主应用组件
export default function App() {
    const [activeTab, setActiveTab] = useState('concepts');

    return (
        <div className="flex flex-col min-h-screen">
            <Header activeTab={activeTab} setActiveTab={setActiveTab} />
            <main className="flex-1 container mx-auto px-4 py-8 md:py-16">
                {activeTab === 'concepts' && <ConceptsSection />}
                {activeTab === 'workflow' && <WorkflowSection />}
                {activeTab === 'practice' && <PracticeSection />}
            </main>
            <Footer />
        </div>
    );
}
