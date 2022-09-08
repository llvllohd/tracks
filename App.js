import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { setNavigator } from './src/navigationRef';

import { Provider as AuthProvider } from './src/context/AuthContext';

import Signin from './src/screens/Signin';
import Signup from './src/screens/Signup';
import Account from './src/screens/Account';
import TrackCreate from './src/screens/TrackCreate';
import TrackList from './src/screens/TrackList';
import TrackDetail from './src/screens/TrackDetail';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

const switchNavigation = createSwitchNavigator({
  ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signin,
    Signup,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList,
      TrackDetail,
    }),
    TrackCreate,
    Account,
  }),
});

const App = createAppContainer(switchNavigation);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => setNavigator(navigator)} />
    </AuthProvider>
  );
};
