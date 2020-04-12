import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useStore } from 'react-redux';

import { ListScreen } from '../screens/ListScreen';
import { FilterScreen } from '../screens/FilterScreen';
import { fetchUsers } from '../store/users/actions';

const Stack = createStackNavigator();

const AppNavigator = (props) => {
  const [usersSeted, setUsersSeted] = useState(false);
  const store = useStore();

  if (!usersSeted) {
    store.dispatch(fetchUsers());
    setUsersSeted(true);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='List of members' component={ListScreen} />
        <Stack.Screen name='Filter' component={FilterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { AppNavigator };
