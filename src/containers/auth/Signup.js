import React from 'react';
import { Link } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import DateFnsUtils from '@date-io/date-fns';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import Button from '../../components/common/Button';
import './auth.scss';

const SignUp = ({ history }) => {

    // password match validation
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
        if (value !== user.password) {
            return false;
        }
        return true;
    });

    // define state variables
    const [user, setUser] = React.useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        avatar: '',
        phone: '',
        birthday: '2010-01-01',
    });

    const [imagePreviewUrl, setImagePreviewUrl] = React.useState('');
    const [step, setStep] = React.useState(1);

    function handleDateChange(date) {

        // update state variable
        const userValue = {
            name: user.name,
            email: user.email,
            password: user.password,
            confirm: user.confirm,
            avatar: user.avatar,
            phone: user.phone,
            birthday: user.birthday
        };

        userValue.birthday = date;
        setUser(userValue);
    }

    // change handler
    const handleChange = (event) => {
        const userValue = {
            name: user.name,
            email: user.email,
            password: user.password,
            confirm: user.confirm,
            avatar: user.avatar,
            phone: user.phone,
            birthday: user.birthday
        };

        switch (event.target.name) {
            case 'name':
                userValue.name = event.target.value;
                break;
            case 'email':
                userValue.email = event.target.value;
                break;
            case 'password':
                userValue.password = event.target.value;
                break;
            case 'confirm':
                userValue.confirm = event.target.value;
                break;
            case 'phone':
                userValue.phone = event.target.value;
                break;
            case 'birthday':
                userValue.birthday = event.target.value;
                break;
            default:
                break;
        }

        setUser(userValue);
    }

    // submit handler
    const handleSubmit = () => {
        console.log(user);

        if (step === 3) {
            history.push("/");
            return;
        }

        let newStep = step + 1;
        setStep(newStep);

        return;
    }


    const imageUploadChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        // update state variable
        const userValue = {
            name: user.name,
            email: user.email,
            password: user.password,
            confirm: user.confirm,
            avatar: user.avatar,
            phone: user.phone,
            birthday: user.birthday
        };

        userValue.avatar = file;
        setUser(userValue);
        ///

        reader.onloadend = async () => {
            setImagePreviewUrl(reader.result);
        }

        reader.readAsDataURL(file)
    }

    // switch components according to step
    const renderSwitch = (step) => {
        var $imagePreview = null;

        if (imagePreviewUrl) {
            $imagePreview = (<img className="previewText" alt="avatar" src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText"><p className="text_empty">Profile Picture</p></div>);
        }

        switch (step) {
            case 1:
                return (
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
                                <TextValidator
                                    onChange={handleChange}
                                    className="login_input"
                                    variant="outlined"
                                    fullWidth
                                    name="confirm"
                                    placeholder="Confirm password"
                                    autoComplete="confirm-password"
                                    type="password"
                                    validators={['required', 'isPasswordMatch']}
                                    errorMessages={['The confirm password field is required.', 'The password confirmation does not match.']}
                                    value={user.confirm}
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
                            <button type="button" className="loginBtn loginBtn--facebook">
                                Signup with Facebook
                            </button>
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
                );
            case 2:
                return (
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
                                    errorMessages={['The username field is required.']}
                                    value={user.name}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <div className="previewComponent">
                                    <div className="imgPreview">
                                        {$imagePreview}
                                    </div>
                                    <input
                                        id="upload-photo"
                                        type="file"
                                        onChange={(e) => imageUploadChange(e)}></input>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    color="orange"
                                >
                                    Next
                            </Button>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            className="stepContainer"
                            direction="row"
                            justify="space-around"
                            spacing={2}
                        >
                            <Grid item xs={2} className="step"></Grid>
                            <Grid item xs={2} className="step active"></Grid>
                            <Grid item xs={2} className="step"></Grid>
                        </Grid>
                    </ValidatorForm>
                );
            case 3:
                return (
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
                                    name="phone"
                                    placeholder="Phone number"
                                    autoComplete="phone"
                                    validators={['required', 'isNumber']}
                                    errorMessages={['The phone number field is required.', 'The phone number must be digits.']}
                                    value={user.phone}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils} style={{ width: '100%', padding: '5px 0' }}>
                                    <Grid container>
                                        <KeyboardDatePicker
                                            className="login_input"
                                            id="mui-pickers-date"
                                            placeholder="Date of Birth"
                                            value={user.birthday}
                                            onChange={handleDateChange}
                                            format="MM/dd/yyyy"
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    color="orange"
                                >
                                    Finish
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            className="stepContainer"
                            direction="row"
                            justify="space-around"
                            spacing={2}
                        >
                            <Grid item xs={3} className="step"></Grid>
                            <Grid item xs={3} className="step"></Grid>
                            <Grid item xs={3} className="step active"></Grid>
                        </Grid>
                    </ValidatorForm>
                );
            default:
                break;
        }
    }

    return (
        <Container maxWidth="sm">
            {renderSwitch(step)}
        </Container>
    );
}


export default SignUp;