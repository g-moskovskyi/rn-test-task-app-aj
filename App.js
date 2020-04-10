import 'react-native-gesture-handler';

import React, { useState } from 'react';
import { Provider } from 'react-redux';

import createStore from './src/store';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import { AppNavigator } from './src/navigation/AppNavigator';

const store = createStore();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./src/assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./src/assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={() => {
          fetchFonts();
        }}
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
}
