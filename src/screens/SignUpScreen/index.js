import React, { memo, useCallback } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { object } from 'prop-types';

import SignUpForm from 'components/SignUpForm';
import { SIGN_UP_SCREEN } from 'constants/screens';
import { signUp } from 'actions/userActions';
import strings from 'localization';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import { SafeAreaView } from 'react-native-safe-area-context';
import KeyboardAreaView from 'components/common/KeyboardAreaView';
import Spacer from 'components/common/Spacer';
import styles from './styles';

const SignUpScreen = memo(({ navigation }) => {
  const dispatch = useDispatch();
  const signUpRequest = useCallback(user => dispatch(signUp(user)), [dispatch]);

  return (
    <View style={styles.container} testID={SIGN_UP_SCREEN}>
      <KeyboardAreaView>
        <ImageBackground
          source={require('assets/images/logos/login-background.png')}
          resizeMode="cover"
          style={styles.image}>
          <SafeAreaView style={styles.subcontainer}>
            <Text style={styles.targetTitle}>{strings.SIGN_UP.title}</Text>

            <View style={styles.formContainer}>
              <SignUpForm onSubmit={signUpRequest} />
            </View>

            <View>
              <Spacer />
              <TouchableOpacity onPress={navigation.goBack}>
                <Text style={styles.signInButton}>{strings.SIGN_IN.title}</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </KeyboardAreaView>
    </View>
  );
});

SignUpScreen.propTypes = {
  navigation: object.isRequired,
};

SignUpScreen.navigationOptions = {
  title: strings.SIGN_UP.title,
};

export default SignUpScreen;
