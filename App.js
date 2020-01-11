import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [title, setTitle] = React.useState('Open up App.js to start working on your app!');
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Button title="Change text" onPress={()=>setTitle('changed text')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
