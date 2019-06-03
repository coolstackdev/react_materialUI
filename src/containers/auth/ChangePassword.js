import React from 'react';
import DashboardLayout from '../../components/common/DashboardLayout';
import CreateEvent from '../../components/CreateEvent';
import CounterEvent from '../../components/CounterEvent';

export default function ChangePassword() {

    // temperary view
    const counterEvent = {
        username: '@kdaddy',
        titleMoney: '',
        titleSomething: 'Uber Tomorrow',
        content: 'Knicks Get Zion'
    }

    return (
        <DashboardLayout>
            <h3>Change Password</h3>
            <CreateEvent />
            <CounterEvent event={counterEvent} />
        </DashboardLayout>
    );
}