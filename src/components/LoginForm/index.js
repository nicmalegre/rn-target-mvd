import React from 'react';
import { func } from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import { useStatus, LOADING } from '@rootstrap/redux-tools';

import { login } from 'actions/userActions';
import Input from 'components/common/Input';
import useForm from 'hooks/useForm';
import useValidation from 'hooks/useValidation';
import loginValidations from 'validations/loginValidations';
import ErrorView from 'components/common/ErrorView';
import useTextInputProps from 'hooks/useTextInputProps';
import strings from 'localization';
import styles from './styles';

const FIELDS = {
  email: 'email',
  password: 'password',
};

const EMAIL_LABEL = strings.SIGN_IN.email.toUpperCase();
const PASSWORD_LABEL = strings.SIGN_IN.password.toUpperCase();
const LOADING_TEXT = strings.COMMON.loading.toUpperCase();
const SIGN_IN_TEXT = strings.SIGN_IN.button.toUpperCase();

const LoginForm = ({ onSubmit }) => {
  const { error, status } = useStatus(login);
  const validator = useValidation(loginValidations);
  const {
    values,
    errors,
    handleValueChange,
    handleSubmit,
    handleFocus,
    handleBlur,
    activeFields,
    touched,
    formHasErrors,
  } = useForm(
    {
      onSubmit,
      validator,
      validateOnBlur: true,
      validateOnChange: true,
    },
    [onSubmit],
  );

  const inputProps = useTextInputProps(
    handleValueChange,
    handleFocus,
    handleBlur,
    values,
    errors,
    activeFields,
    touched,
  );

  return (
    <>
      <Input
        label={EMAIL_LABEL}
        keyboardType="email-address"
        autoCapitalize="none"
        testID="email-input"
        {...inputProps(FIELDS.email)}
      />
      <Input
        label={PASSWORD_LABEL}
        testID="password-input"
        secureTextEntry
        {...inputProps(FIELDS.password)}
      />
      <ErrorView errors={{ error }} />

      <TouchableOpacity
        testID="login-submit-button"
        onPress={handleSubmit}
        disabled={formHasErrors}
        style={styles.button}>
        <Text style={styles.buttonTitle}>{status === LOADING ? LOADING_TEXT : SIGN_IN_TEXT}</Text>
      </TouchableOpacity>
    </>
  );
};

LoginForm.propTypes = {
  onSubmit: func.isRequired,
};

export default LoginForm;
