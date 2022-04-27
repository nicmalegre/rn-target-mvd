import { BLACK } from 'constants/colors';
import { PRIMARY_FONT_BOLD, PRIMARY_FONT_SEMI_BOLD } from 'constants/fonts';
import { StyleSheet, Platform } from 'react-native';

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
    flex: 1,
    justifyContent: 'center',
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
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    borderTopColor: 'black',
    borderTopWidth: 1,
    marginVertical: 15,
    marginHorizontal: 50,
  },
  signInButton: {
    fontFamily: PRIMARY_FONT_SEMI_BOLD,
    fontSize: 11,
    color: BLACK,
    lineHeight: 13,
    letterSpacing: 1.65,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: Platform.OS === 'android' ? 20 : 0,
  },
});

export default styles;
