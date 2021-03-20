import axios from 'axios';

axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// axios.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if (!err.response) {
//       Object.assign(err, {
//         response: { data: { message: 'Network not available' } },
//         status: 0,
//       });
//     }
//     if (err.response.status === 307) {
//       Object.assign(err, {
//         response: { data: { message: 'Redirect service network' } },
//         status: err.response.status,
//       });
//     }
//     if (err.response.status === 408 || err.code === 'ECONNABORTED') {
//       Object.assign(err, {
//         response: {
//           data: { message: `A time happend on url ${err.config.url}` },
//           status: err.response.status,
//         },
//       });
//     }
//     if (err.response.status === 500) {
//       Object.assign(err, {
//         response: {
//           data: { message: JSON.stringify(err.response) },
//           status: err.response.status,
//         },
//       });
//     }
//     return Promise.reject(err);
//   }
// );
