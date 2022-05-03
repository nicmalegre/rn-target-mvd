import { StyleSheet } from 'react-native';
import { BLACK, WHITE } from 'constants/colors';
import { PRIMARY_FONT_SEMI_BOLD } from 'constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 80,
    alignItems: 'center',
    backgroundColor: WHITE,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 30,
    height: 30,
  },
  text: {
    textTransform: 'uppercase',
    color: BLACK,
    fontFamily: PRIMARY_FONT_SEMI_BOLD,
    fontWeight: '600',
    fontSize: 11,
    lineHeight: 13,
    letterSpacing: 1.65,
  },
});

export default styles;
