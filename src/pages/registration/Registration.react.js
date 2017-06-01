import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import Store from '../../stores/Registration.store';
import Actions from '../../actions/Registration.actions';
import InputField from './../../components/input/InputField.react';
import Button from './../../components/button/button.react';
import Inlinemessage from './../../components/inlinemessage/inlinemessage.react';
import styles from './registration.styles';
import { Redirect } from 'react-router-dom';

class Registration extends React.Component {
  static getStores() {
    return [Store];
  }

  static getPropsFromStores() {
    return Store.getState();
  }

  constructor(props, context) {
    super(props, context);
    this.state = { transitionTo: null };
    this.submit = this.submit.bind(this);
    this.goToLogin = this.goToLogin.bind(this);
    this.goToForgetPassword = this.goToForgetPassword.bind(this);
  }

  componentDidMount() {
    Actions.clearStore()
  }

  onInputChange(value, nane) {
    Actions.updateStore({ [nane]: value });
  }

  goToLogin() {
    this.setState({transitionTo: '/'});
  }

  goToForgetPassword() {
    this.setState({transitionTo: '/forgetpassword'});
  }

  submit() {
    Actions.saveRegistration(this.props);
  }

  render() {
    if(this.state.transitionTo) {
      return <Redirect to={this.state.transitionTo} />;
    }
    const failureRegExPhone = !(new RegExp('^((\\d{10})|(\\d{3}-\\d{3}-\\d{4}))$', 'g').test(this.props.phone));
    const failureRegExName = !(new RegExp('^[a-zA-Z\'\\-\\s]*$', 'g').test(this.props.name));
    const failureRegExEmail = !(new RegExp('^[A-Za-z0-9+_-]+(?:\\.[A-Za-z0-9+_-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$', 'g').test(this.props.email));

    return (<div style={styles.container}>
      <h1 style={styles.title}>Registration</h1>
      {this.props.errorMsg && <Inlinemessage color={'#ff0000'} text={this.props.errorMsg} />}
      {this.props.saveSuccess && <Inlinemessage color={'#00ff00'} text={'Registration is successfull.'}/>}
      {!this.props.saveSuccess && <div>
        <InputField
          type="text"
          name="name"
          label="Name"
          value={this.props.name}
          maxlength="30"
          isRequired={true}
          formatErrorText={failureRegExName ? ' is invalid.' : null}
          onValueChange={this.onInputChange}
          icon="fa-user"
        />
        <InputField
          type="text"
          name="phone"
          label="Phone"
          value={this.props.phone}
          maxlength="12"
          isRequired={true}
          formatErrorText={(this.props.phone && failureRegExPhone) ? ' is invalid.' : null}
          onValueChange={this.onInputChange}
          icon="fa-phone"
        />
        <InputField
          type="text"
          name="email"
          label="Email"
          isRequired={true}
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
          isRequired={true}
          onValueChange={this.onInputChange}
          icon="fa-lock"
        />
        <InputField
          type="password"
          name="password2"
          label="Re-type Password"
          value={this.props.password2}
          maxlength="30"
          isRequired={true}
          onValueChange={this.onInputChange}
          icon="fa-lock"
        />
      </div>}
      <div style={styles.footer}>
        {!this.props.saveSuccess && <div>
          <Button text="Submit" isPrimary={true} onClick={this.submit} />
        </div>}
        <div style={styles.subFooter}>
          <Button text="Login" onClick={this.goToLogin} style={styles.button}/>
          {!this.props.saveSuccess && <Button text="Forget Password" onClick={this.goToForgetPassword} style={styles.button} />}
        </div>
      </div>
    </div>);
  }
}
export default connectToStores(Registration);
