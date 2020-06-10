import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Wallets from '../screens/Wallets';
import History from '../screens/History';
import PlannedPaymentsStack from './PlannedPaymentsStack';
import { iconSize, colors } from '../utils';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveTintColor: colors.grey,
      }}
    >
      <Tab.Screen
        name="Wallets"
        component={Wallets}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="payment" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="history" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="PlannedPaymentsStack"
        component={PlannedPaymentsStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="assignment" size={size} color={color} />
          ),
          tabBarLabel: 'Planned Payments',
        }}
      />
    </Tab.Navigator>
  );
}
