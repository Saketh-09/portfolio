import * as React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Card,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Menu as MenuIcon,
  GitHub,
  LinkedIn,
  Email,
  Home as HomeIcon,
  Work as WorkIcon,
  Folder as FolderIcon,
  School as SchoolIcon,
  Description as DescriptionIcon,
  Phone as PhoneIcon,
  LocationOn as LocationOnIcon,
} from "@mui/icons-material";
import { Routes, Route, Link } from "react-router-dom";
import HomeContent from "./backup";
import Education from "../education/education";
import Experience from "../experience/experience";
import ProjectsPage from "../projects/projects";

// You can tweak this width to your liking
const drawerWidth = 300;

export default function Home() {
  // State to open/close the mobile drawer
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Sidebar (Drawer) Content
  const drawerContent = (
    <div
      // You can keep tailwind + MUI SX or move entirely to SX if preferred
      className="bg-[radial-gradient(circle_500px_at_50%_200px,#e3d5f4,transparent)]"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100%",
        padding: "1.5em",
        borderRadius: "16px",
        backgroundImage:
          "linear-gradient(62deg, rgba(142, 197, 252, 0.3) 0%, rgba(224, 195, 252, 0.3) 100%)",
      }}
    >
      <Stack alignItems="center" spacing={1} mt={2}>
        <Avatar
          src={process.env.PUBLIC_URL + "/assets/pic.jpg"}
          sx={{ width: 80, height: 80 }}
        />
        <Typography variant="h6">Saketh Annimalla</Typography>
        <Typography variant="body2" color="textSecondary">
          sakethannimalla9@gmail.com
        </Typography>
        <span className="bg-[rgba(95,154,192,1)] text-gray-100 text-xs font-medium my-4 me-2 px-2.5 py-0.5 rounded border border-gray-500">
          Software Engineer
        </span>
      </Stack>

      <Divider sx={{ my: 1 }} />

      <List>
        {[
          { text: "Home", icon: <HomeIcon />, path: "/portfolio" },
          { text: "Experience", icon: <WorkIcon />, path: "/experience" },
          { text: "Projects", icon: <FolderIcon />, path: "/projects" },
          { text: "Education", icon: <SchoolIcon />, path: "/education" },
          {
            text: "Resume",
            icon: <DescriptionIcon />,
            external:
              "https://drive.google.com/file/d/1xbn_Eq04ZjK5OGQxM70qfY8RzYs9EcRp/view?usp=sharing",
          },
        ].map((item, index) => (
          <ListItem key={index} disablePadding>
            {item.external ? (
              <ListItemButton
                component="a"
                href={item.external}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            ) : (
              <ListItemButton component={Link} to={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            )}
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
          <IconButton href="https://github.com/Saketh-09" target="_blank">
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

      <Card variant="outlined" sx={{ maxWidth: 360, background: "inherit" }} />
    </div>
  );

  return (
    <div id="home">
      <CssBaseline />

      {/* 
        Optional: An AppBar with a MenuIcon to toggle drawer on small screens.
        On large screens, the drawer is always open (permanent).
      */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#6200EE", // Or any color you prefer
          zIndex: (theme) => theme.zIndex.drawer + 1,
          display: { lg: "none" }, // Hide the AppBar on large screens
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Portfolio
          </Typography>
        </Toolbar>
      </AppBar>

      {/* 
        Main container that holds the Drawer + Content
        On large screens, we don't show the AppBar. On small screens, the AppBar + temporary drawer.
      */}
      <Container
        maxWidth="xl"
        sx={{
          paddingLeft: "0",
          paddingRight: "0",
          // Ensure there's spacing below the AppBar on mobile
          mt: { xs: 8, lg: 0 },
        }}
      >
        <Box sx={{ display: "flex" }}>
          {/* PERMANENT DRAWER (shown on large screens) */}
          <Hidden lgDown>
            <Drawer
              variant="permanent"
              open
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                  boxSizing: "border-box",
                  borderRight: "none", // remove the default border if you want
                },
              }}
            >
              <Paper
                elevation={2}
                sx={{
                  minHeight: "100%",
                  borderRadius: "16px",
                  backgroundImage:
                    "radial-gradient(circle_2000px_at_20%_200px,#e3d5f4,transparent), " +
                    "linear-gradient(62deg, rgba(142, 197, 252, 0.3) 0%, rgba(224, 195, 252, 0.3) 100%)",
                }}
              >
                {drawerContent}
              </Paper>
            </Drawer>
          </Hidden>

          {/* TEMPORARY DRAWER (shown on small screens) */}
          <Hidden lgUp>
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{ keepMounted: true }} // improves performance on mobile
              sx={{
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                  boxSizing: "border-box",
                },
              }}
            >
              {drawerContent}
            </Drawer>
          </Hidden>

          {/* MAIN CONTENT AREA */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              minHeight: "100vh",
              // The radial + linear background from your code
              backgroundImage:
                "radial-gradient(circle_2000px_at_20%_200px,#e3d5f4,transparent), " +
                "linear-gradient(62deg, rgba(142, 197, 252, 0.3) 0%, rgba(224, 195, 252, 0.3) 100%)",
              p: 2,
            }}
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
                backgroundImage:
                  "linear-gradient(62deg, rgba(142, 197, 252, 0.3) 0%, rgba(224, 195, 252, 0.3) 100%)",
              }}
            >
              {/* Insert your routes here */}
              <Routes>
                <Route path="/portfolio/" element={<HomeContent />} />
                <Route path="/education" element={<Education />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<ProjectsPage />} />
              </Routes>
            </Paper>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
