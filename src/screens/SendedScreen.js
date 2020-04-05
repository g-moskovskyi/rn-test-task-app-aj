import React from 'react';
import { Modal, StyleSheet, Text, View, Button } from 'react-native';

const SendedScreen = (props) => {
  return (
    <Modal style={styles.screen}>
      <View>
        <Text>Invitation is sended!</Text>
      </View>
      <View style={styles.buttons}>
        <Button
          title='OK'
          onPress={() => {
            props.navigation.navigate('List of members');
          }}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { SendedScreen };
