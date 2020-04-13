import React from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { useStore, useSelector } from 'react-redux';

import { setGenderFilter, changeFilters } from '../store/filters/actions';

const GenderFilter = (props) => {
  const { dispatch } = useStore();
  const genderFilter = useSelector((state) => state.filters.genderFilter);
  const gender = genderFilter == 'empty' ? 'both' : genderFilter;

  return (
    <View style={styles.gender}>
      <View style={styles.text}>
        <Text>GENDER:</Text>
      </View>
      <View style={styles.picker}>
        <Picker
          selectedValue={gender}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => {
            dispatch(setGenderFilter(itemValue));
            dispatch(changeFilters());
          }}
        >
          <Picker.Item label='Both' value='both' />
          <Picker.Item label='Male' value='male' />
          <Picker.Item label='Fimale' value='female' />
        </Picker>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  gender: {
    flexDirection: 'row',
    width: '100%',
    height: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  text: { width: '20%' },
  picker: { width: '80%' },
});

export { GenderFilter };
