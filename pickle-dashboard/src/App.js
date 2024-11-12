import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

// Define the color scheme
const primaryColor = "#4A90E2";  // A soft blue
const secondaryColor = "#D1E8FF";  // Light blue for background
const textColor = "#333";  // Dark text for readability

const sections = [
  { title: "Section 1", description: "Description for section 1" },
  { title: "Section 2", description: "Description for section 2" },
  { title: "Section 3", description: "Description for section 3" },
  { title: "Section 4", description: "Description for section 4" },
  { title: "Section 5", description: "Description for section 5" },
];

export default function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        bgcolor: secondaryColor,
        padding: 2,
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: primaryColor }}>
        Welcome to the App
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: 'repeat(2, 1fr)',
          '@media (max-width:600px)': { gridTemplateColumns: '1fr' },
        }}
      >
        {sections.map((section, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 150,
              padding: 2,
              textAlign: 'center',
              bgcolor: '#fff',
              color: textColor,
              boxShadow: 2,
              borderRadius: 2,
              '&:hover': { boxShadow: 4 },
            }}
          >
            <CardContent>
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                {section.title}
              </Typography>
              <Typography variant="body2" sx={{ color: textColor }}>
                {section.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
