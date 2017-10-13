import React from 'react';
import Button from './../../components/button/button.react';
import styles from './notFound.styles';
import { Redirect } from 'react-router-dom';

class NotFound extends React.Component {
  static propTypes = {
    email: React.PropTypes.string,
    errorMsg: React.PropTypes.string,
    forgetSuccess: React.PropTypes.bool
  };

  constructor(props, context) {
    super(props, context);
    this.state = { transitionTo: null };
  }

  goToLogin = () => {
    this.setState({ transitionTo: '/' });
  };

  goToRegistration = () => {
    this.setState({ transitionTo: '/registration' });
  };

  render() {
    if (this.state.transitionTo) {
      return <Redirect to={this.state.transitionTo} />;
    }

    return (<div style={styles.container}>
      <h1 style={styles.title}>Page Not Found</h1>
      <div style={styles.footer}>
        <Button text="Home" isPrimary onClick={this.goToLogin} style={styles.button} />
        <Button text="Registration" onClick={this.goToRegistration} style={styles.button} />
      </div>
    </div>);
  }
}
export default NotFound;
