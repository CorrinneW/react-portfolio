import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Container from '../Container';

const useStyles = makeStyles(theme => ({
    centerText: {
        textAlign: "center"
    },
    title: {
        fontFamily: "'Permanent Marker', sans-serif",
        color: theme.palette.primary.main,
    }
}));

function Projects() {
    const classes = useStyles()
    return (
        <div className={classes.centerText}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
            >
                <Grid item xs={12}>
                    <Container>
                        <Typography className={classes.title} variant="h4">
                            Assorted Projects
                        </Typography>
                    </Container>
                </Grid>
            </Grid>
        </div>
    )
};

export default Projects;