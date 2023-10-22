import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../../styles';
import {moderateScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProfileCard = ({name, email, onProfileCardPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onProfileCardPress && onProfileCardPress()}
      style={styles.cardContainer}>
      <View style={styles.itemsContainer}>
        <View style={styles.image}>{/* Image Here */}</View>
        <View style={{paddingLeft: 10}}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
      <AntDesign name="right" size={22} color={COLORS.disabledColor} />
    </TouchableOpacity>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.white,
    height: moderateScale(80, 0.3),
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    backgroundColor: COLORS.primaryColor,
    width: moderateScale(40, 0.3),
    height: moderateScale(40, 0.3),
    borderRadius: 10,
  },
  name: {
    color: COLORS.textColor,
    fontFamily: FONTS.bold,
    fontSize: 14,
  },
  email: {
    fontFamily: FONTS.light,
    color: COLORS.disabledColor,
    fontSize: 12,
  },
});
