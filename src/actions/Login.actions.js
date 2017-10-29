import utils from './ActionUtils';
import alt from './../altInstance';

class LoginActions {
  constructor() {
    this.generateActions(
      'updateStore',
      'clearStore',
      'loginSuccess',
      'getApiError'
    );
  }

  login({ email, password }) {
    utils.setupPostRequest('/api/public/user/login')
      .send(JSON.stringify({ email, password }))
      .end((err, res) => {
        if (err) {
          this.actions.getApiError(res.statusText);
        }
        if (res.ok) {
          const resultData = JSON.parse(res.text);
          if (resultData.status) {
            this.actions.loginSuccess();
          } else {
            this.actions.getApiError('Login Failed! Email or Password mismatch.');
          }
          console.log(resultData); // eslint-disable-line no-console
        }
      });
  }
}

export default alt.createActions(LoginActions);
