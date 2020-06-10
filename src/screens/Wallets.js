import * as React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Screen from '../components/Screen';
import Carousel from '../components/Carousel/Carousel';
import Wallet from '../components/Wallet/Wallet';
import UserBanner from '../components/UserBanner';
import LoadingIndicator from '../components/LoadingIndicator';
import { AuthContext } from '../context/AuthContext';
import { getWallets, getTransaction } from '../services';

const walletMock = [
  {
    balance: 1324.56,
    label: 'Mock wallet label',
    lastTransaction: {
      type: 'income',
      value: 1500,
      label: 'Mock transaction label',
    },
  },
];

const initialState = {
  data: [],
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'start':
      return {
        ...state,
        loading: true,
      };
    case 'success':
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case 'failure':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      throw new Error();
  }
}

export default function Wallets() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const { token, username, onLogout } = React.useContext(AuthContext);

  React.useEffect(() => {
    async function fetchData() {
      try {
        dispatch({ type: 'start' });

        const response = await getWallets({ token });

        const completeData = response.data.map(async wallet => {
          const response = await getTransaction({
            token,
            transactionId: wallet.lastTransactionId,
          });

          return {
            ...wallet,
            lastTransaction: response.data,
          };
        });

        const data = await Promise.all(completeData);

        dispatch({ type: 'success', data });
      } catch (error) {
        dispatch({ type: 'failure', error });
      }
    }
    fetchData();
  }, []);
  
  return (
    <Screen>
      <UserBanner userName={username || 'Mock username'} onLogout={onLogout} />
      <Carousel
        data={state.data.length > 0 ? state.data : walletMock}
        renderItem={({ item, index }) => <Wallet index={index} {...item} />}
        keyExtractor={item => item.id}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
  },
});
