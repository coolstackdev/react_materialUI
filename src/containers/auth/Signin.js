import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import Button from '../../components/common/Button';
import './auth.scss';

class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: '',
                password: '',
            },
        };
    }

    handleChange = (event) => {
        const { user } = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    handleSubmit = () => {
        console.log('handleSubmit');
        this.props.history.push("/");
    }

    render() {
        const { user } = this.state;

        return (
            <Container maxWidth="sm">
                <ValidatorForm onSubmit={this.handleSubmit}>
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
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
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
                                    <Link href="#">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item xs={12} sm={6} className="link_signup">
                                    <Link href="/signup">
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
}

export default SignIn;