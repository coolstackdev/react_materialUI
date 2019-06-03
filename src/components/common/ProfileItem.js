import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import Button from './Button';
import './piechart.scss';

const useStyles = makeStyles(theme => ({
    card: {
        overflow: 'inherit',
        borderRadius: 20,
        padding: 20,
        margin: '30px 0 10px',
    },
    avatar: {
        width: 150,
        height: 150,
    },
    avatarItem: {
        marginTop: -60,
    },
    name: {
        margin: 10,
    },
    rightbtn: {
        margin: 10,
    },
    detail: {
        margin: '20px 0'
    },
    detailItem: {
        marginTop: 10,
        marginBottom: 25
    }
}));

const ProfileItem = ({ userInfo }) => {

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Grid
                container
                direction="row"
                align="center"
            >
                <Grid item xs={2} md={4}></Grid>
                <Grid item xs={8} md={4} className={classes.avatarItem}>
                    <Avatar alt='avatar' src={process.env.PUBLIC_URL + userInfo.avatar} className={classes.avatar} />
                    <Typography variant="h5" className={classes.name}>{userInfo.name}</Typography>
                    <Button color="blue" style={{ width: '50%', margin: 10 }}>Rookie</Button>
                </Grid>
                {!userInfo.isMe ?
                    <Grid item xs={12} md={4}>
                        <Button color="green" style={{ width: '50%', margin: 10 }}>Add Friend</Button>
                        <Button color="orange" style={{ width: '50%', margin: 10 }}>Create New</Button>
                    </Grid>
                    :
                    < Grid item xs={12} md={4}></Grid>
                }
                <Grid item xs={12} align="center" className={classes.detail}>
                    <Grid container direction="row" align="center" justify="center" spacing={5}>
                        <Grid item>
                            <Typography variant="h1" className={classes.detailItem}>{userInfo.totalWins}</Typography>
                            <Typography variant="h6">Total Wins</Typography>
                        </Grid>
                        <Grid item>
                            <div className={`c100 p${userInfo.winPercent}`}>
                                <span>{userInfo.winPercent}%</span>
                                <div className="slice">
                                    <div className="bar"></div>
                                    <div className="fill"></div>
                                </div>
                            </div>
                            <Typography variant="h6">Win %</Typography>
                        </Grid>
                        <Grid item>
                            <div className={`c100 p${userInfo.acceptancePercent} orange`}>
                                <span>{userInfo.acceptancePercent}%</span>
                                <div className="slice">
                                    <div className="bar"></div>
                                    <div className="fill"></div>
                                </div>
                            </div>
                            <Typography variant="h6">Acceptance %</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h1" className={classes.detailItem}>{userInfo.longestStreak}</Typography>
                            <Typography variant="h6">Longest Streak</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card >
    );
};

export default ProfileItem;