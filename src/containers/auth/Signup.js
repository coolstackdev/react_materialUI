import React from 'react';
import { Link } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import Button from '../../components/common/Button';
import './auth.scss';

const SignUp = ({ history }) => {

    const [user, setUser] = React.useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const userValue = {
            name: user.name,
            email: user.email,
            password: user.password
        };

        if (event.target.name === 'name')
            userValue.name = event.target.value;
        else if (event.target.name === 'email')
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
                            name="name"
                            variant="outlined"
                            fullWidth
                            placeholder="Name"
                            autoFocus
                            validators={['required']}
                            errorMessages={['The name field is required.']}
                            value={user.name}
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
                            Sign Up
                            </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={12} className="link_signup">
                                <Link to="/signin">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ValidatorForm>
        </Container >
    );
}


export default SignUp;