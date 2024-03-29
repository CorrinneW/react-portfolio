import React, { useState } from 'react';
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

import { Link } from 'react-router-dom';

//css styles
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: theme.palette.secondary.main,
        height: "100vh"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: theme.palette.secondary.contrastText
    },
    brandText: {
        fontFamily: "'Permanent Marker', sans-serif"
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        pathname: "/"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        pathname: "/resume"
    },
    {
        listIcon: <Apps />,
        listText: "Projects",
        pathname: "/projects"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contact",
        pathname: "/contact"
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
                                                <Link to={lsItem.pathname} replace>
                                                    <ListItemIcon className={classes.listItem}>
                                                        {lsItem.listIcon}
                                                    </ListItemIcon>
                                                    <ListItemText className={classes.listItem} primary={lsItem.listText} />
                                                </Link>
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

