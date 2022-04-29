/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { PasswordMeter } from 'react-native-password-meter';

export default function App() {
  const [password, setPassword] = React.useState({ value: '', error: '' });
  const [passwordScore, setPasswordScore] = React.useState(0);
  const _updateScore = (val: any) => {
    setPasswordScore(val);
  };
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white', marginBottom: 5 }}>Password</Text>
      <TextInput
        style={{
          height: 50,
          borderColor: 'gray',
          borderWidth: 1,
          width: '100%',
          borderRadius: 6,
          color: 'white',
          padding: 10,
        }}
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        secureTextEntry={true}
      />
      <PasswordMeter
        password={password.value}
        onResult={(val) => {
          _updateScore(val);
        }}
      />
      <Text>{passwordScore}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
