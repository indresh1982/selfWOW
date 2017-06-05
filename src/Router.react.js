import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AINotes from './pages/ainotes/AINotes.react';
import NotFound from './pages/notfound/NotFound.react';
import Message from './pages/message/Message.react';
import Registration from './pages/registration/Registration.react';
import Login from './pages/login/Login.react';
import ForgetPassword from './pages/forgetpassword/ForgetPassword.react';

class AppRouter extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route path="/forgetpassword" component={ForgetPassword} />
            <Route path="/notes" component={AINotes} />
            <Route path="/message" component={Message} />
            <Route path="/message" component={Message} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default AppRouter;
