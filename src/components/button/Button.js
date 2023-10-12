import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {COLORS, FONTS} from '../../styles';

export default function Button({onBtnPress, title}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onBtnPress && onBtnPress()}
      style={styles.btnMainContainer}>
      <Text style={styles.title}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnMainContainer: {
    backgroundColor: COLORS.secondaryColor,
    height: moderateScale(53, 0.3),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  title: {
    color: COLORS.white,
    fontFamily: FONTS.medium,
    textAlign: 'center',
    fontSize: 18,
  },
});
