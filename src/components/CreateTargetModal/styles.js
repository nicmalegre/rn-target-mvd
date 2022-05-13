import { StyleSheet } from 'react-native';
import { WHITE } from 'constants/colors';

const styles = StyleSheet.create({
  modal: {
    width: '100%',
    margin: 0,
  },
  keyboardAreaContainer: {
    backgroundColor: WHITE,
    position: 'absolute',
    bottom: 0,
  },
  modalContainer: {
    paddingHorizontal: 34,
    paddingBottom: 26,
  },
});

export default styles;
