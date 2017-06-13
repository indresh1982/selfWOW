import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AINotes from './pages/ainotes/AINotes.react';
import NotFound from './pages/notfound/NotFound.react';
import Chats from './pages/chats/Chats.react';
import Contacts from './pages/contacts/Contacts.react';
import Greeting from './pages/greeting/Greeting.react';
import Invitation from './pages/invitation/Invitation.react';
import Setting from './pages/setting/Setting.react';
import Registration from './pages/registration/Registration.react';
import Login from './pages/login/Login.react';
import Logout from './pages/logout/Logout.react';
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
            <Route path="/contacts" component={Contacts} />
            <Route path="/greeting" component={Greeting} />
            <Route path="/invitation" component={Invitation} />
            <Route path="/chats" component={Chats} />
            <Route path="/setting" component={Setting} />
            <Route path="/logout" component={Logout} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default AppRouter;
