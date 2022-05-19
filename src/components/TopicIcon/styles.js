import { StyleSheet } from 'react-native';
import { BACKGROUND_SELECTED_TARGET_MARKER, BACKGROUND_TARGET_MARKER } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_TARGET_MARKER,
    height: 55,
    width: 55,
    borderRadius: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: BACKGROUND_SELECTED_TARGET_MARKER,
  },
  image: {
    height: 25,
    width: 25,
  },
});

export default styles;
