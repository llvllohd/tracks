import React, { useContext } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-elements';
import { globalStyle } from '../styles/global';
import { Context as authContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const Signin = () => {
  const { state, signin, clearErrorMessage } = useContext(authContext);

  return (
    <View style={globalStyle.container}>
      <NavigationEvents
        onWillFocus={() => {
          clearErrorMessage();
        }}
      />
      {state?.isLoading && <ActivityIndicator size='large' style={globalStyle.loader} />}
      <Card>
        <AuthForm headerText='Sign In' errorMessage={state?.errorMessage} submitButtonText='Sign In' onSubmit={signin} />
        <NavLink text='Dont have an account?' routeName='Signup' />
      </Card>
    </View>
  );
};

Signin.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({});

export default Signin;
