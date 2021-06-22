import React from 'react';
import {
    Grid,
    Typography,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Container from '../Container';
import ProjectCard from '../ProjectCard';
import SocialLinks from '../SocialLinks'

//image imports
import EDImg from '../../images/employee_directory_screenshot.png';
import BTImg from '../../images/Budget-Tracker-Screenshot.png';
import FTImg from '../../images/Fitness-Tracker-Chart.png';
import TBImg from '../../images/tech-blog-dashboard.png';
import OGImg from '../../images/on-the-growl.png';
import ULImg from '../../images/use-it-or-lose-it.png';

const useStyles = makeStyles(theme => ({
    centerText: {
        textAlign: "center"
    },
    title: {
        fontFamily: "'Permanent Marker', sans-serif",
        color: theme.palette.primary.main,
    },
    pText: {
        fontWeight: 'bold'
    }
}));

const projectData = [
    {
        title: "Employee Directory",
        desc: "React-powered directory with search and filter capability.",
        image: EDImg,
        github: "https://github.com/CorrinneW/employee-directory",
        live: "https://corrinnew.github.io/employee-directory/"
    },
    {
        title: "Budget Tracker",
        desc: "Progressive web app using MongoDB and IndexedDB for online/offline functionality.",
        image: BTImg,
        github: "https://github.com/CorrinneW/budget-tracker",
        live: "https://infinite-beach-18117.herokuapp.com/"
    },
    {
        title: "Fitness Tracker",
        desc: "Uses MongoDB and Mongoose to store and return a user's workouts.",
        image: FTImg,
        github: "https://github.com/CorrinneW/workout-tracker",
        live: "https://tranquil-wildwood-71217.herokuapp.com/"
    },
    {
        title: "Tech Blog",
        desc: "A simple blog app that uses the Model View Controller design pattern, MySQL and Handlebars.",
        image: TBImg,
        github: "https://github.com/CorrinneW/tech-blog",
        live: "https://agile-dusk-30469.herokuapp.com/"
    },
    {
        title: "On the Growl",
        desc: "An adoptable pet search in the style of a casual dating app.",
        image: OGImg,
        github: "https://github.com/CorrinneW/on-the-growl",
        live: "https://on-the-growl.herokuapp.com"
    },
    {
        title: "Use It or Lose It",
        desc: "Use It or Lose It is a recipe search app with a focus on waste reduction.",
        image: ULImg,
        github: "https://github.com/CorrinneW/Use-it-or-lose-it",
        live: "https://kekons4.github.io/Use-it-or-lose-it/"
    },
]

function Projects() {
    const classes = useStyles()

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
                {projectData.map(project => (
                    <Grid item xs={12} md={6} lg={4} key={project.title}>
                        <ProjectCard
                            title={project.title}
                            desc={project.desc}
                            image={project.image}
                            github={project.github}
                            live={project.live}
                        />
                    </Grid>
                ))}
                <Grid item xs={12}>
                    <Container>
                        <Typography className={classes.title} variant="h4">
                            More to Come!
                        </Typography>
                        <Typography className={classes.pText} variant="p">
                            I'm currently enrolled in a full stack web development bootcamp and gaining new skills every week.{<br/>} Check back often to see my newest projects, or follow me on social media!
                        </Typography>
                        <SocialLinks />
                    </Container>
                </Grid>
            </Grid>
        </div>
    )
};

export default Projects;