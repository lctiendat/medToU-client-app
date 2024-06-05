import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './src/screens/Auth/Signin';
import Signup from './src/screens/Auth/Signup';
import { Home, VerifyOTP , ProductsOfCategory, ProductDetail, Cart, Checkout, Notification, Profile } from './src/screens';
import BottomTabs from './src/components/BottomTabs';
const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SigninScreen" screenOptions={{
        headerShown: false,
      }}>
        {/* <Stack.Screen name="Welcome" component={Home} /> */}
        <Stack.Screen name="SigninScreen" component={Signin} />
        <Stack.Screen name="SignupScreen" component={Signup} />
        <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
        <Stack.Screen name="ProductsOfCategoryScreen" component={ProductsOfCategory} />  
        <Stack.Screen name="ProductsDetailScreen" component={ProductDetail} />
        <Stack.Screen name="CartScreen" component={Cart} />
        <Stack.Screen name="CheckoutScreen" component={Checkout} />
        <Stack.Screen name="Tabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
