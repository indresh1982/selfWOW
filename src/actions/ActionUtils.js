import request from 'superagent';

export default {
  setupGetRequest(url) {
    return request
      .get(url)
      .set('orgoid', 'orgoid')
      .set('associateoid', 'associateoid');
  },

  setupPostRequest(url) {
    return request
      .post(url)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('x-adp-partnerid', '5003111E-70BE-4DE7-8729-5276A0AAB6BA')
      .set('orgoid', 'orgoid')
      .set('associateoid', 'associateoid');
  }
};
