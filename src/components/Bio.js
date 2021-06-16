import React from "react";
import { Typography, } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Container from './Container'

import allsorts from '../images/allsorts.gif'

//CSS styles
const useStyles = makeStyles(theme => ({
    allsorts: {
        width: theme.spacing(30),
        height: "auto",
    },
    subtitle: {
        color: theme.palette.darkAccent.main,
        fontFamily: "'Staatliches', sans-serif",
        zIndex: 1
    },
    bioText: {
        color: theme.palette.secondary.main,
        zIndex: 1,
        marginTop: "1rem"
    }
}));


function Bio() {
    const classes = useStyles();

    return (
        <Container style={"marginBottom: 2rem"}>
            <Typography className={classes.subtitle} variant="h5">
                About
            </Typography>
            <Typography className={classes.bioText}>
                Hello! I'm glad you've found me here! I'm a fine artist turned designer expanding my skills into the
                wide world of web development.
            </Typography>
            <Typography className={classes.bioText}>
                My goal is to utilize years of marketing experience and creative know-how to
                help clients tell more engaging stories with their web presence.
            </Typography>
            {/* <Grid container justify="flex-end">
                <img className={classes.allsorts} src={allsorts} alt="licorice allsorts animation" />
            </Grid> */}
        </Container>
    )
}

export default Bio;