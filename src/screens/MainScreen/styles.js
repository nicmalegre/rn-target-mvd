import { StyleSheet } from 'react-native';
import { PRIMARY_FONT_SEMI_BOLD } from 'constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  logoutButton: {
    fontFamily: PRIMARY_FONT_SEMI_BOLD,
    fontSize: 14,
    letterSpacing: 1.65,
    textAlign: 'center',
    marginTop: 20,
    textTransform: 'uppercase',
  },
});

export default styles;
