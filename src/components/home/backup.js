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

export default function HomeContent(){
    return (
        <>
        <div className='m-14'>
        <Typography variant='h3' className={styles.greeting} sx={{ fontWeight: 400 }}>
        {home.greeting}
        </Typography>

        <Typography variant='h3' className={styles.name} sx={{ fontWeight: 400 }}>
        <motion.span
            className='name'
            initial={{ opacity: window.innerWidth < 996 ? '100%' : '0%' }}
            animate={{ opacity: '100%' }}
            transition={{ delay: 1.0, duration: 1 }}
            exit={{ opacity: '0%', y: '200%' }}
        >
            &#60;
            <TypeAnimation
            cursor={true}
            sequence={[
                '',
                500,
                'Saketh Annimalla',
                1000,
                'CS grad student,Software engineer',
                500,
                '',
            ]}
            repeat={Infinity}
            className='block'
            />{' '}
            /&#62;
        </motion.span>
        </Typography>

        <Typography className={styles.body} sx={{ margin: '1em', fontWeight: 300 }}>
        {home.aboutMe}
        </Typography></div></>
        
    )
}