import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Signin from './auth/Signin';
import Signup from './auth/Signup';
import Dashboard from './Dashboard';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
