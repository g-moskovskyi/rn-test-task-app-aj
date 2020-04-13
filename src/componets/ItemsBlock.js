import React from 'react';
import { useSelector } from 'react-redux';
import { View, FlatList, StyleSheet } from 'react-native';

import { UserItem } from '../componets/UserItem';

const ItemsBlock = (props) => {
  const renderList = props.renderList;

  const renderItem = (itemData) => {
    return <UserItem itemData={itemData} />;
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

const styles = StyleSheet.create({ itemsBlock: {} });

export { ItemsBlock };
