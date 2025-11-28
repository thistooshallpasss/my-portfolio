import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

type ProjectType = {
    title: string;
    slug: string;
    description: string;
    image: string;
    liveUrl: string | null;
    githubUrl: string;
    technologies: string[];
};

const ProjectCard = ({ project }: { project: ProjectType }) => {
    return (
        // Base Card Styling - Theme-aware background and border (Upgrade #8)
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden flex flex-col shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-1">

            <div className="relative w-full h-48 bg-gray-50 dark:bg-gray-900">
                <Link href={`/projects/${project.slug}`}>
                    <Image
                        src={project.image}
                        alt={`Screenshot of ${project.title}`}
                        fill={true}
                        className="object-contain cursor-pointer p-2"
                    />
                </Link>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                {/* Title - Theme-aware color (Upgrade #8) */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                {/* Description - Theme-aware color (Upgrade #8) */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>

                {/* Technology Badges (Upgrade #3) */}
                <div className="flex flex-wrap gap-2 mb-4 pt-2 border-t border-gray-100 dark:border-gray-700">
                    {project.technologies.slice(0, 5).map((tech) => ( // Limit to 5 badges
                        <span
                            key={tech}
                            className="text-xs bg-cyan-100/50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 
                         px-3 py-1 rounded-full font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action Links */}
                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                    <Link href={`/projects/${project.slug}`} className="text-cyan-600 dark:text-cyan-400 hover:underline font-semibold transition-colors">
                        Learn More & Analysis →
                    </Link>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
                        <FaGithub size={24} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;