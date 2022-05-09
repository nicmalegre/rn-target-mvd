import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { bool, func } from 'prop-types';
import CreateTargetForm from 'components/CreateTargetForm';
import KeyboardAreaView from 'components/common/KeyboardAreaView';
import styles from './styles';

const CreateTargetModal = ({ isModalVisible, setModalVisible }) => {
  return (
    <Modal
      isVisible={isModalVisible}
      style={styles.modal}
      backdropOpacity={0}
      onBackdropPress={() => setModalVisible(false)}>
      <KeyboardAreaView styleContainer={styles.keyboardAreaContainer}>
        <View style={styles.modalContainer}>
          <CreateTargetForm onSubmit={() => {}} />
        </View>
      </KeyboardAreaView>
    </Modal>
  );
};

CreateTargetModal.propTypes = {
  isModalVisible: bool.isRequired,
  setModalVisible: func.isRequired,
};

export default CreateTargetModal;
