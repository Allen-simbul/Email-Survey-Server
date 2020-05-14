import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/current_user');
    dispatch({ type: 'fetch_user', payload: response.data });
  };
};
