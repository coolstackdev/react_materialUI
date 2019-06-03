import React from 'react';
import Grid from '@material-ui/core/Grid';

import DashboardLayout from '../components/common/DashboardLayout';
import EventItem from '../components/EventItem';
import Button from '../components/common/Button';

export default function Home() {

    // eventItem data
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
            title: "Uber tomorrow",
            content: "Knicks get Zion",
            buttons: [
                { value: 'You Won', color: 'green' },
            ]
        }
    ];

    return (
        <React.Fragment>
            <DashboardLayout>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={10}>
                        <Button color="orange">
                            Create New
                        </Button>
                    </Grid>
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
            </DashboardLayout>
        </React.Fragment>
    );
}