import React, { useState, useEffect } from 'react';
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Container from '../Container';
import ProjectCard from '../ProjectCard';

const useStyles = makeStyles(theme => ({
    centerText: {
        textAlign: "center"
    },
    title: {
        fontFamily: "'Permanent Marker', sans-serif",
        color: theme.palette.primary.main,
    }
}));

const projectData = [
    {
        title: "Employee Directory",
        desc: "React-powered directory with search and filter capability.",
        image: "../../images/employee_directory_screenshot.png",
        github: "https://github.com/CorrinneW/employee-directory",
        live: "https://corrinnew.github.io/employee-directory/"
    },
    {
        title: "Budget Tracker",
        desc: "Progressive web app using MongoDB and IndexedDB for online/offline functionality.",
        image: "../../images/Budget-Tracker-Screenshot.png",
        github: "https://github.com/CorrinneW/budget-tracker",
        live: "https://infinite-beach-18117.herokuapp.com/"
    },
    {
        title: "Fitness Tracker",
        desc: "Uses MongoDB and Mongoose to store and return a user's workouts.",
        image: "../../images/Fitness-Tracker-Chart.png",
        github: "https://github.com/CorrinneW/workout-tracker",
        live: "https://tranquil-wildwood-71217.herokuapp.com/"
    },
    {
        title: "Tech Blog",
        desc: "A simple blog app that uses the Model View Controller design pattern, MySQL and Handlebars.",
        image: "../../images/tech-blog-dashboard.png",
        github: "https://github.com/CorrinneW/tech-blog",
        live: "https://agile-dusk-30469.herokuapp.com/"
    },
    {
        title: "On the Growl",
        desc: "On the Growl takes the easy-to-use format of a casual dating app and applies it to the more enjoyable process of finding a new pet.",
        image: "../../images/on-the-growl.png",
        github: "https://github.com/CorrinneW/on-the-growl",
        live: "https://on-the-growl.herokuapp.com"
    },
    {
        title: "Use It or Lose It",
        desc: "Use It or Lose It is a recipe search app with a focus on waste reduction.",
        image: "../../images/use-it-or-lose-it.png",
        github: "https://github.com/CorrinneW/Use-it-or-lose-it",
        live: "https://kekons4.github.io/Use-it-or-lose-it/"
    },
]

function Projects() {
    const classes = useStyles()

    const[projectState, setProjectState] = useState({
        image: "",
        title: "",
        desc: "",
        github: "",
        live: ""
    })

    return (
        <div className={classes.centerText}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
            >
                <Grid item xs={12}>
                    <Container>
                        <Typography className={classes.title} variant="h4">
                            Assorted Projects
                        </Typography>
                    </Container>
                </Grid>
                {/* for each project, build a project card with image, title, desc and links */}
            </Grid>
        </div>
    )
};

export default Projects;