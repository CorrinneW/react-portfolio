import React from "react";
import { Grid } from "@material-ui/core";

import Header from '../Header';
import Bio from '../Bio';


function Home() {
    return (
        <div>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
            >
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid item xs={12}>
                    <Bio />
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;