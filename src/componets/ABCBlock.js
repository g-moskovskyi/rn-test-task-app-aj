import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { ItemsBlock } from '../componets/ItemsBlock';

const ABCBlock = (props) => {
  const usersABC = useSelector((state) => state.usersABC.items);
  const filteredUsers = useSelector((state) => state.filteredUsers.items);
  const users = useSelector((state) => state.users.items);

  const usersList = filteredUsers == 'empty' ? users : filteredUsers;

  if (usersList == 'no_results') {
    return (
      <View>
        <Text>No results ...</Text>
      </View>
    );
  }
  const renderBlock = (itemData) => {
    const renderList = usersList.filter(
      (item) => item.first_name[0].toUpperCase() === itemData.item
    );

    return (
      <View style={styles.block}>
        <Text>
          {'<'}
          {itemData.item}
          {'>'}
        </Text>
        <ItemsBlock renderList={renderList} navigation={props.navigation} />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={usersABC}
        keyExtractor={(item, index) => item}
        renderItem={renderBlock}
      />
    </View>
  );
};

const styles = StyleSheet.create({ block: { flex: 1, paddingHorizontal: 10 } });
export { ABCBlock };
