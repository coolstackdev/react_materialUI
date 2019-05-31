import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import OverrideTheme from './OverrideTheme';

ReactDOM.render(
    <OverrideTheme>
        <App />
    </OverrideTheme>,
    document.getElementById('root')
);

serviceWorker.unregister();
