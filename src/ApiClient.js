import superagent from 'superagent';
import config from 'config';

/*
 * This silly underscore is here to avoid a mysterious "ReferenceError: ApiClient is not defined" error.
 * See Issue #14. https://github.com/erikras/react-redux-universal-hot-example/issues/14
 *
 * Remove it at your own risk.
 */
class ApiClient_ {
  constructor(req) {
    ['get', 'post', 'put', 'patch', 'del'].
      forEach((method) => {
        this[method] = (path, options) => {
          // TODO(jlfwong): Might need to deal with JSONP here.
          return new Promise((resolve, reject) => {
            let request = superagent[method](
              `https://khanacademy.org/${path}`);
            if (options && options.params) {
              request.query(options.params);
            }
            if (options && options.data) {
              request.send(options.data);
            }
            request.end((err, res) => {
              if (err) {
                reject(res.body || err);
              } else {
                resolve(res.body);
              }
            });
          });
        };
      });
  }
}
const ApiClient = ApiClient_;

export default ApiClient;