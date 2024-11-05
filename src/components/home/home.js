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
import Icon from '@mdi/react';
import { mdiArrowDown } from '@mdi/js';

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
                    position: 'sticky', 
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
                <span class="bg-gray-100 text-gray-100 text-xs font-medium my-4 me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 border border-gray-500">Software Engineer</span>
                {/* Personal Details */}
                
<dl class="mx-2 max-w-md text-gray-900 divide-y divide-gray-200 dark:text-gray-600 dark:divide-gray-700">
    <div class="flex flex-col pb-3">
        <dt class="mb-1 text-gray-600 md:text-md dark:text-gray-500">Email address</dt>
        <dd class="text-md font-semibold">sakethannimalla9@gmail.com</dd>
    </div>
    <div class="flex flex-col py-3">
        <dt class="mb-1 text-gray-500 md:text-md dark:text-gray-500">Home address</dt>
        <dd class="text-md font-semibold">Dallas, Texas, USA</dd>
    </div>
    <div class="flex flex-col pt-3">
        <dt class="mb-1 text-gray-500 md:text-md dark:text-gray-500">Phone number</dt>
        <dd class="text-md font-semibold">+1 (945)-244-2224</dd>
    </div>
</dl>


                {/* Social Media Links */}
                <div style={{ marginTop: '1.5em', display: 'flex', justifyContent: 'center', gap: '1em' }}>
                    <IconButton href="https://github.com/Saketh-09" target="_blank">
                        <GitHub />
                    </IconButton>
                    <IconButton href="http://linkedin.com/in/annimalla-saketh/" target="_blank">
                        <LinkedIn />
                    </IconButton>
                    <IconButton href="mailto:sakethannimalla9@gmail.com">
                        <Email />
                    </IconButton>
                </div>

                {/* Download Resume Button */}
                <Button
                    variant="contained"
                    // color="primary"
                    href={process.env.PUBLIC_URL + '/assets/resume.pdf'}
                    target="_blank"
                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                    Download Resume <Icon path={mdiArrowDown} size={0.8} style={{ display: 'inline' }}/>


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
