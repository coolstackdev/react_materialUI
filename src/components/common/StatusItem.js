import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    card: {
        position: 'relative',
        borderRadius: 10,
        padding: '0 0 0 20px',
        margin: '10px 0',
        overflow: 'hidden',
    },
    badgeLoss: {
        position: 'absolute',
        zIndex: 0,
        left: `calc(100% - 150px)`,
        float: 'right',
        overflow: 'hidden',
        clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 0%)',
        padding: '20px 0 0 70px',
        width: 150,
        height: 150,
        background: theme.palette.red.main
    },
    badgeWin: {
        position: 'absolute',
        zIndex: 0,
        left: `calc(100% - 150px)`,
        float: 'right',
        overflow: 'hidden',
        clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 0%)',
        padding: '20px 0 0 70px',
        width: 150,
        height: 150,
        background: theme.palette.green.light,
    },
    badgeStatus: {
        color: '#fff',
    },
    avatar: {
        margin: 10,
        width: 100,
        height: 100,
    },
    msg: {
        marginTop: 40,
    }
}));

const StatusItem = ({ item }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Box className={item.status === 'win' ? classes.badgeWin : classes.badgeLoss}>
                <Typography className={classes.badgeStatus} variant="h5">
                    {item.status === 'win' ? 'WIN' : 'LOSS'}
                </Typography>
            </Box>
            <Grid
                container
                direction="row"
                align="start"
            >
                <Grid item xs={9} md={2}>
                    <Avatar alt='avatar' src={process.env.PUBLIC_URL + item.avatar} className={classes.avatar} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography className={classes.msg} variant="h5">{item.msg}</Typography>
                </Grid>
            </Grid>
        </Card>
    );
};

export default StatusItem;