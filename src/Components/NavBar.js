import React from 'react';
// import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import { Grid, Button, Typography} from '@material-ui/core'
const NavBar = () => {
    
    return (
    <div>
        <Grid container direction="row">
            <Grid item>
                {/* <AirportShuttleIcon fontSize='large' /> */}
            </Grid>
            <Grid container item direction="row">
                <Grid item>
                    <Button>
                        <Typography variant="button">
                            About Me
                        </Typography>
                    </Button>
                </Grid>
                <Grid item>
                    <Button>
                        <Typography variant="button">
                            Projects
                        </Typography>
                    </Button>
                </Grid>
                <Grid item>
                    <Button>
                        <Typography variant="button">
                            Extracurricular
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    </div>
    )
}

export default NavBar;