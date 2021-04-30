import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
    footerContainer: {
        padding: '3em',
        backgroundColor: 'rgb(255,145,77)',
    },
    lightText: {
        color: 'white',
    }
}))

const Footer = () => {
    
    const classes = useStyles();

    return (
        <Grid container direction="column" justify="center" alignItems="center" className={classes.footerContainer} spacing={1}>
            <Grid item xs={5}>
                <Typography align="center" variant="h6"  className={classes.lightText}>
                    Don't hesitate to contact me! I am currently looking for full-time work opportunities where I can better my skills as a developer.
                </Typography>
            </Grid>
            <Grid container direction="row" item xs={2} justify="space-evenly">
                <Grid item>
                    <a href="https://www.linkedin.com/in/vanroytrinh/"><Typography variant="h5">Linkedin</Typography></a>
                </Grid>
                <Grid item>
                    <a href="https://github.com/Vaatri"><Typography variant="h5">Github</Typography></a>
                </Grid>
            </Grid>
            <Grid item xs={3} >
                <Typography align="center" variant="h6" className={classes.lightText}>
                    Designed and built by Van-Roy Trinh
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Footer;