import { BLACK } from 'constants/colors';
import { PRIMARY_FONT_SEMI_BOLD } from 'constants/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subcontainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
  image: {
    position: 'absolute',
    left: 19,
    top: -60,
    width: 280,
    height: 280,
    resizeMode: 'contain',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButton: {
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
