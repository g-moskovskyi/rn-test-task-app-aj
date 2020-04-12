import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useStore } from 'react-redux';

import { fetchSearchFilter } from '../store/searchFilter';
import { ClearButton } from './ClearButton';

const SearchBar = (props) => {
  const [text, setText] = useState('');
  const { dispatch } = useStore();

  const onChangeText = (text) => {
    setText(text);
    dispatch(fetchSearchFilter(text));
  };

  return (
    <View style={styles.searchBar}>
      <View style={styles.text}>
        <Text>Name: </Text>
      </View>
      <TextInput
        placeholder='Search...'
        onChangeText={(text) => onChangeText(text)}
        defaultValue={text}
        style={styles.textInput}
      />
      <ClearButton style={styles.button} onPress={() => onChangeText('')} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    width: '90%',
    marginHorizontal: 20,
    paddingLeft: 10,
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 15,
    overflow: 'hidden',
  },
  text: { width: '15%' },
  textInput: { width: '75%' },
  button: { flex: 1, width: 20 },
});

export { SearchBar };
