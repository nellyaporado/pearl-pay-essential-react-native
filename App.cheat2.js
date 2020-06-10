import React from 'react';
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabs from './src/navigation/BottomTabs';
import Login from './src/screens/Login';
import Wallets from './src/screens/Wallets';
import History from './src/screens/History';
import PlannedPayments from './src/screens/PlannedPayments';
import AddPaymentPlan from './src/screens/AddPaymentPlan';
import LoadingIndicator from './src/components/LoadingIndicator';
import { AuthContext } from './src/context/AuthContext';
import * as AbstractStorage from './src/abstractStorage';

const Stack = createStackNavigator();

export default function App() {
  const [auth, setAuth] = React.useState(null);
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    async function rehydrate() {
      const authDataPromise = AbstractStorage.getItemAsync('authData');

      const [authData] = await Promise.all([authDataPromise]);

      const { token, username } = authData ? JSON.parse(authData) : {};

      setAuth(token && username ? { token, username } : null);
      setHydrated(true);
    }
    rehydrate();
  }, []);

  if (!hydrated) {
    return null;
  }

  async function onLogin({ token, username }) {
    await AbstractStorage.setItemAsync(
      'authData',
      JSON.stringify({ token, username }),
    );
    setAuth({ token, username });
  }

  async function onLogout() {
    await AbstractStorage.deleteItemAsync('authData');
    setAuth(null);
  }

  return (
    <AuthContext.Provider
      value={{
        onLogin,
        onLogout,
        ...auth,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {!auth ? (
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                animationTypeForReplace: 'pop',
              }}
            />
          ) : (
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
