import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Signin from './auth/Signin';
import Signup from './auth/Signup';
import Home from './Home';
import ChangePassword from './auth/ChangePassword';
import PrivacyPolicy from './PrivacyPolicy';
import Terms from './Terms';
import Contactus from './Contactus';
import Profile from './auth/Profile';

const App = () => {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/changePassword" component={ChangePassword} />
          <Route path="/policy" component={PrivacyPolicy} />
          <Route path="/terms" component={Terms} />
          <Route path="/contact" component={Contactus} />
          <Route path="/myprofile" component={Profile} />
        </Switch>
      </Router>
    </div>
  )
}


export default App;
