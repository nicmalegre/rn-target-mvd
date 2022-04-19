import { StyleSheet } from 'react-native';
import { ERROR } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 12,
  },
  error: {
    color: ERROR,
    fontSize: 10,
    fontFamily: 'OpenSans-SemiBold',
    lineHeight: 12,
  },
});

export default styles;
