import 'react-native-gesture-handler';

import React, { useState } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import { AppNavigator } from './src/navigation/AppNavigator';

import { usersReducer } from './src/store/reducers/users';

const store = createStore(
  usersReducer,
  // applyMiddleware(thunk)
  composeWithDevTools(applyMiddleware(thunk))
);

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
