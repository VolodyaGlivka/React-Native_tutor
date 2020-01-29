import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../../styles';

const LoginContainer = props => {
  const [data, setData] = React.useState({ email: '', password: '' });
  return (
    <View style={styles.screen}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          keyboardType='email-address'
          email={true}
          style={styles.inputField}
          value={data.email}
          autoCapitalize='none'
          secureTextEntry
          onChangeText={text => setData({ ...data, email: text })}
          placeholder='Login'
        />
        <TextInput
          password={true}
          secureTextEntry
          style={styles.inputField}
          value={data.password}
          onChangeText={text => setData({ ...data, password: text })}
          placeholder='Password'
        />
        <TouchableOpacity onPress={() => props.navigation.navigate({ routeName: 'BookChapter' })}>
          <Text style={styles.loginButton}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginContainer;
