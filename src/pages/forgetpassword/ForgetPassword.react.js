import React from 'react';
import InputField from './../../components/input/InputField.react';
import Button from './../../components/button/button.react';
import Inlinemessage from './../../components/inlinemessage/inlinemessage.react';
import styles from './forgetPassword.styles';
import { Redirect } from 'react-router-dom';

class Registration extends React.Component {
  static propTypes = {
    email: React.PropTypes.string,
    errorMsg: React.PropTypes.string,
    forgetSuccess: React.PropTypes.bool
  };

  constructor(props, context) {
    super(props, context);
    this.state = { transitionTo: null, email: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.submit = this.submit.bind(this);
    this.goToLogin = this.goToLogin.bind(this);
    this.goToRegistration = this.goToRegistration.bind(this);
  }

  onInputChange(value, nane) {
    this.setState({ [nane]: value });
  }

  goToLogin() {
    this.setState({ transitionTo: '/' });
  }

  goToRegistration() {
    this.setState({ transitionTo: '/registration' });
  }

  submit() {

  }

  render() {
    if (this.state.transitionTo) {
      return <Redirect to={this.state.transitionTo} />;
    }
    const failureRegExEmail = !(new RegExp('^[A-Za-z0-9+_-]+(?:\\.[A-Za-z0-9+_-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$', 'g').test(this.state.email));

    return (<div style={styles.container}>
      <h1 style={styles.title}>Forget Password</h1>
      {this.props.errorMsg && <Inlinemessage color={'#ff0000'} text={this.props.errorMsg} />}
      {this.props.forgetSuccess && <Inlinemessage color={'#00ff00'} text={'Registration is successfull.'} />}
      {!this.props.forgetSuccess && <div>
        <InputField
          type="text"
          name="email"
          label="Email"
          isRequired
          value={this.state.email}
          maxlength={30}
          formatErrorText={(this.state.email && failureRegExEmail) ? ' is invalid.' : null}
          onValueChange={this.onInputChange}
          icon="fa-envelope"
        />
      </div>}
      <div style={styles.footer}>
        {!this.props.forgetSuccess && <div>
          <Button text="Submit" isPrimary onClick={this.submit} />
        </div>}
        <div style={styles.subFooter}>
          <Button text="Login" onClick={this.goToLogin} style={styles.button} />
          <Button text="Registration" onClick={this.goToRegistration} style={styles.button} />
        </div>
      </div>
    </div>);
  }
}
export default Registration;
