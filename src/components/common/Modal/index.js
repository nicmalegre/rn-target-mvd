import React, { useEffect } from 'react';
import { View } from 'react-native';
import KeyboardAreaView from 'components/common/KeyboardAreaView';
import ReactNativeModal from 'react-native-modal';
import { LOADING, SUCCESS } from '@rootstrap/redux-tools';
import { bool, func, element, string } from 'prop-types';
import styles from './styles';

const Modal = ({
  children,
  isModalVisible,
  setModalVisible,
  status,
  onBackdropPress = () => {},
}) => {
  useEffect(() => {
    if (status === SUCCESS) {
      setModalVisible(false);
    }
  }, [status]);

  const isLoading = status ? status === LOADING : false;

  return (
    <ReactNativeModal
      isVisible={isModalVisible}
      style={styles.modal}
      backdropOpacity={0}
      onBackdropPress={
        !isLoading
          ? () => {
              setModalVisible(false);
              onBackdropPress();
            }
          : () => null
      }>
      <KeyboardAreaView styleContainer={styles.keyboardAreaContainer}>
        <View style={styles.modalContainer}>{children}</View>
      </KeyboardAreaView>
    </ReactNativeModal>
  );
};
Modal.propTypes = {
  children: element,
  isModalVisible: bool.isRequired,
  setModalVisible: func.isRequired,
  status: string,
  onBackdropPress: func,
};

export default Modal;
