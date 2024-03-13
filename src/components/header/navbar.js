import * as React from 'react';
import {AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Container, Button
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import {Link, NavLink} from 'react-router-dom'
import {resumeURL} from "./navData";
import styles from './navbar.module.css';

const pages = [{name:'Home',url:'/portfolio/'},
    {name:'Education', url:'/education'},
    {name:'Experience', url:'/experience'}];

function ResponsiveAppBar() {
    const [activeItem, setactiveItem] = React.useState(null)
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

    const activeClassName = styles.activeSection
    const inActiveClassName = styles.inActiveSection
    return (
    <AppBar sx={{ bgcolor: "#fff", boxShadow: 0, position: 'sticky' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
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
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none', textDecoration: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <Link to={page.url} sx={{textDecoration: 'none'}}>
                                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center"  sx={{textDecoration: "none"}}>{page.name}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <NavLink to={page.url} className={({isActive}) =>
                                isActive ? activeClassName:inActiveClassName}>
                                <Button
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                    sx={{ m: 2, display: 'block',color:'inherit'}}>
                                    <Typography variant='h6' sx={{fontWeight:400, color:'inherit'}} >{page.name}</Typography>
                                </Button>
                            </NavLink>
                        ))}
                        <NavLink to={resumeURL} target="_blank" rel="noopener noreferrer" className={({ isActive}) =>
                            isActive ? activeClassName:inActiveClassName}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ m: 2, display: 'block', color:'inherit'}}>
                                <Typography variant='h6' sx={{fontWeight:400, color:'inherit'}} >Resume</Typography>
                            </Button></NavLink>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
