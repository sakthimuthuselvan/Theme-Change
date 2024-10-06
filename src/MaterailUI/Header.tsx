// Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Switch } from '@mui/material';
import { useThemeContext } from './ThemeContext';

const Header: React.FC = () => {
  const { toggleTheme, isDarkMode } = useThemeContext();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Light/Dark Mode App
        </Typography>
        <Switch
          checked={isDarkMode}
          onChange={toggleTheme}
          color="default"
          inputProps={{ 'aria-label': 'toggle theme' }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
