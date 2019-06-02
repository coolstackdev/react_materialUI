import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import Button from '../../components/common/Button';
import './auth.scss';

class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: '',
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
                                Sign Up
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={12} className="link_signup">
                                    <Link href="/signin">
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
}

export default SignUp;