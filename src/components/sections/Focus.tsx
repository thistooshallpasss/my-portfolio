import React from 'react';
import { MdArchitecture, MdStorage, MdSpeed, MdModelTraining, MdCode, MdLayers } from 'react-icons/md';
import { FaPython, FaServer, FaReact, FaDatabase, FaDocker } from 'react-icons/fa';

// Detailed data for the new skills section based on your resume
const skillsData = [
    {
        title: "AI & Data Engineering",
        icon: MdModelTraining,
        keywords: ['PyTorch', 'SHAP', 'TensorFlow', 'Keras', 'LangChain', 'NLP', 'Computer Vision', 'Pandas', 'NumPy'],
        color: 'text-rose-500',
    },
    {
        title: "Backend & Distributed Systems",
        icon: FaServer,
        keywords: ['Node.js', 'Express.js', 'Fastify', 'REST APIs', 'WebSockets', 'Caching (Redis)', 'BullMQ', 'Rate Limiting', 'Scalability'],
        color: 'text-yellow-500',
    },
    {
        title: "Frontend & UX Optimization",
        icon: FaReact,
        keywords: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Virtualization (TanStack)', 'Redux Toolkit', 'Recharts'],
        color: 'text-cyan-500',
    },
    {
        title: "Databases & DevOps",
        icon: FaDatabase,
        keywords: ['Elasticsearch', 'PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'Bash', 'Git', 'Vercel', 'Render', 'AWS EC2'],
        color: 'text-indigo-500',
    },
];

const Focus = () => {
    return (
        <section id="focus" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-4">
                    Core Strengths & Expertise
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
                    Expertise in building scalable, real-time distributed systems and integrating complex AI models into production environments.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillsData.map((category) => (
                        <div
                            key={category.title}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-shadow duration-300 hover:shadow-2xl"
                        >
                            <category.icon size={36} className={`mb-3 ${category.color}`} />
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{category.title}</h3>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {category.keywords.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-xs bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full font-medium"
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

export default Focus;