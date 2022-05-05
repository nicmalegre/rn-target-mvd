import { StyleSheet } from 'react-native';
import { WHITE } from 'constants/colors';

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    margin: 0,
    backgroundColor: WHITE,
  },
  modalContainer: {
    backgroundColor: WHITE,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});

export default styles;
