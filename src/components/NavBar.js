import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    IconButton,
    Avatar,
    Divider,
    Typography,
    Box,
    Drawer
} from '@material-ui/core';

import {
    Menu,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons';

import { makeStyles } from '@material-ui/core/styles';
import avatar from '../images/avatar.png';

//css styles
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: "#2A2B2F",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "#DEAFB6"
    },
    brandText: {
        fontFamily: "'Permanent Marker', sans-serif"
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume"
    },
    {
        listIcon: <Apps />,
        listText: "Projects"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contact"
    },
]

function NavBar() {
    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = (slider, open) => (event) => {
        setState({ ...state, [slider]: open })
    }

    const classes = useStyles()

    return (
        <>
            <Box component='nav'>
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <Menu style={{ color: "#AD72A8" }} />
                        </IconButton>
                        <Typography className={classes.brandText} variant="h4" style={{ color: "#AD72A8" }}>
                            CMW
                        </Typography>
                        <Drawer anchor="right" open={state.right} onClose={toggleSlider("right", false)}>
                            <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider("right", false)}>
                                <Avatar className={classes.avatar} src={avatar} alt="Corrinne M Worden"></Avatar>
                                <Divider />
                                <List>
                                    {menuItems.map((lsItem, key) => {
                                        return (
                                            <ListItem button key={key} onClick={toggleSlider("right", false)}>
                                                <ListItemIcon className={classes.listItem}>
                                                    {lsItem.listIcon}
                                                </ListItemIcon>
                                                <ListItemText className={classes.listItem} primary={lsItem.listText} />
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </Box>
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default NavBar;

