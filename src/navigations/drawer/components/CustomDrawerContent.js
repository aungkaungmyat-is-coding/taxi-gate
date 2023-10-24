import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../styles';
import {DRAWER_ITEM} from '../../../constants';
import {DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {HOME_SCREEN, ROOT_STACK} from '../../../constants/ScreenRoute';
import {moderateScale} from 'react-native-size-matters';

const CustomDrawerContent = ({props}) => {
  const navigation = useNavigation();

  const onPressLogout = () => {
    navigation.navigate(HOME_SCREEN);
  };

  return (
    <View {...props} style={{flex: 1}}>
      <View style={styles.mainContainer}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/kakashi.jpg')}
          />
          <Text style={styles.name}>John Doe</Text>
        </View>
        <FlatList
          data={DRAWER_ITEM}
          keyExtractor={item => item?.label}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <DrawerItem
                style={{justifyContent: 'center'}}
                label={() => <Text style={styles.label}>{item?.label}</Text>}
                onPress={() => {
                  if (item?.route == 'LOGOUT') {
                    onPressLogout();
                    return;
                  }
                  navigation.navigate(ROOT_STACK, {
                    screen: item?.route,
                    params: {},
                  });
                }}
                icon={() => item?.icon}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.primaryColor,
    flex: 1,
  },
  image: {
    width: moderateScale(50, 0.3),
    height: moderateScale(50, 0.3),
    marginTop: 30,
  },
  name: {
    color: COLORS.white,
    fontFamily: FONTS.medium,
    fontSize: 16,
    paddingTop: 10,
  },
  label: {
    color: COLORS.white,
    fontFamily: FONTS.medium,
    fontSize: 14,
  },
});
