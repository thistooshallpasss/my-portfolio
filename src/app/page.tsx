import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Coursework from '../components/sections/Coursework';
import Experience from '../components/sections/Experience'; // 1. Import the new component
import Contact from '../components/sections/Contact'; // 1. Import

export default function Home() {
    return (
        <>
            <Hero />
            <Projects />
            <Experience />
            <Coursework />
            <Contact /> {/* 2. Add to the bottom */}
        </>
    );
}