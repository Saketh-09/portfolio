// import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Typography, Paper, Avatar } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import AnimatedTitle from "../animated/animsted-text";
import styles from "./experience.module.css";
import { name, location, role, dates, projects } from "./expData";

const ExperienceTimelineItem = ({
  logo,
  name,
  location,
  role,
  dates,
  projects,
  index,
  isLast,
}) => {
  // Helper to render project details as bullet points
  const renderProjects = (projects) => {
    return Object.keys(projects).map((projectKey) => (
      <div key={projectKey} style={{ marginTop: "8px" }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
          {projectKey}
        </Typography>
        <ul style={{ marginLeft: "20px", listStyleType: "disc" }}>
          {projects[projectKey].map((point, idx) => (
            <li key={idx}>
              <Typography variant="body2">{point}</Typography>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <TimelineItem>
      {/* Left Side: Dates */}
      <TimelineOppositeContent style={{ flex: 0.1 }}>
        <Typography variant="body2" color="textSecondary">
          {dates}
        </Typography>
      </TimelineOppositeContent>

      {/* Middle: Icon and Connector */}
      <TimelineSeparator>
        <TimelineDot>
          <Avatar
            src={process.env.PUBLIC_URL + logo}
            sx={{ width: 50, height: 50 }}
          />
        </TimelineDot>
        {!isLast && <TimelineConnector />}
      </TimelineSeparator>

      {/* Right Side: Experience Details */}
      <TimelineContent>
        <Paper
          elevation={1}
          sx={{
            padding: "10px",
            background: "inherit",
            borderRadius: "16px",
            background: "linear-gradient(90deg, hsla(152, 100%, 50%, 0.4) 0%, hsla(186, 100%, 69%, 0.3) 100%)"
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 350 }}>
            {name}
          </Typography>
          <Typography variant="caption">{location}</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 400 }}>
            {role}
          </Typography>
          {renderProjects(projects)}
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

export default function Experience() {
  // Build an array of experience items.
  const experiences = [
    {
      logo: "/assets/beehyvLogo2.png",
      name: name.beehyv2,
      location: location.beehyv2,
      role: role.beehyv2,
      dates: dates.beehyv2,
      projects: projects.beehyv2,
    },
    {
      logo: "/assets/utdLogo2.png",
      name: name.utd,
      location: location.utd,
      role: role.utd,
      dates: dates.utd,
      projects: projects.utd,
    },
    {
      logo: "/assets/beehyvLogo2.png",
      name: name.beehyv,
      location: location.beehyv,
      role: role.beehyv,
      dates: dates.beehyv,
      projects: projects.beehyv,
    },
    {
      logo: "/assets/newageitLogo.jpeg",
      name: name.newage,
      location: location.newage,
      role: role.newage,
      dates: dates.newage,
      projects: projects.newage,
    },
  ];

  return (
    <div id="experience" className="m-4 sm:m-14">
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          className={styles.education}
          sx={{ fontWeight: 300, letterSpacing: 4, color: "#000064" }}
        >
          <AnimatedTitle text="EXPERIENCE" />
        </Typography>
        <Timeline align="alternate">
          {experiences.map((item, index) => (
            <ExperienceTimelineItem
              key={index}
              {...item}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </Timeline>
      </Container>
    </div>
  );
}
