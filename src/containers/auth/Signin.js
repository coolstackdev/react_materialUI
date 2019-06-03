import React from 'react';
import { Link } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import Button from '../../components/common/Button';
import './auth.scss';

const SignIn = ({ history }) => {

    const [user, setUser] = React.useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const userValue = {
            email: user.email,
            password: user.password
        };

        if (event.target.name === 'email')
            userValue.email = event.target.value;
        else if (event.target.name === 'password')
            userValue.password = event.target.value;

        setUser(userValue);
    }

    const handleSubmit = () => {
        console.log('handleSubmit');
        history.push("/");
    }

    return (
        <Container maxWidth="sm">
            <ValidatorForm onSubmit={handleSubmit}>
                <Grid
                    container
                    direction="row"
                    align="center"
                    spacing={2}
                >
                    <Grid item xs={12}>
                        <CardMedia
                            className="logo"
                            image={process.env.PUBLIC_URL + '/images/white_logo.png'}
                            title="Settlyt"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextValidator
                            onChange={handleChange}
                            className="login_input"
                            variant="outlined"
                            fullWidth
                            name="email"
                            placeholder="Email"
                            autoComplete="email"
                            validators={['required', 'isEmail']}
                            errorMessages={['The email field is required.', 'The email field must be a valid email.']}
                            value={user.email}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextValidator
                            onChange={handleChange}
                            className="login_input"
                            variant="outlined"
                            fullWidth
                            name="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            type="password"
                            validators={['required']}
                            errorMessages={['The password field is required.']}
                            value={user.password}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            color="orange"
                        >
                            Sign In
                            </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={12} sm={6} className="link_forgot">
                                <Link to="#">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item xs={12} sm={6} className="link_signup">
                                <Link to="/signup">
                                    Don't have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ValidatorForm>
        </Container >
    );

}

export default SignIn;