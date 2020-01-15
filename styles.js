import { StyleSheet } from 'react-native';
import Colors from './src/const/colors';
/*
 ** Here we describe styles which we use in many places in the app
*/
const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: Colors.primary
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: -15
  },
  homeContainer: {
    padding: 30,
    backgroundColor: '#ccc',
    height: '100%'
  }
});

export default styles;
