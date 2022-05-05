import React, { useState } from 'react';
import { View } from 'react-native';

import strings from 'localization';
import Container from 'components/common/Container';
import { PROFILE_ICON } from 'constants/icons';
import { MAIN_SCREEN, PROFILE_SCREEN } from 'constants/screens';
import { useNavigation } from '@react-navigation/native';
import NewTargetBar from 'components/NewTargetBar';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import CreateTargetModal from 'components/CreateTargetModal';
import styles from './styles';

const MainScreen = () => {
  const navigation = useNavigation();

  const [isModalVisible, setModalVisible] = useState(false);

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
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}></MapView>
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
