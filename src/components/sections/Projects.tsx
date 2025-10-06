// src/components/sections/Projects.tsx
import React from 'react';
import { projects } from '../../data';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center text-white mb-4">
                    My Projects
                </h2>
                <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-12">
                    Here are some of the projects I've worked on to showcase my skills.
                </p>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;