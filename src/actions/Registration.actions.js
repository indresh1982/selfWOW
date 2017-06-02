import utils from './ActionUtils';
import alt from './../altInstance';

class RegistrationActions {
  updateStore(data) {
    this.dispatch(data);
  }

  saveRegistration({ name, phone, email, password }) {
    utils.setupPostRequest('/api/public/user/add')
      .send(JSON.stringify({ name, phone, email, password }))
      .end((err, res) => {
        if (err) {
          this.actions.getApiError(res.statusText);
        }
        if(res.ok) {
          const resultData = JSON.parse(res.text);
          if (resultData.status) {
            this.actions.saveRegistrationSuccess();
          } else {
            this.actions.getApiError(resultData.error);
          }
          console.log(resultData); // eslint-disable-line no-console
        }
      }
    );
  }

  clearStore() {
    this.dispatch();
  }

  saveRegistrationSuccess() {
    this.dispatch();
  }

  getApiError(data) {
    this.dispatch(data);
  }
}

export default alt.createActions(RegistrationActions);
