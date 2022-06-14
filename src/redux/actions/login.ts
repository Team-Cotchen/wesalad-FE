import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const logIn = createAsyncThunk('user/logIn', async (data, thunkAPI) => {
  return axios({
    method: 'get',
    url: 'https://2d5cac18-c275-4959-bf2e-a67a96b96520.mock.pstmn.io/user/sign',
  }).then((response) => response.data);
});

export default logIn;
