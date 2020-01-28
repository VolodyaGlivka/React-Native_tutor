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
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  gridItem: {
    borderWidth: 1,
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderColor: colors.third
  },
  textColor: {
    color: colors.textColor
  },
  bookContainer: {
    padding: 15
  },
  bookTitle: {
    color: 'white',
    marginVertical: 10,
    fontSize: 28,
    width: '100%'
  },
  cameraContainer: {
    top: -25,
    left: '79%',
    borderColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  bookImageContainer: { height: 380 },
  bookDescription: {
    color: 'white'
  }
});

export default styles;
