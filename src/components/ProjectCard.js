import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 'auto',
    minHeight: '45vh',
    margin: theme.spacing(1),
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  cardImg: {
    float: "inherit",
    padding: theme.spacing(2),
    height: '20rem',
    filter: "drop-shadow(0 0.75rem 0.75rem #AD72A8)"
  },
  cardTitle: {
    fontFamily: "'Staatliches', sans-serif"
  },
  descText: {
    height: '5vh'
  },
  button: {
    background: theme.palette.lightAccent.main,
    color: theme.palette.lightAccent.contrastText,
    fontFamily: "'Permanent Marker', sans-serif",
    margin: theme.spacing(2),
    '&:hover, active': {
      background: theme.palette.secondary.main,
      color: theme.palette.lightAccent.main
    }
  }
}));

function ProjectCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <img className={classes.cardImg} src={props.image} alt={props.title} />
        <CardContent>
          <Typography className={classes.cardTitle} gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography className={classes.descText} variant="body2" color="textSecondary" component="p">
            {props.desc}
          </Typography>
        </CardContent>
      <CardActions>
        <Button className={classes.button} size="large" href={props.github}>
          github
        </Button>
        <Button className={classes.button} size="large" href={props.live}>
          live site
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;