import React from 'react';
import Home from './Screens/Home';
import Signup from './Screens/Signup';
import Login from './Screens/Login';
import Modules from './Screens/Modules';
import Notes from './Screens/Notes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen  name="Signup" component={Signup} />
        <Stack.Screen  name="Login" component={Login} />
        <Stack.Screen  name="Modules" component={Modules} />
        <Stack.Screen  name="Notes" component={Notes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}