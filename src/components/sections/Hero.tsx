'use client'; // Required for useState and onClick events

import React, { useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';
import { socialLinks } from '../../data';
import ContactModal from '../ui/ContactModal';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section
                id="hero"
                className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white"
            >
                <div className="container mx-auto px-6 text-center">

                    {/* ✅ START: New and Improved Image Block */}
                    <div className="relative w-40 h-40 mx-auto rounded-full p-1 bg-gradient-to-br from-cyan-400 to-gray-600">
                        <div className="relative w-full h-full bg-gray-900 rounded-full p-1">
                            <Image
                                src="/images/your-profile-photo.jpg"
                                alt="Profile Photo of Harsh Yadav"
                                width={150}
                                height={150}
                                className="relative rounded-full shadow-lg"
                                priority
                            />
                        </div>
                    </div>
                    {/* ✅ END: New and Improved Image Block */}

                    {/* Name and Tagline */}
                    <h1 className="text-4xl md:text-6xl font-extrabold mt-6">Harsh Yadav</h1>
                    <p className="mt-4 text-lg md:text-xl text-cyan-400 font-semibold">
                        AI & Full-Stack Developer
                    </p>
                    <p className="mt-2 max-w-2xl mx-auto text-gray-300">
                        I build intelligent, scalable systems with Python, React & AI, turning complex problems into elegant solutions.
                    </p>

                    {/* Call to Action Buttons */}
                    <div className="mt-8 flex justify-center gap-4">
                        <a
                            href="/resume/HarshYadav_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-cyan-500 text-white font-bold py-3 px-6 rounded-full hover:bg-cyan-600 transition-transform transform hover:scale-105"
                        >
                            Download Resume
                        </a>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-gray-700 text-white font-bold py-3 px-6 rounded-full hover:bg-gray-600 transition-transform transform hover:scale-105"
                        >
                            Contact Me
                        </button>
                    </div>

                    {/* Social Icons */}
                    <div className="mt-8 flex justify-center space-x-6">
                        <a
                            href={socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-cyan-400 transition-colors"
                        >
                            <FaGithub size={30} />
                        </a>
                        <a
                            href={socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-cyan-400 transition-colors"
                        >
                            <FaLinkedin size={30} />
                        </a>
                        {socialLinks.email && (
                            <a
                                href={socialLinks.email}
                                className="hover:text-cyan-400 transition-colors"
                            >
                                {/* Optional: Use email icon here */}
                                <span className="text-lg font-medium">@</span>
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Contact Modal */}
            <AnimatePresence>
                {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
            </AnimatePresence>
        </>
    );
};

export default Hero;
