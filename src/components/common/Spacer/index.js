import React from 'react';
import { object } from 'prop-types';
import { View } from 'react-native';
import styles from './styles';

const Spacer = ({ lineStyle }) => <View style={[styles.line, lineStyle]} />;

Spacer.propTypes = {
  lineStyle: object,
};

export default Spacer;
