import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ClearButton = (props) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, ...props.style }}
      onPress={props.onPress}
    >
      <Ionicons name='md-close-circle' size={30} color={'red'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({ button: {} });

export { ClearButton };
