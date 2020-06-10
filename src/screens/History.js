import * as React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  AsyncStorage,
  FlatList,
} from 'react-native';
import Transaction from '../components/Transaction';
import Separator from '../components/Separator';
import Screen from '../components/Screen';
import LoadingIndicator from '../components/LoadingIndicator';
import { getHistory } from '../services';
import { AuthContext } from '../context/AuthContext';

const initialState = {
  loading: false,
  error: null,
  data: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'start_fetching':
      return {
        ...state,
        loading: true,
      };
    case 'success':
      return {
        ...state,
        data: action.payload,
        loading: false,
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

export default function History() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const { token } = React.useContext(AuthContext);

  React.useEffect(() => {
    async function fetchHistory() {
      try {
        dispatch({ type: 'start_fetching' });

        const response = await getHistory({ token });

        dispatch({ type: 'success', payload: response.data });
      } catch (error) {
        dispatch({ type: 'failure', error });
      }
    }

    fetchHistory();
  }, []);

  if (state.loading) {
    return <LoadingIndicator />;
  }

  return (
    <Screen>
      <FlatList
        data={state.data}
        renderItem={({ item }) => <Transaction {...item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Separator}
      />
    </Screen>
  );
}
