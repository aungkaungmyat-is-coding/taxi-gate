import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../../styles';
import {moderateScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SettingCard = ({icon, label, onSettingCardPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onSettingCardPress && onSettingCardPress()}
      style={styles.cardContainer}>
      <View style={styles.iconLabel}>
        {icon}
        <Text style={styles.label}>{label}</Text>
      </View>
      <AntDesign name="right" size={22} color={COLORS.disabledColor} />
    </TouchableOpacity>
  );
};

export default SettingCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.white,
    height: moderateScale(75, 0.3),
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  iconLabel: {
    flex: 1,
    flexDirection: 'row',
  },
  label: {
    paddingLeft: 10,
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: COLORS.textColor,
  },
});
