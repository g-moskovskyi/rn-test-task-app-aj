import axios from 'axios';

import { access_token } from './constants';
import { setErrors } from '../store/errors';

const fetchUsers = async (dispatch) => {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://gorest.co.in/public-api/users',
      responseType: 'json',
      params: {
        _format: 'json',
        'access-token': access_token,
      },
    });
    return response.data;
  } catch (error) {
    dispatch(setErrors(error));
  }
};

export { fetchUsers };
