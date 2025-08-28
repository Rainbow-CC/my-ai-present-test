import React, { useState } from 'react';
import ZoomableImage from './ZoomableImage';

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
        { title: '第一步：业务分析与评估', content: '在动手构建前，首要任务是进行全面的分析与评估，确保我们的方向正确且投入值得。\n• 价值评估：明确智能体的业务产出是什么？\n• 可行性分析：这个任务适合用AI智能体来做吗？\n• 业务流程梳理：详细画出当前的业务流程图。' },
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

            <div className="max-w-4xl mx-auto mt-8">
                <ZoomableImage src="knowledge_base.png" alt="Knowledge Base Diagram" />
                <ZoomableImage src="workflow.png" alt="Workflow Diagram" />
            </div>
        </section>
    );
};

export default WorkflowSection;