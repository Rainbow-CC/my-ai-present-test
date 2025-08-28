import React, { useState } from 'react';

interface NavLink {
    type: 'link';
    id: string;
    title: string;
}

interface NavCategory {
    type: 'category';
    title: string;
    children: NavLink[];
}

type NavItem = NavLink | NavCategory;

interface SideNavProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const SideNav: React.FC<SideNavProps> = ({ activeTab, setActiveTab }) => {
    const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
        '实战案例': true, // Default to open
    });

    const navItems: NavItem[] = [
        { type: 'link', id: 'concepts', title: '核心技术解密' },
        {
            type: 'category',
            title: '实战案例',
            children: [
                { type: 'link', id: 'workflow', title: '工作流构建实战' },
            ]
        },
        { type: 'link', id: 'practice', title: '内部实践分享' },
    ];

    const handleNavClick = (targetId: string) => {
        setActiveTab(targetId);
    };

    const toggleCategory = (title: string) => {
        setOpenCategories(prev => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    return (
        <aside className="w-60 bg-gray-800 text-white flex-shrink-0 flex flex-col p-4">
            <div className="flex items-center justify-center py-4 mb-4 border-b border-gray-700">
                <img src="/logo.jpg" alt="Logo" className="h-8 w-8 mr-2" />
                <h1 className="text-lg font-bold"><span className="text-blue-400">AI</span>共创平台</h1>
            </div>
            <nav className="flex-1">
                <ul>
                    {navItems.map((item, index) => {
                        if (item.type === 'link') {
                            return (
                                <li key={item.id} className="mb-1">
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(item.id);
                                        }}
                                        className={`block py-2.5 px-4 rounded transition duration-200 ${activeTab === item.id ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'}`}
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            );
                        }
                        if (item.type === 'category') {
                            const isOpen = openCategories[item.title];
                            return (
                                <li key={index} className="mt-3 mb-1">
                                    <button
                                        onClick={() => toggleCategory(item.title)}
                                        className="w-full flex justify-between items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 focus:outline-none"
                                    >
                                        <span className="font-semibold text-gray-300">{item.title}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transform transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                    {isOpen && (
                                        <ul className="pt-1 pl-4">
                                            {item.children.map(child => (
                                                <li key={child.id}>
                                                    <a
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleNavClick(child.id);
                                                        }}
                                                        className={`block py-2 px-4 rounded transition duration-200 ${activeTab === child.id ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'}`}
                                                    >
                                                        {child.title}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            );
                        }
                        return null;
                    })}
                </ul>
            </nav>
            <div className="text-center text-xs text-gray-500 mt-auto">
                <p>&copy; 2025 兴业信托·信息科技中心</p>
            </div>
        </aside>
    );
};

export default SideNav;
