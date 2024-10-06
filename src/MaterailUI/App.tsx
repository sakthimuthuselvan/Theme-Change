// App.tsx
import React from 'react';
import { ThemeProviderComponent } from './ThemeContext';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const App: React.FC = () => {
  return (
    <ThemeProviderComponent>
      <Header />
      <Content />
      <Footer />
    </ThemeProviderComponent>
  );
};

export default App;
