import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../styles';

export default function ErrorMessage({errorMessage}) {
  return (
    <View style={{}}>
      <Text style={styles.buttonWrapper}>{errorMessage}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    color: COLORS.errorColor,
    fontSize: 10,
    fontFamily: FONTS.regular,
    paddingTop: 5,
  },
});
