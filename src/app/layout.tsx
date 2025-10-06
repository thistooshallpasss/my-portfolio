// src/app/layout.tsx

import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Harsh Yadav | AI & Full-Stack Developer',
  description: 'The personal portfolio of Harsh Yadav, an AI and Full-Stack Developer from IIIT Allahabad.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      {/* These classes on the body tag are essential */}
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300 transition-colors duration-300`}>
        <Providers>
          <Navbar />
          <main className="container mx-auto px-6 pt-20">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}