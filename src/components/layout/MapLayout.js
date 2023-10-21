import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../styles';
import {moderateScale} from 'react-native-size-matters';
import {statusBarHeight} from '../../utils/StatusBarHeight';

const MapLayout = ({
  children,
  title,
  leftIcon,
  rightIcon,
  onLeftIconPress,
  onRightIconPress,
  containerStyle,
}) => {
  return (
    <View style={{...styles.mainContainer, ...containerStyle}}>
      <View style={styles.titleContainer}>
        <View style={styles.titleLeftLabel}>
          {leftIcon && (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => onLeftIconPress && onLeftIconPress()}
              style={styles.leftIcon}>
              {leftIcon}
            </TouchableOpacity>
          )}
          <Text style={styles.title}>{title}</Text>
        </View>
        {rightIcon && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => onRightIconPress && onRightIconPress()}
            style={styles.rightIcon}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.children}>{children}</View>
    </View>
  );
};

export default MapLayout;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryColor,
    justifyContent: 'center',
  },
  titleContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleLeftLabel: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftIcon: {
    width: moderateScale(28, 0.3),
    height: moderateScale(28, 0.3),
  },
  title: {
    color: COLORS.white,
    fontFamily: FONTS.medium,
    fontSize: 14,
  },
  rightIcon: {
    width: moderateScale(28, 0.3),
    height: moderateScale(28, 0.3),
  },
  children: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    marginTop: 35 - statusBarHeight / 2,
  },
});
