import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import avatar from '../images/avatar.png';
import Typed from 'react-typed';

//CSS styles
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),

    },
    title: {
        color: "#AD72A8",
        fontFamily: "'Permanent Marker', sans-serif",
        marginBottom: "1rem"
    },
    subtitle: {
        color: "#8A533F",
        fontFamily: "'Staatliches', sans-serif",
        marginBottom: "3rem"
    },
    headerContainer: {
        background: fade(theme.palette.background.paper, 0.7),
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    },
}));

function Header() {
    const classes = useStyles();

    return (
        <Box className={classes.headerContainer}>
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
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
            </Typography>
        </Box>
    );
}

export default Header;

// export default function Header() {

//   const location = useLocation();

//   return (
//     <AppBar>
//       <Tabs>
//         <Tab label="CMW" value={0}>
//           <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
//             CMW
//           </Link>
//         </Tab>
//         <Tab label="About" value={1}>
//           <Link
//             to="/about"
//             className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
//           >
//             About
//           </Link>
//         </Tab>
//         <Tab label="Projects" value={2}>
//           <Link
//             to="/projects"
//             className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}
//           >
//             Projects
//           </Link>
//         </Tab>
//         <Tab label="Contact" value={3}>
//           <Link
//             to="/contact"
//             className={location.pathname === "/Contact" ? "nav-link active" : "nav-link"}
//           >
//             Contact
//           </Link>
//         </Tab>
//       </Tabs>
//     </AppBar>
//   );
// }