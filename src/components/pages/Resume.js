import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Box,
    Button,
} from '@material-ui/core'

import Container from '../Container'

import resumePDF from '../../assets/corrinne_worden_resume_plain_text.pdf';

const useStyles = makeStyles(theme => ({
    title: {
        textAlign: "center"
    },
    titleHeader: {
        fontFamily: "'Permanent Marker', sans-serif",
        color: theme.palette.primary.main,
    },
    button: {
        marginTop: theme.spacing(5),
        backgroundColor: theme.palette.darkAccent.main,
        borderRadius: '1rem',
        color: theme.palette.darkAccent.contrastText,
        fontFamily: "'Staatliches', sans-serif",
        fontSize: '1.5rem',
        "&:hover, active": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText
        }
    },
    heading: {
        color: theme.palette.secondary.main,
        fontFamily: "'Staatliches', sans-serif",
    },
    subHeading: {
        color: theme.palette.secondary.main,
        padding: "0",
        fontWeight: "bold"
    },
    // controls the positioning of resume items based on breakpoints/order and creates pointer triangle
    item: {
        padding: "1rem",
        borderBottom: "2px solid #AD72A8",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        '&:after': {
            content: "''",
            position: "absolute"
        },
        '&:before': {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50%-5px)",
            borderStyle: "solid",
            borderColor: "#8A533F #8A533F transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "#AD72A8"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent #8A533F #8A533F"
            }
        }

    },
    //controls style and positioning of year header based on breakpoints
    year: {
        textAlign: "center",
        maxWidth: "9.5rem",
        margin: "0 3rem 0 auto",
        borderRadius: '1rem',
        fontSize: "1.8rem",
        fontFamily: "'Staatliches', sans-serif",
        background: theme.palette.darkAccent.main,
        color: theme.palette.darkAccent.contrastText,
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    // creates center line and controls position based on break points
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: 'absolute',
            height: '100%',
            border: '1px solid #8A533F',
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]: {
            padding: '2rem',
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    }
}));

//open resumePDF in new window so that it can be downloaded or printed
function handleClick() {
 window.open(resumePDF, '_blank');
}

function Resume() {
    const classes = useStyles()
    return (
        <>
            <Container>
                <Box component="div" className={classes.title}>
                    <Typography className={classes.titleHeader} variant="h4">
                        Resume and Skills
                    </Typography>
                    <Button variant="contained" className={classes.button} onClick={handleClick}>
                        View Full Resume
                    </Button>
                </Box>

                <Box component="div" className={classes.timeLine}>
                    <Typography className={`${classes.year} ${classes.item}`} variant="h2">
                        2021
                    </Typography>
                    <Box component="div" className={classes.item}>
                        <Typography variant="h5" className={classes.heading}>
                            Full Stack Web Development Bootcamp
                        </Typography>
                        <Typography variant="body1" className={classes.subHeading}>
                            Ohio State University
                        </Typography>
                        <Typography variant="subtitle1" >
                            A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Node JS, MySQL, MongoDB, Express, Handelbars.js & ReactJS.
                        </Typography>
                    </Box>
                    <Typography className={`${classes.year} ${classes.item}`} variant="h2">
                        2015
                    </Typography>
                    <Box component="div" className={classes.item}>
                        <Typography variant="h5" className={classes.heading}>
                            HTML & CSS
                        </Typography>
                        <Typography variant="body1" className={classes.subHeading}>
                            The Reynolds & Reynolds Company
                        </Typography>
                        <Typography variant="subtitle1" >
                            Responsible for the creation, editing and maintenance of Direct Mail Marketing and HTML email campaigns.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </>
    )
};

export default Resume;