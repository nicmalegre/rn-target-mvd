import React from 'react';
import { func } from 'prop-types';
import { useStatus, LOADING } from '@rootstrap/redux-tools';

import { updateUser } from 'actions/userActions';
import Input from 'components/common/Input';
import useForm from 'hooks/useForm';
import useValidation from 'hooks/useValidation';
import updateUserValidations from 'validations/updateUserValidations';
import ErrorView from 'components/common/ErrorView';
import useTextInputProps from 'hooks/useTextInputProps';
import strings from 'localization';
import Button from 'components/common/Button';

const FIELDS = {
  username: 'username',
  email: 'email',
  password: 'password',
};

const UpdateProfileForm = ({ onSubmit }) => {
  const { error, status } = useStatus(updateUser);
  const validator = useValidation(updateUserValidations);
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

  const isLoading = status === LOADING;

  return (
    <>
      <Input
        label={strings.UPDATE_USER.username}
        autoCapitalize="none"
        testID="username-input"
        {...inputProps(FIELDS.username)}
      />
      <Input
        label={strings.UPDATE_USER.email}
        keyboardType="email-address"
        autoCapitalize="none"
        testID="email-input"
        {...inputProps(FIELDS.email)}
      />
      <Input
        label={strings.UPDATE_USER.password}
        testID="password-input"
        secureTextEntry
        placeholder="********"
        editable={false}
        {...inputProps(FIELDS.password)}
      />
      <ErrorView errors={{ error }} />

      <Button
        testID="login-submit-button"
        title={isLoading ? strings.COMMON.loading : strings.UPDATE_USER.button}
        titleTestID={isLoading ? 'loading-text-button' : 'sign-in-text-button'}
        onPress={handleSubmit}
        disabled={formHasErrors || isLoading}
      />
    </>
  );
};

UpdateProfileForm.propTypes = {
  onSubmit: func.isRequired,
};

export default UpdateProfileForm;
