import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { LOADING, SUCCESS, useStatus } from '@rootstrap/redux-tools';
import useUserLocation from 'hooks/useUserLocation';
import { createTarget } from 'actions/targetActions';
import CreateTargetForm from 'components/CreateTargetForm';
import KeyboardAreaView from 'components/common/KeyboardAreaView';
import Modal from 'react-native-modal';
import { bool, func } from 'prop-types';
import styles from './styles';

const CreateTargetModal = ({ isModalVisible, setModalVisible }) => {
  const { status } = useStatus(createTarget);
  const { userLocation } = useUserLocation();
  const dispatch = useDispatch();
  const createTargetRequest = useCallback(target => dispatch(createTarget(target)), [dispatch]);

  useEffect(() => {
    if (status === SUCCESS) {
      setModalVisible(false);
    }
  }, [status]);

  const isLoading = status === LOADING;

  return (
    <Modal
      isVisible={isModalVisible}
      style={styles.modal}
      backdropOpacity={0}
      onBackdropPress={!isLoading ? () => setModalVisible(false) : () => null}>
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
