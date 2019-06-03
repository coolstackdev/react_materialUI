import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

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

    // state
    const [openSidebar, setOpenSidebar] = React.useState(true);
    const [openNotification, setOpenNotification] = React.useState(false);

    // event handler
    const handleSidebarToggle = () => {
        setOpenSidebar(!openSidebar);

    };
    const handleNotificationToggle = () => {
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
                    {children}
                </Container>
            </main>
        </div>
    );
}
