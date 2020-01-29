import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, AsyncStorage } from 'react-native';
import jwt_decode from 'jwt-decode';

// Action
import AuthActions from '../../store/actions/auth';

const StartUpContainer = props => {
  const dispatch = useDispatch();
  const logOutUser = () => dispatch(AuthActions.logoutUser());

  useEffect(() => {
    const tryLogin = async () => {
      const result = await AsyncStorage.getItem('token');
      if (!result) {
        logOutUser();
        props.navigation.navigate('Login');
        return;
      }
      const decode = jwt_decode(result);
      const currentTime = Date.now() / 1000;
      if (decode.exp < currentTime || !decode) {
        logOutUser();
        props.navigation.navigate('Login');
        return;
      }
      dispatch(AuthActions.authenticate(result));
      props.navigation.navigate('HomePage');
    };
    tryLogin();
  }, [dispatch]);
  return <View />;
};
export default StartUpContainer;
