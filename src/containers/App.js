import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Signin from './../components/auth/Signin';
import Signup from './../components/auth/Signup';
import HomeContainer from './HomeContainer';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={HomeContainer} exact />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
