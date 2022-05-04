import React from 'react';
import { View } from 'react-native';

import strings from 'localization';
import Container from 'components/common/Container';
import { PROFILE_ICON } from 'constants/icons';
import { MAIN_SCREEN } from 'constants/screens';
import NewTargetBar from 'components/NewTargetBar';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import useUserLocation from 'hooks/useUserLocation';
import styles from './styles';

const MainScreen = () => {
  const { userHasLocation, userLocation } = useUserLocation();

  return (
    <Container
      headerProps={{
        title: strings.MAIN_SCREEN.title,
        imageLeft: PROFILE_ICON(),
        // TODO: Add correct function to show profile (left) and open chat (right)
        onPressIconLeft: () => {},
        onPressIconRight: () => {},
      }}>
      <View style={styles.container} testID={MAIN_SCREEN}>
        <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: userHasLocation ? userLocation.latitude : 37.78825,
              longitude: userHasLocation ? userLocation.longitude : -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            {userHasLocation && (
              <Marker
                key="marker"
                coordinate={{ latitude: userLocation.latitude, longitude: userLocation.longitude }}
                title="User Location"
              />
            )}
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
