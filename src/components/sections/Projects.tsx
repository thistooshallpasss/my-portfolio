// import { projects } from '@/data';
// import Image from 'next/image';
// import Link from 'next/link';
// import { FaGithub, FaPlay } from 'react-icons/fa';
// import { notFound } from 'next/navigation';

// // Custom type to ensure 'details' and 'videoUrl' exist
// type DetailedProject = typeof projects[number] & {
//     details: string[];
//     videoUrl: string;
// };

// export async function generateStaticParams() {
//     return projects
//         .filter(project => project.slug)
//         .map((project) => ({
//             slug: project.slug,
//         }));
// }

// export default async function ProjectPage({ params }: { params: { slug: string } }) {
//     // Cast the found project to the detailed type for guaranteed access to videoUrl/details
//     const project = projects.find((p) => p.slug === params.slug) as DetailedProject | undefined;

//     if (!project) {
//         notFound();
//     }

//     // Default Vercel Video URL (Upgrade #5)
//     const videoEmbedUrl = project?.videoUrl?.includes("youtube.com")
//         ? project.videoUrl
//         : "https://www.youtube.com/embed/n3mR_y6Ww8E";

//     return (
//         <div className="py-24 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300 transition-colors duration-500 min-h-screen">
//             <div className="container mx-auto px-6">

//                 {/* Header Section */}
//                 <div className="text-center">
//                     <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">{project.title}</h1>
//                     <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{project.description}</p>
//                 </div>

//                 {/* Action Links */}
//                 <div className="mt-8 flex justify-center items-center gap-6">
//                     {project.liveUrl && (
//                         <a
//                             href={project.liveUrl}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="flex items-center gap-2 text-white bg-cyan-500 py-2 px-4 rounded-lg hover:bg-cyan-600 transition-colors dark:bg-cyan-600 dark:hover:bg-cyan-500"
//                         >
//                             <FaPlay /> Live Demo
//                         </a>
//                     )}
//                     <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
//                         <FaGithub size={24} /> View on GitHub
//                     </a>
//                 </div>

//                 {/* Live Demo Video Embed (Upgrade #5) */}
//                 <div className="mt-12 max-w-5xl mx-auto">
//                     <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Live Demo & Walkthrough</h2>
//                     <div className="relative w-full overflow-hidden rounded-lg shadow-2xl bg-black" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
//                         <iframe
//                             className="absolute top-0 left-0 w-full h-full"
//                             src={videoEmbedUrl}
//                             frameBorder="0"
//                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                             allowFullScreen
//                             title={`Live Demo for ${project.title}`}
//                         ></iframe>
//                     </div>
//                 </div>

//                 {/* Detailed Description / Contribution Section (Upgrade #4) */}
//                 {project.details && (
//                     <div className="mt-16 max-w-4xl mx-auto">
//                         <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">Project Analysis & Contribution</h2>
//                         <ul className="text-gray-700 dark:text-gray-300 space-y-4 text-lg list-none p-0">
//                             {project.details.map((paragraph, index) => (
//                                 <li key={index} className="flex items-start">
//                                     <span className='font-semibold text-cyan-600 dark:text-cyan-400 mr-3 text-2xl leading-none'>&bull;</span>
//                                     {paragraph}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}

//                 {/* Image Gallery Section */}
//                 {/* We can skip displaying the gallery code here since the user approved it was working */}

//                 {/* Back to Projects Link */}
//                 <div className="text-center mt-16">
//                     <Link href="/#projects" className="text-cyan-600 dark:text-cyan-400 hover:underline">
//                         ← Back to all projects
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// }


// src/components/sections/Projects.tsx
import React from 'react';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '@/data';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-4">
                    Featured Projects
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
                    A selection of projects that demonstrate my ability to solve complex problems with code.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;