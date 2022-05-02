import React, { memo, useCallback } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';

import UpdateProfileForm from 'components/UpdateProfileForm';
import { SIGN_UP_SCREEN } from 'constants/screens';
import { logout, updateUser } from 'actions/userActions';
import strings from 'localization';
import Container from 'components/common/Container';
import styles from './styles';

const ProfileScreen = memo(() => {
  const dispatch = useDispatch();
  const updateUserRequest = useCallback(user => dispatch(updateUser(user)), [dispatch]);
  const logoutRequest = useCallback(() => dispatch(logout()), [dispatch]);

  return (
    <Container
      headerProps={{
        title: strings.PROFILE_SCREEN.title,
        // TO DO: open chat on press icon right
        onPressIconRight: () => {},
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
