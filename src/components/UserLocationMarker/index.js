import React from 'react';
import { Circle, Marker } from 'react-native-maps';
import strings from 'localization';
import { MAP_MARKER_ICON } from 'constants/icons';
import { BACKGROUND_CIRCLE_MAP, PRIMARY_COLOR } from 'constants/colors';
import { number } from 'prop-types';

const UserLocationMarker = ({ latitude, longitude }) => {
  return (
    <>
      <Marker
        key="user-location-marker"
        coordinate={{
          latitude,
          longitude,
        }}
        title={strings.MAIN_SCREEN.markerTitle}
        image={MAP_MARKER_ICON()}
      />
      <Circle
        center={{
          latitude,
          longitude,
        }}
        radius={70}
        fillColor={BACKGROUND_CIRCLE_MAP}
        strokeColor={PRIMARY_COLOR}
      />
    </>
  );
};

UserLocationMarker.propTypes = {
  latitude: number.isRequired,
  longitude: number.isRequired,
};

export default UserLocationMarker;
