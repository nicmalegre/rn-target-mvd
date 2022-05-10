import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import useUserLocation from 'hooks/useUserLocation';
import { createTarget } from 'actions/targetActions';
import Modal from 'react-native-modal';
import { bool, func } from 'prop-types';
import CreateTargetForm from 'components/CreateTargetForm';
import KeyboardAreaView from 'components/common/KeyboardAreaView';
import styles from './styles';

const CreateTargetModal = ({ isModalVisible, setModalVisible }) => {
  const { userLocation } = useUserLocation();
  const dispatch = useDispatch();
  const createTargetRequest = useCallback(target => dispatch(createTarget(target)), [dispatch]);

  return (
    <Modal
      isVisible={isModalVisible}
      style={styles.modal}
      backdropOpacity={0}
      onBackdropPress={() => setModalVisible(false)}>
      <KeyboardAreaView styleContainer={styles.keyboardAreaContainer}>
        <View style={styles.modalContainer}>
          <CreateTargetForm onSubmit={createTargetRequest} userLocation={userLocation} />
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
