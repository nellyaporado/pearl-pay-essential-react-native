import React from 'react';
import {
  Alert,
  AsyncStorage,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Switch, ScrollView } from 'react-native-gesture-handler';
import {
  SPACING_VALUE,
  BUTTON_BORDER_RADIUS,
  iconSize,
  fontSize,
  colors,
} from '../utils';
import { PrimaryText } from '../components/Typography';

const initialState = {
  label: '',
  value: 0,
  type: '',
  processing: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'label_change':
      return {
        ...state,
        label: action.payload,
      };
    case 'value_change':
      return {
        ...state,
        value: action.payload,
      };
    case 'type_change':
      return {
        ...state,
        type: action.payload,
      };
    case 'add_plan_start':
      return {
        ...state,
        processing: true,
      };
    default:
      throw new Error();
  }
}

function AppPaymentPlan(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  async function onAddPress() {
    const { value, label, type } = state;
    const { params } = props.route;

    dispatch({ type: 'add_plan_start' });

    props.navigation.navigate('PlannedPayments', { value, label, type });
  }

  const { label, value, type } = state;

  const isDisabled = label.length < 3 || value < 0 || type === '';

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.content} behavior="padding">
        <ScrollView
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.contentContainer}
        >
          <View>
            <View style={styles.rowContainer}>
              <Icon
                name="label-outline"
                size={iconSize.regular}
                color={colors.dark}
              />
              <TextInput
                placeholder="Payment plan"
                onChangeText={(text) =>
                  dispatch({ type: 'label_change', payload: text })
                }
                style={styles.label}
              />
            </View>
            <View style={styles.rowContainer}>
              <Icon
                name="attach-money"
                size={iconSize.regular}
                color={colors.dark}
              />
              <TextInput
                placeholder="Amount"
                keyboardType="numeric"
                onChangeText={(text) =>
                  dispatch({ type: 'value_change', payload: text })
                }
                style={styles.label}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                dispatch({ type: 'type_change', payload: 'outcome' });
              }}
            >
              <View style={styles.rowContainer}>
                <Icon
                  name={
                    state.type === 'outcome'
                      ? 'radio-button-checked'
                      : 'radio-button-unchecked'
                  }
                  size={24}
                />
                <PrimaryText style={styles.label}>Outcome</PrimaryText>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                dispatch({ type: 'type_change', payload: 'income' });
              }}
            >
              <View style={styles.rowContainer}>
                <Icon
                  name={
                    state.type === 'income'
                      ? 'radio-button-checked'
                      : 'radio-button-unchecked'
                  }
                  size={iconSize.regular}
                />
                <PrimaryText style={styles.label}>Income</PrimaryText>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={onAddPress}
            style={[
              styles.button,
              { backgroundColor: isDisabled ? colors.gray : colors.green },
            ]}
            disabled={isDisabled}
          >
            {state.processing ? (
              <ActivityIndicator color={colors.white} />
            ) : (
              <PrimaryText style={styles.buttonText}>ADD</PrimaryText>
            )}
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: SPACING_VALUE,
    paddingBottom: SPACING_VALUE,
  },
  label: {
    fontSize: fontSize.large,
    marginLeft: SPACING_VALUE,
    width: '100%',
  },
  button: {
    marginTop: 2 * SPACING_VALUE,
    borderRadius: BUTTON_BORDER_RADIUS,
    paddingVertical: SPACING_VALUE,
    alignItems: 'center',
  },
  horizontalSpacing: {
    paddingHorizontal: SPACING_VALUE,
  },
  buttonText: {
    fontSize: fontSize.large,
    color: colors.white,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SPACING_VALUE,
  },
});

export default AppPaymentPlan;
