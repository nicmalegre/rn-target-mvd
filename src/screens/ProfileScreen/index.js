import React, { memo, useCallback } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import UpdateProfileForm from 'components/UpdateProfileForm';
import { SIGN_UP_SCREEN } from 'constants/screens';
import { logout, updateUser } from 'actions/userActions';
import strings from 'localization';
import Container from 'components/common/Container';
import { RIGHT_ARROW_ICON } from 'constants/icons';
import styles from './styles';

const ProfileScreen = memo(() => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const updateUserRequest = useCallback(user => dispatch(updateUser(user)), [dispatch]);
  const logoutRequest = useCallback(() => dispatch(logout()), [dispatch]);

  return (
    <Container
      headerProps={{
        title: strings.PROFILE_SCREEN.title,
        imageRight: RIGHT_ARROW_ICON(),
        onPressIconRight: () => navigation.goBack(),
      }}>
      <View style={styles.container} testID={SIGN_UP_SCREEN}>
        <Image source={require('assets/images/logos/profile-image.png')} style={styles.image} />
        <View style={styles.subcontainer}>
          <View style={styles.formContainer}>
            <UpdateProfileForm onSubmit={updateUserRequest} />
          </View>

          <View>
            <TouchableOpacity onPress={logoutRequest}>
              <Text style={styles.signInButton}>{strings.PROFILE_SCREEN.button}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
});

export default ProfileScreen;
