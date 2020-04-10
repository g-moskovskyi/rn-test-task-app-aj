import React, { useState } from 'react';
import { View, Button, Picker, Text, StyleSheet } from 'react-native';
import { useStore, useSelector } from 'react-redux';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import { age } from '../converters/';
import { setFilters, cleanFilters } from '../store/filters';
import { cleanFilteredUsersCheck } from '../store/filteredUsers';

const FilterScreen = (props) => {
  const { dispatch } = useStore();
  const users = useSelector((state) => state.users.items);
  const filters = useSelector((state) => state.filters.params);
  const usersAges = users.map((item) => age(item.dob));
  const usersAgeMin = Math.min(...usersAges);
  const usersAgeMax = Math.max(...usersAges);

  const [gender, setGender] = useState(
    filters == 'empty' ? 'both' : filters.gender
  );
  const [ageMin, setAgeMin] = useState(
    filters == 'empty' ? usersAgeMin : filters.age.from
  );
  const [ageMax, setAgeMax] = useState(
    filters == 'empty' ? usersAgeMax : filters.age.to
  );

  const cleanFiltersForm = () => {
    setGender('both');
    setAgeMin(usersAgeMin);
    setAgeMax(usersAgeMax);
  };

  const withoutChangeExit =
    gender === 'both' && ageMin === usersAgeMin && ageMax === usersAgeMax;

  return (
    <View style={styles.screen}>
      <View style={styles.age}>
        <View style={styles.ageText}>
          <Text>AGE:</Text>
        </View>
        <MultiSlider
          trackStyle={{ backgroundColor: '#bdc3c7' }}
          selectedStyle={{ backgroundColor: '#5e5e5e' }}
          values={[ageMin, ageMax]}
          min={usersAgeMin}
          max={usersAgeMax}
          valueSuffix={'year'}
          valuePrefix={'age:'}
          allowOverlap={false}
          enableLabel={true}
          enabledTwo={true}
          style={{ padding: 30 }}
          onValuesChange={(values) => {
            setAgeMin(values[0]);
            setAgeMax(values[1]);
          }}
        />
      </View>
      <View style={styles.gender}>
        <View style={styles.genderText}>
          <Text>GENDER:</Text>
        </View>
        <Picker
          selectedValue={gender}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => {
            setGender(itemValue);
          }}
        >
          <Picker.Item label='Both' value='both' />
          <Picker.Item label='Male' value='male' />
          <Picker.Item label='Fimale' value='female' />
        </Picker>
      </View>
      <View style={styles.buttonsBlock}>
        <View style={styles.button}>
          <Button
            title='CANCEL'
            onPress={() => {
              props.navigation.navigate('List of members');
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='RESET'
            onPress={() => {
              dispatch(cleanFilters());
              dispatch(cleanFilteredUsersCheck());
              cleanFiltersForm();
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='OK'
            onPress={() => {
              if (!withoutChangeExit) {
                dispatch(
                  setFilters({
                    gender: gender,
                    age: { from: ageMin, to: ageMax },
                  })
                );
              }

              props.navigation.navigate('List of members');
            }}
          />
        </View>
      </View>
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
  age: {
    flexDirection: 'row',
    width: '100%',
    height: 120,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  ageText: { width: 40 },
  gender: {
    flexDirection: 'row',
    width: '100%',
    height: 120,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  genderText: { width: 60 },
  buttonsBlock: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: { width: '25%', borderRadius: 15, overflow: 'hidden' },
});

export { FilterScreen };
