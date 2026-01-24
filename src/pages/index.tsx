import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SideNav from './components/SideNav';
import ConceptsSection from './components/ConceptsSection';
import WorkflowSection from './components/WorkflowSection';
import PracticeSection from './components/PracticeSection';

export default function App() {
    const [activeTab, setActiveTab] = useState('concepts');

    return (
        <div className="flex h-screen bg-slate-950 text-slate-200 overflow-hidden font-sans">
            {/* Background Decorative Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-900/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/10 blur-[120px] rounded-full" />
            </div>

            <SideNav activeTab={activeTab} setActiveTab={setActiveTab} />
            
            <div className="flex-1 flex flex-col overflow-y-auto relative scroll-smooth">
                {/* Top Header Placeholder for Mobile/Actions */}
                <header className="h-16 flex items-center justify-between px-10 border-b border-white/5 bg-slate-950/50 backdrop-blur-md sticky top-0 z-40">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">System Operational</span>
                  </div>
                  <div className="flex gap-4">
                    <button className="text-sm text-slate-400 hover:text-white transition-colors">Documentation</button>
                    <button className="text-sm px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">Github</button>
                  </div>
                </header>

                <main className="flex-1 p-6 md:p-16 max-w-7xl mx-auto w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {activeTab === 'concepts' && <ConceptsSection />}
                            {activeTab === 'workflow' && <WorkflowSection />}
                            {activeTab === 'practice' && <PracticeSection />}
                        </motion.div>
                    </AnimatePresence>

                    {/* Footer */}
                    <footer className="mt-20 pt-10 border-t border-white/5 pb-10 text-center">
                      <p className="text-slate-500 text-sm italic">
                        "The future is not just Large Language Models, but Large Agentic Workflows."
                      </p>
                      <div className="mt-6 flex justify-center gap-6 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                        {/* Fake logo partners */}
                        <div className="font-bold tracking-tighter text-xl">OpenAI</div>
                        <div className="font-bold tracking-tighter text-xl">Anthropic</div>
                        <div className="font-bold tracking-tighter text-xl">LangChain</div>
                        <div className="font-bold tracking-tighter text-xl">AutoGPT</div>
                      </div>
                    </footer>
                </main>
            </div>
        </div>
    );
}
