import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TrackList = ({ navigation }) => {
  return (
    <View>
      <Text> TrackList </Text>
      <Button title='Go Track Detail' onPress={() => navigation.navigate('TrackDetail')} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackList;
