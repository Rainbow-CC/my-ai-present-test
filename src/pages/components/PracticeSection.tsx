import React, { useState } from 'react';

const PracticeSection = () => {
    const [activeResource, setActiveResource] = useState<number | null>(null);

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

            <div className="max-w-4xl mx-auto mt-16">
                <div className="card p-8">
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

export default PracticeSection;
