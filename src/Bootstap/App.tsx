// App.tsx
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false); // Specify type for the state

  // Toggle theme function
  const toggleTheme = () => {
    document.querySelector('body')?.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
    setIsDarkMode(prevMode => !prevMode); // Using prevMode for better state updates
  };

  // Effect to apply the theme class to the body
  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div>
      <button className='bg-primary' onClick={toggleTheme}>
        Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      <h1>Hello, World!</h1>
      <p>This is an example of light and dark themes with Bootstrap.</p>
    </div>
  );
}

export default App;
