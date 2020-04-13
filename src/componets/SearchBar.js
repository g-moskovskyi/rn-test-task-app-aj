import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useStore, useSelector } from 'react-redux';

import { fetchSearchFilter } from '../store/filters';
import { ClearButton } from './ClearButton';

const SearchBar = (props) => {
  const text = useSelector((state) => state.filters.searchFilter);
  const { dispatch } = useStore();

  return (
    <View style={styles.searchBar}>
      <View style={styles.text}>
        <Text>Name: </Text>
      </View>
      <TextInput
        placeholder='Search...'
        onChangeText={(text) => dispatch(fetchSearchFilter(text))}
        defaultValue={text}
        style={styles.textInput}
      />
      <ClearButton
        style={styles.button}
        onPress={() => dispatch(fetchSearchFilter(''))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    width: '100%',
    marginHorizontal: 20,
    paddingLeft: 10,
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 15,
    overflow: 'hidden',
  },
  text: { width: '15%' },
  textInput: { width: '75%' },
  button: { width: '10%' },
});

export { SearchBar };
