import React from 'react';
import { func } from 'prop-types';
import { useStatus, LOADING } from '@rootstrap/redux-tools';
import useSession from 'hooks/useSession';

import { updateUser } from 'actions/userActions';
import Input from 'components/common/Input';
import useForm from 'hooks/useForm';
import useValidation from 'hooks/useValidation';
import updateUserValidations from 'validations/updateUserValidations';
import ErrorView from 'components/common/ErrorView';
import useTextInputProps from 'hooks/useTextInputProps';
import strings from 'localization';
import Button from 'components/common/Button';
import { BLACK } from 'constants/colors';
import styles from './styles';

const FIELDS = {
  areaLenght: 'areaLenght',
  targetTitle: 'targetTitle',
  topic: 'topic',
};

const CreateTargetForm = ({ onSubmit }) => {
  const { error, status } = useStatus(updateUser);
  const validator = useValidation(updateUserValidations);
  const {
    user: { username, email },
  } = useSession();

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
      initialValues: { username, email },
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
        label={strings.CREATE_TARGET.areaLenght}
        keyboardType="numeric"
        autoCapitalize="none"
        testID="area-lenght-input"
        styleContainer={styles.inputContainer}
        placeholder={strings.CREATE_TARGET.areaLenghtPlaceholder}
        placeholderTextColor={BLACK}
        upperCasePlaceholder={false}
        styleInput={styles.input}
        {...inputProps(FIELDS.areaLenght)}
      />
      <Input
        label={strings.CREATE_TARGET.targetTitle}
        autoCapitalize="none"
        testID="target-title-input"
        styleContainer={styles.inputContainer}
        placeholder={strings.CREATE_TARGET.targetTitlePlaceholder}
        placeholderTextColor={BLACK}
        upperCasePlaceholder={false}
        styleInput={styles.input}
        {...inputProps(FIELDS.targetTitle)}
      />
      <Input
        label={strings.CREATE_TARGET.topic}
        testID="topic-input"
        styleContainer={styles.inputContainer}
        placeholder={strings.CREATE_TARGET.topicPlaceholder}
        placeholderTextColor={BLACK}
        upperCasePlaceholder={false}
        styleInput={styles.input}
        {...inputProps(FIELDS.topic)}
      />
      <ErrorView errors={{ error }} />

      <Button
        testID="login-submit-button"
        title={isLoading ? strings.COMMON.loading : strings.CREATE_TARGET.button}
        titleTestID={isLoading ? 'loading-text-button' : 'sign-in-text-button'}
        onPress={handleSubmit}
        disabled={formHasErrors || isLoading}
      />
    </>
  );
};

CreateTargetForm.propTypes = {
  onSubmit: func.isRequired,
};

export default CreateTargetForm;
