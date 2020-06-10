import React from 'react';
import {
  View,
  AsyncStorage,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import { PrimaryText } from '../components/Typography';
import { colors, fontSize } from '../utils';

function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="always"
    >
      <KeyboardAvoidingView style={styles.content} behavior="padding">
        <Image
          source={require('../../assets/callstack-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={setUsername}
            style={styles.textInput}
            placeholder="Username"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={setPassword}
            style={styles.textInput}
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          disabled={!username || !password}
        >
          <PrimaryText style={styles.buttonText}>Login</PrimaryText>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  content: {
    alignItems: 'center',
    marginTop: -100,
  },
  logo: {
    width: 150,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  textInput: {
    fontSize: fontSize.large,
    paddingVertical: 10,
    width: '80%',
    marginLeft: 16,
  },
  button: {
    marginTop: 32,
    marginBottom: 20,
    backgroundColor: colors.green,
    borderRadius: 6,
    paddingVertical: 16,
    paddingHorizontal: '40%',
  },
  buttonText: {
    fontSize: fontSize.large,
    color: colors.white,
  },
});

export default Login;
