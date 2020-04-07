import React from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';
import { useSelector, useStore } from 'react-redux';

import {
  setUsers,
  setSearchFilter,
  cleanFilteredUsers,
} from '../store/actions/users';
import { ABCBlock } from '../componets/ABCBlock';
import { SearchBar } from '../componets/SearchBar';

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
      <View style={styles.buttonsBlock}>
        <View style={styles.button}>
          <Button
            title='REFRESH USERLIST'
            onPress={() => {
              dispatch(setUsers());
              dispatch(setSearchFilter(''));
              dispatch(cleanFilteredUsers());
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='GO TO THE FILTERS'
            onPress={() => props.navigation.navigate('Filter')}
          />
        </View>
      </View>
      <SearchBar />
      <ABCBlock navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: '100%',
    alignItems: 'flex-start',
    borderWidth: 2,
    borderColor: 'black',
    marginHorizontal: 5,
    paddingBottom: Platform.OS === 'ios' ? 0 : 90,
    overflow: 'hidden',
  },
  buttonsBlock: { width: '90%', marginHorizontal: 20 },
  button: {
    width: '100%',
    marginVertical: 5,

    justifyContent: 'center',
    borderRadius: 15,
    overflow: 'hidden',
  },
});

export { ListScreen };
