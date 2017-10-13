import request from 'superagent';
const apiHost = apiServerPath || 'http://localhost:8080'; // eslint-disable-line no-undef

export default {
  setupGetRequest(url) {
    return request
      .get(apiHost + url)
      .set('orgoid', 'orgoid')
      .set('associateoid', 'associateoid');
  },

  setupPostRequest(url) {
    return request
      .post(apiHost + url)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
  }
};
