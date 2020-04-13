import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useSelector, useStore } from 'react-redux';

import { fetchUsers } from '../store/users/actions';

import { UsersListBlock } from '../componets/UsersListBlock';
import { FiltersBlock } from '../componets/FiltersBlock';
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
  const users = useSelector((state) => state.users);
  const noErrors = useSelector((state) => state.errors.noErrors);
  const errors = useSelector((state) => state.errors.items);

  const usersList = users.result;

  if (!noErrors) {
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

  if (users.loading) {
    return (
      <View>
        <RefreshButton />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!users._meta.success) {
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <View style={styles.buttonsBlock}>
          <View style={styles.button}>
            <RefreshButton />
          </View>
        </View>
        <View style={styles.filtersBlock}>
          <FiltersBlock />
        </View>
        <View style={styles.listBlock}>
          <UsersListBlock />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    marginHorizontal: 5,
    paddingBottom: Platform.OS === 'ios' ? 0 : 90,
    overflow: 'hidden',
  },
  buttonsBlock: { height: 40, width: '90%', marginHorizontal: 20 },
  button: {
    width: '100%',
    marginVertical: 5,

    justifyContent: 'center',
    borderRadius: 15,
    overflow: 'hidden',
  },
  filtersBlock: { height: 170 },
  listBlock: { height: 350 },
});

export { ListScreen };
