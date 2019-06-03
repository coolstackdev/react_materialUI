import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Signin from './auth/Signin';
import Signup from './auth/Signup';
import Home from './Home';
import ChangePassword from './auth/ChangePassword';

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/changePassword" component={ChangePassword} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
