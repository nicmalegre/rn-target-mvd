import React from 'react';
import { View } from 'react-native';
import KeyboardAreaView from 'components/common/KeyboardAreaView';
import ReactNativeModal from 'react-native-modal';
import { bool, func, element } from 'prop-types';
import styles from './styles';

const Modal = ({ children, isModalVisible, setModalVisible, isLoading }) => (
  <ReactNativeModal
    isVisible={isModalVisible}
    style={styles.modal}
    backdropOpacity={0}
    onBackdropPress={!isLoading ? () => setModalVisible(false) : () => null}>
    <KeyboardAreaView styleContainer={styles.keyboardAreaContainer}>
      <View style={styles.modalContainer}>{children}</View>
    </KeyboardAreaView>
  </ReactNativeModal>
);
Modal.propTypes = {
  children: element,
  isModalVisible: bool.isRequired,
  setModalVisible: func.isRequired,
  isLoading: bool,
};

export default Modal;
