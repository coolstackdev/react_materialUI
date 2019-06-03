import React from 'react';
import DashboardLayout from '../../components/common/DashboardLayout';
import StatusItem from '../../components/common/StatusItem';

const Profile = () => {

    const eventItems = [
        {
            'avatar': '/images/user2.jpg',
            'msg': '@kdaddy lost scoop with @nanoska',
            'status': 'loss'
        },
        {
            'avatar': '/images/user1.jpg',
            'msg': '@kdaddy win ping pong with @markeymark',
            'status': 'win'
        },
    ];

    return (
        <DashboardLayout>
            {eventItems.map((item, index) => {
                return <StatusItem key={index} item={item} />
            })}
        </DashboardLayout>
    );
};

export default Profile;