import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Notification from '../Notification';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

export default function DashboardLayout({ children }) {
    const classes = useStyles();

    // get status from localstorage
    const sidebarStatus = localStorage.getItem('sidebarStatus');
    const notificationStatus = localStorage.getItem('notificationStatus');

    // state
    const [openSidebar, setOpenSidebar] = React.useState(sidebarStatus === 'true');
    const [openNotification, setOpenNotification] = React.useState(notificationStatus === 'true');

    // event handler
    const handleSidebarToggle = () => {
        // save value to localstorage
        localStorage.setItem('sidebarStatus', !openSidebar);

        // set State value
        setOpenSidebar(!openSidebar);
    };
    const handleNotificationToggle = () => {
        // save value to localstorage
        localStorage.setItem('notificationStatus', !openNotification);

        // set State value
        setOpenNotification(!openNotification);
    };

    const handleSearchChange = (event) => {
        console.log('search: ', event.target.value);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />

            <Header
                openSidebar={openSidebar}
                handleSidebarToggle={handleSidebarToggle}
                handleNotificationToggle={handleNotificationToggle}
                handleSearchChange={handleSearchChange}
            />

            <Sidebar
                openSidebar={openSidebar}
            />

            <Notification
                openNotification={openNotification}
            />

            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container direction="row">
                        <Grid item xs={2}></Grid>
                        <Grid item xs={10}>
                            {children}
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    );
}
