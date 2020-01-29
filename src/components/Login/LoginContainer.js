import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../../styles';

// Action
import AuthActions from '../../store/actions/auth';

const LoginContainer = props => {
  const [data, setData] = React.useState({ login: '', password: '' });
  const dispatch = useDispatch();
  const authUser = () => dispatch(AuthActions.loginUser(data));

  return (
    <View style={styles.screen}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          keyboardType="email-address"
          email={true}
          style={styles.inputField}
          value={data.login}
          autoCapitalize="none"
          secureTextEntry
          onChangeText={text => setData({ ...data, login: text })}
          placeholder="Login"
        />
        <TextInput
          password={true}
          secureTextEntry
          style={styles.inputField}
          value={data.password}
          onChangeText={text => setData({ ...data, password: text })}
          placeholder="Password"
        />
        <TouchableOpacity onPress={() => authUser()}>
          <Text style={styles.loginButton}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginContainer;
