import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { bool, func } from 'prop-types';
import styles from './styles';

const CreateTargetModal = ({ isModalVisible, setModalVisible }) => {
  return (
    <Modal
      isVisible={isModalVisible}
      style={styles.modal}
      onBackdropPress={() => setModalVisible(false)}>
      <View style={styles.modalContainer}></View>
    </Modal>
  );
};

CreateTargetModal.propTypes = {
  isModalVisible: bool.isRequired,
  setModalVisible: func.isRequired,
};

export default CreateTargetModal;
