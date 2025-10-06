import React from 'react';
import { experiences } from '@/data';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-4">
                    My Experience
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
                    Professional roles and research contributions.
                </p>

                <div className="max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-6 mb-10">
                            <div className="md:w-1/4 text-left md:text-right">
                                <p className="text-cyan-500 dark:text-cyan-400 font-semibold">{exp.period}</p>
                            </div>

                            <div className="md:w-3/4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                                <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">{exp.company}</p>
                                <ul className="list-disc list-inside space-y-2">
                                    {exp.description.map((point, i) => (
                                        <li key={i} className="text-gray-700 dark:text-gray-300">{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;