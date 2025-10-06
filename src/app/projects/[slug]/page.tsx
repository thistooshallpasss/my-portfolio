import { projects } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaPlay } from 'react-icons/fa';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return projects
        .filter(project => project.slug)
        .map((project) => ({
            slug: project.slug,
        }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="py-24">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">{project.title}</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{project.description}</p>
                </div>

                {/* Action Links */}
                <div className="mt-8 flex justify-center items-center gap-6">
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white bg-cyan-500 py-2 px-4 rounded-lg hover:bg-cyan-600 transition-colors">
                            <FaPlay /> Live Demo
                        </a>
                    )}
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
                        <FaGithub size={24} /> View on GitHub
                    </a>
                </div>

                {/* Main Thumbnail Image */}
                <div className="mt-12">
                    <div className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                        <Image
                            src={project.image}
                            alt={`${project.title} main image`}
                            fill={true}
                            className="object-contain p-4" // Changed to object-contain and added padding
                        />
                    </div>
                </div>

                {/* Detailed Description */}
                {project.details && (
                    <div className="mt-16 max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">About This Project</h2>
                        <div className="text-gray-700 dark:text-gray-300 space-y-4 text-lg">
                            {project.details.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                )}

                {/* Image Gallery Section */}
                {project.images && project.images.length > 0 && (
                    <div className="mt-16 max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Gallery</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.images.map((img, index) => (
                                <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                                    <Image
                                        src={img}
                                        alt={`${project.title} gallery image ${index + 1}`}
                                        fill={true}
                                        className="object-contain p-2" // Changed to object-contain and added padding
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Back to Projects Link */}
                <div className="text-center mt-16">
                    <Link href="/#projects" className="text-cyan-500 dark:text-cyan-400 hover:underline">
                        ← Back to all projects
                    </Link>
                </div>
            </div>
        </div>
    );
}