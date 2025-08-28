import React, { useState } from 'react';
import SideNav from './components/SideNav';
import ConceptsSection from './components/ConceptsSection';
import WorkflowSection from './components/WorkflowSection';
import PracticeSection from './components/PracticeSection';
import Footer from './components/Footer';

export default function App() {
    const [activeTab, setActiveTab] = useState('concepts');

    return (
        <div className="flex h-screen bg-gray-50">
            <SideNav activeTab={activeTab} setActiveTab={setActiveTab} />
            
            <div className="flex-1 flex flex-col overflow-y-auto">
                <header className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10">
                     <div className="flex items-center">
                        <img src="logo.jpg" alt="企业Logo" className="h-10 mr-4" />
                        <h1 className="text-2xl font-bold text-gray-800">
                            <span className="text-blue-600">AI</span>智能体共创平台
                        </h1>
                    </div>
                </header>

                <main className="flex-1 p-6 md:p-10">
                    {activeTab === 'concepts' && <ConceptsSection />}
                    {activeTab === 'workflow' && <WorkflowSection />}
                    {activeTab === 'practice' && <PracticeSection />}
                </main>
                
                <Footer />
            </div>
        </div>
    );
}