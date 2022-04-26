import React, { useEffect } from 'react';
import { arrayOf, bool, func, object, string } from 'prop-types';
import { View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles, { stylesPicker } from './styles';

const Picker = ({
  label,
  value,
  onValueChange,
  placeholder,
  items,
  touchableWrapperTestId,
  error,
  touched,
  active,
  ...props
}) => {
  // Register field in the form
  useEffect(() => {
    onValueChange(value, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.viewInput}>
        <RNPickerSelect
          style={stylesPicker(touched && !!error)}
          value={value}
          onValueChange={onValueChange}
          placeholder={placeholder}
          items={items}
          touchableWrapperProps={{ testID: touchableWrapperTestId }}
          {...props}
        />

        {touched && !!error && (
          <Text accessibilityLabel="form-error" style={styles.errorText}>
            {error}
          </Text>
        )}
      </View>
    </View>
  );
};

Picker.propTypes = {
  label: string,
  value: string,
  onValueChange: func.isRequired,
  placeholder: object,
  items: arrayOf(object).isRequired,
  touchableWrapperTestId: string,
  error: string,
  touched: bool.isRequired,
  active: bool,
};

export default Picker;
