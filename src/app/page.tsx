import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Coursework from '../components/sections/Coursework';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';
import Focus from '../components/sections/Focus';
import Skills from '../components/sections/Skills'; // NEW: Import Skills

export default function Home() {
    return (
        <>
            <Hero />
            <Focus />
            <Skills /> {/* ADDED: Detailed Skills List */}
            <Projects />
            <Experience />
            <Coursework />
            <Contact />
        </>
    );
}