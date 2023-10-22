import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../../styles';
import {moderateScale} from 'react-native-size-matters';

const NotificationCard = ({
  icon,
  label,
  value,
  backgroundColor,
  onCardPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onCardPress && onCardPress()}
      style={styles.cardContainer}>
      <View style={{...styles.icon, backgroundColor: backgroundColor}}>
        {icon}
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    height: moderateScale(100, 0.3),
    alignItems: 'center',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginTop: 20,
    flex: 1,
  },
  icon: {
    width: moderateScale(30, 0.3),
    height: moderateScale(30, 0.3),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  labelContainer: {flex: 1, paddingLeft: 10},
  label: {
    color: COLORS.textColor,
    fontFamily: FONTS.bold,
    fontSize: 16,
  },
  value: {
    color: COLORS.disabledColor,
    fontSize: 12,
    fontFamily: FONTS.medium,
  },
});
