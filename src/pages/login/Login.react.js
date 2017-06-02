import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import Store from '../../stores/Login.store';
import Actions from '../../actions/Login.actions';
import InputField from './../../components/input/InputField.react';
import Button from './../../components/button/button.react';
import Inlinemessage from './../../components/inlinemessage/inlinemessage.react';
import styles from './login.styles';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  static propTypes = {
    email: React.PropTypes.string,
    password: React.PropTypes.string,
    errorMsg: React.PropTypes.string,
    loginSuccess: React.PropTypes.bool
  };

  static getStores() {
    return [Store];
  }

  static getPropsFromStores() {
    return Store.getState();
  }

  constructor(props, context) {
    super(props, context);
    this.state = { transitionTo: null, loginReq: false };
    this.submit = this.submit.bind(this);
    this.goToRegistration = this.goToRegistration.bind(this);
    this.goToForgetPassword = this.goToForgetPassword.bind(this);
  }

  componentDidMount() {
    Actions.clearStore();
  }

  onInputChange(value, nane) {
    Actions.updateStore({ [nane]: value });
  }

  goToRegistration() {
    this.setState({ transitionTo: '/registration' });
  }

  goToForgetPassword() {
    this.setState({ transitionTo: '/forgetpassword' });
  }

  submit() {
    this.setState({ loginReq: true });
    Actions.login(this.props);
  }

  render() {
    if (this.state.transitionTo) {
      return <Redirect to={this.state.transitionTo} />;
    }
    if (this.props.loginSuccess && this.state.loginReq) {
      return <Redirect to={'/notes'} />;
    }

    const failureRegExEmail = !(new RegExp('^[A-Za-z0-9+_-]+(?:\\.[A-Za-z0-9+_-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$', 'g').test(this.props.email));

    return (<div style={styles.container}>
      <h1 style={styles.title}>Login</h1>
      {this.props.errorMsg && <Inlinemessage color={'#ff0000'} text={this.props.errorMsg} />}
      <div>
        <InputField
          type="text"
          name="email"
          label="Email"
          isRequired
          value={this.props.email}
          maxlength={30}
          formatErrorText={(this.props.email && failureRegExEmail) ? ' is invalid.' : null}
          onValueChange={this.onInputChange}
          icon="fa-envelope"
        />
        <InputField
          type="password"
          name="password"
          label="Password"
          value={this.state.password}
          maxlength="30"
          isRequired
          onValueChange={this.onInputChange}
          icon="fa-lock"
        />
      </div>
      <div style={styles.footer}>
        <div>
          <Button text="Submit" isPrimary onClick={this.submit} />
        </div>
        <div style={styles.subFooter}>
          <Button text="Registration" onClick={this.goToRegistration} style={styles.button} />
          <Button text="Forget Password" onClick={this.goToForgetPassword} style={styles.button} />
        </div>
      </div>
    </div>);
  }
}
export default connectToStores(Login);
