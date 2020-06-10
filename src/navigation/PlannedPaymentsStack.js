import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import PlannedPayments from '../screens/PlannedPayments';
import AddPaymentPlan from '../screens/AddPaymentPlan';
import CloseButton from '../components/CloseButton';
import { iconSize, colors, fontSize } from '../utils';

const Stack = createStackNavigator();

export default function PlannedPaymentsStack(props) {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...Platform.select({
          ios: TransitionPresets.ModalPresentationIOS,
          android: TransitionPresets.RevealFromBottomAndroid,
        }),
      }}
    >
      <Stack.Screen
        name="PlannedPayments"
        component={PlannedPayments}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddPaymentPlan"
        component={AddPaymentPlan}
        options={{
          headerLeft: ({ onPress, disabled }) => (
            <CloseButton
              onPress={onPress}
            disabled={disabled}
              style={styles.button}
            />
          ),
          headerTitle: 'Add your payment',
          headerTitleStyle: {
            fontSize: fontSize.extraLarge,
          },
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  button: {
    marginLeft: 10,
  },
});
