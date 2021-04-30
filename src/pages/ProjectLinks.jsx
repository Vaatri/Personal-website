import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import BaliexpressLogo from '../assets/BaliExpress.png'

const ProjectLinks = () => {
    
    return (
        <Grid container direction="column" alignItems="center">
            <Grid item>
                <Typography variant="h2">Some of my Projects</Typography>
            </Grid>
            <Grid container item direction="row">
                <Grid item>
                    <img src={BaliexpressLogo} alt="BaliExpress" />
                </Grid>
            </Grid>
        </Grid>
    
    )
    

}

export default ProjectLinks;