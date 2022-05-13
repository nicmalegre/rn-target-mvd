import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useUserLocation from 'hooks/useUserLocation';
import { useDispatch, useSelector } from 'react-redux';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Container from 'components/common/Container';
import NewTargetBar from 'components/NewTargetBar';
import CreateTargetModal from 'components/CreateTargetModal';
import UserLocationMarker from 'components/UserLocationMarker';
import TargetMarker from 'components/TargetMarker';
import { getTargets } from 'actions/targetActions';
import { getTopics } from 'actions/topicActions';
import strings from 'localization';
import { PROFILE_ICON } from 'constants/icons';
import { MAIN_SCREEN, PROFILE_SCREEN } from 'constants/screens';
import styles from './styles';

const DEFAULT_LOCATION = {
  latitude: 37.78825,
  longitude: -122.4324,
};

const MainScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { userHasLocation, userLocation } = useUserLocation();
  const { latitude, longitude } = userLocation;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTargets());
    dispatch(getTopics());
  }, []);

  const { targets } = useSelector(({ targets }) => ({
    targets: targets?.targets ?? [],
  }));

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
            {targets?.length > 0 &&
              targets.map(({ target }) => (
                <TargetMarker
                  key={target.id}
                  latitude={target.lat}
                  longitude={target.lng}
                  topicId={target.topicId}
                />
              ))}
          </MapView>
        </View>

        <NewTargetBar title={strings.MAIN_SCREEN.newTarget} onPress={() => setModalVisible(true)} />

        <CreateTargetModal isModalVisible={isModalVisible} setModalVisible={setModalVisible} />
      </View>
    </Container>
  );
};

MainScreen.navigationOptions = {
  title: strings.MAIN_SCREEN.title,
};

export default MainScreen;
