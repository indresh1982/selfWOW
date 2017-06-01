import alt from './../altInstance';
import RegistrationActions from './../actions/Registration.actions';

class RegistrationStore {
  constructor() {
    this.bindActions(RegistrationActions);

    this.state = {
      name: '',
      phone: '',
      email: '',
      password: '',
      password2: '',
      errorMsg: null,
      saveSuccess: false
    };
  }

  clearStore() {
    this.setState({
      name: '',
      phone: '',
      email: '',
      password: '',
      password2: '',
      errorMsg: null,
      saveSuccess: false
    });
  }

  updateStore(data) {
    this.setState( data );
  }

  getApiError(data) {
    this.setState({ errorMsg: data });
  }

  saveRegistrationSuccess() {
    this.setState({ errorMsg: null, saveSuccess:true });
  }
}

export default alt.createStore(RegistrationStore, 'RegistrationStore');