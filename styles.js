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
    borderRadius: 3,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderColor: colors.third
  },
  gridBookTitle: {
    marginTop: 5,
    color: 'white',
    fontFamily: 'open-sans-bold'
  },
  bookContainer: {
    padding: 15
  },
  bookTitle: {
    color: 'white',
    marginVertical: 10,
    fontSize: 28,
    width: '100%',
    fontFamily: 'open-sans-bold'
  },
  cameraContainer: {
    position: 'absolute',
    bottom: -25,
    left: '75%',
    borderColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  bookImageContainer: { position: 'relative', marginBottom: 15, alignItems: 'center' },
  bookDescription: {
    color: 'white',
    fontFamily: 'open-sans'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startReadButton: {
    marginTop: 20,
    borderColor: colors.third,
    borderWidth: 1,
    fontFamily: 'open-sans-bold',
    backgroundColor: colors.third,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 18,
    padding: 5,
    width: 200,
    marginHorizontal: 'auto',
    borderRadius: 50
  },
  inputField: {
    borderColor: colors.third,
    borderWidth: 1,
    // fontFamily: 'open-sans',
    color: 'white',
    paddingVertical: 10,
    fontSize: 18,
    paddingHorizontal: 25,
    width: 250,
    borderRadius: 50,
    marginVertical: 10
  },
  loginButton: {
    marginTop: 20,
    borderColor: colors.third,
    borderWidth: 1,
    // fontFamily: 'open-sans-bold',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 18,
    padding: 5,
    width: 200,
    marginHorizontal: 'auto',
    borderRadius: 50
  }
});

export default styles;
