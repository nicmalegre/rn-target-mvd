import { StyleSheet } from 'react-native';
import { ERROR } from 'constants/colors';
import { PRIMARY_FONT_SEMI_BOLD } from 'constants/fonts';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 12,
  },
  error: {
    color: ERROR,
    fontSize: 10,
    fontFamily: PRIMARY_FONT_SEMI_BOLD,
    lineHeight: 12,
  },
});

export default styles;
