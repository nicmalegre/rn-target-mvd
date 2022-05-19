import React, { useCallback, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { useDispatch } from 'react-redux';
import { LOADING, SUCCESS, useStatus } from '@rootstrap/redux-tools';
import KeyboardAreaView from 'components/common/KeyboardAreaView';
import TopicIcon from 'components/TopicIcon';
import Button from 'components/common/Button';
import { deleteTarget } from 'actions/targetActions';
import { bool, func, object, string } from 'prop-types';
import strings from 'localization';
import styles from './styles';

const DeleteTargetModal = ({ isModalVisible, setModalVisible, target, topicIcon }) => {
  const { status } = useStatus(deleteTarget);
  const dispatch = useDispatch();
  const deleteTargetRequest = useCallback(id => dispatch(deleteTarget(id)), [dispatch]);

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
      backdropOpacity={0.4}
      onBackdropPress={!isLoading ? () => setModalVisible(false) : () => null}>
      <KeyboardAreaView styleContainer={styles.keyboardAreaContainer}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{strings.DELETE_TARGET.modalTitle}</Text>

          <TopicIcon uri={topicIcon} />

          <Text style={styles.targetTitle}>{target.title}</Text>

          <Text style={styles.description}>{strings.DELETE_TARGET.description}</Text>

          <Button
            testID="login-submit-button"
            title={isLoading ? strings.COMMON.loading : strings.DELETE_TARGET.button}
            onPress={() => deleteTargetRequest(target.id)}
            disabled={isLoading}
          />

          <TouchableOpacity testID="cancel-button" onPress={() => setModalVisible(false)}>
            <Text style={styles.cancelText}>{strings.DELETE_TARGET.cancel}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAreaView>
    </Modal>
  );
};

DeleteTargetModal.propTypes = {
  isModalVisible: bool.isRequired,
  setModalVisible: func.isRequired,
  target: object.isRequired,
  topicIcon: string.isRequired,
};

export default DeleteTargetModal;
