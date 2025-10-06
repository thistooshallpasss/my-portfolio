import React from 'react';
import { coursework } from '@/data';

const Coursework = () => {
    return (
        <section id="coursework" className="py-20 bg-white dark:bg-transparent">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-4">
                    Relevant Coursework
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
                    Key courses I've completed at IIIT Allahabad that have built my foundational knowledge.
                </p>
                <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-lg p-6 md:p-8 border border-gray-200 dark:border-gray-700">
                    <ul className="list-disc list-inside space-y-3 text-lg">
                        {coursework.map((course, index) => (
                            <li key={index} className="text-gray-700 dark:text-gray-300">
                                {course}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Coursework;