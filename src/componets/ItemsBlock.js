import React from 'react';
import { useSelector } from 'react-redux';
import { View, FlatList, StyleSheet } from 'react-native';

import { UserItem } from '../componets/UserItem';

const ItemsBlock = (props) => {
  const filteredUsers = useSelector((state) => state.filteredUsers);

  const usersList =
    filteredUsers.length > 0
      ? useSelector((state) => state.filteredUsers)
      : useSelector((state) => state.users);
  const letter = props.letter;

  const renderList = usersList.filter(
    (item) => item.first_name[0].toUpperCase() === letter
  );

  const renderItem = (itemData) => {
    return <UserItem itemData={itemData} navigation={props.navigation} />;
  };

  return (
    <View style={styles.itemsBlock}>
      <FlatList
        data={renderList}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({ itemsBlock: { flex: 1 } });

export { ItemsBlock };
