import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PrivacyIcon from '@material-ui/icons/VerifiedUser';
import AcountIcon from '@material-ui/icons/AccountCircle';
import PasswordIcon from '@material-ui/icons/VpnKey';
import LogoutIcon from '@material-ui/icons/AllOut';
import ContactIcon from '@material-ui/icons/ContactMail';
import TermsIcon from '@material-ui/icons/ListAlt';

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
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
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}));

export default function Sidebar({ openSidebar }) {
    const classes = useStyles();

    // current active User
    const currentUser = {
        name: '@grivas88',
        avatar: '/images/user1.jpg'
    };

    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }

    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !openSidebar && classes.drawerPaperClose),
            }}
            open={openSidebar}
        >
            <div className={classes.toolbarIcon}>
                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Grid hidden={!openSidebar} align="center">
                <Avatar alt={currentUser.name} src={process.env.PUBLIC_URL + currentUser.avatar} className={classes.avatar} />
                <Typography variant="h5">{currentUser.name}</Typography>
            </Grid>
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <AcountIcon />
                    </ListItemIcon>
                    <ListItemText primary="Account Information" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <PasswordIcon />
                    </ListItemIcon>
                    <ListItemText primary="Change Password" />
                </ListItem>
            </List>
            <Box height="100%"></Box>
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <PrivacyIcon />
                    </ListItemIcon>
                    <ListItemText primary="Privacy Policy" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <TermsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Terms and Conditions" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ContactIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contact Us" />
                </ListItem>
                <ListItemLink href="/signin">
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItemLink>
            </List>
        </Drawer>
    );
}