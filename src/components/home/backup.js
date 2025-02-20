// import * as React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import { Grid, Paper, Typography } from "@mui/material";
import home from "./content";
// import { motion } from "framer-motion";
// import Contact from "../contact/contact";
import styles from "./home.module.css";
// import { TypeAnimation } from "react-type-animation";

// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import Avatar from "@mui/material/Avatar";
// import AutoStoriesIcon from "@mui/icons-material/AutoStories";
// import WorkIcon from "@mui/icons-material/Work";
// import EngineeringIcon from "@mui/icons-material/Engineering";

// export default function HomeContent() {
//   return (
//     <>
//       <div className="m-4 sm:m-14">
//         <Typography
//           variant="h3"
//           className={styles.greeting}
//           sx={{ fontWeight: 400 }}
//         >
//           {home.greeting}
//         </Typography>

//         <Typography
//           variant="h3"
//           className={styles.name}
//           sx={{ fontWeight: 400 }}
//         >
//           <motion.span
//             className="name"
//             initial={{ opacity: window.innerWidth < 996 ? "100%" : "0%" }}
//             animate={{ opacity: "100%" }}
//             transition={{ delay: 1.0, duration: 1 }}
//             exit={{ opacity: "0%", y: "200%" }}
//           >
//             <TypeAnimation
//               cursor={true}
//               sequence={[
//                 "",
//                 500,
//                 "Saketh Annimalla", // Add the entire tag inside the sequence
//                 1000,
//                 "CS grad student, Software engineer", // Add other texts with tags
//                 500,
//                 "",
//               ]}
//               repeat={Infinity}
//               className="block"
//             />
//           </motion.span>
//         </Typography>
//         <Grid container spacing={3} sx={{ backgroundColor: "inherit" }}>
//           {/* Sidebar (image) - Fixed width */}
//           <Grid
//             item
//             xs={12}
//             lg={6}
//             sx={{
//               backgroundColor: "inherit",
//               marginTop: "1em",
//               marginBottom: "1em",
//             }}
//           >
//             {/* <Typography className={styles.body} sx={{ margin: '1em', fontWeight: 300 }}>
//         {home.aboutMe}
//         </Typography> */}

//             <List>
//               <ListItem>
//                 <ListItemAvatar>
//                   <Avatar>
//                     <WorkIcon />
//                   </Avatar>
//                 </ListItemAvatar>
//                 <ListItemText primary={home.role} secondary={home.rilDetail} />
//               </ListItem>
//               <ListItem>
//                 <ListItemAvatar>
//                   <Avatar>
//                     <AutoStoriesIcon />
//                   </Avatar>
//                 </ListItemAvatar>
//                 <ListItemText primary={home.edu} secondary={home.eduDetail} />
//               </ListItem>
//               <ListItem>
//                 <ListItemAvatar>
//                   <Avatar>
//                     <EngineeringIcon />
//                   </Avatar>
//                 </ListItemAvatar>
//                 <ListItemText
//                   primary={home.interests}
//                   secondary={
//                     <ul class="space-y-4 m-4 text-left text-gray-500 dark:text-gray-700">
//                       <li class="flex items-center space-x-3 rtl:space-x-reverse">
//                         <svg
//                           class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
//                           aria-hidden="true"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
//                         </svg>
//                         <span>FastAPI, Django, Flask, SpringBoost</span>
//                       </li>
//                       <li class="flex items-center space-x-3 rtl:space-x-reverse">
//                         <svg
//                           class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
//                           aria-hidden="true"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
//                         </svg>
//                         <span>ReactJS</span>
//                       </li>
//                       <li class="flex items-center space-x-3 rtl:space-x-reverse">
//                         <svg
//                           class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
//                           aria-hidden="true"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
//                         </svg>
//                         <span>Kubernetes, Docker</span>
//                       </li>
//                       <li class="flex items-center space-x-3 rtl:space-x-reverse">
//                         <svg
//                           class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
//                           aria-hidden="true"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
//                         </svg>
//                         <span>Kafka, gRPC, WebSocket</span>
//                       </li>
//                       <li class="flex items-center space-x-3 rtl:space-x-reverse">
//                         <svg
//                           class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
//                           aria-hidden="true"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
//                         </svg>
//                         <span>MySQL, PSQL, Redis Cache</span>
//                       </li>
//                     </ul>
//                   }
//                 />
//               </ListItem>
//             </List>
//           </Grid>

//           {/* Main Content */}
//           <Grid
//             item
//             xs={12}
//             lg={6}
//             sx={{
//               backgroundColor: "inherit",
//               marginTop: "1em",
//               marginBottom: "1em",
//               overflow: "hidden",
//             }}
//           >
//             <div class="max-w-sm p-6 bg-[rgba(85,71,90,1)] border border-gray-200 rounded-lg shadow dark:border-gray-700">
//               <a href="#">
//                 <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                   {home.summaryTitle}
//                 </h5>
//               </a>

//               <blockquote class="text-sm font-semibold text-gray-900 dark:text-white">
//                 <p>{home.summaryConetent}</p>
//               </blockquote>
//             </div>
//           </Grid>
//         </Grid>
//       </div>
//     </>
//   );
// }

import * as React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// Import specific tech icons from react-icons
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiFastapi,
  SiPython,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";

const resumeContent = {
  greeting: "Hello, I'm Saketh Annimalla",
  name: "Saketh Annimalla",
  tagline: "CS Grad Student | Software Engineer",
  summaryTitle: "About Me",
  summaryContent:
    "I am an experienced and passionate software engineer specializing in LangChain, Large Language Models, and distributed systems. From building RAG-based LLM platforms to designing robust, scalable architectures, I leverage cutting-edge technologies to solve complex real-time challenges.",
  education: [
    {
      institution: "The University of Texas at Dallas",
      degree: "M.Sc. Computer Science",
      details: "May 2025 | GPA: 4.00/4",
    },
    {
      institution: "Indian Institute of Technology Hyderabad",
      degree: "B.Tech, Civil Engineering",
      details: "May 2021 | GPA: 8.17/10",
    },
  ],
  experience: [
    {
      title: "Software Developer Intern",
      company: "BeeHyv Software Solutions, Dallas",
      period: "May 2024 – January 2025",
      description:
        "Developed a RAG-based LLM platform (Genie) with multi-source ingestion, built LangChain pipelines, integrated Role-Based Access Control with Keycloak, and implemented cloud-based IC evaluation with FastAPI, Kafka, gRPC, and ReactJS.",
    },
    {
      title: "CS Outreach Instructor",
      company: "University of Texas at Dallas",
      period: "Dec 2023 – April 2024",
      description:
        "Conducted hands-on Java programming workshops to reinforce object-oriented programming and problem-solving techniques.",
    },
    {
      title: "Software Developer",
      company: "BeeHyv Software Solutions, Hyderabad",
      period: "July 2022 – July 2023",
      description:
        "Built a high-performance ingestion module with FastAPI, achieving a 95% reduction in processing time using asynchronous batch insertions, and managed data models with SQLAlchemy and Alembic.",
    },
    {
      title: "Automation Engineer",
      company: "New Age IT, Mumbai",
      period: "Sept 2021 – June 2022",
      description:
        "Configured Jenkins pipelines, developed Python test scripts, and optimized SQL query suites to improve workflow efficiency and software reliability.",
    },
  ],
  // Define each tech stack with an icon and a short description of usage
  techStacks: [
    {
      name: "ReactJS",
      Icon: SiReact,
      description: "Developed responsive UIs and interactive dashboards.",
    },
    {
      name: "LangChain",
      Icon: FaBrain,
      description: "Implemented RAG-based LLM pipelines for semantic search.",
    },
    {
      name: "TypeScript",
      Icon: SiTypescript,
      description: "Built scalable, type-safe applications.",
    },
    {
      name: "JavaScript",
      Icon: SiJavascript,
      description: "Enhanced dynamic interactions on web interfaces.",
    },
    {
      name: "FastAPI",
      Icon: SiFastapi,
      description: "Created high-performance RESTful APIs.",
    },
    {
      name: "Python",
      Icon: SiPython,
      description: "Used for scripting, data processing, and ML projects.",
    },
    {
      name: "Kafka",
      Icon: SiKubernetes,
      description: "Stream processing for real-time data pipelines.",
    },
    {
      name: "Docker",
      Icon: SiDocker,
      description: "Containerized applications for consistent deployments.",
    },
    {
      name: "Kubernetes",
      Icon: SiKubernetes,
      description: "Orchestrated microservices and managed clusters.",
    },
  ],
  projects: [
    {
      name: "E-commerce Platform",
      link: "https://github.com/Saketh-09/event-driven-ecommerce",
      description:
        "A scalable microservices-based platform using Apache Kafka, Next.js, Nest.js, and CI/CD pipelines.",
    },
    {
      name: "Portfolio Website",
      link: "https://saketh-09.github.io/portfolio/",
      description:
        "A personal portfolio built with ReactJS, Material UI, Chakra UI, and Tailwind CSS.",
    },
    {
      name: "NewsAPI-ELK",
      link: "https://github.com/Saketh-09/newAPI-ELK",
      description:
        "A real-time data pipeline using Kafka, PySpark, and the ELK stack to process and visualize news data.",
    },
    {
      name: "MeteoroRNN",
      link: "https://github.com/Saketh-09/MeteoroRNN",
      description:
        "A recurrent neural network for urban temperature prediction using weather station data.",
    },
    {
      name: "Organic Farming System",
      link: "#",
      description:
        "A Django and ReactJS application for managing organic farming operations.",
    },
  ],
  contact: {
    email: "sakethannimalla9@gmail.com",
    linkedIn: "http://linkedin.com/in/annimalla-saketh/",
    github: "http://github.com/Saketh-09",
  },
};

export default function HomeContent() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h3"
          className={styles.greeting}
          sx={{ fontWeight: 400 }}
        >
          {home.greeting}
        </Typography>

        <Typography
          variant="h3"
          className={styles.name}
          sx={{ fontWeight: 400 }}
        >
          <motion.span
            className="name"
            initial={{ opacity: window.innerWidth < 996 ? "100%" : "0%" }}
            animate={{ opacity: "100%" }}
            transition={{ delay: 1.0, duration: 1 }}
            exit={{ opacity: "0%", y: "200%" }}
          >
            <TypeAnimation
              cursor={true}
              sequence={[
                "",
                500,
                "Saketh Annimalla", // Add the entire tag inside the sequence
                1000,
                "CS grad student, Software engineer", // Add other texts with tags
                500,
                "",
              ]}
              repeat={Infinity}
              className="block"
            />
          </motion.span>
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Left Column: About, Education, Tech Stacks */}
        <Grid item xs={12} md={6}>
          {/* About / Summary Card */}
          <Card
            sx={{
              mb: 4,
              boxShadow: 3,
              background:
                "linear-gradient(90deg, hsla(152, 100%, 50%, 0.4) 0%, hsla(186, 100%, 69%, 0.3) 100%)",
            }}
            className="home-card"
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {resumeContent.summaryTitle}
              </Typography>
              <Typography variant="body1">
                {resumeContent.summaryContent}
              </Typography>
            </CardContent>
          </Card>

          {/* Education Card */}
          <Card
            sx={{
              mb: 4,
              boxShadow: 3,
              background:
                "linear-gradient(90deg, hsla(152, 100%, 50%, 0.4) 0%, hsla(186, 100%, 69%, 0.3) 100%)",
            }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                <SchoolIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                Education
              </Typography>
              {resumeContent.education.map((edu, idx) => (
                <Box key={idx} sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {edu.degree}
                  </Typography>
                  <Typography variant="body2">
                    {edu.institution} — {edu.details}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>

          {/* Tech Stacks Card */}
          <Card
            sx={{
              mb: 4,
              boxShadow: 3,
              background:
                "linear-gradient(90deg, hsla(152, 100%, 50%, 0.4) 0%, hsla(186, 100%, 69%, 0.3) 100%)",
            }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Technical Skills
              </Typography>
              <Grid container spacing={2}>
                {resumeContent.techStacks.map((tech, idx) => {
                  const IconComponent = tech.Icon;
                  return (
                    <Grid item xs={12} sm={6} key={idx}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 1 }}
                      >
                        <IconComponent size={28} style={{ marginRight: 8 }} />
                        <Typography variant="subtitle1" fontWeight="bold">
                          {tech.name}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {tech.description}
                      </Typography>
                    </Grid>
                  );
                })}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column: Experience, Projects, Contact */}
        <Grid item xs={12} md={6}>
          {/* Experience Card */}
          <Card
            sx={{
              mb: 4,
              boxShadow: 3,
              background:
                "linear-gradient(90deg, hsla(152, 100%, 50%, 0.4) 0%, hsla(186, 100%, 69%, 0.3) 100%)",
            }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                <WorkIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                Professional Highlights
              </Typography>
              {resumeContent.experience.map((exp, idx) => (
                <Box key={idx} sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {exp.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {exp.company} | {exp.period}
                  </Typography>
                  <Typography variant="body2">{exp.description}</Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
