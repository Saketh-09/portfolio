import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, NavLink } from "react-router-dom";
import { resumeURL } from "./navData";
import styles from "./navbar.module.css";

const pages = [
  { name: "Home", url: "/portfolio/" },
  { name: "Education", url: "/education" },
  { name: "Experience", url: "/experience" },
  { name: "Projects", url: "/projects" },
];

function ResponsiveAppBar() {
  const [activeItem, setactiveItem] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleSetActiveItem = (item) => {
    setactiveItem(item);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const activeClassName = styles.activeSection;
  const inActiveClassName = styles.inActiveSection;

  return (
    <AppBar sx={{ bgcolor: "#fff", boxShadow: 0, position: "sticky" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          {/* Mobile Menu */}
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
            }}
          >
            <IconButton
              size="large"
              aria-label="open menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#000"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link
                  to={page.url}
                  sx={{ textDecoration: "none" }}
                  key={page.name}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      sx={{ textDecoration: "none" }}
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          {/* Logo or Icon for mobile */}
          <AdbIcon
            sx={{ flexGrow: 0, display: { xs: "flex", md: "none" }, mr: 1 }}
          />

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <NavLink
                to={page.url}
                key={page.name}
                className={({ isActive }) =>
                  // Optionally, you can apply styles to NavLink itself
                  isActive ? "active-link-styles" : "inactive-link-styles"
                }
              >
                {({ isActive }) => (
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ m: 2, color: "inherit" }}
                  >
                    <Typography
                      variant="h6"
                      class={
                        isActive
                          ? "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                          : "bg-transparent hover:bg-gray-900 text-gray-700 font-medium hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg"
                      }
                      sx={{
                        fontWeight: 400,
                        color: "inherit",
                        textShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {page.name}
                    </Typography>
                  </Button>
                )}
              </NavLink>
            ))}
            <NavLink to={resumeURL} target="_blank" rel="noopener noreferrer">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ m: 2, color: "inherit" }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 400, color: "inherit" }}
                  class="bg-transparent hover:bg-gray-900 text-gray-700 font-medium hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg"
                >
                  Resume
                </Typography>
              </Button>
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
