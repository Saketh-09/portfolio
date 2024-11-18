import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid, Paper, Typography } from "@mui/material";
import home from "./content";
import { motion } from "framer-motion";
import Contact from "../contact/contact";
import styles from "./home.module.css";
import { TypeAnimation } from "react-type-animation";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import WorkIcon from "@mui/icons-material/Work";
import EngineeringIcon from "@mui/icons-material/Engineering";

export default function HomeContent() {
  return (
    <>
      <div className="m-4 sm:m-14">
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
        <Grid container spacing={3} sx={{ backgroundColor: "inherit" }}>
          {/* Sidebar (image) - Fixed width */}
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              backgroundColor: "inherit",
              marginTop: "1em",
              marginBottom: "1em",
            }}
          >
            {/* <Typography className={styles.body} sx={{ margin: '1em', fontWeight: 300 }}>
        {home.aboutMe}
        </Typography> */}

            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={home.role} secondary={home.rilDetail} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AutoStoriesIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={home.edu} secondary={home.eduDetail} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <EngineeringIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={home.interests}
                  secondary={
                    <ul class="space-y-4 m-4 text-left text-gray-500 dark:text-gray-700">
                      <li class="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg
                          class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span>FastAPI, Django, Flask, SpringBoost</span>
                      </li>
                      <li class="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg
                          class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span>ReactJS</span>
                      </li>
                      <li class="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg
                          class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span>Kubernetes, Docker</span>
                      </li>
                      <li class="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg
                          class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span>Kafka, gRPC, WebSocket</span>
                      </li>
                      <li class="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg
                          class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span>MySQL, PSQL, Redis Cache</span>
                      </li>
                    </ul>
                  }
                />
              </ListItem>
            </List>
          </Grid>

          {/* Main Content */}
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              backgroundColor: "inherit",
              marginTop: "1em",
              marginBottom: "1em",
              overflow: "hidden",
            }}
          >
            <div class="max-w-sm p-6 bg-[rgba(85,71,90,1)] border border-gray-200 rounded-lg shadow dark:border-gray-700">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {home.summaryTitle}
                </h5>
              </a>

              <blockquote class="text-sm font-semibold text-gray-900 dark:text-white">
                <p>{home.summaryConetent}</p>
              </blockquote>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
