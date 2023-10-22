import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NotificationCard from './components/notification-card/NotificationCard';
import {MapLayout} from '../../components';
import {notifications} from './mock-data/NotificationData';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../styles';

const Notification = ({navigation}) => {
  return (
    <MapLayout
      leftIcon={<Ionicons name="arrow-back" size={24} color={COLORS.white} />}
      onLeftIconPress={() => navigation.goBack()}
      title={'Notifications'}>
      <View style={styles.mainContainer}>
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

const styles = StyleSheet.create({
  mainContainer: {paddingHorizontal: 20, paddingVertical: 30, flex: 1},
});
