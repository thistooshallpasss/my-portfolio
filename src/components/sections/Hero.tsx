'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import ContactModal from '../ui/ContactModal';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { socialLinks } from '../../data';
import { AnimatePresence } from 'framer-motion';
// Resume link is assumed to be at /resume/HarshYadav_Resume.pdf

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-500">
                <div className="container mx-auto px-6 text-center">

                    {/* Image Block with Professional Border (Upgrade #1) */}
                    <div className="relative w-40 h-40 mx-auto rounded-full p-1 bg-gradient-to-br from-cyan-400 to-indigo-600 dark:from-cyan-500 dark:to-indigo-400">
                        <div className="relative w-full h-full bg-white dark:bg-gray-900 rounded-full p-1">
                            <Image
                                src="/images/your-profile-photo.jpg" // ⚠️ Must be replaced with your image
                                alt="Professional photo of Harsh Yadav"
                                width={150}
                                height={150}
                                className="relative rounded-full shadow-lg"
                                priority
                            />
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold mt-6">
                        Harsh Yadav
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-cyan-600 dark:text-cyan-400 font-semibold">
                        AI & Full-Stack Developer
                    </p>
                    <p className="mt-2 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                        Building intelligent, scalable distributed systems with Python, Next.js, and expertise in real-time data architecture.
                    </p>

                    {/* Call to Action Buttons (Upgrade #7) */}
                    <div className="mt-8 flex justify-center gap-4">
                        <a
                            href="/resume/HarshYadav_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-cyan-500 text-white font-bold py-3 px-6 rounded-full 
                           hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-500 transition-colors transform hover:scale-105"
                        >
                            Download Resume
                        </a>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-gray-700 text-white font-bold py-3 px-6 rounded-full 
                           hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors transform hover:scale-105"
                        >
                            Contact Me
                        </button>
                    </div>

                    {/* Social Icons */}
                    <div className="mt-8 flex justify-center space-x-6 text-gray-500 dark:text-gray-400">
                        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                            <FaGithub size={30} />
                        </a>
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                            <FaLinkedin size={30} />
                        </a>
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
            </AnimatePresence>
        </>
    );
};

export default Hero;