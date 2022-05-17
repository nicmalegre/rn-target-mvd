import React from 'react';
import { useSelector } from 'react-redux';

import { Marker } from 'react-native-maps';
import strings from 'localization';
import { number } from 'prop-types';
import TopicIcon from 'components/TopicIcon';

const TargetMarker = ({ latitude, longitude, topicId }) => {
  const { topics } = useSelector(({ topics }) => ({
    topics: topics?.topics ?? [],
  }));

  const { topic } = topics?.find(({ topic: { id } }) => id === topicId) || {};

  if (!topic?.id) return null;

  return (
    <Marker
      key="target-location-marker"
      coordinate={{
        latitude,
        longitude,
      }}
      title={strings.MAIN_SCREEN.markerTitle}>
      <TopicIcon uri={topic.icon} />
    </Marker>
  );
};

TargetMarker.propTypes = {
  latitude: number.isRequired,
  longitude: number.isRequired,
};

export default TargetMarker;
