import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';

import { ChoiceButtton } from './ChoiceButtton';

const InformWindow = (props) => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType='slide' transparent={true} visible={props.visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.textBlock}>
              <Text style={styles.text}>Invitation is sended!</Text>
            </View>
            <View style={styles.buttonsBlock}>
              <ChoiceButtton
                title='OK'
                onPress={() => {
                  props.visibleFalse();
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    opacity: 1,
  },
  modalView: {
    width: '70%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonsBlock: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textBlock: {},
  text: {
    fontFamily: 'open-sans',
    fontSize: 20,
    textAlign: 'center',
  },
  button: { flex: 1, width: 60 },
});

export { InformWindow };
