import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Grid, Paper, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import styles from './experience.module.css'
import {name, location, role, dates, projects} from './expData'
export default function Experience() {
    const beehyvKeys = Object.keys(projects.beehyv);
    const newAgeKeys = Object.keys(projects.newage);

    const renderPoints = (keys, data) => {
        return keys.map((key) => (
            <div key={key}>
                <Typography variant='h6' className={styles.cgpa} sx={{fontWeight:350}}>{key}</Typography>
                <ul>
                    {data[key].map((point, index) => (
                        <li key={index}>
                            <Typography variant='body1' className={styles.cgpa}>{point}</Typography>
                        </li>
                    ))}
                </ul>
            </div>
        ));
    };

    return (
        <div id="education" style={{margin: '2em'}}>
            <CssBaseline />
            <Container maxWidth="lg" >
                <Typography variant='h3' className={styles.education} sx={{fontWeight:300, letterSpacing: 4}}>Experience</Typography>
                <Box sx={{borderRadius: 1, borderBlockColor: grey}}>
                    <Grid container spacing={2}>
                        <Grid item lg={2} xs={12}>
                            <Paper elevation={0}>
                                <img src={process.env.PUBLIC_URL +'/assets/beehyvLogo.svg'} alt='utd logo' className={styles.logo}/>
                            </Paper>
                        </Grid>
                        <Grid item lg={10} xs={12}>
                            <Paper elevation={0} sx={{marginLeft: '3em'}}>
                                <Typography variant='h6' className={styles.education} sx={{fontWeight:300}}>{name.beehyv}</Typography>
                                <Typography className={styles.location} variant='caption' display="block">{location.beehyv}</Typography>
                                <Typography variant='h6' className={styles.course} sx={{fontWeight:300}}>{role.beehyv}</Typography>
                                <Typography className={styles.dates} variant='caption' display="block">{dates.beehyv}</Typography>
                                <div>{renderPoints(beehyvKeys,projects.beehyv)}</div>
                                <br/>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
                <hr className={styles.hr}/>
            </Container>
            <Container maxWidth="lg">
                <Box sx={{ borderRadius: 1, borderBlockColor: grey}} >
                    <Grid container spacing={2}>
                        <Grid item xs={2} >
                            <Paper elevation={0}>
                                <img src={process.env.PUBLIC_URL +'/assets/newageitLogo.jpeg'} alt='utd logo' className={styles.logo}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={10} >
                            <Paper elevation={0} sx={{marginLeft: '3em'}}>
                                <Typography variant='h6' className={styles.education} sx={{fontWeight:300}}>{name.newage}</Typography>
                                <Typography className={styles.location} variant='caption' display="block">{location.newage}</Typography>
                                <Typography variant='h6' className={styles.course} sx={{fontWeight:300}}>{role.newage}</Typography>
                                <Typography className={styles.dates} variant='caption' display="block">{dates.newage}</Typography>
                                <div>{renderPoints(newAgeKeys,projects.newage)}</div>
                                <br/>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
                <hr className={styles.hr}/>
            </Container>
        </div>
    );
}