import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid, Paper, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import styles from "./experience.module.css";
import { name, location, role, dates, projects } from "./expData";
import AnimatedTitle from "../animated/animsted-text";
export default function Experience() {
  const beehyvKeys = Object.keys(projects.beehyv);
  const newAgeKeys = Object.keys(projects.newage);
  const utdKeys = Object.keys(projects.utd);

  const renderPoints = (keys, data) => {
    return keys.map((key) => (
      <div key={key}>
        <Typography
          variant="h6"
          className={styles.cgpa}
          sx={{ fontWeight: 350 }}
        >
          {key}
        </Typography>
        <ul class="space-y-1 text-gray-500 dark:text-gray-700 list-disc">
          {data[key].map((point, index) => (
            <li key={index}>
              <Typography variant="body1" className={styles.cgpa}>
                {point}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <div id="education" className="m-4 sm:m-14">
      <Typography
        variant="h3"
        className={styles.education}
        sx={{ fontWeight: 300, letterSpacing: 4 }}
      >
        <AnimatedTitle text="EXPERIENCE" />
      </Typography>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ borderRadius: 1, borderBlockColor: grey }}>
          <Grid container spacing={2}>
            <Grid item lg={2} xs={12}>
              <Paper elevation={0} sx={{ background: "inherit" }}>
                <img
                  src={process.env.PUBLIC_URL + "/assets/beehyvLogo.svg"}
                  alt="utd logo"
                  className={styles.logo}
                />
              </Paper>
            </Grid>
            <Grid item lg={10} xs={12}>
              <Paper
                elevation={0}
                sx={{ marginLeft: { sm: "3em" }, background: "inherit" }}
              >
                <Typography variant="h6" className={styles.education}>
                  {name.beehyv2}
                </Typography>
                <Typography
                  className={styles.location}
                  variant="caption"
                  display="block"
                >
                  {location.beehyv2}
                </Typography>
                <Typography
                  variant="h6"
                  className={styles.course}
                  sx={{ fontWeight: 400 }}
                >
                  {role.beehyv2}
                </Typography>
                <Typography
                  className={styles.dates}
                  variant="caption"
                  display="block"
                >
                  {dates.beehyv2}
                </Typography>
                <div>{renderPoints(utdKeys, projects.beehyv2)}</div>
                <br />
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <hr className={styles.hr} />
      </Container>
      <Container maxWidth="lg">
        <Box sx={{ borderRadius: 1, borderBlockColor: grey }}>
          <Grid container spacing={2}>
            <Grid item lg={2} xs={12}>
              <Paper elevation={0} sx={{ background: "inherit" }}>
                <img
                  src={process.env.PUBLIC_URL + "/assets/utdLogo.png"}
                  alt="utd logo"
                  className={styles.logo}
                />
              </Paper>
            </Grid>
            <Grid item lg={10} xs={12}>
              <Paper
                elevation={0}
                sx={{ marginLeft: { sm: "3em" }, background: "inherit" }}
              >
                <Typography variant="h6" className={styles.education}>
                  {name.utd}
                </Typography>
                <Typography
                  className={styles.location}
                  variant="caption"
                  display="block"
                >
                  {location.utd}
                </Typography>
                <Typography
                  variant="h6"
                  className={styles.course}
                  sx={{ fontWeight: 400 }}
                >
                  {role.utd}
                </Typography>
                <Typography
                  className={styles.dates}
                  variant="caption"
                  display="block"
                >
                  {dates.utd}
                </Typography>
                <div>{renderPoints(utdKeys, projects.utd)}</div>
                <br />
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <hr className={styles.hr} />
      </Container>
      <Container maxWidth="lg">
        <Box sx={{ borderRadius: 1, borderBlockColor: grey }}>
          <Grid container spacing={2}>
            <Grid item lg={2} xs={12}>
              <Paper elevation={0} sx={{ background: "inherit" }}>
                <img
                  src={process.env.PUBLIC_URL + "/assets/beehyvLogo.svg"}
                  alt="utd logo"
                  className={styles.logo}
                />
              </Paper>
            </Grid>
            <Grid item lg={10} xs={12}>
              <Paper
                elevation={0}
                sx={{ marginLeft: { sm: "3em" }, background: "inherit" }}
              >
                <Typography variant="h6" className={styles.education}>
                  {name.beehyv}
                </Typography>
                <Typography
                  className={styles.location}
                  variant="caption"
                  display="block"
                >
                  {location.beehyv}
                </Typography>
                <Typography
                  variant="h6"
                  className={styles.course}
                  sx={{ fontWeight: 400 }}
                >
                  {role.beehyv}
                </Typography>
                <Typography
                  className={styles.dates}
                  variant="caption"
                  display="block"
                >
                  {dates.beehyv}
                </Typography>
                <div>{renderPoints(beehyvKeys, projects.beehyv)}</div>
                <br />
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <hr className={styles.hr} />
      </Container>
      <Container maxWidth="lg">
        <Box sx={{ borderRadius: 1, borderBlockColor: grey }}>
          <Grid container spacing={2}>
            <Grid item lg={2} xs={12}>
              <Paper elevation={0} sx={{ background: "inherit" }}>
                <img
                  src={process.env.PUBLIC_URL + "/assets/newageitLogo.jpeg"}
                  alt="utd logo"
                  className={styles.logo}
                />
              </Paper>
            </Grid>
            <Grid item lg={10} xs={12}>
              <Paper
                elevation={0}
                sx={{ marginLeft: { sm: "3em" }, background: "inherit" }}
              >
                <Typography variant="h6" className={styles.education}>
                  {name.newage}
                </Typography>
                <Typography
                  className={styles.location}
                  variant="caption"
                  display="block"
                >
                  {location.newage}
                </Typography>
                <Typography
                  variant="h6"
                  className={styles.course}
                  sx={{ fontWeight: 400 }}
                >
                  {role.newage}
                </Typography>
                <Typography
                  className={styles.dates}
                  variant="caption"
                  display="block"
                >
                  {dates.newage}
                </Typography>
                <div>{renderPoints(newAgeKeys, projects.newage)}</div>
                <br />
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <hr className={styles.hr} />
      </Container>
    </div>
  );
}
