import { StyleSheet } from 'react-native';
import colors from './src/const/colors';
/*
 ** Here we describe styles which we use in many places in the app
 */
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.secondary,
    flex: 1
  },
  container: {},
  'col-6': {
    padding: 10,
    flex: 1,
    maxWidth: '50%',
    height: 300,
    fontFamily: 'open-sans'
  },
  gridItem: {
    borderWidth: 1,
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderColor : colors.third
  },
  textColor: {
    color: colors.textColor
  }
});

export default styles;
