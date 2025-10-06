import React from 'react';
import { MdDeveloperMode, MdModelTraining, MdViewInAr } from 'react-icons/md';

const Focus = () => {
    return (
        <section id="focus" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8 text-center">

                    {/* Focus Area 1: AI & Machine Learning */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
                        <MdModelTraining size={40} className="mx-auto text-cyan-500 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">AI & Machine Learning</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Building and training models for NLP tasks, data analysis, and creating intelligent, data-driven applications.
                        </p>
                    </div>

                    {/* Focus Area 2: Full-Stack Development */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
                        <MdDeveloperMode size={40} className="mx-auto text-cyan-500 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Full-Stack Development</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Developing robust back-ends with Node.js/Python and creating responsive user interfaces with React & Next.js.
                        </p>
                    </div>

                    {/* Focus Area 3: System Design */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
                        <MdViewInAr size={40} className="mx-auto text-cyan-500 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">System Design</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Architecting scalable, efficient, and maintainable systems by choosing the right tools and database structures.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Focus;