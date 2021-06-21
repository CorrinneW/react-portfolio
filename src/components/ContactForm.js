import React from 'react';
import {
    OutlinedInput,
    InputLabel,
    FormControl,
    Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//emailjs package
import emailjs from 'emailjs-com'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        color: theme.palette.primary.main,
    }
}));

const handleSubmit = (event) => {
    event.preventDefault()
    emailjs.sendForm('service_jwejafi', 'contact_form', event.target, 'user_7WUVcDMYc4uoOYcakmtdC')
        .then((res) => {
            console.log(res.text);
        }, (error) => {
            console.log(error.text)
        })
}

function ContactForm() {
    const classes = useStyles();
    return (
        <form onSubmit={handleSubmit} name="contact-form" className={classes.root} >
            <input type="hidden" name="contact_number" />
            <FormControl variant="outlined">
                <InputLabel htmlFor="name">Name</InputLabel>
                <OutlinedInput id="name" name="user_name" className={classes.input} variant="outlined" label="Name" />
            </FormControl>
            <FormControl variant="outlined">
                <InputLabel htmlFor="email">Email</InputLabel>
                <OutlinedInput id="email" name="user_email" className={classes.input} variant="outlined" label="Email" />
            </FormControl>
            <FormControl variant="outlined">
                <InputLabel htmlFor="message">Message</InputLabel>
                <OutlinedInput id="message" name="message" className={classes.input} variant="outlined" label="Message" />
            </FormControl>
            <Button type="submit" value="Send" color="primary" variant="contained">Send Message</Button>
        </form>
    )

};

export default ContactForm;