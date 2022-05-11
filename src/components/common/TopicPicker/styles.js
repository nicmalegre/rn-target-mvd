import { StyleSheet } from 'react-native';
import { BLACK, ERROR } from 'constants/colors';
import { PRIMARY_FONT_SEMI_BOLD } from 'constants/fonts';

const styles = StyleSheet.create({
  container: {
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
  viewInput: {
    fontFamily: PRIMARY_FONT_SEMI_BOLD,
    fontSize: 14,
    height: 50,
    borderColor: BLACK,
    borderWidth: 0.5,
    minWidth: '100%',
    textAlign: 'center',
    justifyContent: 'center',
  },
  topicContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    paddingHorizontal: 17,
    paddingVertical: 12,
  },
  image: {
    width: 25,
    height: 25,
  },
  textInput: {
    fontFamily: PRIMARY_FONT_SEMI_BOLD,
    fontSize: 11,
    fontWeight: '600',
    lineHeight: 13,
    letterSpacing: 0.7,
    textAlign: 'center',
    paddingLeft: 9,
    color: BLACK,
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
    textAlign: 'center',
  },
});

export default styles;
