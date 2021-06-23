import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Box
} from '@material-ui/core'

import Container from '../Container'

const useStyles = makeStyles(theme => ({
    title: {
        fontFamily: "'Permanent Marker', sans-serif",
        color: theme.palette.primary.main,
        padding: '3rem 0',
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
                borderColor: "#ffe8eb"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent #8A533F #8A533F"
            }
        }

    },
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

function Resume() {
    const classes = useStyles()
    return (
        <>
            <Container>
                <Typography className={classes.title} variant="h4" align="center">
                    Resume and Skills
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography className={`${classes.year} ${classes.item}`} variant="h2">
                        2015
                    </Typography>
                    <Box component="div" className={classes.item}>
                        <Typography variant="h5"  className={classes.heading}>
                            HTML & CSS
                        </Typography>
                        <Typography variant="body1"  className={classes.subHeading}>
                            The Reynolds & Reynolds Company
                        </Typography>
                        <Typography variant="subtitle1" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non libero finibus, suscipit nunc vel, eleifend felis. Nam posuere vestibulum mauris, quis pharetra nunc iaculis vel. Sed elementum nibh in tellus consectetur pretium. Aenean rutrum.
                        </Typography>
                    </Box>  
                    <Typography className={`${classes.year} ${classes.item}`} variant="h2">
                        2021
                    </Typography>
                    <Box component="div" className={classes.item}>
                        <Typography variant="h5"  className={classes.heading}>
                            position
                        </Typography>
                        <Typography variant="body1"  className={classes.subHeading}>
                            location, location
                        </Typography>
                        <Typography variant="subtitle1" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non libero finibus, suscipit nunc vel, eleifend felis. Nam posuere vestibulum mauris, quis pharetra nunc iaculis vel. Sed elementum nibh in tellus consectetur pretium. Aenean rutrum.
                        </Typography>
                    </Box>  
                </Box>
            </Container>
        </>
    )
};

export default Resume;



// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import Container from '../Container';
// import {
//     Grid,
//     Typography,
//     Paper
// } from "@material-ui/core";
// import { makeStyles } from '@material-ui/core/styles';
// import resumePDF from './corrinne_worden_resume_plain_text.pdf'

// const useStyles = makeStyles(theme => ({
//     centerText: {
//         textAlign: "center"
//     },
//     title: {
//         fontFamily: "'Permanent Marker', sans-serif",
//         color: theme.palette.primary.main,
//     },
//     subtitle: {
//         width: '100%',
//         marginBottom: theme.spacing(2),
//         borderBottom: '0.25rem dotted #8A533F',
//         fontFamily: "'Staatliches', sans-serif",
//         color: theme.palette.darkAccent.main,
//         textAlign: 'left'
//     },
//     paper: {
//         display: 'flex',
//         flexDirection: 'column',
//         textAlign: 'left',
//         padding: theme.spacing(2),
//         margin: theme.spacing(2),
//         borderRadius: '1rem'
//     },
//     spacer: {
//         borderRight: '0.25rem dotted #8A533F',
//         height: theme.spacing(10)
//     }
// }));

// function Resume() {
//     const classes = useStyles()

//     // const file = resumePDF
//     // const [numPages, setNumPages] = useState(null);
//     // const [pageNumber, setPageNumber] = useState(1);

//     // function onDocumentLoadSuccess({ numPages }) {
//     //     setNumPages(numPages);
//     // }

//     return (
//         <div className={classes.centerText}>
//             <Grid
//                 container
//                 direction="row"
//                 justify="center"
//                 align="center"
//                 spacing={3}
//             >
//                 <Grid item xs={12}>
//                     <Container>
//                         <Typography className={classes.title} variant="h4">
//                             Resume and Skills
//                         </Typography>
//                     </Container>
//                 </Grid>

//                 <Grid item xs={12}>
//                     <Paper className={classes.paper}>
//                         <div className={classes.subtitle}>
//                             <Typography variant="h5">
//                                 Summary
//                             </Typography>
//                         </div>
//                         <Typography>
//                             Full-stack developer with a graphic design background and a passion for creating more beautiful and accessible web experiences. Eager to leverage current skills and learn new ones with a creative, future-oriented team dedicated to building better web experiences for all.
//                         </Typography>
//                     </Paper>
//                 </Grid>
//                 <Grid item xs={12}>
//                     <Paper className={classes.paper}>
//                         <div className={classes.subtitle}>
//                             <Typography variant="h5">
//                                 Summary
//                             </Typography>
//                         </div>
//                         <Typography>
//                             Full-stack developer with a graphic design background and a passion for creating more beautiful and accessible web experiences. Eager to leverage current skills and learn new ones with a creative, future-oriented team dedicated to building better web experiences for all.
//                         </Typography>
//                     </Paper>
//                 </Grid>
//             </Grid>
//         </div>
//     )
// }

// export default Resume;


{/* <div className={classes.pdf}>
<Document
    file={file}
    onLoadSuccess={onDocumentLoadSuccess}
>
    <Page pageNumber={pageNumber} />
</Document>
</div>
<Typography>
Page {pageNumber} of {numPages}
</Typography> */}