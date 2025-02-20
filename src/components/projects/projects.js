// import React from "react";
// import { Grid, Typography } from "@mui/material";
// import myImage from "./static/meteoroRNN.png";
// import portfolioimg from "./static/portfolio.png";
// import AnimatedTitle from "../animated/animsted-text";

// const projects = [
//   {
//     title: "MeteoroRNN",
//     description:
//       "MeteoroRNN is a machine learning project that utilizes a basic Recurrent Neural Network (RNN) to predict urban temperatures from historical data. The model is trained using temperature readings from multiple weather stations over five-day intervals across a specified geographic region or city. Through processing these sequential inputs, the RNN effectively learns to identify patterns and temporal dependencies in the data, enabling it to forecast future temperature trends accurately.",
//     imageUrl: myImage,
//     githubUrl: "https://github.com/Saketh-09/MeteoroRNN",
//   },
//   {
//     title: "Personal Website",
//     description:
//       "A personal portfolio to list my experience, skills, projects. It is built using ReactJS. Utilized MUI components and Tailwind for CSS. It is hosted on Github pages.",
//     imageUrl: portfolioimg,
//     githubUrl: "https://github.com/Saketh-09/portfolio",
//   },
//   {
//     title: "Organo",
//     description:
//       "Organo is an Organic farming management system that simplifies and streamlines the workflow for organic farmers. Backend RestAPI are built using Django. Frontend is built using ReactJS.",
//     imageUrl: portfolioimg,
//     githubUrl: "https://github.com/Saketh-09/1",
//   },
//   {
//     title: "e-commerce micro services",
//     description:
//       "A scalable e-commerce platform with microservices architecture for product browsing, shopping, and secure \
//       payments. Used Next.js, Nest.js, MySQL, and Stripe API, containerized in Docker and orchestrated via Kubernetes\
//       on a self-hosted setup. Built a CI/CD pipeline with Jenkins and GitHub, with infrastructure managed by Ansible.\
//       Implemented load balancing, and monitoring with Prometheus and Grafana.",
//     imageUrl: portfolioimg,
//     githubUrl: "https://github.com/Saketh-09/event-driven-ecommerce",
//   },
//   {
//     title: "NewsAPI ELK pipeline",
//     description:
//       "Leveraged NewsAPI to fetch real-time news data, processed it with PySpark Structured Streaming and Apache Kafka for Named Entity Recognition (NER), and visualized insights using the ELK stack (Elasticsearch, Logstash, Kibana).",
//     imageUrl: portfolioimg,
//     githubUrl: "https://github.com/Saketh-09/newAPI-ELK",
//   },
// ];

// function ProjectsPage() {
//   return (
//     <div className="m-4 sm:m-14">
//       <Typography variant="h4" gutterBottom>
//         <AnimatedTitle text="PROJECTS" />
//       </Typography>

//       <Grid container spacing={4}>
//         {projects.map((project, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <div className="max-w-sm h-full p-6 bg-[rgba(85,71,90,1)] border border-gray-200 rounded-lg shadow dark:border-gray-700 flex flex-col justify-between">
//               <a href={project.githubUrl}>
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
//                   {project.title}
//                 </h5>
//               </a>
//               <div className="mb-4 h-32 overflow-hidden">
//                 <p className="font-normal text-gray-300 dark:text-gray-300">
//                   {project.description}
//                 </p>
//               </div>
//               <a
//                 href={project.githubUrl}
//                 className="inline-flex bg-[rgba(89,97,139,1)] items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 Github
//                 <svg
//                   className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 14 10"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M1 5h12m0 0L9 1m4 4L9 9"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// }

// export default ProjectsPage;

import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import AnimatedTitle from "../animated/animsted-text";
import myImage from "./static/meteoroRNN.png";
import portfolioimg from "./static/download.png";
import newsAPIimg from "./static/newsAPI.webp";
import organoimg from "./static/organo.png";
import ecommimg from "./static/ecomm.webp";
import rnnimg from "./static/rnn.jpeg";

const projects = [

  {
    title: "E-commerce Microservices",
    description:
      "A scalable e-commerce platform using microservices architecture with Next.js, Nest.js, MySQL, and Stripe API. Containerized with Docker and orchestrated via Kubernetes.",
    imageUrl: ecommimg,
    githubUrl: "https://github.com/Saketh-09/event-driven-ecommerce",
  },
  {
    title: "Personal Website",
    description:
      "A personal portfolio built with ReactJS, leveraging Material UI and Tailwind CSS to showcase my experience, skills, and projects. Hosted on GitHub Pages.",
    imageUrl: portfolioimg,
    githubUrl: "https://github.com/Saketh-09/portfolio",
  },
  {
    title: "Organo",
    description:
      "An organic farming management system that streamlines workflows for farmers with a Django REST API backend and a ReactJS frontend.",
    imageUrl: organoimg,
    githubUrl: "https://github.com/Saketh-09/1",
  },
  {
    title: "NewsAPI ELK Pipeline",
    description:
      "A real-time data pipeline that processes news data using PySpark Structured Streaming and Apache Kafka for Named Entity Recognition, with insights visualized via the ELK stack.",
    imageUrl: newsAPIimg,
    githubUrl: "https://github.com/Saketh-09/newAPI-ELK",
  },
  {
    title: "MeteoroRNN",
    description:
      "A machine learning project that uses a Recurrent Neural Network (RNN) to predict urban temperatures from historical weather data, learning temporal dependencies for accurate forecasting.",
    imageUrl: rnnimg,
    githubUrl: "https://github.com/Saketh-09/MeteoroRNN",
  },
];

function ProjectsPage() {
  return (
    <Box sx={{ p: { xs: 2, sm: 4, md: 6 } }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 300, letterSpacing: 4, color: "#000064" }}
      >
        <AnimatedTitle text="PROJECTS" />
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": { transform: "translateY(-8px)", boxShadow: 6 },
                background:
                  "linear-gradient(90deg, hsla(152, 100%, 50%, 0.3) 0%, hsla(186, 100%, 69%, 0.3) 100%)",
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={project.imageUrl}
                alt={project.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href={project.githubUrl}
                  target="_blank"
                  sx={{ textTransform: "none" }}
                >
                  View on GitHub
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProjectsPage;
