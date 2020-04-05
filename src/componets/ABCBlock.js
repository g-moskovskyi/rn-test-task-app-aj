import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { ItemsBlock } from '../componets/ItemsBlock';

const ABCBlock = (props) => {
  const usersABC = useSelector((state) => state.usersABC);
  const filters = useSelector((state) => state.filters);

  let usersList;
  if (!filters) {
    usersList = useSelector((state) => state.filteredUsers);
  } else {
    usersList = useSelector((state) => state.users);
  }

  const renderBlock = (itemData) => {
    return (
      <View style={styles.block}>
        <Text>
          {'<'}
          {itemData.item}
          {'>'}
        </Text>
        <ItemsBlock letter={itemData.item} navigation={props.navigation} />
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
