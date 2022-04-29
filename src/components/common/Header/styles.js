import { BLACK, WHITE } from 'constants/colors';
import { PRIMARY_FONT_SEMI_BOLD } from 'constants/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 60,
    backgroundColor: WHITE,
  },
  title: {
    fontFamily: PRIMARY_FONT_SEMI_BOLD,
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 15,
    letterSpacing: 1.95,
    color: BLACK,
  },
  containerIconLeft: {
    position: 'absolute',
    left: 20,
  },
  containerIconRight: {
    position: 'absolute',
    right: 20,
  },
});

export default styles;
