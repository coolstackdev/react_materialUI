import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
    smallAcceptance: {
        marginLeft: 20,
    },
    acceptance: {
        marginLeft: 5,
    },
    detailItem: {
        marginTop: 10,
        marginBottom: 25
    },
    detailItemSmall: {
        marginTop: 20,
        marginBottom: 19,
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
                <Grid item md={4}></Grid>
                <Grid item xs={12} md={4} className={classes.avatarItem}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Avatar alt='avatar' src={process.env.PUBLIC_URL + userInfo.avatar} className={classes.avatar} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.name}>{userInfo.name}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button color="blue" style={{ width: '50%', margin: 10 }}>Rookie</Button>
                        </Grid>
                    </Grid>
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
                    <Box display={{ xs: 'none', md: 'block' }}>
                        <Grid container direction="row" align="center" justify="center" spacing={5}>
                            <Grid item align="center">
                                <Typography variant="h1" className={classes.detailItem}>{userInfo.totalWins}</Typography>
                                <Typography variant="h6">Total Wins</Typography>
                            </Grid>
                            <Grid item align="center">
                                <div className={`c100 p${userInfo.winPercent}`}>
                                    <span>{userInfo.winPercent}%</span>
                                    <div className="slice">
                                        <div className="bar"></div>
                                        <div className="fill"></div>
                                    </div>
                                </div>
                                <Typography variant="h6">Win %</Typography>
                            </Grid>
                            <Grid item align="center">
                                <div className={`c100 p${userInfo.acceptancePercent} orange ${classes.acceptance}`}>
                                    <span>{userInfo.acceptancePercent}%</span>
                                    <div className="slice">
                                        <div className="bar"></div>
                                        <div className="fill"></div>
                                    </div>
                                </div>
                                <Typography variant="h6">Acceptance %</Typography>
                            </Grid>
                            <Grid item align="center">
                                <Typography variant="h1" className={classes.detailItem}>{userInfo.longestStreak}</Typography>
                                <Typography variant="h6">Longest Streak</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box display={{ xs: 'block', md: 'none' }}>
                        <Grid container direction="row" align="center" justify="center" spacing={3}>
                            <Grid item align="center">
                                <Typography variant="h3" className={classes.detailItemSmall}>{userInfo.totalWins}</Typography>
                                <Typography variant="body1">Total Wins</Typography>
                            </Grid>
                            <Grid item align="center">
                                <div className={`c100 p${userInfo.winPercent} small`}>
                                    <span>{userInfo.winPercent}%</span>
                                    <div className="slice">
                                        <div className="bar"></div>
                                        <div className="fill"></div>
                                    </div>
                                </div>
                                <Typography variant="body1">Win %</Typography>
                            </Grid>
                            <Grid item align="center">
                                <div className={`c100 p${userInfo.acceptancePercent} orange small ${classes.smallAcceptance}`}>
                                    <span>{userInfo.acceptancePercent}%</span>
                                    <div className="slice">
                                        <div className="bar"></div>
                                        <div className="fill"></div>
                                    </div>
                                </div>
                                <Typography variant="body1">Acceptance %</Typography>
                            </Grid>
                            <Grid item align="center">
                                <Typography variant="h3" className={classes.detailItemSmall}>{userInfo.longestStreak}</Typography>
                                <Typography variant="body1">Longest Streak</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Card >
    );
};

export default ProfileItem;