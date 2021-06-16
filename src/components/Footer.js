import React from 'react';
import { CssBaseline, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.secondary.main
  },
  footerText: {
    color: theme.palette.secondary.contrastText
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1" className={classes.footerText}>
            &copy; 2020 Corrinne M Worden
          </Typography>
        </Container>
      </footer>
    </div >
  );
}

// import React from "react";
// import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
// import { makeStyles } from '@material-ui/core/styles';

// //CSS styles
// const useStyles = makeStyles(theme => ({
//   footerContainer: {
//     background: theme.palette.secondary.main,
//     width: '100vw',
//   },
//   footerText: {
//     color: theme.palette.secondary.contrastText
//   }
// }))

// function Footer() {
//   const classes = useStyles()
//   return (
//     <AppBar position="bottom" className={classes.footerContainer}>
//       <Container maxWidth="md">
//         <Toolbar>
//           <Typography variant="body1" className={classes.footerText}>
//             &copy; 2020 Corrinne M Worden
//           </Typography>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   )
// }

// export default Footer;