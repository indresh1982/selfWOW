import alt from './../altInstance';
import LoginActions from './../actions/Login.actions';

class LoginStore {
  constructor() {
    this.bindActions(LoginActions);

    this.state = {
      email: '',
      password: '',
      errorMsg: null,
      loginSuccess: false
    };
  }

  clearStore() {
    this.setState({
      email: '',
      password: '',
      errorMsg: null,
      loginSuccess: false
    });
  }

  updateStore(data) {
    this.setState( data );
  }

  getApiError(data) {
    this.setState({ errorMsg: data });
  }

  loginSuccess() {
    this.setState({ errorMsg: null, loginSuccess:true, password: '', email: '' });
  }
}

export default alt.createStore(LoginStore, 'LoginStore');