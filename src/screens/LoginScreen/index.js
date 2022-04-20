import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Text, View } from 'react-native';
import { object } from 'prop-types';

import LoginForm from 'components/LoginForm';
import { login } from 'actions/userActions';
import strings from 'localization';
import { SIGN_UP_SCREEN, LOGIN_SCREEN } from 'constants/screens';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import styles from './styles';

const LOG_IN_TITLE = strings.LOG_IN.title.toUpperCase();
const CONNECT_FACEBOOK_TEXT = strings.LOG_IN.connectFacebook.toUpperCase();
const SIGN_UP_TITLE = strings.SIGN_UP.title.toUpperCase();

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const loginRequest = useCallback(user => dispatch(login(user)), [dispatch]);
  const handleLogin = useCallback(() => navigation.push(SIGN_UP_SCREEN), [navigation]);

  return (
    <View style={styles.container} testID={LOGIN_SCREEN}>
      <ImageBackground
        source={require('assets/images/logos/login-background.png')}
        resizeMode="cover"
        style={styles.image}>
        <SafeAreaView style={styles.subcontainer}>
          <Text style={styles.targetTitle}>{LOG_IN_TITLE}</Text>

          <View style={styles.formContainer}>
            <LoginForm onSubmit={loginRequest} />
            <Text testID="forgot-password" style={styles.forgotPassword} onPress={handleLogin}>
              {strings.LOG_IN.forgotPassword}
            </Text>
            <Text testID="connect-with-facebook" style={styles.connectFacebook} onPress={() => {}}>
              {CONNECT_FACEBOOK_TEXT}
            </Text>
          </View>

          <View>
            <View style={styles.line} />
            <Text testID="sign-up-button" style={styles.signUpButton} onPress={handleLogin}>
              {SIGN_UP_TITLE}
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

LoginScreen.propTypes = {
  navigation: object.isRequired,
};

LoginScreen.navigationOptions = {
  title: strings.SIGN_IN.title,
};

export default memo(LoginScreen);
