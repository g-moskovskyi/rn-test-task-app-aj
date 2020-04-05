import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useStore } from 'react-redux';

import { setUsers } from '../store/actions/users';
import { ABCBlock } from '../componets/ABCBlock';

const ListScreen = (props) => {
  const { dispatch } = useStore();
  usersList = useSelector((state) => state.users);

  if (usersList.name) {
    return (
      <View>
        <Text>Check 'access-token' in 'src/apis/fetchUsers.js'</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Button
        title='Go to the Filter'
        onPress={() => props.navigation.navigate('Filter')}
      />
      <Button
        title='START'
        onPress={() => {
          dispatch(setUsers());
        }}
      />
      <ABCBlock navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
});

export { ListScreen };
