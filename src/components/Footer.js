import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

//CSS styles
const useStyles = makeStyles(theme => ({
    footerContainer: {
        background: theme.palette.secondary.main,
        padding: '2rem',
        textAlign: 'left',
        width: '100vw',
        height: '2rem',
        marginTop: '2rem',
    },
    footerText: {
        color: theme.palette.secondary.contrastText
    }
}))

function Footer() {
    const classes = useStyles();
  return (
    <Box component='footer' className={classes.footerContainer}>
      <Typography className={classes.footerText}>© Corrinne M Worden 2021</Typography>
    </Box>
  );
}

export default Footer;