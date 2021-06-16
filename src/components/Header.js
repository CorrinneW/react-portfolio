import React from "react";
import { Typography, Avatar, Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import avatar from '../images/avatar.png';
import Typed from 'react-typed';
import Container from './Container';

//CSS styles
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),

    },
    title: {
        color: theme.palette.primary.main,
        fontFamily: "'Permanent Marker', sans-serif",
        marginBottom: "1rem"
    },
    subtitle: {
        color: theme.palette.darkAccent.main,
        fontFamily: "'Staatliches', sans-serif",
    },
}));

function Header() {
    const classes = useStyles();

    return (
        <Container>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Corrinne Worden" />
            </Grid>
            <Typography className={classes.title} variant="h2">Corrinne Worden</Typography>
            <Typography className={classes.subtitle} variant="h4">
                <Typed
                    strings={[
                        'Full Stack Developer',
                        'Web Designer',
                        'Digital Storyteller',
                    ]}
                    typeSpeed={80}
                    backSpeed={50}
                    loop
                />
            </Typography>
        </Container>
    );
}

export default Header;