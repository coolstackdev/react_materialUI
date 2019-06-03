import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
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
        width: '100%',
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
    searchInputColor: {
        color: 'white',
        borderColor: 'white !important',
    },
    searchInputBorder: {
        borderBottom: '2px solid white !important',
        borderBottomColor: 'white !important',
        '&:hover': {
            borderColor: 'white !important',
            borderWidth: 1
        },
    },
    search: {
        height: 25,
        width: 400,
    },
    iconSearch: {
        color: 'white',
    },
    gap: {
        flexGrow: 1,
    },
}));

export default function Header({ openSidebar, handleSidebarToggle, handleNotificationToggle, handleSearchChange }) {
    const classes = useStyles();

    const notificationCount = 3;

    return (
        <AppBar position="absolute" className={clsx(classes.appBar, openSidebar && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="Open sidebar"
                    onClick={handleSidebarToggle}
                    className={clsx(classes.menuButton, openSidebar && classes.menuButtonHidden)}
                >
                    <MenuIcon />
                </IconButton>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="Close sidebar"
                    onClick={handleSidebarToggle}
                    className={clsx(classes.menuButton, !openSidebar && classes.menuButtonHidden)}
                >
                    <ChevronLeftIcon />
                </IconButton>
                <Link to="/">
                    <CardMedia
                        className={classes.logo}
                        image={process.env.PUBLIC_URL + '/images/white_logo.png'}
                        title="Settlyt"
                    />
                </Link>
                <Box width="5%"></Box>
                <TextField
                    onChange={handleSearchChange}
                    className={classes.search}
                    fullWidth
                    name="search"
                    placeholder="Search"
                    InputProps={{
                        classes: {
                            input: classes.searchInputColor,
                            underline: classes.searchInputBorder,
                        },
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon className={classes.iconSearch} />
                            </InputAdornment>
                        ),
                    }}
                />
                <Box className={classes.gap}></Box>
                <IconButton
                    color="inherit"
                    onClick={handleNotificationToggle}
                >
                    <Badge badgeContent={notificationCount} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}