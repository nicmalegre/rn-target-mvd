import React from 'react';
import Modal from 'react-native-modal';
import { bool, func } from 'prop-types';
import TopicList from 'components/TopicList';
import styles from './styles';

const TopicListModal = ({ isModalVisible, setModalVisible, onValueChange }) => {
  return (
    <Modal
      isVisible={isModalVisible}
      style={styles.modal}
      backdropOpacity={0}
      onBackdropPress={() => setModalVisible(false)}>
      <TopicList setModalVisible={setModalVisible} onValueChange={onValueChange} />
    </Modal>
  );
};

TopicListModal.propTypes = {
  isModalVisible: bool.isRequired,
  setModalVisible: func.isRequired,
  onValueChange: func,
};

export default TopicListModal;
