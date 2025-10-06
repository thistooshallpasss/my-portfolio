// src/components/sections/Contact.tsx
import React from 'react';
import { socialLinks } from '@/data';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 text-center">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4">
                    Get In Touch
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out.
                </p>
                <div className="flex justify-center items-center gap-6 flex-wrap">
                    <a href={`mailto:${socialLinks.email}`} className="flex items-center gap-3 bg-gray-200 dark:bg-gray-800 border border-transparent dark:border-gray-700 py-3 px-6 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-all">
                        <MdEmail size={24} className="text-cyan-500" />
                        <span className="font-semibold">{socialLinks.email}</span>
                    </a>
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-gray-200 dark:bg-gray-800 border border-transparent dark:border-gray-700 py-3 px-6 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-all">
                        <FaLinkedin size={24} className="text-cyan-500" />
                        <span className="font-semibold">LinkedIn</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;