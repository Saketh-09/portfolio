import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Grid, Paper, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import styles from './education.module.css'
import {education,dates, course, cgpa, location, additional} from './content'
export default function Education() {
    return (
        <div id="education" style={{margin: '2em'}}>
            <CssBaseline />
            <Container maxWidth="lg" >
                <Typography variant='h3' className={styles.education} sx={{fontWeight:300, letterSpacing: 4}}>Education</Typography>
                <Box sx={{borderRadius: 1, borderBlockColor: grey}}>
                    <Grid container spacing={2}>
                        <Grid item lg={2} xs={12}>
                            <Paper elevation={0}>
                                <img src={process.env.PUBLIC_URL +'/assets/utdLogo3.png'} alt='utd logo' className={styles.logo}/>
                            </Paper>
                        </Grid>
                        <Grid item lg={10} xs={12}>
                            <Paper elevation={0} sx={{marginLeft: '3em'}}>
                                <Typography variant='h6' className={styles.education} sx={{fontWeight:300}}>{education.UTD}</Typography>
                                <Typography className={styles.location} variant='caption' display="block">{location.UTD}</Typography>
                                <Typography variant='h6' className={styles.course} sx={{fontWeight:300}}>{course.UTD}</Typography>
                                <Typography className={styles.dates} variant='caption' display="block">{dates.UTD}</Typography>
                                <Typography variant='h6' className={styles.cgpa} sx={{fontWeight:300}}>CGPA: {cgpa.UTD}</Typography>
                                <Typography className={styles.course} sx={{fontWeight:300}}>{additional.UTD}</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
                <hr className={styles.hr}/>
            </Container>
            <Container maxWidth="lg">
                <Box sx={{ borderRadius: 1, borderBlockColor: grey}} >
                    <Grid container spacing={2}>
                        <Grid item lg={2} xs={12} >
                            <Paper elevation={0}>
                                <img src={process.env.PUBLIC_URL +'/assets/iithLogo.png'} alt='utd logo' className={styles.logo}/>
                            </Paper>
                        </Grid>
                        <Grid item lg={10} xs={12} >
                            <Paper elevation={0} sx={{marginLeft: '3em'}}>
                                <Typography variant='h6' className={styles.education} sx={{fontWeight:350}}>{education.IITH}</Typography>
                                <Typography variant='caption' display="block" className={styles.location}>{location.IITH}</Typography>
                                <Typography variant='h6' className={styles.course} sx={{fontWeight:300}}>{course.IITH}</Typography>
                                <Typography className={styles.dates} variant='caption' display="block" >{dates.IITH}</Typography>
                                <Typography variant='h6' className={styles.cgpa} sx={{fontWeight:300}}>CGPA: {cgpa.IITH}</Typography>
                                <Typography className={styles.course}>{additional.IITH}</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
                <hr className={styles.hr}/>
            </Container>
        </div>
    );
}