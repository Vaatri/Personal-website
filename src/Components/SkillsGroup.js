import { Grid, LinearProgress, Typography } from '@material-ui/core';
import React from 'react';


const SkillsGroup = ({language, level, logo}) => {

    return(
        <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
            <Grid item xs={1}>
                <img src={logo} alt="skills logo" style={{width: '100%'}}/>
            </Grid>
            <Grid container item direction="column" xs={9}>
                <Grid item>
                    <Typography>{language}</Typography>
                </Grid>
                <Grid item>
                    <LinearProgress variant="determinate" value={level} style={{height: '20px'}} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SkillsGroup;