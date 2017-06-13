import alt from './../altInstance';

class AppNavActions {
  updateStore(data) {
    this.dispatch(data);
  }

  clearStore() {
    this.dispatch();
  }
}

export default alt.createActions(AppNavActions);
