import React, { useContext } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-elements';
import { globalStyle } from '../styles/global';
import { Context as authContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const Signup = () => {
  const { state, signup, clearErrorMessage } = useContext(authContext);
  return (
    <View style={globalStyle.container}>
      <NavigationEvents
        onWillFocus={() => {
          clearErrorMessage();
        }}
      />
      {state?.isLoading && <ActivityIndicator size='large' style={globalStyle.loader} />}
      <Card>
        <AuthForm headerText='Sign Up' errorMessage={state?.errorMessage} submitButtonText='Sign Up' onSubmit={signup} />
        <NavLink text='Already have an account?' routeName='Signin' />
      </Card>
    </View>
  );
};

Signup.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({});

export default Signup;
