import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  AsyncStorage,
  Alert,
  View,
  FlatList,
  SectionList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useFocusEffect } from '@react-navigation/native';

import FAB from '../components/FAB';
import Card from '../components/Card';
import LoadingIndicator from '../components/LoadingIndicator';
import { PrimaryText } from '../components/Typography';
import { colors, fontSize, SPACING_VALUE } from '../utils';
import { getPayments, deletePayment, createPayment } from '../services';
import { AuthContext } from '../context/AuthContext';
import PlannedPaymentItem from '../components/PlannedPaymentItem';

const showErrorAlert = () =>
  Alert.alert('Ooops', 'Something went wrong. Please try again');

export default function PlannedPayments(props) {
  const [plans, setPlans] = React.useState(undefined);

  const { token } = React.useContext(AuthContext);

  useFocusEffect(
    React.useCallback(() => {
      const { params } = props.route;

      if (params) {
        // If params exists, get the value, label and type of new payment
        const { value, label, type } = params;

        if (value && label && type) {
          // Create new payment
          addPlan(value, label, type);

          // Set params back to undefined to be able to check if new payment has to be added later on
          props.navigation.setParams({
            value: undefined,
            label: undefined,
            type: undefined,
          });
        }
      }
    }, [props.route.params]),
  );

  React.useEffect(() => {
    if (token) {
      getPlans();
    }
  }, [token]);

  async function getPlans() {
    try {
      const response = await getPayments({ token });

      if (response.error) {
        return Alert.alert(
          'Error!',
          'Cannot load payment plans. Please try again',
        );
      }

      setPlans(response.data);
    } catch (error) {
      return showErrorAlert();
    }
  }

  async function removePlan(paymentId) {
    try {
      const response = await deletePayment({ token, paymentId });

      if (response.error) {
        showErrorAlert();
      }

      setPlans(response.data);
    } catch (error) {
      return showErrorAlert();
    }
  }

  async function addPlan(value, label, type) {
    try {
      const response = await createPayment({ token, value, label, type });

      if (response.error) {
        showErrorAlert();
      }

      setPlans(response.data);
    } catch (error) {
      return showErrorAlert();
    }
  }

  function onFABPress() {
    props.navigation.push('AddPaymentPlan');
  }

  function renderPlans() {
    if (!plans) {
      return <LoadingIndicator />;
    } else if (plans.length === 0) {
      return (
        <View style={styles.noPlansPlaceholder}>
          <PrimaryText style={styles.noPlansText}>
            Currently you don't have any payment plans. Click plus button to add
            your first plan.
          </PrimaryText>
        </View>
      );
    } else if (plans.length > 0) {
      return (
        <SectionList
          sections={[
            {
              title: 'OUTCOMES',
              data: plans.filter((i) => i.type === 'outcome'),
            },
            {
              title: 'INCOMES',
              data: plans.filter((i) => i.type === 'income'),
            },
          ]}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.sectionHeader}>
              <PrimaryText style={styles.sectionTitle}>{title}</PrimaryText>
            </View>
          )}
          renderItem={({ item }) => (
            <PlannedPaymentItem
              {...item}
              onRemove={() => removePlan(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
          style={styles.sectionList}
          stickySectionHeadersEnabled={true}
        />
      );
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderPlans()}
      <FAB onPress={onFABPress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  noPlansPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: SPACING_VALUE,
  },
  noPlansText: {
    fontSize: fontSize.large,
    textAlign: 'center',
  },
  sectionHeader: {
    backgroundColor: colors.gray,
    paddingVertical: SPACING_VALUE / 2,
    alignItems: 'center',
  },
  sectionTitle: {
    fontWeight: 'bold',
  },
  sectionList: {
    flex: 1,
    borderRadius: 10,
  },
});
