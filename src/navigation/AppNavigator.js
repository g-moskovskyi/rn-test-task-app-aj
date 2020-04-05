import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useStore } from 'react-redux';

import { ListScreen } from '../screens/ListScreen';
import { FilterScreen } from '../screens/FilterScreen';
import { InvitScreen } from '../screens/InvitScreen';
import { SendedScreen } from '../screens/SendedScreen';
import { setUsers } from '../store/actions/users';

const Stack = createStackNavigator();

const AppNavigator = (props) => {
  const [usersSeted, setUsersSeted] = useState(false);
  const store = useStore();

  if (!usersSeted) {
    store.dispatch(setUsers());
    setUsersSeted(true);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='List of members' component={ListScreen} />
        <Stack.Screen name='Filter' component={FilterScreen} />
        <Stack.Screen name='Invitation' component={InvitScreen} />
        <Stack.Screen name='Inform' component={SendedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { AppNavigator };
