// src/app/page.tsx
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects'; // Direct import is fine now
import Coursework from '../components/sections/Coursework';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';
import Focus from '../components/sections/Focus';
import Skills from '../components/sections/Skills';

export default function Home() {
    return (
        <>
            <Hero />
            <Focus />
            <Skills />
            <Projects />
            <Experience />
            <Coursework />
            <Contact />
        </>
    );
}