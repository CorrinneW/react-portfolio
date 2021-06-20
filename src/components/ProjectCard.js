import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 'auto',
    minHeight: '45vh',
    margin: theme.spacing(1),
    borderRadius: '1rem'
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
  }
}));

function ProjectCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <img className={classes.cardImg} src={props.image} alt={props.title} />
        <CardContent>
          <Typography className={classes.cardTitle} gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography className={classes.descText} variant="body2" color="textSecondary" component="p">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={props.github}>
          github
        </Button>
        <Button size="small" color="primary" href={props.live}>
          live site
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;