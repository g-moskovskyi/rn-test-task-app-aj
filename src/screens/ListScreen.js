import React from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';
import { useSelector, useStore } from 'react-redux';

import { fetchUsers } from '../store/users/actions';

import { ABCBlock } from '../componets/ABCBlock';
import { SearchBar } from '../componets/SearchBar';
import { cleanFilteredUsers } from '../store/filteredUsers';
import { cleanErrors } from '../store/errors';

const RefreshButton = () => {
  const { dispatch } = useStore();
  return (
    <Button
      title='REFRESH USERLIST'
      onPress={() => {
        dispatch(fetchUsers());
        dispatch(cleanErrors());
      }}
    />
  );
};

const ListScreen = (props) => {
  const { dispatch } = useStore();
  const usersList = useSelector((state) => state.users.items);
  const errors = useSelector((state) => state.errors.items);

  if (errors != 'empty') {
    return (
      <View>
        <RefreshButton />
        <Text>
          {errors.name}
          {': '}
          {errors.message}
        </Text>
      </View>
    );
  }

  if (usersList == 'loading') {
    return (
      <View>
        <RefreshButton />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (usersList == 'empty') {
    return (
      <View>
        <RefreshButton />
        <Text>Check 'access-token' in 'src/apis/constants.js'</Text>
      </View>
    );
  }
  if (usersList == 'no_results') {
    return (
      <View>
        <RefreshButton />
        <Text>You send invitations to all users</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.buttonsBlock}>
        <View style={styles.button}>
          <RefreshButton />
        </View>
        <View style={styles.button}>
          <Button
            title='FILTERS'
            onPress={() => props.navigation.navigate('Filter')}
          />
        </View>
        <View style={styles.button}></View>
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
