// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import { navLinks } from '../../data';
// import ThemeSwitcher from '../ui/ThemeSwitcher'; // ✅ Step 1: Import ThemeSwitcher

// const Navbar = () => {
//     return (
//         <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-md">
//             <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//                 {/* Logo / Name */}
//                 <Link
//                     href="/"
//                     className="text-2xl font-bold text-gray-800 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
//                 >
//                     Harsh Yadav
//                 </Link>

//                 {/* Navigation Links */}
//                 <ul className="hidden md:flex items-center space-x-6">
//                     {navLinks.map((link) => (
//                         <li key={link.name}>
//                             {link.href.startsWith('/') ? (
//                                 // Internal link
//                                 <Link
//                                     href={link.href}
//                                     className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
//                                 >
//                                     {link.name}
//                                 </Link>
//                             ) : (
//                                 // External link
//                                 <a
//                                     href={link.href}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
//                                 >
//                                     {link.name}
//                                 </a>
//                             )}
//                         </li>
//                     ))}

//                     {/* ✅ Step 2: Add Theme Switcher here */}
//                     <li>
//                         <ThemeSwitcher />
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


'use client'; // This line is also crucial

import React from 'react';
import Link from 'next/link';
import { navLinks } from '../../data';
import ThemeSwitcher from '../ui/ThemeSwitcher';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link
                    href="/"
                    className="text-2xl font-bold text-gray-800 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                    Harsh Yadav
                </Link>

                <ul className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            {link.href.startsWith('/') ? (
                                <Link
                                    href={link.href}
                                    className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                                >
                                    {link.name}
                                </a>
                            )}
                        </li>
                    ))}
                    <li>
                        <ThemeSwitcher />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

