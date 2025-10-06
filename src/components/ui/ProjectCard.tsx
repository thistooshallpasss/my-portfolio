import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

// This type should match the structure of your project objects in data/index.ts
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
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden flex flex-col shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
            <div className="relative w-full h-48">
                <Link href={`/projects/${project.slug}`}>
                    <Image
                        src={project.image}
                        alt={`Screenshot of ${project.title}`}
                        fill={true}
                        className="object-cover cursor-pointer"
                    />
                </Link>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                        <span key={tech} className="bg-gray-100 dark:bg-gray-700 text-cyan-600 dark:text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                    <Link href={`/projects/${project.slug}`} className="text-cyan-500 dark:text-cyan-400 hover:underline font-semibold">
                        Learn More →
                    </Link>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-300 hover:text-white transition-colors">
                        <FaGithub size={24} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;