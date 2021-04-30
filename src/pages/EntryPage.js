import React from 'react';
import  '../styles/EntryPageStyles.css';
import {Grid, Typography} from '@material-ui/core';
import portrait from '../assets/myPictureSmaller.jpg';
import NavBar from '../Components/NavBar';

const EntryPage = () => {
    
    return (<main className="entryPageLayout">
        <header>
            <NavBar />
        </header>
        <section>
            <Grid 
                className="info-container"
                container 
                direction="column"
                justify="flex-end"
                >
                <Grid item>
                    <img className="portrait" src={portrait} alt="title"/>
                </Grid>
                <Grid item>
                    <Typography 
                        className="intro-text" 
                        variant="h2"
                        >
                        Van-Roy Trinh
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography 
                        className="intro-text" 
                        variant="h3"
                        >
                        Aspiring Software Engineer
                    </Typography>
                </Grid>
            </Grid>
        </section>
    </main>)
}

export default EntryPage;