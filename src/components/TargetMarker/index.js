import React from 'react';
import { Marker } from 'react-native-maps';
import TopicIcon from 'components/TopicIcon';
import strings from 'localization';
import { number, string } from 'prop-types';

const TargetMarker = ({ topicIcon, latitude, longitude }) => {
  if (!topicIcon) return null;

  return (
    <Marker
      key="target-location-marker"
      coordinate={{
        latitude,
        longitude,
      }}
      title={strings.MAIN_SCREEN.markerTitle}>
      <TopicIcon uri={topicIcon} />
    </Marker>
  );
};

TargetMarker.propTypes = {
  topicIcon: string.isRequired,
  latitude: number.isRequired,
  longitude: number.isRequired,
};

export default TargetMarker;
