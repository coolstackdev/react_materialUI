import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Button from '../common/Button';
import Image from '../../assets/images/white_logo.png';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        marginTop: theme.spacing(20),
        height: 100,
        width: 200,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(5),
    },
    input: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        borderRadius: 5,
    },
    white: {
        color: theme.palette.common.white,
    }
}));

export default function SignIn() {

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <CardMedia
                    className={classes.logo}
                    image={Image}
                    title="Settlyt"
                />
                <form className={classes.form} noValidate>
                    <TextField
                        className={classes.input}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        className={classes.input}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        placeholder="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        buttonType="green"
                        className="button"
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" className={classes.white}>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/signup" className={classes.white}>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}