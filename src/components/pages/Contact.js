import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';

import ContactForm from '../ContactForm';
import Container from '../Container';
import SocialLinks from '../SocialLinks';

import { makeStyles } from '@material-ui/core/styles';

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

function Contact() {
    const classes = useStyles();
    return (
        <Container>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
            >
                <Grid item xs={12}>
                    <Typography className={classes.title} variant='h4'>
                        Let's Get In Touch!
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={4} >
                    <Typography className={classes.pText} variant='p'>
                        I would love to collaborate with you! I'm currently seeking full time, part time or contract opportunities.{<br/>}{<br/>}
                        Email me at: <Link component="a" href="mailto:corrinneworden@gmail.com">corrinneworden@gmail.com</Link>{<br/>}or use this contact form to get in touch.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={8}>
                    <ContactForm />
                </Grid>
                <Grid item xs={12}>
                    <SocialLinks />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Contact