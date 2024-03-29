import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import FlagIcon from '@material-ui/icons/OutlinedFlag';
import DeleteIcon from '@material-ui/icons/DeleteOutline';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import Button from './common/Button';

const useStyles = makeStyles({
    card: {
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        marginBottom: 20
    },
    avatar: {
        margin: 10,
        width: '5rem',
        height: '5rem',
    },
    userName1: {
        marginRight: 20,
    },
    userName2: {
        marginLeft: 20,
    },
    descValue: {
        marginLeft: 20,
        fontSize: 20
    },
    vs: {
        marginTop: 50,
    },
    depositContext: {
        flex: 1,
    },
    iconButton: {
        cursor: 'pointer'
    },
});

const getUsers = (users) => {
    // get userInfo with the value: users.userId

    return [
        { name: '@grivas88', url: '/images/user1.jpg' },
        { name: '@kdaddy', url: '/images/user2.jpg' },
    ];
};

export default function EventItem({ users, title, content, buttons, handleCounter, handleBtnClick }) {
    const classes = useStyles();
    const userInfo = getUsers(users);

    const [open, setOpen] = React.useState(false);

    const handleReportOpen = () => {
        setOpen(true);
    }

    const handleReportClose = () => {
        setOpen(false);
    }

    return (
        <React.Fragment>
            <Card className={classes.card}>
                <Grid
                    container
                    direction="row"
                    align="center"
                    spacing={1}
                >
                    <Grid item xs={12}>
                        <Grid
                            container
                            direction="row"
                            align="center"
                        >
                            <Grid item xs={1}>
                                <FlagIcon color="primary" className={classes.iconButton} onClick={handleReportOpen} />
                            </Grid>
                            <Grid item xs={5} sm={4} align="right">
                                <Grid>
                                    <Avatar alt={userInfo[0].name} src={process.env.PUBLIC_URL + userInfo[0].url} className={classes.avatar} />
                                    <Typography className={classes.userName1} variant="body1">{userInfo[0].name}</Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={1} sm={2}>
                                <h3 className={classes.vs}>VS</h3>
                            </Grid>
                            <Grid item xs={4} align="left">
                                <Avatar alt={userInfo[1].name} src={process.env.PUBLIC_URL + userInfo[1].url} className={classes.avatar} />
                                <Typography className={classes.userName2} variant="body1">{userInfo[1].name}</Typography>
                            </Grid>
                            <Grid item xs={1} className={classes.iconButton}>
                                <DeleteIcon />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h5" component="h2">
                            What's on the line?
                            <span className={classes.descValue}>{title}</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h5" component="h2">
                            What's it about?
                    <span className={classes.descValue}>{content}</span>
                        </Typography>
                    </Grid>
                </Grid>
                <CardActions>
                    <Grid
                        container
                        direction="row"
                        align="center"
                        justify="center"
                        spacing={1}
                    >
                        {buttons.map((button, index) => {
                            return <Grid
                                key={index}
                                item xs={12}
                                md={buttons.length === 3 ? 12 : 6}
                                lg={buttons.length === 3 ? 4 : 6}
                            >
                                <Button
                                    fullWidth
                                    color={button.color}
                                    onClick={button.value === 'Counter' ? handleCounter : handleBtnClick}
                                >
                                    {button.value}
                                </Button>
                            </Grid>
                        })}
                    </Grid>
                </CardActions>
            </Card>
            <Dialog
                open={open}
                onClose={handleReportClose}
                fullWidth={true}
                maxWidth={'sm'}
            >
                <DialogTitle>Report</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        variant="outlined"
                        multiline={true}
                        rows={5}
                        rowsMax={7}
                        placeholder="Type here"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleReportClose} color="blue" style={{ width: '50%', margin: '20px auto', }}>
                        Send
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}