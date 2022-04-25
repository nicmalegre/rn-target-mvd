import { BLACK, ERROR } from 'constants/colors';
import { PRIMARY_FONT_SEMI_BOLD } from 'constants/fonts';
import { StyleSheet } from 'react-native';

export const pickerSelectStyles = isError =>
  StyleSheet.create({
    inputIOS: {
      fontFamily: PRIMARY_FONT_SEMI_BOLD,
      fontSize: 14,
      height: 50,
      minWidth: '100%',
      borderColor: isError ? ERROR : BLACK,
      borderWidth: 0.5,
      color: BLACK,
      textAlign: 'center',
    },
    inputAndroid: {
      fontFamily: PRIMARY_FONT_SEMI_BOLD,
      fontSize: 14,
      height: 50,
      minWidth: '100%',
      borderColor: isError ? ERROR : BLACK,
      borderWidth: 0.5,
      color: BLACK,
      textAlign: 'center',
    },
    placeholder: {
      fontFamily: PRIMARY_FONT_SEMI_BOLD,
      fontSize: 10,
      lineHeight: 12,
      letterSpacing: 1.5,
      color: BLACK,
      textAlign: 'center',
    },
  });

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 24,
  },
  label: {
    fontFamily: PRIMARY_FONT_SEMI_BOLD,
    fontSize: 11,
    lineHeight: 13,
    letterSpacing: 1.65,
    marginBottom: 4,
    color: BLACK,
    textTransform: 'uppercase',
  },
  viewPicker: {
    alignItems: 'center',
  },
  inputError: {
    borderColor: ERROR,
  },
  errorText: {
    fontFamily: PRIMARY_FONT_SEMI_BOLD,
    fontSize: 10,
    lineHeight: 12,
    color: ERROR,
    marginTop: 4,
  },
});

export default styles;
