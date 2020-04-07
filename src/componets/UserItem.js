import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import { age } from '../store/middlewares/users';
const UserItem = (props) => {
  const itemData = props.itemData;

  const activeMark =
    itemData.item.status == 'active' ? styles.active : styles.inactive;

  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate('Invitation', { id: itemData.item.id })
      }
      style={styles.user}
    >
      <Text style={{ ...styles.text, ...activeMark }}>
        <Text>#{itemData.item.id} - </Text>
        <Text>{itemData.item.first_name} - </Text>
        <Text>{itemData.item.last_name} - </Text>
        <Text>{age(itemData.item.dob)} year old- </Text>
        <Text>{itemData.item.gender}</Text>
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  user: {
    flex: 1,
    flexDirection: 'row',

    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 20,
    overflow: 'hidden',
  },
  text: { fontFamily: 'open-sans-bold', fontSize: 18, textAlign: 'center' },
  active: { color: 'black' },
  inactive: { color: 'gray' },
});

export { UserItem };
