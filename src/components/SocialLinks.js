import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
//import social icons
import {
    GitHub,
    LinkedIn,
    Twitter
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    bottomNav: {
        margin: theme.spacing(2),
        background: 'transparent',
    },
    socialIcon: {
        color: theme.palette.secondary.main,
        '&:hover, active': {
            color: theme.palette.primary.main
        }
    }
}));

function SocialLinks() {
    const classes=useStyles()
    return (
        <BottomNavigation className={classes.bottomNav} showLabels>
            <BottomNavigationAction className={classes.socialIcon} label="GitHub" icon={<GitHub />} href="https://github.com/CorrinneW" />
            <BottomNavigationAction className={classes.socialIcon} label="LinkedIn" icon={<LinkedIn />} href="https://www.linkedin.com/in/corrinne-worden/" />
            <BottomNavigationAction className={classes.socialIcon} label="Twitter" icon={<Twitter />} href="https://twitter.com/corrinne_worden" />
        </BottomNavigation>
    )
}

export default SocialLinks;