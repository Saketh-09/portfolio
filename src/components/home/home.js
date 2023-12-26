import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Grid, Paper, styled} from "@mui/material";
import home from "./content";
export default function Home(){
    return (

        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box sx={{bgcolor: 'inherit', height: '100vh'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} >
                            <Paper elevation={0}>
                                <h1>{home.greeting}</h1>
                                <p>{home.aboutMe}</p>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} >
                            <Paper elevation={0}>
                            </Paper>
                        </Grid>
                    </Grid>


                </Box>
            </Container>
        </React.Fragment>
    )
}