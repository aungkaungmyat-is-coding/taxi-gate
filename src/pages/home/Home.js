import {View, Animated} from 'react-native';
import React from 'react';
import {Button} from '../../components';
import HomeCarousel from './components/HomeCarousel';
import Indicator from './components/Indicator';
import {tempImgData} from './data/data';
import BackDrop from './components/BackDrop';

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
      <Indicator scrollX={scrollX} />
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: 50,
          marginHorizontal: 20,
        }}>
        <Button title={'Get Started'} />
      </View>
    </View>
  );
}
