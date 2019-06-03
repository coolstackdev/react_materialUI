import React from 'react';
import Grid from '@material-ui/core/Grid';

import DashboardLayout from '../components/common/DashboardLayout';
import EventItem from '../components/EventItem';

export default function Terms() {

    // eventItem data
    const eventItem = {
        users: [
            'userId1', 'userId2'
        ],
        title: "$5",
        content: "most tacos in 10 mins",
        buttons: [
            { value: 'I Won', color: 'green' },
            { value: 'I Lost', color: 'red' },
        ]
    };

    return (
        <React.Fragment>
            <DashboardLayout>
                <h3>Terms and conditions</h3>
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