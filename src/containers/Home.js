import React from 'react';
import Grid from '@material-ui/core/Grid';

import DashboardLayout from '../components/common/DashboardLayout';
import EventItem from '../components/EventItem';
import CreateEvent from '../components/CreateEvent';
import CounterEvent from '../components/CounterEvent';
import Button from '../components/common/Button';

export default function Home() {

    // eventItem data
    const eventItem = {
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
    };

    const counterEvent = {
        username: '@kdaddy',
        titleMoney: '',
        titleSomething: 'Uber Tomorrow',
        content: 'Knicks Get Zion'
    }

    const [showCreateNew, setShowCreateNew] = React.useState(false);
    const [showCounterEvent, setShowCounterEvent] = React.useState(false);

    const showCreateEvent = () => {
        setShowCreateNew(true);
    }

    const handleCounter = () => {
        setShowCounterEvent(true);
    }

    return (
        <React.Fragment>
            <DashboardLayout>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={10}>
                        {!showCreateNew ?
                            <Button color="orange" onClick={showCreateEvent}>
                                Create New
                            </Button>
                            :
                            <CreateEvent />
                        }
                    </Grid>
                    <Grid item xs={12} md={10}>
                        {!showCounterEvent ?
                            <EventItem
                                users={eventItem.users}
                                title={eventItem.title}
                                content={eventItem.content}
                                buttons={eventItem.buttons}
                                handleCounter={handleCounter} />
                            :
                            <CounterEvent event={counterEvent} />
                        }
                    </Grid>
                </Grid>
            </DashboardLayout>
        </React.Fragment >
    );
}