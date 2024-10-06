// src/ThemeProvider.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import './themeStyles.css';

// Define the shape of the context value
interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

// Create the context with an initial value
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>('light');

    // Load theme from localStorage on component mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        // Set the theme class on the body
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Toggle between light and dark theme
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
