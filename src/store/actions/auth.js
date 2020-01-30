import jwt_decode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';
import { AsyncStorage } from 'react-native';
import setAuthToken from '../../utils/setAuthToken';
import AuthService from '../services/auth';
import NavigationServises from '../../utils/navigationServises';

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
      // destruction of input data
      const { token, refreshToken } = data;
      // Set token to ls
      AsyncStorage.multiSet([
        ['token', token],
        ['refreshToken', refreshToken]
      ]);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decode = jwt_decode(token);
      // Set current user
      dispatch(AuthActions.setCurrentUser(decode));
      NavigationServises.navigate('HomePage');
    } catch (err) {
      // here we add error listener
      console.log('error', err);
    }
  };

  static authenticate = token => dispatch => {
    // Set token to Auth header
    setAuthToken(token);
    // Decode token to get user data
    const decode = jwt_decode(token);
    // Set current user
    dispatch(AuthActions.setCurrentUser(decode));
  };

  static logoutUser = () => dispatch => {
    AsyncStorage.multiGet(['token', 'refreshToken']).then(() => {
      AsyncStorage.multiRemove(['token', 'refreshToken']);
    });
    // Remove auth header for future requests
    setAuthToken(null);
    // Set current user to {} witch will set isAuthenticated to false
    dispatch(AuthActions.setCurrentUser({}));
  };
}
