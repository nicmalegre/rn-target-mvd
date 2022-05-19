import { StyleSheet } from 'react-native';
import { BLACK, WHITE } from 'constants/colors';
import { PRIMARY_FONT_REGULAR, PRIMARY_FONT_SEMI_BOLD } from 'constants/fonts';

const styles = StyleSheet.create({
  modal: {
    marginHorizontal: 40,
  },
  keyboardAreaContainer: {
    backgroundColor: WHITE,
    position: 'absolute',
    marginVertical: 60,
  },
  modalContainer: {
    paddingHorizontal: 34,
    marginVertical: 30,
    alignItems: 'center',
  },
  modalTitle: {
    fontFamily: PRIMARY_FONT_SEMI_BOLD,
    fontSize: 13,
    color: BLACK,
    lineHeight: 20,
    letterSpacing: 1.95,
    textAlign: 'center',
    marginBottom: 15,
  },
  targetTitle: {
    fontFamily: PRIMARY_FONT_SEMI_BOLD,
    fontSize: 11,
    color: BLACK,
    lineHeight: 20,
    letterSpacing: 0.5,
    textAlign: 'center',
    marginTop: 9,
    marginBottom: 17,
  },
  description: {
    fontFamily: PRIMARY_FONT_REGULAR,
    fontSize: 11,
    color: BLACK,
    lineHeight: 18,
    letterSpacing: 0.55,
    fontWeight: '400',
    textAlign: 'center',
  },
  cancelText: {
    fontFamily: PRIMARY_FONT_SEMI_BOLD,
    fontSize: 11,
    color: BLACK,
    lineHeight: 13,
    letterSpacing: 1.65,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: 25,
  },
});

export default styles;
