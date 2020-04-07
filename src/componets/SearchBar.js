import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
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
    <View style={styles.searchBar}>
      <TextInput
        placeholder='Search...'
        onChangeText={(text) => {
          setText(text);
          textHeandler(text, dispatch);
        }}
        defaultValue={text}
        style={styles.textInput}
      />
      <View style={styles.button}>
        {/* <Button title='CLEAR' onPress={setText('')} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    height: 40,
    width: '90%',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 15,
    overflow: 'hidden',
  },
  textInput: { width: '100%' },
  button: { width: 20 },
});

export { SearchBar };
