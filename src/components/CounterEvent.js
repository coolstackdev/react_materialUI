import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Button from './common/Button';

const useStyles = makeStyles({
    card: {
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
        marginBottom: 20
    },
    label: {
        paddingTop: 10,
        marginTop: 10
    }
});

export default function CounterEvent({ event }) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Container maxWidth="md">
                <Grid
                    container
                    direction="row"
                    spacing={1}
                >
                    <Grid item xs={12}>
                        <Button color="orange">Counter</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid
                            container
                            direction="row"
                        >
                            <Grid item xs={12} sm={3} md={2} lg={1}>
                                <Typography gutterBottom variant="h5" component="h2" className={classes.label}>
                                    Who?
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={9} md={10} lg={11}>
                                <TextField
                                    fullWidth
                                    placeholder="Search"
                                    defaultValue={event.username}
                                    margin="normal"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.label}>
                            What's on the line?
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid
                            container
                            direction="row"
                        >
                            <Grid item xs={12} md={5}>
                                <TextField
                                    fullWidth
                                    placeholder="Money"
                                    defaultValue={event.titleMoney}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={12} md={2} align="center">
                                <Typography gutterBottom variant="h5" component="h2" className={classes.label}>
                                    or
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <TextField
                                    fullWidth
                                    placeholder="Something Else"
                                    defaultValue={event.titleSomething}
                                    margin="normal"
                                />
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={12}>
                        <Grid
                            container
                            direction="row"
                        >
                            <Grid item xs={12} sm={5} md={4} lg={3}>
                                <Typography gutterBottom variant="h5" component="h2" className={classes.label}>
                                    What's it about?
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={7} md={8} lg={9}>
                                <TextField
                                    fullWidth
                                    placeholder="Enter Description"
                                    defaultValue={event.content}
                                    margin="normal"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Card>
    );
}