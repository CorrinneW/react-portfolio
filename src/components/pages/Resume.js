import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import Container from '../Container';
import {
    Grid,
    Typography,
} from "@material-ui/core";
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

function Resume() {
    const classes = useStyles()

    const file = "https://docs.google.com/document/d/e/2PACX-1vQo5aTeZzZO7Co9MpOTUDRnbQKZGOD08hIMIqH4zeGbB76rVdYERPmWTO7zMQIdmWLoWsBCWWETVPMN/pub"
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

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
                            Resume and Skills
                        </Typography>
                    </Container>
                </Grid>
                <Grid item xs={12}>
                    <Document
                        file={file}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>
                    <Typography>
                        Page {pageNumber} of {numPages}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Resume;