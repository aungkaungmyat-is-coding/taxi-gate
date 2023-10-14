import {View, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../styles';

const CompleteSetUpLayout = ({children}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.children}>{children}</View>
    </View>
  );
};

export default CompleteSetUpLayout;

const styles = StyleSheet.create({
  children: {
    flex: 0.6,
    backgroundColor: COLORS.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {flex: 1, backgroundColor: COLORS.white},
});
