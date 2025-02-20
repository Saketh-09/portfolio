import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Routes, Route } from "react-router-dom";
import HomeContent from "./backup";
import Education from "../education/education";
import Experience from "../experience/experience";
import ProjectsPage from "../projects/projects";
import {
  Grid,
  Paper,
  Typography,
  IconButton,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { GitHub, LinkedIn, Twitter, Email } from "@mui/icons-material";
import Icon from "@mdi/react";
import { mdiArrowDown } from "@mdi/js";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import FolderIcon from "@mui/icons-material/Folder";
import DescriptionIcon from "@mui/icons-material/Description";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";

export default function Home() {
  return (
    <div id="home">
      <CssBaseline />
      <Container maxWidth="xl" sx={{ paddingLeft: "0", paddingRight: "0" }}>
        <Box sx={{ bgcolor: "inherit", height: "100vh" }}>
          <Grid
            container
            spacing={3}
            sx={{ paddingLeft: "1em", paddingRight: "1em" }}
          >
            {/* Sidebar (image) - Fixed width */}
            <Grid
              item
              xs={12}
              lg={3}
              sx={{ marginTop: "1em", marginBottom: "1em" }}
            >
              <Paper
                elevation={2}
                className="bg-[radial-gradient(circle_500px_at_50%_200px,#e3d5f4,transparent)]"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  height: "100%",
                  padding: "1.5em",
                  position: "sticky",
                  top: "1em",
                  borderRadius: "16px",
                  backgroundImage:
                    "linear-gradient(62deg, rgba(142, 197, 252, 0.3) 0%, rgba(224, 195, 252, 0.3) 100%)",
                }}
              >
                {/* <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  style={{ marginTop: "1em" }}
                >
                  <img
                    className="rounded-full"
                    src={process.env.PUBLIC_URL + "/assets/pic.jpg"}
                    alt="pic"
                    style={{ width: "30%", height: "auto", marginTop: "1em" }}
                  />
                  <Stack>
                    <Typography variant="h6">Saketh Annimalla</Typography>
                    <Typography variant="body2" color="textSecondary">
                      sakethannimalla9@gmail.com
                    </Typography>
                  </Stack>
                </Stack> */}
                <Stack alignItems="center" spacing={1} mt={2}>
                  <Avatar
                    src={process.env.PUBLIC_URL + "/assets/pic.jpg"}
                    sx={{ width: 80, height: 80 }}
                  />
                  <Typography variant="h6">Saketh Annimalla</Typography>
                  <Typography variant="body2" color="textSecondary">
                    sakethannimalla9@gmail.com
                  </Typography>
                  <span class="bg-[rgba(95,154,192,1)] text-gray-100 text-xs font-medium my-4 me-2 px-2.5 py-0.5 rounded border border-gray-500">
                    Software Engineer
                  </span>
                </Stack>

                <Divider sx={{ my: 1 }} />

                <List>
                  {[
                    { text: "Home", icon: <HomeIcon />, path: "/portfolio" },
                    {
                      text: "Experience",
                      icon: <WorkIcon />,
                      path: "/experience",
                    },
                    {
                      text: "Projects",
                      icon: <FolderIcon />,
                      path: "/projects",
                    },
                    {
                      text: "Education",
                      icon: <SchoolIcon />,
                      path: "/education",
                    },
                    {
                      text: "Resume",
                      icon: <DescriptionIcon />,
                      path: "/resume",
                    },
                  ].map((item, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemButton component={Link} to={item.path}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                {/* Contact Information */}
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent="center"
                  mt={2}
                >
                  <PhoneIcon fontSize="small" color="action" />
                  <Typography variant="body2" color="textSecondary">
                    +1 (945) 244-224
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent="center"
                  mt={1}
                >
                  <LocationOnIcon fontSize="small" color="action" />
                  <Typography variant="body2" color="textSecondary">
                    Dallas, TX
                  </Typography>
                </Stack>

                {/* Social Links */}
                <Box sx={{ p: 2 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "1em",
                    }}
                  >
                    <IconButton
                      href="https://github.com/Saketh-09"
                      target="_blank"
                    >
                      <GitHub />
                    </IconButton>
                    <IconButton
                      href="http://linkedin.com/in/annimalla-saketh/"
                      target="_blank"
                    >
                      <LinkedIn />
                    </IconButton>
                    <IconButton href="mailto:sakethannimalla9@gmail.com">
                      <Email />
                    </IconButton>
                  </div>
                </Box>
                <Card
                  variant="outlined"
                  sx={{ maxWidth: 360, background: "inherit" }}
                >
                  {/* <Box sx={{ p: 2 }}>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      <EmailIcon />
                      Email address
                    </Typography>
                    <Stack
                      direction="row"
                      sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography gutterBottom variant="h6" component="div">
                        sakethannimalla9@gmail.com
                      </Typography>
                    </Stack>
                  </Box>
                  <Divider />
                  <Box sx={{ p: 2 }}>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      <LocationOnIcon />
                      Home address
                    </Typography>
                    <Stack
                      direction="row"
                      sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography gutterBottom variant="h6" component="div">
                        Dallas, Texas, USA
                      </Typography>
                    </Stack>
                  </Box>
                  <Divider />
                  <Box sx={{ p: 2 }}>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      <LocalPhoneIcon />
                      Phone number
                    </Typography>
                    <Stack
                      direction="row"
                      sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography gutterBottom variant="h6" component="div">
                        +1 (945)-244-2224
                      </Typography>
                    </Stack>
                  </Box>
                  <Divider />

                  <Box sx={{ p: 2 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "1em",
                      }}
                    >
                      <IconButton
                        href="https://github.com/Saketh-09"
                        target="_blank"
                      >
                        <GitHub />
                      </IconButton>
                      <IconButton
                        href="http://linkedin.com/in/annimalla-saketh/"
                        target="_blank"
                      >
                        <LinkedIn />
                      </IconButton>
                      <IconButton href="mailto:sakethannimalla9@gmail.com">
                        <Email />
                      </IconButton>
                    </div>
                  </Box> */}
                </Card>

                {/* Download Resume Button */}
                {/* <Button
                  variant="contained"
                  // color="primary"
                  href={process.env.PUBLIC_URL + "/assets/resume.pdf"}
                  target="_blank"
                  class="text-white bg-[rgba(127,97,133,1)] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-4 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Download Resume{" "}
                  <Icon
                    path={mdiArrowDown}
                    size={0.8}
                    style={{ display: "inline" }}
                  />
                </Button> */}
              </Paper>
            </Grid>

            {/* Main Content */}
            <Grid
              item
              xs={12}
              lg={9}
              sx={{ marginTop: "1em", marginBottom: "1em", overflow: "hidden" }}
            >
              <Paper
                elevation={2}
                className="bg-[radial-gradient(circle_2000px_at_20%_200px,#e3d5f4,transparent)]"
                sx={{
                  minHeight: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  overflow: "auto",
                  borderRadius: "16px",
                  // backgroundColor: "#8EC5FC",
                  // backgroundImage:
                  //   "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
                  backgroundImage:
                    "linear-gradient(62deg, rgba(142, 197, 252, 0.3) 0%, rgba(224, 195, 252, 0.3) 100%)",
                }}
              >
                {/* Main Content - Remaining width */}
                <Box sx={{ flexGrow: 1 }}>
                  <Routes>
                    <Route path="/portfolio/" element={<HomeContent />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                  </Routes>
                </Box>
                {/* <Contact sx={{ margin: '1em' }} /> */}
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
