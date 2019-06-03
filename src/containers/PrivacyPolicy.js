import React from 'react';
import DashboardLayout from '../components/common/DashboardLayout';
import ProfileItem from '../components/common/ProfileItem';
import StatusItem from '../components/common/StatusItem';

const PrivacyPolicy = () => {

    const eventItems = [
        {
            avatar: '/images/user2.jpg',
            msg: '@kdaddy lost scoop with @nanoska',
            status: 'loss'
        },
        {
            avatar: '/images/user1.jpg',
            msg: '@kdaddy win ping pong with @markeymark',
            status: 'win'
        },
    ];

    const userInfo = {
        avatar: '/images/user2.jpg',
        name: '@kdaddy305',
        totalWins: 42,
        winPercent: 80,
        acceptancePercent: 30,
        longestStreak: 4,
        isMe: false,
    };

    return (
        <DashboardLayout>
            <h3>Privacy Policy</h3>
            <ProfileItem userInfo={userInfo} />
            {eventItems.map((item, index) => {
                return <StatusItem key={index} item={item} />
            })}
        </DashboardLayout>
    );
};

export default PrivacyPolicy;