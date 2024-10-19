import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, CardActionArea } from '@mui/material';
import myImage from './static/meteoroRNN.png';
import portfolioimg from './static/portfolio.png';
import AnimatedTitle from '../animated/animsted-text';
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
    imageUrl: portfolioimg, 
    githubUrl: 'https://github.com/Saketh-09/portfolio',
  },
];

function ProjectsPage() {
  return (
    <div className='m-14'>
      <Typography variant="h4" gutterBottom>
      <AnimatedTitle text="PROJECTS" />
      </Typography>



      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}  >
            {/* <Card sx={{background: 'inherit', borderRadius: 4}}>
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
            </Card> */}
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href={project.githubUrl}>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
    <a href={project.githubUrl} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        github
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProjectsPage;
