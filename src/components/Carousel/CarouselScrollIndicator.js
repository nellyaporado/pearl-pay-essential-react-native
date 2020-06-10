import React from 'react';
import { Animated, View, StyleSheet } from 'react-native';

const UNSELECTED_COLOR = '#adadad';
const SELECTED_COLOR = '#3a3a3a';
const CIRCLE_SIZE = 10;

export default function CarouselScrollIndicator({
  scrollValue,
  itemWidth,
  count,
}) {
  return (
    <View style={styles.indicator}>
      {new Array(count).fill(0).map((_, i) => {
        {
          /**
           * TODO: implement interpolation of ScrollValue to translateX
           */
        }
        const scrollBarValue = 0;
        return (
          <View
            key={`circle-indicator-${i}`}
            style={[styles.circle, styles.circleContainer]}
          >
            <Animated.View
              style={[
                styles.circle,
                styles.selection,
                {
                  transform: [
                    {
                      translateX: scrollBarValue,
                    },
                  ],
                },
              ]}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  indicator: {
    flexDirection: 'row',
  },
  circleContainer: {
    overflow: 'hidden',
    backgroundColor: UNSELECTED_COLOR,
    margin: 10,
  },
  circle: {
    borderRadius: 2 * CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    width: CIRCLE_SIZE,
  },
  selection: {
    backgroundColor: SELECTED_COLOR,
    position: 'absolute',
  },
});
