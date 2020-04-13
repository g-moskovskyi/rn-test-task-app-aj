import React from 'react';
import { View, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import { useStore } from 'react-redux';

import { cleanFilters, changeFilters } from '../store/filters';
import { SearchBar } from './SearchBar';
import { AgeFilter } from './AgeFilter';
import { GenderFilter } from './GenderFilter';
import { ChoiceButton } from './ChoiceButton';

const FiltersBlock = (props) => {
  const { dispatch } = useStore();
  return (
    <KeyboardAvoidingView
      behavior={Platform.Os == 'ios' ? 'padding' : 'height'}
      style={styles.block}
    >
      <AgeFilter />
      <GenderFilter />
      <SearchBar />
      <View style={styles.buttonsBlock}>
        <View style={styles.button}>
          <ChoiceButton
            title='RESET'
            onPress={() => {
              dispatch(cleanFilters());
              dispatch(changeFilters());
            }}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    marginHorizontal: 5,
    padding: 10,
    paddingBottom: Platform.OS === 'ios' ? 0 : 90,
    overflow: 'hidden',
  },

  button: { width: '50%', marginVertical: 5 },
});

export { FiltersBlock };
