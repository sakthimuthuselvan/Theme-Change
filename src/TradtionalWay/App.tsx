// src/App.tsx
import React, { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './ThemeProvider'; // Import the context and provider
import './TradtionalWay/themeStyles.css'; // Import theme styles

const App: React.FC = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        return null; // Handle the case when context is not available
    }

    const { theme, toggleTheme } = themeContext;

    return (
        <div>
            <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
            <button className="secondary-button">Secondary Action</button>
        </div>
    );
};

// Wrap the App with ThemeProvider
export default function RootApp() {
    return (
        <ThemeProvider>
            <App />
        </ThemeProvider>
    );
}
