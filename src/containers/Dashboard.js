import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Link from '@material-ui/core/Link';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Notification from '../components/Notification';
import EventItem from '../components/EventItem';
import CreateEvent from '../components/CreateEvent';
import CounterEvent from '../components/CounterEvent';
import Button from '../components/common/Button';

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

export default function Dashboard() {
    const classes = useStyles();

    // eventItem data
    const eventItems = [
        {
            users: [
                'userId1', 'userId2'
            ],
            title: "Uber tomorrow",
            content: "Knicks get Zion",
            buttons: [
                { value: 'Accept', color: 'green' },
                { value: 'Decline', color: 'red' },
                { value: 'Counter', color: 'orange' },
            ]
        },
        {
            users: [
                'userId1', 'userId2'
            ],
            title: "$5",
            content: "most tacos in 10 mins",
            buttons: [
                { value: 'I Won', color: 'green' },
                { value: 'I Lost', color: 'red' },
            ]
        }
    ];

    const counterEvent = {
        username: '@kdaddy',
        titleMoney: '',
        titleSomething: 'Uber Tomorrow',
        content: 'Knicks Get Zion'
    }

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
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={10}>
                            <Button color="orange">
                                Create New
                            </Button>
                            <CreateEvent />
                            <CounterEvent event={counterEvent} />
                        </Grid>
                        <Grid item xs={12} md={10}>
                            {eventItems.map((eventItem, index) => {
                                return <EventItem
                                    key={index}
                                    users={eventItem.users}
                                    title={eventItem.title}
                                    content={eventItem.content}
                                    buttons={eventItem.buttons} />
                            })}
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    );
}