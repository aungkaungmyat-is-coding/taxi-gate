import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import {MapLayout} from '../../components';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS, FONTS} from '../../styles';
import MapView, {Marker} from 'react-native-maps';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {moderateScale} from 'react-native-size-matters';

let latitudeDelta = 0.09;
let longitudeDelta = 0.09;

const MapViewScreen = () => {
  let mapRef = useRef();
  return (
    <MapLayout
      containerStyle={{overflow: 'hidden'}}
      title={'Home'}
      leftIcon={<Entypo name={'menu'} color={COLORS.white} size={28} />}
      rightIcon={
        <Ionicons
          name={'notifications-outline'}
          color={COLORS.white}
          size={28}
        />
      }>
      <View style={styles.boxContainer}>
        <View style={styles.itemsContainer}>
          <View style={styles.leftItemsWrapper}>
            <TouchableOpacity activeOpacity={0.7}>
              <Fontisto
                name={'car'}
                size={moderateScale(24, 0.3)}
                color={COLORS.primaryColor}
              />
            </TouchableOpacity>
            <Text style={styles.label}>Where are you going?</Text>
          </View>
          <TouchableOpacity activeOpacity={0.7}>
            <Feather
              name={'map-pin'}
              size={moderateScale(24, 0.3)}
              color={COLORS.primaryColor}
            />
          </TouchableOpacity>
        </View>
      </View>
      <MapView
        style={{flex: 1}}
        ref={mapRef}
        showsUserLocation={true}
        followsUserLocation={true}
        initialRegion={{
          latitude: 16.850885646842684,
          longitude: 96.12976231685793,
          latitudeDelta,
          longitudeDelta,
        }}
        region={{
          latitude: 16.850885646842684,
          longitude: 96.12976231685793,
          latitudeDelta,
          longitudeDelta,
        }}>
        <Marker
          coordinate={{
            latitude: 16.806579771843978,
            longitude: 96.13920237587612,
          }}>
          <FontAwesome6 name={'location-arrow'} color={'blue'} size={28} />
        </Marker>
      </MapView>
    </MapLayout>
  );
};

export default MapViewScreen;

const styles = StyleSheet.create({
  boxContainer: {
    height: moderateScale(50, 0.3),
    backgroundColor: COLORS.white,
    marginTop: 20,
    paddingHorizontal: 10,
    position: 'absolute',
    left: 20,
    right: 20,
    zIndex: 999,
  },
  itemsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftItemsWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    paddingLeft: 20,
    color: COLORS.textColor,
  },
});
