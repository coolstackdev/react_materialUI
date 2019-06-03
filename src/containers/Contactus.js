import React from 'react';
import Grid from '@material-ui/core/Grid';

import DashboardLayout from '../components/common/DashboardLayout';
import EventItem from '../components/EventItem';

export default function Contactus() {

    // eventItem data
    const eventItem = {
        users: [
            'userId1', 'userId2'
        ],
        title: "Uber tomorrow",
        content: "Knicks get Zion",
        buttons: [
            { value: 'You Won', color: 'green' },
        ]
    };

    return (
        <React.Fragment>
            <DashboardLayout>
                <h3>Contact us</h3>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={10}>
                        <EventItem
                            users={eventItem.users}
                            title={eventItem.title}
                            content={eventItem.content}
                            buttons={eventItem.buttons} />
                    </Grid>
                </Grid>
            </DashboardLayout>
        </React.Fragment >
    );
}