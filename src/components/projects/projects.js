import React from 'react';
import { Grid, Typography } from '@mui/material';
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
    description: 'A personal portfolio to list my experience, skills, projects. It is built using ReactJS. Utilized MUI components and Tailwind for CSS. It is hosted on Github pages.',
    imageUrl: portfolioimg, 
    githubUrl: 'https://github.com/Saketh-09/portfolio',
  },
  {
    title: 'Organo',
    description: 'Organo is an Organic farming management system that simplifies and streamlines the workflow for organic farmers. Backend RestAPI are built using Django. Frontend is built using ReactJS.',
    imageUrl: portfolioimg, 
    githubUrl: 'https://github.com/Saketh-09/1',
  },
];

function ProjectsPage() {
  return (
    <div className='m-4 sm:m-14'>
      <Typography variant="h4" gutterBottom>
        <AnimatedTitle text="PROJECTS" />
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <div className="max-w-sm h-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
              <a href={project.githubUrl}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
              </a>
              <div className="mb-4 h-32 overflow-hidden">
                <p className="font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
              </div>
              <a href={project.githubUrl} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Github
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
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
