import React from 'react';
import { Marker } from 'react-native-maps';
import TopicIcon from 'components/TopicIcon';
import { number, string, bool, func } from 'prop-types';

const TargetMarker = ({ topicIcon, latitude, longitude, isSelected, onPress }) => {
  if (!topicIcon) return null;

  return (
    <Marker
      key="target-location-marker"
      coordinate={{
        latitude,
        longitude,
      }}
      onPress={onPress}>
      <TopicIcon uri={topicIcon} isSelected={isSelected} />
    </Marker>
  );
};

TargetMarker.propTypes = {
  topicIcon: string,
  latitude: number.isRequired,
  longitude: number.isRequired,
  isSelected: bool,
  onPress: func,
};

export default TargetMarker;
