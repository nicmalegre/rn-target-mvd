import { BLACK } from 'constants/colors';
import { PRIMARY_FONT_BOLD, PRIMARY_FONT_SEMI_BOLD } from 'constants/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subcontainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    paddingBottom: 20,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  targetTitle: {
    marginTop: 75,
    fontSize: 20,
    lineHeight: 23,
    letterSpacing: 3,
    margin: 10,
    textAlign: 'center',
    color: BLACK,
    fontFamily: PRIMARY_FONT_BOLD,
    textTransform: 'uppercase',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  forgotPassword: {
    fontFamily: PRIMARY_FONT_SEMI_BOLD,
    fontSize: 10.5,
    color: BLACK,
    marginTop: 11,
    lineHeight: 12,
  },
  connectFacebook: {
    fontFamily: PRIMARY_FONT_BOLD,
    fontSize: 12,
    color: BLACK,
    marginTop: 22,
    lineHeight: 14,
    letterSpacing: 2.4,
    textTransform: 'uppercase',
  },
  signUpButton: {
    fontFamily: PRIMARY_FONT_SEMI_BOLD,
    fontSize: 11,
    color: BLACK,
    lineHeight: 13,
    letterSpacing: 1.65,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default styles;
