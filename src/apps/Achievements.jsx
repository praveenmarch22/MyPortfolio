import React from 'react';

export default function Achievements() {
    const achievements = [
        {
            id: 1,
            title: "B.Tech in Computer Science",
            issuer: "RGUKT RK Valley",
            date: "2023",
            description: "Graduated with 8.80 CGPA in Computer Science and Engineering.",
            icon: "🎓",
            color: "bg-blue-100 text-blue-600"
        },
        {
            id: 2,
            title: "Full Stack Developer at Apex Cura",
            issuer: "Apex Cura Healthcare Solutions",
            date: "March 2024 - Present",
            description: "Building innovative healthcare web applications with React and Node.js.",
            icon: "💼",
            color: "bg-purple-100 text-purple-600"
        },
        {
            id: 3,
            title: "30% UI Development Time Reduction",
            issuer: "Apex Cura Healthcare",
            date: "2024",
            description: "Engineered a JSON-driven framework that reduced UI development time by 30%.",
            icon: "⚡",
            color: "bg-yellow-100 text-yellow-600"
        },
        {
            id: 4,
            title: "Real-time Communication Systems",
            issuer: "WebSocket & Socket.io",
            date: "2024",
            description: "Implemented real-time chat and communication features using WebSockets.",
            icon: "🔌",
            color: "bg-green-100 text-green-600"
        },
        {
            id: 5,
            title: "DevTinder - Developer Networking Platform",
            issuer: "Personal Project",
            date: "2024",
            description: "Built a full-stack networking platform with real-time chat and Razorpay integration.",
            icon: "🚀",
            color: "bg-pink-100 text-pink-600"
        },
        {
            id: 6,
            title: "Open Source Contributor",
            issuer: "GitHub",
            date: "Ongoing",
            description: "Active contributor to React ecosystem libraries and open source projects.",
            icon: "🌟",
            color: "bg-orange-100 text-orange-600"
        }
    ];

    const yetToAchieve = [
        {
            id: 1,
            title: "Fix a Bug Without Creating 3 More",
            difficulty: "Legendary",
            icon: "🐛",
            color: "bg-red-100 text-red-600",
            status: "In Progress (since 2019)"
        },
        {
            id: 2,
            title: "Write Code That Future Me Understands",
            difficulty: "Impossible",
            icon: "🤔",
            color: "bg-pink-100 text-pink-600",
            status: "Added 47 TODO comments instead"
        },
        {
            id: 3,
            title: "Go a Week Without Googling 'How to center a div'",
            difficulty: "Mythical",
            icon: "📦",
            color: "bg-indigo-100 text-indigo-600",
            status: "Current streak: 0 days"
        },
        {
            id: 4,
            title: "Finish a Side Project",
            difficulty: "Ultra Rare",
            icon: "🚀",
            color: "bg-green-100 text-green-600",
            status: "42 projects at 80% completion"
        },
        {
            id: 5,
            title: "Read the Documentation Before Stack Overflow",
            difficulty: "Extreme",
            icon: "📚",
            color: "bg-cyan-100 text-cyan-600",
            status: "Who does that anyway?"
        },
        {
            id: 6,
            title: "Perfect Work-Life Balance",
            difficulty: "404 Not Found",
            icon: "⚖️",
            color: "bg-amber-100 text-amber-600",
            status: "What is 'life'?"
        }
    ];

    return (
        <div className="h-full w-full bg-white overflow-y-auto">
            <div className="max-w-4xl mx-auto p-6 md:p-8">
                {/* Achieved Section */}
                <div className="mb-12">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">🏆 Achievements</h1>
                        <p className="text-gray-600">Milestones, Projects & Recognition</p>
                    </div>

                    <div className="grid gap-4">
                        {achievements.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col md:flex-row items-start md:items-center gap-4 p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white"
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${item.color} flex-shrink-0`}>
                                    {item.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                                        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                                        <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full mt-1 md:mt-0 w-fit">
                                            {item.date}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 font-medium text-sm mb-1">{item.issuer}</p>
                                    <p className="text-gray-500 text-xs">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Yet to Achieve Section */}
                <div className="border-t border-gray-200 pt-10">
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            🎮 Yet to Unlock
                        </h2>
                        <p className="text-gray-500 text-sm">
                            Every developer's impossible quests
                        </p>
                    </div>

                    <div className="grid gap-3">
                        {yetToAchieve.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-4 p-4 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 hover:bg-gray-50 transition-colors"
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${item.color} flex-shrink-0 opacity-60`}>
                                    {item.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                        <h3 className="text-base font-semibold text-gray-700">{item.title}</h3>
                                        <span className="text-[10px] font-bold text-gray-400 bg-gray-200 px-2 py-0.5 rounded uppercase">
                                            {item.difficulty}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-xs italic">{item.status}</p>
                                </div>
                                <div className="text-gray-300 text-2xl">🔒</div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center text-gray-400 text-xs">
                        <p>Progress: ████░░░░░░ 40% (Eternity remaining)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
