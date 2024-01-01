import * as React from 'react';
import {AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Container, Button
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import {Link} from 'react-router-dom'
import {resumeURL} from "./navData";

const pages = [{name:'Home',url:'/portfolio/'},
    {name:'Education', url:'/portfolio/education'},
    ,{name:'Experience', url:'/portfolio/experience'}];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
    <AppBar sx={{ bgcolor: "#fff", boxShadow: 0, position: 'sticky' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

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
                                        <Typography textAlign="center" sx={{textDecoration: "none"}}>{page.name}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link to={page.url} style={{textDecoration: 'none'}}>
                                <Button
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: '#000', display: 'block'}}>
                                    <Typography>{page.name}</Typography>
                                </Button>
                            </Link>
                        ))}
                        <Link to={resumeURL} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#000', display: 'block'}}>
                                <Typography>Resume</Typography>
                            </Button></Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
