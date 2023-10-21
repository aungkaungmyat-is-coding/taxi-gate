import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NotificationCard from './components/notification-card/NotificationCard';
import {COLORS} from '../../styles';
import {MapLayout} from '../../components';

const notifications = [
  {
    value: 'Just invite 3 your friends, and you will get 3 free coupons code',
    label: 'Get 3 Free Coupons Now!',
    icon: (
      <MaterialIcons name="discount" size={24} color={COLORS.primaryColor} />
    ),
    backgroundColor: COLORS.secondaryColor,
  },
];

const Notification = ({navigation}) => {
  return (
    <MapLayout>
      <View style={{paddingHorizontal: 20, paddingVertical: 30, flex: 1}}>
        <FlatList
          data={notifications}
          keyExtractor={item => item?.value}
          renderItem={({item}) => {
            return (
              <NotificationCard
                label={item?.label}
                value={item?.value}
                icon={item?.icon}
                backgroundColor={item?.backgroundColor}
              />
            );
          }}
        />
      </View>
    </MapLayout>
  );
};

export default Notification;

const styles = StyleSheet.create({});
