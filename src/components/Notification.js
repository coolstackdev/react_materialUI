import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    drawerPaper: {
        whiteSpace: 'wrap',
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
        width: theme.spacing(0),
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}));

export default function Notification({ openNotification }) {
    const classes = useStyles();

    // notification data
    const notifications = [
        {
            avatar: '/images/user1.jpg',
            message: 'You lost scoop with @nanoska'
        },
        {
            avatar: '/images/user2.jpg',
            message: '@nanosk invited you to football'
        },
        {
            avatar: '/images/user1.jpg',
            message: 'You declined chickent fight with @pietro'
        },
        {
            avatar: '/images/user2.jpg',
            message: '@markeymark cancelled ping pong'
        }
    ];

    return (
        <Drawer
            variant="permanent"
            anchor="right"
            classes={{
                paper: clsx(classes.drawerPaper, !openNotification && classes.drawerPaperClose),
            }}
            open={openNotification}
        >
            <div className={classes.toolbarIcon}>
                <IconButton>
                    <ChevronRightIcon />
                </IconButton>
            </div>
            <List>
                {notifications.map((notification, index) => {
                    return <div key={index}>
                        <ListItem button>
                            <ListItemIcon>
                                <Avatar alt='avatar' src={process.env.PUBLIC_URL + notification.avatar} className={classes.avatar} />
                            </ListItemIcon>
                            <Typography variant="body2">{notification.message}</Typography>
                        </ListItem>
                        <Divider component="li" />
                    </div>
                })}
            </List>
        </Drawer>
    );
}