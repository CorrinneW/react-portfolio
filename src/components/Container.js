import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles(theme => ({
    container: {
        background: fade(theme.palette.background.paper, 0.7),
        width: "100vw",
        marginTop: '2rem',
        padding: '2rem'
    },
}));

function Container(props) {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            {props.children}
        </Box>
    )
};

export default Container;