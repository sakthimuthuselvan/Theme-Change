// Content.tsx
import React from 'react';
import { Paper, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Content: React.FC = () => {
  const theme = useTheme();

  return (
   <div style={{backgroundColor: theme.palette.background.default}}>
     <Container>
      <Paper style={{ padding: theme.spacing(2) }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Light/Dark Mode Example
        </Typography>
        <Typography>
          This is the content area where you can add your main application content.
        </Typography>
      </Paper>
    </Container>
   </div>
  );
};

export default Content;
