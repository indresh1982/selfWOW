import alt from './../altInstance';
import AppNavActions from './../actions/AppNav.actions';

class AppNavStore {
  constructor() {
    this.bindActions(AppNavActions);

    this.state = {
      isOpen: false
    };
  }

  clearStore() {
    this.setState({
      isOpen: false
    });
  }

  updateStore(data) {
    this.setState(data);
  }
}

export default alt.createStore(AppNavStore, 'AppNavStore');
