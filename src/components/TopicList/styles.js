import { StyleSheet } from 'react-native';
import { BLACK, WHITE } from 'constants/colors';

const styles = StyleSheet.create({
  flatListContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: WHITE,
    width: '100%',
    paddingBottom: 26,
  },
  separator: {
    width: '100%',
    backgroundColor: BLACK,
    height: 0.5,
  },
});

export default styles;
