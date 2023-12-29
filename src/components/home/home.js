import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Grid, Paper, styled, Typography} from "@mui/material";
import home from "./content";
import Contact from "../contact/contact";
import styles from './home.module.css'
export default function Home(){
    return (

        <div id="home">
            <CssBaseline />
            <Container maxWidth="lg">
                <Box sx={{bgcolor: 'inherit', height: '100vh'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} >
                            <Paper elevation={0}>
                                <Typography variant='h3' className={styles.greeting} sx={{margin:'1em'}}>{home.greeting}</Typography>
                                <Typography variant='span' className={styles.body} sx={{margin:'1em'}}>{home.aboutMe}</Typography>

                                <Contact  sx={{margin:'1em'}}></Contact>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} >
                            <Paper elevation={0}>
                            </Paper>
                        </Grid>
                    </Grid>


                </Box>
            </Container>
        </div>
    )
}