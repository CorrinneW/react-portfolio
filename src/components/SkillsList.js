import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';

const skills = [
    "HTML5",
    "CSS3",
    "Javascript",
    "MySQL",
    "MongoDB",
    "Node.js",
    "Express.js",
    "Sequelize",
    "Handlebars.js",
    "jQuery",
    "React.js",
    "Progressive Web Apps",
    "Material-UI",
    "Bootstrap.js",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe InDesign",
    "Email Marketing",
    "Direct Mail Marketing"
]

const useStyles =  makeStyles(theme => ({
    skillContainer: {
        backgroundColor: theme.palette.background.paper,
        padding: "2rem",
        borderRadius: ".5rem",
        margin: "2rem", 
        boxShadow: "0 0.5rem 1rem #333333"
    },
    skillItem: {
        padding: ".25rem 1rem .25rem 1rem"
    },
    skillText: {
        fontSize: "1.5rem"
    }
}))

export default function SkillsList() {
    const classes = useStyles()
    return (<Box className={classes.skillContainer} display="flex" flexWrap="wrap" justifyContent="center">
        {skills.map(skill => (
            <Box className={classes.skillItem}>
                <Typography className={classes.skillText}>
                    {skill}
                </Typography>
            </Box>
        ))}
    </Box>)
}
