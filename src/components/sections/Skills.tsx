import React from 'react';
import {
    FaLaptopCode, FaCogs, FaDatabase, FaCloud, FaPython, FaChartLine, FaServer, FaReact
} from 'react-icons/fa';
import { MdOutlineSecurity } from 'react-icons/md';

// Grouped data structure for displaying on the page
const skillCategories = [
    {
        title: "Programming Languages",
        icon: FaLaptopCode,
        keywords: ['C++', 'Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'Bash Scripting'],
        color: 'text-indigo-500',
    },
    {
        title: "Backend & Frameworks",
        icon: FaServer,
        keywords: ['Node.js', 'Express.js', 'Fastify', 'Flask', 'Socket.IO', 'FastAPI', 'JWT', 'REST APIs'],
        color: 'text-rose-500',
    },
    {
        title: "Frontend & UI/UX",
        icon: FaReact,
        keywords: ['React.js', 'Next.js', 'Redux Toolkit', 'TanStack Virtual (Virtualization)', 'Tailwind CSS', 'Framer Motion', 'Recharts'],
        color: 'text-cyan-500',
    },
    {
        title: "AI, ML & Data Science",
        icon: FaChartLine,
        keywords: ['PyTorch', 'TensorFlow', 'Keras', 'SHAP (Interpretability)', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'LangChain'],
        color: 'text-green-500',
    },
    {
        title: "Databases & Caching",
        icon: FaDatabase,
        keywords: ['Elasticsearch (Fuzzy Search)', 'MongoDB', 'MySQL', 'PostgreSQL', 'Redis (Caching/PubSub/BullMQ)'],
        color: 'text-yellow-500',
    },
    {
        title: "DevOps & Cloud Tools",
        icon: FaCloud,
        keywords: ['Docker', 'Kubernetes (Concept)', 'Git/GitHub', 'Vercel', 'Render', 'CI/CD (GitHub Actions)', 'AWS EC2', 'Nginx'],
        color: 'text-orange-500',
    },
    {
        title: "Core CS & Security",
        icon: MdOutlineSecurity,
        keywords: ['Distributed Systems', 'OOPS', 'DBMS', 'OS', 'Networking', 'Cryptography', 'Parallel Computing'],
        color: 'text-purple-500',
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-4">
                    The Complete Toolchain
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
                    A comprehensive breakdown of technical skills, platforms, and frameworks I use to build scalable products.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-shadow duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <category.icon size={24} className={`mr-3 ${category.color}`} />
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.keywords.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-xs bg-gray-100 dark:bg-zinc-700/50 text-gray-700 dark:text-gray-300 
                                                   px-3 py-1 rounded-full font-medium border border-gray-200 dark:border-zinc-700"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;