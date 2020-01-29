// import jwt_decode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';
// import setAuthToken from '../../utils/setAuthToken';
import AuthService from '../services/auth';
// import ErrorsActions from './errors';

export default class AuthActions {
  static setCurrentUser = decoded => {
    return {
      type: SET_CURRENT_USER,
      payload: decoded
    };
  };

  static loginUser = userData => async dispatch => {
    try {
      const data = await AuthService.loginUser(userData);
      // Save to localStorage
      // const { bearerToken } = data;
      // Set token to ls
      // localStorage.setItem('jwtToken', bearerToken);
      // Set token to Auth header
      // setAuthToken(bearerToken);
      // Decode token to get user data
      // const decode = jwt_decode(bearerToken);
      // Set current user
      // dispatch(AuthActions.setCurrentUser(decode));
      dispatch(AuthActions.setCurrentUser(data));
    } catch (err) {
      console.log('error', err);
    }
  };

  static logoutUser = () => dispatch => {
    // localStorage.getItem('jwtToken');
    // Remove token from localStorage
    // localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    // setAuthToken(false);
    // Set current user to {} witch will set isAuthenticated to false
    dispatch(AuthActions.setCurrentUser({}));
  };
}
