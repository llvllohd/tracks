import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { Button } from 'react-native-elements';
// import { Context as authContext } from '../context/AuthContext';

const Account = () => {
  // const { signout } = useContext(authContext);
  return (
    <View>
      <Text> Account </Text>
      {/* <Button style={{ marginTop: 10 }} title='SignOut' onPress={signout} /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Account;
