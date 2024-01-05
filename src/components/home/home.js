import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Grid, Paper, Typography} from "@mui/material";
import home from "./content";
import { motion } from 'framer-motion'
import Contact from "../contact/contact";
import styles from './home.module.css'
import {TypeAnimation} from 'react-type-animation';

export default function Home(){
    return (

        <div id="home">
            <CssBaseline />
            <Container maxWidth="lg">
                <Box sx={{bgcolor: 'inherit', height: '100vh'}}>
                    <Grid container spacing={2}>
                        <Grid item lg={6} xs={12} >
                            <Paper elevation={0}>
                                <img src={process.env.PUBLIC_URL +'/assets/pic.jpg'} alt='pic' className={styles.pic}/>
                            </Paper>
                        </Grid>
                        <Grid item lg={6} xs={12} >
                            <Paper elevation={0}>
                                <Typography variant='h3' className={styles.greeting}
                                            sx={{marginTop: '2em', fontWeight: 400}}>{home.greeting}</Typography>
                                <Typography variant='h3' className={styles.name}
                                            sx={{margin: '1em', fontWeight: 400}}>
                                    <motion.span className='name'
                                                 initial={{opacity: window.innerWidth < 996 ? '100%' : '0%'}}
                                                 animate={{opacity: '100%'}} transition={{delay: '1.0', duration: '1'}}
                                                 exit={{opacity: '0%', y: '200%'}}

                                    >&#60;<TypeAnimation cursor={true}
                                                         sequence={['', 5000, 'Saketh Annimalla', 5000, 'CS grad student, Software engineer', 5000, '']}
                                                         repeat={Infinity} className='block'></TypeAnimation> /&#62;
                                    </motion.span>
                                </Typography>
                                <Typography className={styles.body}
                                            sx={{margin: '1em', fontWeight: 300}}>{home.aboutMe}</Typography>
                                <Contact sx={{margin: '1em'}}></Contact>
                            </Paper>
                        </Grid>
                    </Grid>


                </Box>
            </Container>
        </div>
    )
}