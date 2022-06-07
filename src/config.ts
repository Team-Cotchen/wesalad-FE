export const BASE_URL = 'http://172.30.60.3:8000';
const API = {
  checkToken: `${BASE_URL}/accounts/`,
  signup: `${BASE_URL}/accounts/signup`,
  search: `${BASE_URL}/accounts/search`,
  login: `${BASE_URL}/accounts/login`,
};

export default API;
