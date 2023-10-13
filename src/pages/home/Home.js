import {View, Animated} from 'react-native';
import React from 'react';
import {Button} from '../../components';
import HomeCarousel from './components/HomeCarousel';
import Indicator from './components/Indicator';
import {tempImgData} from './data/data';
import BackDrop from './components/BackDrop';
import {SIGN_UP_SCREEN} from '../../constants/ScreenRoute';
import {COLORS} from '../../styles';

export default function Home({navigation}) {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={{flex: 1}}>
      <BackDrop scrollX={scrollX} />
      <Animated.FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tempImgData}
        scrollEventThrottle={32}
        pagingEnabled
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        contentContainerStyle={{paddingBottom: 100}}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <HomeCarousel
              image={item.image}
              label={item.label}
              description={item.description}
            />
          );
        }}
      />
      <View style={{marginHorizontal: 20}}>
        <Indicator scrollX={scrollX} />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: 50,
          marginHorizontal: 20,
        }}>
        <Button
          backgroundColor={COLORS.secondaryColor}
          title={'Get Started'}
          onBtnPress={() => navigation.navigate(SIGN_UP_SCREEN)}
        />
      </View>
    </View>
  );
}
