import React from "react";
import {Link} from "react-router-dom";
import url from "./contactURLs";
import styles from './contact.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import {Button} from "@mui/material";
export default function Contact() {
    return (
        <div  className={styles.cont}>
            <span className={styles.elem}><Link to={url.linkedin} target="_blank" rel="noopener noreferrer"><LinkedInIcon fontSize="large"/></Link></span>
            <span className={styles.elem}><Link to={url.github} target="_blank" rel="noopener noreferrer"><GitHubIcon fontSize="large"/></Link></span>
            <span className={styles.elem}><Link to={url.mail}><EmailIcon fontSize="large"/></Link></span>
        </div>
    )
}