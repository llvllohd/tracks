import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <Text h3 style={{ textAlign: 'center', marginBottom: 30 }}>
        {headerText}
      </Text>
      <Input autoCapitalize='none' autoCorrect={false} label='Email' value={email} onChangeText={setEmail} />
      <Input autoCapitalize='none' autoCorrect={false} secureTextEntry label='Password' value={password} onChangeText={setPassword} />
      {errorMessage ? <Text style={{ textAlign: 'center', marginBottom: 30, color: 'red' }}> {errorMessage} </Text> : null}
      <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
    </>
  );
};

const styles = StyleSheet.create({});

export default AuthForm;
