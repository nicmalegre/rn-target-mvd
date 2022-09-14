import { StyleSheet } from 'react-native';
import { PRIMARY_FONT_REGULAR, PRIMARY_FONT_SEMI_BOLD } from 'constants/fonts';
import { BLACK } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    borderTopColor: BLACK,
    borderTopWidth: 0.5,
  },
  title: {
    color: BLACK,
    fontFamily: PRIMARY_FONT_SEMI_BOLD,
  },
  subtitle: {
    color: BLACK,
    fontFamily: PRIMARY_FONT_REGULAR,
  },
  iconLeft: {
    width: 40,
    height: 40,
    left: 20,
    marginRight: 40,
    borderRadius: 50,
  },
  containerIconRight: {
    position: 'absolute',
    right: 20,
  },
  iconRight: {
    width: 25,
    height: 25,
  },
});

export default styles;
