import React, { useState } from 'react';
import { View } from 'react-native';
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
import DeleteTargetModal from 'components/DeleteTargetModal';
import createTargetValidations from 'validations/createTargetValidations';
import { createTarget } from 'actions/targetActions';
import { BUTTON_TYPES } from 'constants/buttons';
import strings from 'localization';
import { func, object } from 'prop-types';
import styles from './styles';

const FIELDS = {
  areaLength: 'areaLength',
  targetTitle: 'targetTitle',
  topic: 'topic',
};

const UpdateTargetForm = ({ target, topic, onSubmit }) => {
  const [isTopicModalVisible, setIsTopicModalVisible] = useState(false);
  const [isDeleteConfirmationModalVisible, setDeleteConfirmationModalVisible] = useState(false);

  // TO DO: Change createTarget for updateTarget action
  const { error, status } = useStatus(createTarget);
  const validator = useValidation(createTargetValidations);

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
      initialValues: {
        areaLength: target?.radius?.toString(),
        targetTitle: target.title,
        topic,
      },
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
        label={strings.UPDATE_TARGET.areaLength}
        keyboardType="numeric"
        autoCapitalize="none"
        testID="area-length-input"
        styleContainer={styles.inputContainer}
        styleInput={styles.areaLengthInput}
        {...inputProps(FIELDS.areaLength)}
      />
      <Input
        label={strings.UPDATE_TARGET.targetTitle}
        autoCapitalize="none"
        testID="target-title-input"
        styleContainer={styles.inputContainer}
        styleInput={styles.input}
        {...inputProps(FIELDS.targetTitle)}
      />
      <TopicPicker
        label={strings.UPDATE_TARGET.topic}
        testID="topic-input"
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

      <View style={styles.buttonsContainer}>
        <Button
          testID="delete-target-button"
          title={isLoading ? strings.COMMON.loading : strings.UPDATE_TARGET.delete}
          styleButton={styles.button}
          variant={BUTTON_TYPES.DANGER}
          onPress={() => setDeleteConfirmationModalVisible(true)}
          disabled={formHasErrors || isLoading}
        />
        <Button
          testID="save-target-button"
          title={isLoading ? strings.COMMON.loading : strings.UPDATE_TARGET.save}
          styleButton={styles.button}
          onPress={handleSubmit}
          disabled={formHasErrors || isLoading}
        />
      </View>

      <DeleteTargetModal
        isModalVisible={isDeleteConfirmationModalVisible}
        setModalVisible={setDeleteConfirmationModalVisible}
        target={target}
        topicIcon={topic.icon}
      />
    </>
  );
};

UpdateTargetForm.propTypes = {
  target: object.isRequired,
  topic: object.isRequired,
  onSubmit: func.isRequired,
};

export default UpdateTargetForm;
