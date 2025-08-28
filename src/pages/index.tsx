import React, { useState } from 'react';
import SideNav from './components/SideNav';
import ConceptsSection from './components/ConceptsSection';
import WorkflowSection from './components/WorkflowSection';
import PracticeSection from './components/PracticeSection';

export default function App() {
    const [activeTab, setActiveTab] = useState('concepts');

    return (
        <div className="flex h-screen bg-gray-50">
            <SideNav activeTab={activeTab} setActiveTab={setActiveTab} />
            
            <div className="flex-1 flex flex-col overflow-y-auto">
                <main className="flex-1 p-6 md:p-10">
                    {activeTab === 'concepts' && <ConceptsSection />}
                    {activeTab === 'workflow' && <WorkflowSection />}
                    {activeTab === 'practice' && <PracticeSection />}
                </main>
            </div>
        </div>
    );
}