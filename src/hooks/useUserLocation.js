import { useEffect, useState } from 'react';
import { Platform, Linking, PermissionsAndroid, Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { LOCATION_PERMISSIONS } from 'constants/permissions';
import { IS_ANDROID, IS_IOS } from 'constants/platforms';
import strings from 'localization';

const useUserLocation = () => {
  const [userLocation, setUserLocation] = useState({});

  const askForPermissionIOS = async () => {
    const openSetting = () => {
      Linking.openSettings();
    };
    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === LOCATION_PERMISSIONS.GRANTED) {
      return true;
    }

    if (status === LOCATION_PERMISSIONS.DENIED || status === LOCATION_PERMISSIONS.DISABLED) {
      Alert.alert(strings.LOCATION.alertText, '', [
        { text: strings.LOCATION.goToSettings, onPress: openSetting },
        { text: strings.LOCATION.closeButton },
      ]);
    }

    return false;
  };

  const askForPermissionAndroid = async () => {
    if (Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    return false;
  };

  const hasLocationPermission = async () => {
    let hasPermission = false;
    if (IS_IOS) hasPermission = await askForPermissionIOS();
    else if (IS_ANDROID) hasPermission = await askForPermissionAndroid();

    return hasPermission;
  };

  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }

    Geolocation.getCurrentPosition(
      position => {
        const { coords } = position;
        setUserLocation(coords);
      },
      () => {
        setUserLocation({});
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
      },
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return {
    userHasLocation: Object.values(userLocation).length !== 0,
    userLocation,
  };
};

export default useUserLocation;
