import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import KeyboardAreaView from 'components/common/KeyboardAreaView';
import Modal from 'react-native-modal';
import { bool, func, object, string } from 'prop-types';
import strings from 'localization';
import Button from 'components/common/Button';
import TopicIcon from 'components/TopicIcon';
import styles from './styles';

const DeleteTargetModal = ({ isModalVisible, setModalVisible, target, topicIcon }) => {
  // TO DO: Add deleteTarget action
  //
  // const { status } = useStatus(deleteTarget);
  // const dispatch = useDispatch();
  // const deleteTargetRequest = useCallback(id => dispatch(deleteTarget(id)), [dispatch]);
  // const isLoading = status === LOADING;
  const isLoading = false;

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
            //  TO DO: Add deleteTarget action
            onPress={() => {}}
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
