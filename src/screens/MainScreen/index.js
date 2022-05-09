import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useUserLocation from 'hooks/useUserLocation';

import Container from 'components/common/Container';
import NewTargetBar from 'components/NewTargetBar';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import strings from 'localization';
import { PROFILE_ICON } from 'constants/icons';
import { MAIN_SCREEN, PROFILE_SCREEN } from 'constants/screens';
import UserLocationMarker from 'components/UserLocationMarker';
import styles from './styles';

const DEFAULT_LOCATION = {
  latitude: 37.78825,
  longitude: -122.4324,
};

const MainScreen = () => {
  const { userHasLocation, userLocation } = useUserLocation();
  const { latitude, longitude } = userLocation;
  const navigation = useNavigation();

  return (
    <Container
      headerProps={{
        title: strings.MAIN_SCREEN.title,
        imageLeft: PROFILE_ICON(),
        onPressIconLeft: () => navigation.navigate(PROFILE_SCREEN),
        // TODO: Add correct function to open chat (right)
        onPressIconRight: () => {},
      }}>
      <View style={styles.container} testID={MAIN_SCREEN}>
        <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: userHasLocation ? latitude : DEFAULT_LOCATION.latitude,
              longitude: userHasLocation ? longitude : DEFAULT_LOCATION.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            {userHasLocation && <UserLocationMarker latitude={latitude} longitude={longitude} />}
          </MapView>
        </View>

        {/* TO DO: Add feature to create new target onPress */}
        <NewTargetBar title={strings.MAIN_SCREEN.newTarget} onPress={() => {}} />
      </View>
    </Container>
  );
};

MainScreen.navigationOptions = {
  title: strings.MAIN_SCREEN.title,
};

export default MainScreen;
