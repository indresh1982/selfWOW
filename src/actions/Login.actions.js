import utils from './ActionUtils'
import alt from './../altInstance';

class LoginActions {
  updateStore(data) {
    this.dispatch(data);
  }
  login({email, password}) {
    utils.setupPostRequest('/api/public/user/login')
      .send(JSON.stringify({ email, password }))
      .end((err, res) => {
          if(err)
          {
            this.actions.getApiError(res.statusText);
          }
          if(res.ok) {
            let resultData = JSON.parse(res.text);
            if(resultData.status) {
              this.actions.loginSuccess();
            } else {
              this.actions.getApiError('Login Failed! Email or Password mismatch.');
            }
            console.log(resultData)
          }
        }
      );
  }

  clearStore() {
    this.dispatch();
  }

  loginSuccess() {
    this.dispatch();
  }

  getApiError(data) {
    this.dispatch(data);
  }
}

export default alt.createActions(LoginActions);
