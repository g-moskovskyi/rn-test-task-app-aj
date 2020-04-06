import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { useStore } from 'react-redux';

import { setSearchFilter } from '../store/actions/users';
import { setFilteredUsers, cleanFilteredUsers } from '../store/actions/users';

const textHeandler = (text, dispatch) => {
  if (text.length > 2) {
    dispatch(setSearchFilter(text));
    dispatch(setFilteredUsers(text));
  } else {
    dispatch(setSearchFilter(''));
    dispatch(cleanFilteredUsers());
  }
};

const SearchBar = (props) => {
  const [text, setText] = useState('');
  const { dispatch } = useStore();

  return (
    <View>
      <TextInput
        placeholder='Search...'
        onChangeText={(text) => {
          setText(text);
          textHeandler(text, dispatch);
        }}
        defaultValue={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export { SearchBar };
