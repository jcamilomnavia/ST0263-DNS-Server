import axios from 'axios';
import { store } from '../store';

let { REACT_APP_API_HOST } = process.env;

export default (
  path,
  method = 'get',
  data = null,
  params = null,
  withCredentials = false,
  headers = {
    Authorization: `Bearer ${store ? store.getState().auth.token : null}`,
  },
  responseType = 'json',
  host = REACT_APP_API_HOST
) => {
  const url = `${host}/${path}`;
  return axios({
    method,
    url,
    data,
    params,
    headers,
    withCredentials,
    responseType,
  });
};
