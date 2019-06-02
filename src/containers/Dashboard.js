import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import Paper from '@material-ui/core/Paper';
// import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { mainListItems, secondaryListItems } from '../components/listItems';
import EventItem from '../components/EventItem';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    logo: {
        height: 50,
        width: 100
    },
    search: {
        marginLeft: 70,
        height: 40,
        width: 400,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    gap: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    avatar: {
        margin: 10,
        width: 100,
        height: 100,
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
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function Dashboard() {
    const classes = useStyles();

    // current active User
    const currentUser = {
        name: '@grivas88',
        url: '/images/user1.jpg'
    };

    // eventItem props
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
        },
        {
            users: [
                'userId1', 'userId2'
            ],
            title: "Loser brings coffee tomorrow",
            content: "Jan says 'low hanging fruit' on this call",
            buttons: [
                { value: 'Invite Pending', color: 'green' },
            ]
        }
    ];

    // state
    const [open, setOpen] = React.useState(true);

    // event handler
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleChange = (event) => {
        console.log('search: ', event.target.value);
    };

    // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <CardMedia
                        className={classes.logo}
                        image={process.env.PUBLIC_URL + '/images/white_logo.png'}
                        title="Settlyt"
                    />
                    <TextField
                        onChange={handleChange}
                        className={classes.search}
                        variant="outlined"
                        fullWidth
                        name="search"
                        placeholder="Search"
                    />
                    <div className={classes.gap}></div>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Grid hidden={!open} align="center">
                    <Avatar alt={currentUser.name} src={process.env.PUBLIC_URL + currentUser.url} className={classes.avatar} />
                    <Typography variant="h5">{currentUser.name}</Typography>
                </Grid>
                <List>{mainListItems}</List>
                <Box height="100%"></Box>
                <List>{secondaryListItems}</List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
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