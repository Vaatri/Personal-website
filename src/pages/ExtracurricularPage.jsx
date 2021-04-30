import { Grid, GridList, GridListTile, GridListTileBar, Typography } from '@material-ui/core';
import React from 'react';
import BBQ from '../assets/CSESoc/BBq.jpg';
import CBN from '../assets/CSESoc/CBN.jpg';
import FYC from '../assets/CSESoc/CSESoc-Camp-2020-10.jpg';
import MovieNight from '../assets/CSESoc/MovieNight.jpg';
import Survivor from '../assets/CSESoc/Survivor.jpg';
import ScavengerHunt from '../assets/CSESoc/ScavengerHunt.jpg';

const tileData = [
    {
        img: FYC,
        cols: 3, 
    },
    {
        img: BBQ,
        cols: 1,
    },
    {
        img: MovieNight,
        cols: 2,
    },
    {
        img: Survivor,
        cols: 2,
    },
    {
        img: CBN,
        cols:1,
    },
    {
        img: ScavengerHunt,
        cols: 3,
    }
]

const ExtracurricularPage = () => {

    return (
        <Grid 
            container 
            direction="column"
            alignItems="center"
            className="page-container"
        >
            <Grid item>
                <Typography variant="h1">Extracurricular Activities</Typography>
            </Grid>
            <Grid item container direction="row" justify="center" spacing={2}>
                <Grid item xs={4}>
                    <GridList cellHeight={200} cols={3}>
                        {tileData.map((tile) => (
                            <GridListTile key={tile.img} cols={tile.cols}>
                                <img src={tile.img} alt={tile.img} />
                            </GridListTile>
                        ))}
                    </GridList>
                </Grid>
                <Grid container item direction="column" xs={5}>
                    <Grid item>
                        <Typography variant="h4">My year as a Social Director at CSESoc</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                        Towards the end of 2019, after being in CSESoc's Socials Subcommittee, I became the 2020 Social Director. 
                        My role gave me and my co-director the responsibility of organising a First Year camp, establishing a subcommittee, 
                        and organising social events throughout the year. 
                        </Typography>
                    </Grid>
                    <br />
                    <Grid item>
                        <Typography>
                            First Year Camp was the most successful event that we had in the year. Where we had 140 students attend. I, alongside my
                            co-director, lead a team of 30 students to organise 3 days of activities for camp, and all of the logistics in-between. 
                            This was a period in my life where I believe I had learnt the most about myself, developed my soft skills, and in its success, 
                            is one of the greatest achievements in my life. I had balanced organising camp, working casually, and full time studying,
                            so I had learnt invaluable time management skills. Leading and working along side a great number of individuals allowed me to
                            confidently improve my interpersonal and organisational skills. The best moment was during the first night, after
                            we had all settled down for the day, and we just had some time to relax. I was finally able to see all of the long nights and hard work
                            pay off right infront of my eyes.
                        </Typography>
                    </Grid>
                    <br />
                    <Grid item>
                        <Typography>
                            The rest of the year was incredibly challenging as the COVID pandemic had reached its peak. Firstly we struggled to provide a genuine
                            experience for our subcommittee as we had restructured everything to be completely online. These struggles were overcame as we fostered
                            kinship heavily in an virtual setting, where we had frequent online meetings where we would chat, study, and play boardgames with each other.
                        </Typography>
                    </Grid>
                    <br />
                    <Grid item>
                        Secondly, we had to re-organise and plan the shift from physical events to online events. As all of our events were physical, we had to come up with new and original online events.
                        Some of these events are presented in the images to the left, where we broke away from the easy 'playing boardgames in discord', and created events like Survivor, movienight, and the Scavenger hunt.
                    </Grid>
                    <br />
                    <Grid item>
                        The Scavenger Hunt was something that I had spear-headed as there there was a prevalent fall in community engagement within the society due to covid. 
                        To counteract this, I created a scavenger hunt where students could come together and complete both physical and online tasks with each other. This had included
                        painting together, exercising, solving riddles, and much more.
                    </Grid>
                    <br />
                    <Grid item>
                        This is just a small subset of the things we had achieved throughout the year, although hindered by the situation we resided in, I believe that we made the most out of it.
                    </Grid>
                </Grid>
            </Grid>
            
        </Grid>
    )
}

export default ExtracurricularPage;