import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import useUserLocation from 'hooks/useUserLocation';
import useTargets from 'hooks/useTargets';
import useTopics from 'hooks/useTopics';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

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
import { CHATS_SCREEN, MAIN_SCREEN, PROFILE_SCREEN } from 'constants/screens';
import { findTopicById } from 'utils/helpers';
import styles from './styles';

const DEFAULT_LOCATION = {
  latitude: 37.78825,
  longitude: -122.4324,
};

const MainScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { userHasLocation, userLocation } = useUserLocation();
  const { latitude, longitude } = userLocation;
  const { targets } = useTargets();
  const { topics } = useTopics();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTargets());
    dispatch(getTopics());
  }, []);

  return (
    <Container
      headerProps={{
        title: strings.MAIN_SCREEN.title,
        imageLeft: PROFILE_ICON(),
        onPressIconLeft: () => navigation.navigate(PROFILE_SCREEN),
        onPressIconRight: () => navigation.navigate(CHATS_SCREEN),
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
                  topicIcon={findTopicById(target?.topicId, topics)?.icon}
                  latitude={target.lat}
                  longitude={target.lng}
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
