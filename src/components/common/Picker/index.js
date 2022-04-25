import React from 'react';
import { arrayOf, func, bool, string, object } from 'prop-types';
import { View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles, { pickerSelectStyles } from './styles';

const Picker = ({ label, placeholder, items, value, onValueChange, touched, error, ...props }) => (
  <View style={styles.container}>
    {!!label && <Text style={styles.label}>{label}</Text>}
    <View style={styles.viewPicker}>
      <RNPickerSelect
        style={pickerSelectStyles(touched && !!error)}
        placeholder={placeholder}
        items={items}
        value={value}
        onValueChange={onValueChange}
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

Picker.propTypes = {
  label: string,
  placeholder: object,
  items: arrayOf(object).isRequired,
  value: string,
  onValueChange: func.isRequired,
  touched: bool.isRequired,
  error: string,
};

export default Picker;
