// src/components/sections/Focus.tsx
import React from 'react';
import { MdStorage, MdSpeed, MdArchitecture } from 'react-icons/md'; // Updated icons

const Focus = () => {
    return (
        <section id="focus" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8 text-center">

                    {/* Focus Area 1 */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
                        <MdArchitecture size={40} className="mx-auto text-cyan-500 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Microservices & Architecture</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Designing scalable systems using Docker, Redis, and message queues (BullMQ) to handle high-throughput asynchronous tasks.
                        </p>
                    </div>

                    {/* Focus Area 2 */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
                        <MdStorage size={40} className="mx-auto text-cyan-500 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Advanced Search & Data</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Building intelligent search engines with Elasticsearch and vector-based ML recommendations using Python and Scikit-learn.
                        </p>
                    </div>

                    {/* Focus Area 3 */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
                        <MdSpeed size={40} className="mx-auto text-cyan-500 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Real-Time Performance</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Optimizing frontend performance with virtualization and implementing real-time data streaming via WebSockets.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Focus;