import React from 'react';
import { View, StyleSheet, Dimensions, Animated, FlatList, Platform } from 'react-native';
import CarouselScrollIndicator from './CarouselScrollIndicator';

const DEVICE_WIDTH = Dimensions.get('window').width;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

export default class Carousel extends React.Component {
  scrollValue = new Animated.Value(0);

  render() {
    const { renderItem, onScroll, ...rest } = this.props;
    return (
      <View style={styles.container}>
        <AnimatedFlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={params => (
            <View style={styles.itemContainer}>{renderItem(params)}</View>
          )}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: this.scrollValue } } }],
            { useNativeDriver: true, listener: onScroll },
          )}
          {...rest}
          contentContainerStyle={{
            width: Platform.OS === 'web' ? DEVICE_WIDTH : undefined
          }}
        />
        <CarouselScrollIndicator
          scrollValue={this.scrollValue}
          count={rest.data.length}
          itemWidth={DEVICE_WIDTH}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  itemContainer: {
    width: DEVICE_WIDTH,
  },
});
