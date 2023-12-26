import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function Resume() {
    return (

        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" id="resume">
                <Box sx={{  height: '100vh' }} >

                    <Accordion sx={{boxShadow: 0}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>EDUCATION</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List component="nav" aria-label="mailbox folders">
                                <ListItem>
                                    University of Texas at Dallas
                                </ListItem>
                                <Divider />
                                <ListItem divider>
                                    Indian Institute of Technology Hyderabad
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{boxShadow: 0}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>TECHNICAL SKILLS</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List component="nav" aria-label="mailbox folders">
                                <ListItem>
                                    Programming Languages: Python, C++, Java, C, Javascript
                                </ListItem>
                                <Divider />
                                <ListItem divider>
                                    Frameworks: FastAPI, Flask, Django, selenium, ReactJS
                                </ListItem>
                                <ListItem divider>
                                    Databases: MySQL, PostgreSQL
                                </ListItem>
                                <ListItem divider>
                                    Software Tools: Docker, Jenkins, YAML, Git, Keycloak, MS Office Suite, Jira
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{boxShadow: 0}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>PROFESSIONAL EXPERIENCE</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List component="nav" aria-label="mailbox folders">
                                <ListItem>
                                    Beehyv
                                </ListItem>
                                <Divider />
                                <ListItem divider>
                                    NewAgeIT
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Container>
        </React.Fragment>
    );
}