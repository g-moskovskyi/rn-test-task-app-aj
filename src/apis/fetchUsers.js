import axios from 'axios';

import { sortUsers } from '../store/middlewares/users';
import { usersABC } from '../store/middlewares/users';

const access_token = '9rWfQ-WY6A9_GrI9KEw5S_MnHJYFQOfx94y8';

const fetchUsers = async (dispatch, SET_USERS, SET_USERS_ABC) => {
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
    const result = response.data.result;
    if (result.name) {
      dispatch({ type: SET_USERS, setUsers: result });
      return;
    }
    dispatch({ type: SET_USERS, setUsers: sortUsers(result) });
    dispatch({
      type: SET_USERS_ABC,
      setUsersABC: usersABC(result),
    });
  } catch (error) {
    console.error(error);
  }
};

export { fetchUsers };
