import React from 'react';
import { func } from 'prop-types';
import { useStatus, LOADING } from '@rootstrap/redux-tools';

import { signUp } from 'actions/userActions';
import Input from 'components/common/Input';
import strings from 'localization';
import useForm from 'hooks/useForm';
import useValidation from 'hooks/useValidation';
import useTextInputProps from 'hooks/useTextInputProps';
import usePickerProps from 'hooks/usePickerProps';
import signUpValidations from 'validations/signUpValidations';
import ErrorView from 'components/common/ErrorView';
import Button from 'components/common/Button';

import { BLACK } from 'constants/colors';

import Picker from 'components/common/Picker';
import useSelectOptions from 'hooks/useSelectOptions';

const FIELDS = {
  name: 'name',
  email: 'email',
  password: 'password',
  passwordConfirmation: 'passwordConfirmation',
  gender: 'gender',
};

const PLACEHOLDER_PICKER = {
  label: strings.SIGN_UP.picker.label.toUpperCase(),
  value: '',
  color: BLACK,
};

const SignUpForm = ({ onSubmit }) => {
  const { error, status } = useStatus(signUp);
  const validator = useValidation(signUpValidations);
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

  const pickerProps = usePickerProps(
    handleValueChange,
    handleFocus,
    handleBlur,
    values,
    errors,
    activeFields,
    touched,
  );

  const genderItems = useSelectOptions(
    [
      { label: strings.SIGN_UP.picker.male, value: 'male' },
      { label: strings.SIGN_UP.picker.female, value: 'female' },
      { label: strings.SIGN_UP.picker.other, value: 'other' },
    ],
    'label',
    'value',
  );

  const isLoading = status === LOADING;

  return (
    <>
      <Input
        label={strings.SIGN_UP.name}
        autoCapitalize="none"
        testID="name-input"
        {...inputProps(FIELDS.name)}
      />
      <Input
        label={strings.SIGN_UP.email}
        keyboardType="email-address"
        autoCapitalize="none"
        testID="email-input"
        {...inputProps(FIELDS.email)}
      />
      <Input
        label={strings.SIGN_UP.password}
        secureTextEntry
        testID="password-input"
        placeholder={strings.SIGN_UP.passwordPlaceholder}
        {...inputProps(FIELDS.password)}
      />
      <Input
        label={strings.SIGN_UP.passwordConfirmation}
        secureTextEntry
        testID="confirm-password-input"
        {...inputProps(FIELDS.passwordConfirmation)}
      />

      <Picker
        label={strings.SIGN_UP.gender}
        items={genderItems}
        placeholder={PLACEHOLDER_PICKER}
        touchableWrapperTestId="gender-picker"
        {...pickerProps(FIELDS.gender)}
      />

      <ErrorView errors={{ error }} />
      <Button
        testID="signup-submit-button"
        title={isLoading ? strings.COMMON.loading : strings.SIGN_UP.button}
        onPress={handleSubmit}
        disabled={formHasErrors || isLoading}
      />
    </>
  );
};

SignUpForm.propTypes = {
  onSubmit: func.isRequired,
};

export default SignUpForm;
