import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useStore, useSelector } from 'react-redux';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import { age } from '../converters/';
import { setAgeFilter, changeFilters } from '../store/filters/actions';

const AgeFilter = (props) => {
  const { dispatch } = useStore();
  const users = useSelector((state) => state.users.result);
  const ageFilter = useSelector((state) => state.filters.ageFilter);
  const usersAges = users.map((item) => age(item.dob));
  const usersAgeMin = Math.min(...usersAges);
  const usersAgeMax = Math.max(...usersAges);

  const ageMin = ageFilter == 'empty' ? usersAgeMin : ageFilter.from;

  const ageMax = ageFilter == 'empty' ? usersAgeMax : ageFilter.to;

  return (
    <View style={styles.age}>
      <View style={styles.ageText}>
        <Text>AGE:</Text>
      </View>
      <View style={styles.sliderBlock}>
        <View style={styles.indicators}>
          <View style={styles.indicator}>
            <Text>{ageMin}</Text>
          </View>
          <View style={styles.indicator}>
            <Text>{ageMax}</Text>
          </View>
        </View>
        <View style={styles.slider}>
          <MultiSlider
            trackStyle={{ backgroundColor: '#bdc3c7' }}
            selectedStyle={{ backgroundColor: '#5e5e5e' }}
            values={[ageMin, ageMax]}
            min={usersAgeMin}
            max={usersAgeMax}
            valueSuffix={'year'}
            valuePrefix={'age:'}
            allowOverlap={false}
            enableLabel={false}
            enabledTwo={true}
            onValuesChange={(values) => {
              dispatch(setAgeFilter({ from: values[0], to: values[1] }));
              dispatch(changeFilters());
            }}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  age: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  ageText: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
  },
  sliderBlock: { width: '85%' },
  slider: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  indicators: { flexDirection: 'row', justifyContent: 'space-around' },
  indicator: {
    width: '40%',
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
  },
});

export { AgeFilter };
