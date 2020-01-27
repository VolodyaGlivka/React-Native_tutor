import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import AppNavigator from './AppNavigator';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import { enableScreens } from 'react-native-screens';

// we use it for better performances
enableScreens();

const store = configureStore();

const fetchFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
