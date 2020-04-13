import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { ItemsBlock } from './ItemsBlock';
import { InviteWindow } from './InviteWindow';

const UsersListBlock = (props) => {
  const usersABC = useSelector((state) => state.usersABC.items);
  const filteredUsers = useSelector((state) => state.filteredUsers.result);
  const users = useSelector((state) => state.users.result);
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
      <View style={styles.itemBlock}>
        <Text>
          {'<'}
          {itemData.item}
          {'>'}
        </Text>
        <ItemsBlock renderList={renderList} />
      </View>
    );
  };

  return (
    <View style={styles.abcBlock} behavior={'position'}>
      <View style={styles.inviteWindow}>
        <InviteWindow />
      </View>

      <FlatList
        data={usersABC}
        keyExtractor={(item, index) => item}
        renderItem={renderBlock}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  abcBlock: { flex: 1, height: '100%', justifyContent: 'flex-start' },
  itemBlock: { paddingHorizontal: 10 },
  inviteWindow: { height: 0 },
});

export { UsersListBlock };
