import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {DefaultSignin, Signin, Signup} from './src/screens';
import DefaultSignin from './src/screens/Auth/DefaultSignin';
import Signin from './src/screens/Auth/Signin';
import Signup from './src/screens/Auth/Signup';
import { Home, VerifyOTP } from './src/screens';
const Stack = createNativeStackNavigator();

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Wellcomescreen" screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Wellcomescreen" component={Home} />
        <Stack.Screen name="SigninScreen" component={Signin} />
        <Stack.Screen name="SignupScreen" component={Signup} />
        <Stack.Screen name="VerifyOTP" component={VerifyOTP} />

        {/* <Stack.Screen name="Tabs" component={Tabs} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
