import { Avatar, Card, CardContent, Divider, Grid, Typography } from '@material-ui/core';
// import SchoolIcon from '@material-ui/icons/School';
// import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
// import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import React from 'react';
import { Link } from 'react-router-dom';
import InfoCard from '../Components/InfoCard';
import SkillsGroup from '../Components/SkillsGroup';
import clogo from '../assets/cLogo.svg';
import PythonLogo from '../assets/PythonLogo.png';
import ReactLogo from '../assets/ReactLogo.png';
import JavascriptLogo from '../assets/JavscriptLogo.png';
import Javalogo from '../assets/JavaLogo.png';
import htmlCssLogo from '../assets/HTMLCSSLogo.png'

const education = 'I\'m currently studying Computer Science at University of New South Wales where I\'m in my last year. I\'ve completed courses in all different aspects of software engineering, which includes but not limited too; Databases, Operating Systems, Computer Networks, and Object Orientated Programming and Design Principles.'

const funFact = 'Fun fact, I also have a Diploma of Design from UTS. Where I wanted to pursue Animation and VFX before switching over to Computer Science.'

const personalInfo = 'I\'m a hardworking and dedicated individual, eager to build something that benefits society.I work very well in a team, where my strengths lie in interpersonal skills, and leadership.I love to learn new things, and am not afraid to take on something outside of my comfort zone.'

const extracurricular = 'I\'m also an active participant in my Universities extracurricular!'

const AboutMe = () => {
    
    return(
    <article>
        <Grid container direction="column" alignItems="center">
            <Grid item>
                <Typography variant="h2">Heres a little about me...</Typography>
            </Grid>
            <Grid container item direction="row" spacing={9} justify="center">
                <Grid item xs={4}>
                    <InfoCard>
                        <Avatar>
                            <Grid container item direction="row" justify="center" alignItems="center">
                                <Grid item >
                                    {/* <SchoolIcon fontSize="large" /> */}
                                </Grid>
                            </Grid>
                        </Avatar> 
                        <Divider />
                        <Typography variant="body1">{education}</Typography>
                        <Typography variant="body1">{funFact}</Typography>
                    </InfoCard>
                </Grid>
                <Grid item xs={4}>
                    <InfoCard>
                        <Avatar>
                            {/* <EmojiPeopleIcon fontSize="large" /> */}
                        </Avatar>
                        <Divider />
                        <Typography variant="body1">{personalInfo}</Typography>
                        <Typography variant="body1">{extracurricular}</Typography>
                    </InfoCard>
                </Grid>                
                <Grid item xs={6}>
                        <Avatar>
                            {/* <FitnessCenterIcon fontSize="large" /> */}
                        </Avatar>
                        <SkillsGroup language="React" level={85} logo={ReactLogo}/>
                        <SkillsGroup language="Javascript" level={80} logo={JavascriptLogo}/>
                        <SkillsGroup language="HTML/CSS" level={80} logo={htmlCssLogo}/>
                        <SkillsGroup language="C" level={70} logo={clogo}/>
                        <SkillsGroup language="Python" level={60} logo={PythonLogo}/>
                        <SkillsGroup language="Java" level={60} logo={Javalogo}/>

                </Grid>                
            </Grid>
        </Grid>
        
    </article>
    )
    
}

export default AboutMe;