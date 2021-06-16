import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Container from './Container'

//CSS styles
const useStyles = makeStyles(theme => ({
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
        <Container>
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
        </Container>
    )
}

export default Bio;