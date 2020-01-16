import { StyleSheet } from 'react-native';
import Colors from './src/const/colors';
/*
 ** Here we describe styles which we use in many places in the app
 */
const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#ccc'
  },
  container: {
    paddingHorizontal: 10
  },
  'col-6': {
    paddingHorizontal: 10,
    flex: 1,
    maxWidth: '50%',
    height: 250
  }
});

export default styles;
