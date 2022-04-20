import { BLACK, WHITE } from 'constants/colors';
import { PRIMARY_FONT_SEMI_BOLD } from 'constants/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    backgroundColor: BLACK,
    paddingVertical: 16,
    paddingHorizontal: 40,
    marginTop: 26,
    fontFamily: PRIMARY_FONT_SEMI_BOLD,
    color: WHITE,
    fontSize: 50,
    letterSpacing: 1.65,
  },
  buttonTitle: {
    fontFamily: PRIMARY_FONT_SEMI_BOLD,
    fontSize: 11,
    lineHeight: 13,
    letterSpacing: 1.65,
    color: WHITE,
  },
});

export default styles;
