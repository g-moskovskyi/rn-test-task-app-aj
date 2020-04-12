import React, { useState } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import { useStore, useSelector } from 'react-redux';

import { sendInvitation } from '../store/users/actions';
import { closeInviteWindow } from '../store/inviteWindow/actions';

import { ChoiceButtton } from './ChoiceButtton';
import { InformWindow } from './InformWindow';

const InviteWindow = (props) => {
  const visible = useSelector((state) => state.inviteWindow.visible);
  const id = useSelector((state) => state.inviteWindow.id);
  const { dispatch } = useStore();

  const [informWindowVisible, setInformWindowVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <InformWindow
        visible={informWindowVisible}
        visibleFalse={() => {
          setInformWindowVisible(false);
          props.visibleFalse;
        }}
      />
      <Modal animationType='slide' transparent={true} visible={visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Text style={styles.text}>
                Do you really want to invite a user with id = {id}?
              </Text>
            </View>
            <View style={styles.buttonsBlock}>
              <ChoiceButtton
                title='NO'
                onPress={() => dispatch(closeInviteWindow())}
                style={{ backgroundColor: 'red' }}
              />
              <ChoiceButtton
                title='YES'
                onPress={() => {
                  setInformWindowVisible(true);
                  dispatch(closeInviteWindow());
                  dispatch(sendInvitation(id));
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
  text: {
    fontFamily: 'open-sans',
    fontSize: 20,
    textAlign: 'center',
  },
  button: { flex: 1, width: 60 },
});

export { InviteWindow };
