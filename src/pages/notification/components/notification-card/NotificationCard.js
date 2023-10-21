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
      style={{
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        height: moderateScale(100, 0.3),
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        elevation: 1,
      }}>
      <View
        style={{
          backgroundColor: backgroundColor,
          width: moderateScale(30, 0.3),
          height: moderateScale(30, 0.3),
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 100,
        }}>
        {icon}
      </View>
      <View style={{}}>
        <Text
          style={{
            color: COLORS.textColor,
            fontFamily: FONTS.bold,
            fontSize: 16,
          }}>
          {label}
        </Text>
        <Text
          style={{
            color: COLORS.disabledColor,
            fontSize: 12,
            fontFamily: FONTS.medium,
          }}>
          {value}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({});
