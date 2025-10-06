import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { socialLinks } from '@/data';

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-400 py-8">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-white transition-colors">
                        <FaGithub size={24} />
                    </a>
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-white transition-colors">
                        <FaLinkedin size={24} />
                    </a>
                </div>
                <p>© {new Date().getFullYear()} Harsh Yadav. All rights reserved.</p>
                <p className="text-sm mt-2">Built with Next.js & Tailwind CSS in Prayagraj.</p>
            </div>
        </footer>
    );
};

export default Footer;