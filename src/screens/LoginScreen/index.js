import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
import { object } from 'prop-types';

import LoginForm from 'components/LoginForm';
import { login } from 'actions/userActions';
import strings from 'localization';
import { SIGN_UP_SCREEN, LOGIN_SCREEN } from 'constants/screens';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import styles from './styles';

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
          <Text style={styles.targetTitle}>{strings.LOG_IN.title}</Text>

          <View style={styles.formContainer}>
            <LoginForm onSubmit={loginRequest} />
            <TouchableOpacity testID="forgot-password" onPress={handleLogin}>
              <Text style={styles.forgotPassword}>{strings.LOG_IN.forgotPassword}</Text>
            </TouchableOpacity>

            {/* TODO: Integrate facebook and execute the correct function onPress */}
            <TouchableOpacity testID="connect-with-facebook" onPress={() => {}}>
              <Text style={styles.connectFacebook}>{strings.LOG_IN.connectFacebook}</Text>
            </TouchableOpacity>
          </View>

          <View>
            <View style={styles.line} />
            <TouchableOpacity testID="sign-up-button" onPress={handleLogin}>
              <Text style={styles.signUpButton}>{strings.SIGN_UP.button}</Text>
            </TouchableOpacity>
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
