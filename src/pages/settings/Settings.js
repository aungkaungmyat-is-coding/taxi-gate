import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MapLayout} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../styles';
import SettingCard from './components/setting-card/SettingCard';
import {settingsData} from './data/SettingsData';
import ProfileCard from './components/profile-card/ProfileCard';

const Settings = ({navigation}) => {
  return (
    <MapLayout
      title={'Settings'}
      onLeftIconPress={() => navigation.goBack()}
      leftIcon={<Ionicons name="arrow-back" size={24} color={COLORS.white} />}>
      <View style={styles.mainContainer}>
        <ProfileCard name={'Yoshi'} email={'yoshi@gmail.com'} />
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 50}}
          data={settingsData}
          keyExtractor={item => item?.id}
          renderItem={({item}) => {
            return <SettingCard icon={item?.icon} label={item?.label} />;
          }}
        />
      </View>
    </MapLayout>
  );
};

export default Settings;

const styles = StyleSheet.create({
  mainContainer: {paddingHorizontal: 20, paddingVertical: 30, flex: 1},
});
