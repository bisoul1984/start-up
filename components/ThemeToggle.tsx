"use client"
import React from 'react';

const toggleDarkMode = () => {
    if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle('dark');
    }
};

export default function ThemeToggle() {
    return (
        <button
            onClick={toggleDarkMode}
            className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white border"
            aria-label="Toggle dark mode"
        >
            Toggle Dark Mode
        </button>
    );
}
