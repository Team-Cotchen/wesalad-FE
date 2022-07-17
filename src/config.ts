export const BASE_URL = 'http://192.168.100.27:8000';
export const BASE_URL_TEST =
  'https://2d5cac18-c275-4959-bf2e-a67a96b96520.mock.pstmn.io/';

const API = {
  checkToken: `${BASE_URL}/accounts/`,
  search: `${BASE_URL}/accounts/search`,
  // signup: `${BASE_URL}/accounts/signup`,
  // login: `${BASE_URL}/accounts/login`,

  login: `${BASE_URL_TEST}/user/signIn`,
  signup: `${BASE_URL_TEST}/user/signUp`,

  getToken: () => {
    const access = localStorage.getItem('accessToken');
    const refresh = localStorage.getItem('refreshToken');

    return { access, refresh };
  },
};

export const TINYMCE_API_KEY =
  'zxuiph9yiunvdp85dyzooockfmnnka538tzip74drjnbvoia';

export default API;
