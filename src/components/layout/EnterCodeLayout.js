import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../styles';

const EnterCodeLayout = ({children}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={{flex: 0.6}}>{children}</View>
    </View>
  );
};

export default EnterCodeLayout;

const styles = StyleSheet.create({
  mainContainer: {flex: 0.4, backgroundColor: COLORS.primaryColor},
});
