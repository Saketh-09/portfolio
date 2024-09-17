import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, CardActionArea } from '@mui/material';
import myImage from './static/meteoroRNN.png';

const projects = [
  {
    title: 'MeteoroRNN',
    description: 'MeteoroRNN is a machine learning project that utilizes a basic Recurrent Neural Network (RNN) to predict urban temperatures from historical data. The model is trained using temperature readings from multiple weather stations over five-day intervals across a specified geographic region or city. Through processing these sequential inputs, the RNN effectively learns to identify patterns and temporal dependencies in the data, enabling it to forecast future temperature trends accurately.',
    imageUrl: myImage,
    githubUrl: 'https://github.com/Saketh-09/MeteoroRNN',
  },
  {
    title: 'Personal Website',
    description: 'A personal portfolio to list my work and skills. The frontend is built using ReactJS. And used ',
    imageUrl: '/path-to-image1.jpg', 
    githubUrl: 'https://github.com/yourusername/portfolio-website',
  },
  {
    title: 'Chat Application',
    description: 'A real-time chat application built with WebSockets.',
    imageUrl: '/path-to-image3.jpg', 
    githubUrl: 'https://github.com/yourusername/chat-app', 
  },
];

function ProjectsPage() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea onClick={() => window.open(project.githubUrl, '_blank')}>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.imageUrl}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProjectsPage;
