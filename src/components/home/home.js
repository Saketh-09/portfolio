import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Routes, Route } from 'react-router-dom';
import Contact from "../contact/contact";
import HomeContent from './backup';
import Education from '../education/education';
import Experience from '../experience/experience';
import ProjectsPage from '../projects/projects';
import { Grid, Paper, Typography, IconButton, Button } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Email } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Home() {
    return (
        <div id="home">
            <CssBaseline />
            <Container maxWidth="xl" sx={{ paddingLeft: '0', paddingRight: '0' }}>
                <Box sx={{ bgcolor: 'inherit', height: '100vh' }}>
                    <Grid container spacing={3} sx={{ paddingLeft: '1em', paddingRight: '1em' }}>
                        
                        {/* Sidebar (image) - Fixed width */}
                        <Grid item xs={12} lg={3} sx={{ marginTop: '1em', marginBottom: '1em' }}>
            <Paper
                elevation={2}
                className="bg-[radial-gradient(circle_500px_at_50%_200px,#e3d5f4,transparent)]"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    height: '100%',
                    padding: '1.5em',
                    position: 'sticky', // Keeps the sidebar sticky on scroll
                    top: '1em',
                    borderRadius: '16px',
                    backgroundColor: '#8EC5FC',
                    backgroundImage: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)'
                }}
            >
                <img
                    className="rounded-full"
                    src={process.env.PUBLIC_URL + '/assets/pic.jpg'}
                    alt='pic'
                    style={{ width: '60%', height: 'auto', marginTop: '1em' }}
                />

                {/* Personal Details */}
                <Box className='content' sx={{ maxWidth: '100%', marginTop: '2em' }}>
                    {/* Email */}
                    <Box sx={{ marginBottom: '1.5em' }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Email address
                        </Typography>
                        <Typography variant="h7">
                            sakethannimalla9@gmail.com
                        </Typography>
                    </Box>

                    {/* Home Address */}
                    <Box sx={{ marginBottom: '1.5em' }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Home address
                        </Typography>
                        <Typography variant="h7">
                            Dallas, Texas, USA
                        </Typography>
                    </Box>

                    {/* Phone Number */}
                    <Box>
                        <Typography variant="body2">
                            Phone number
                        </Typography>
                        <Typography variant="h7">
                            +1 (945)-244-2224
                        </Typography>
                    </Box>
                </Box>

                {/* Social Media Links */}
                <div style={{ marginTop: '1.5em', display: 'flex', justifyContent: 'center', gap: '1em' }}>
                    <IconButton href="https://github.com/Saketh-09" target="_blank">
                        <GitHub />
                    </IconButton>
                    <IconButton href="http://linkedin.com/in/annimalla-saketh/" target="_blank">
                        <LinkedIn />
                    </IconButton>
                    <IconButton href="mailto:sakethannialla9@gmail.com">
                        <Email />
                    </IconButton>
                </div>

                {/* Download Resume Button */}
                <Button
                    variant="contained"
                    color="primary"
                    href={process.env.PUBLIC_URL + '/assets/resume.pdf'}
                    target="_blank"
                    sx={{ marginTop: '1.5em', width: '80%' }}
                >
                    Download Resume
                </Button>
            </Paper>
        </Grid>

                        {/* Main Content */}
                        <Grid item xs={12} lg={9} sx={{ marginTop: '1em', marginBottom: '1em', overflow: 'hidden' }}>
                            <Paper
                                elevation={2}
                                className="bg-[radial-gradient(circle_2000px_at_20%_200px,#e3d5f4,transparent)]"
                                sx={{
                                    minHeight: '100vh',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    overflow: 'auto',
                                    borderRadius: '16px',
                                    backgroundColor: '#8EC5FC',
                                    backgroundImage: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)'
                                }}
                            >
                                {/* Main Content - Remaining width */}
                                <Box sx={{ flexGrow: 1}}>
                                    <Routes>
                                        <Route path='/portfolio/' element={<HomeContent />} />
                                        <Route path='/education' element={<Education />} />
                                        <Route path='/experience' element={<Experience />} />
                                        <Route path='/projects' element={<ProjectsPage />} />
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
