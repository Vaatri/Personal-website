import { CardActionArea, Divider, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Redirect, useHistory } from 'react-router';
import BaliexpressLogo from '../assets/BaliExpress.png'
import BBLogo from '../assets/BBLogo.jpg'

const useStyles = makeStyles(() => ({
    projectBackground: {
        backgroundColor: 'rgb(235, 235, 235)',
        paddingTop: '2em',
        paddingBottom: '4em',
    },
    projectDescription: {
        padding: '0.5em',
    },
}));


const ProjectLinks = () => {
    
    const classes = useStyles();
    const history = useHistory();
    const handleRedirect = (location) => {
        history.push(`/${location}`)
    }
    
    return (
        <Grid 
            container 
            direction="column"
            alignItems="center" 
            justify="center"
            className={classes.projectBackground}
        >
            <Grid item className="header">
                <Typography variant="h1">Some of my Projects</Typography>
            </Grid>
            <Grid container item direction="row" justify="space-evenly">
                <Grid item xs={3} className={classes.projectContainer}>
                    <Paper>
                        <CardActionArea onClick={() => handleRedirect('baliexpress')}>
                            <img src={BaliexpressLogo} alt="BaliExpress" className="image"/>
                        </CardActionArea>
                        <Grid item className={classes.projectDescription}>
                            <Typography variant="h4">BaliExpress - April 2021</Typography>
                            <Divider />
                            <Typography>
                                Baliexpress is a E-Commerce website that I helped develop in a Group of 4. Its premise was to sell computer parts, and to recommend custom built PC's for a consumers needs.
                            </Typography>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={3} className={classes.projectContainer}>
                    <Paper>
                        <CardActionArea onClick={() => handleRedirect('bigbrain')}>
                            <img src={BBLogo} alt="BigBrain" className="image"/>
                        </CardActionArea>
                        <Grid item className={classes.projectDescription}>
                            <Typography variant="h4">Big Brain - November 2020</Typography>
                            <Divider />
                            <Typography>
                                Big Brain is a clone of the game-based learning platform Kahoot! This was developed in a Pair, where we both had worked on the frontend on this application.
                            </Typography>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
    

}

export default ProjectLinks;