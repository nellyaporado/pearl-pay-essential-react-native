import React from 'react';
import { View, StyleSheet, Dimensions, FlatList, Platform } from 'react-native';
import CarouselScrollIndicator from './CarouselScrollIndicator';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default class Carousel extends React.Component {
  render() {
    const { renderItem, onScroll, ...rest } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={(params) => (
            <View style={styles.itemContainer}>{renderItem(params)}</View>
          )}
          {...rest}
          contentContainerStyle={{
            width: Platform.OS === 'web' ? DEVICE_WIDTH : undefined,
          }}
        />
        <CarouselScrollIndicator
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
