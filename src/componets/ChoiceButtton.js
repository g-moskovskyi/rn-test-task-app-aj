import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const ChoiceButtton = (props) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, ...props.style }}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 80,
    backgroundColor: 'blue',
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: 'white',
  },
});

export { ChoiceButtton };
