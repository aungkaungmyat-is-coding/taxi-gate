import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../styles';
import {useNavigation} from '@react-navigation/native';
import topOffset from '../../utils/Notch';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {moderateScale} from 'react-native-size-matters';

export default function SignInAndOutLayout({
  children,
  bodyStyle,
  containerStyle,
}) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        ...styles.container,
        ...containerStyle,
      }}>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
          style={styles.icon}>
          <MaterialIcons name={'arrow-back'} size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{...styles.children, ...bodyStyle}}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.primaryColor},
  iconContainer: {paddingHorizontal: 20, flex: 0.5, paddingTop: 20},
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: moderateScale(24, 0.3),
    height: moderateScale(24, 0.3),
  },
  children: {flex: 1, backgroundColor: COLORS.white},
});
