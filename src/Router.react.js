import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AINotes from './pages/ainotes/AINotes.react';
import Message from './pages/message/Message.react';
import Registration from './pages/registration/Registration.react';
import Login from './pages/login/Login.react';
import ForgetPassword from './pages/forgetpassword/ForgetPassword.react';

class AppRouter extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route path="/forgetpassword" component={ForgetPassword} />
            <Route path="/notes" component={AINotes} />
            <Route path="/message" component={Message} />
          </div>
        </Router>
      </div>
    );
  }
}

export default AppRouter;