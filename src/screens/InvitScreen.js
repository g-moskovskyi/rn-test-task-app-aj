import React from 'react';
import { Modal, StyleSheet, Text, View, Button } from 'react-native';
import { useStore } from 'react-redux';

import { sentInvitation } from '../store/actions/users';

const InvitScreen = (props) => {
  const id = props.route.params.id;
  const { dispatch } = useStore();
  return (
    <Modal style={styles.screen}>
      <View>
        <Text>Send invitation?</Text>
      </View>
      <View style={styles.buttons}>
        <Button
          title='NO'
          onPress={() => {
            props.navigation.navigate('List of members');
          }}
        />
        <Button
          title='YES'
          onPress={() => {
            dispatch(sentInvitation(id));
            props.navigation.navigate('Inform');
          }}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  buttons: { flexDirection: 'row', justifyContent: 'space-around' },
});

export { InvitScreen };
