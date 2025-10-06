'use client'; // This line is crucial

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MdWbSunny, MdBedtime } from 'react-icons/md';

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
            {theme === 'dark' ? <MdWbSunny size={22} /> : <MdBedtime size={22} />}
        </button>
    );
};

export default ThemeSwitcher;
