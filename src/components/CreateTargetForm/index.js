import React, { useState } from 'react';
import { func } from 'prop-types';
import { useStatus, LOADING } from '@rootstrap/redux-tools';
import useValidation from 'hooks/useValidation';
import useForm from 'hooks/useForm';
import useTextInputProps from 'hooks/useTextInputProps';
import usePickerProps from 'hooks/usePickerProps';

import Input from 'components/common/Input';
import ErrorView from 'components/common/ErrorView';
import TopicListModal from 'components/TopicListModal';
import TopicPicker from 'components/common/TopicPicker';
import Button from 'components/common/Button';
import createTargetValidations from 'validations/createTargetValidations';
import { createTarget } from 'actions/targetActions';
import strings from 'localization';
import { BLACK } from 'constants/colors';
import styles from './styles';

const FIELDS = {
  areaLenght: 'areaLenght',
  targetTitle: 'targetTitle',
  topic: 'topic',
};

const CreateTargetForm = ({ onSubmit, userLocation }) => {
  const [isTopicModalVisible, setIsTopicModalVisible] = useState(false);
  const { error, status } = useStatus(createTarget);
  const validator = useValidation(createTargetValidations);
  const { latitude, longitude } = userLocation;

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
      initialValues: { areaLenght: '200', latitude, longitude },
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
  const { onValueChange } = pickerProps(FIELDS.topic);

  const isLoading = status === LOADING;

  return (
    <>
      <Input
        label={strings.CREATE_TARGET.areaLenght}
        keyboardType="numeric"
        autoCapitalize="none"
        testID="area-lenght-input"
        styleContainer={styles.inputContainer}
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
      <TopicPicker
        label={strings.CREATE_TARGET.topic}
        testID="topic-input"
        placeholder={strings.CREATE_TARGET.topicPlaceholder}
        onPress={() => setIsTopicModalVisible(true)}
        {...pickerProps(FIELDS.topic)}
        value={values[FIELDS.topic] || {}}
      />
      <TopicListModal
        isModalVisible={isTopicModalVisible}
        setModalVisible={setIsTopicModalVisible}
        onValueChange={onValueChange}
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
