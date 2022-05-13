import React from 'react';
import { View, Image } from 'react-native';
import { useSelector } from 'react-redux';

import { Marker } from 'react-native-maps';
import strings from 'localization';
import { BACKGROUND_TARGET_MARKER } from 'constants/colors';
import { number } from 'prop-types';

const TargetMarker = ({ latitude, longitude, topicId }) => {
  const { topics } = useSelector(({ topics }) => ({
    topics: topics?.topics ?? [],
  }));

  const { topic } = topics?.find(({ topic: { id } }) => id === topicId) || {};

  if (!topic) return null;

  return (
    <Marker
      key="target-location-marker"
      coordinate={{
        latitude,
        longitude,
      }}
      title={strings.MAIN_SCREEN.markerTitle}>
      <View
        style={{
          backgroundColor: BACKGROUND_TARGET_MARKER,
          height: 55,
          width: 55,
          borderRadius: 50,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={{ uri: topic.icon }} style={{ height: 25, width: 25 }} />
      </View>
    </Marker>
  );
};

TargetMarker.propTypes = {
  latitude: number.isRequired,
  longitude: number.isRequired,
};

export default TargetMarker;
