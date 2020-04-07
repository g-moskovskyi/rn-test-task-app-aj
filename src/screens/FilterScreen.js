import React, { useState, setState } from 'react';
import { View, Text, Button, Picker, StyleSheet } from 'react-native';
import { useStore, useSelector } from 'react-redux';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import { age } from '../store/middlewares/users';

const FilterScreen = (props) => {
  const users = useSelector((state) => state.users);
  const usersAges = users.map((item) => age(item.dob));
  const usersAgeMin = Math.min(...usersAges);
  const usersAgeMax = Math.max(...usersAges);

  const [sex, setSex] = useState('both');
  const [ageMin, setAgeMin] = useState(usersAgeMin);
  const [ageMax, setAgeMax] = useState(usersAgeMax);

  console.log('ageMin', ageMin, 'ageMax', ageMax);

  const sortedUsersAges = usersAges.sort((prev, next) => {
    if (prev < next) return -1;
    if (prev > next) return 1;
  });

  return (
    <View style={styles.screen}>
      <View style={styles.age}>
        <MultiSlider
          trackStyle={{ backgroundColor: '#bdc3c7' }}
          selectedStyle={{ backgroundColor: '#5e5e5e' }}
          values={[usersAgeMin, usersAgeMax]}
          min={usersAgeMin}
          max={usersAgeMax}
          valueSuffix={'year'}
          allowOverlap={false}
          enableLabel={true}
          enabledTwo={true}
          style={{ padding: 10 }}
          onValuesChange={(values) => {
            setAgeMin(values[0]);
            setAgeMax(values[1]);
          }}
        />
      </View>
      <View style={styles.sex}>
        <Picker
          selectedValue={sex}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => {
            setSex(itemValue);
            console.log(itemValue);
          }}
        >
          <Picker.Item label='Both' value='both' />
          <Picker.Item label='Male' value='male' />
          <Picker.Item label='Fimale' value='female' />
        </Picker>
      </View>
      <View style={styles.buttonsBlock}>
        <View style={styles.button}>
          <Button title='CANCEL' onPress={() => {}} />
        </View>
        <View style={styles.button}>
          <Button
            title='CLEAR'
            onPress={() => {
              setSex('both');
              setAgeMin(usersAgeMin);
              setAgeMax(usersAgeMax);
            }}
          />
        </View>
        <View style={styles.button}>
          <Button title='OK' onPress={() => {}} />
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
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  sex: {},
  buttonsBlock: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: { width: '25%', borderRadius: 15, overflow: 'hidden' },
});

export { FilterScreen };
