// src/components/ui/ContactModal.tsx
import React from 'react';
import { socialLinks } from '@/data';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';

type ContactModalProps = {
    onClose: () => void;
};

const ContactModal = ({ onClose }: ContactModalProps) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                className="relative bg-gray-800 border border-gray-700 rounded-lg shadow-xl w-full max-w-md p-8 text-center"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <MdClose size={24} />
                </button>

                <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
                <p className="text-gray-400 mb-6">I'm currently open to new opportunities.</p>

                <a href={`mailto:${socialLinks.email}`} className="block w-full bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-600 transition-all text-lg mb-6">
                    <div className="flex items-center justify-center gap-2">
                        <MdEmail size={22} />
                        <span>{socialLinks.email}</span>
                    </div>
                </a>

                <div className="flex justify-center space-x-6">
                    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <FaGithub size={30} />
                    </a>
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <FaLinkedin size={30} />
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactModal;