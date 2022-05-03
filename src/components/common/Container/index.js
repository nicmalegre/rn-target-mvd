import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { element, object } from 'prop-types';
import Header from '../Header';
import styles from './styles';

const Container = ({ children, headerProps }) => (
  <SafeAreaView style={styles.container}>
    <Header {...headerProps} />
    {children}
  </SafeAreaView>
);

Container.propTypes = {
  children: element.isRequired,
  headerProps: object.isRequired,
};

export default Container;
