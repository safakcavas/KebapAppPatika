import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './pages/WelcomeScrenn';


export default function Router() {
  const Stack= createNativeStackNavigator();
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='WelcomeScreen' component={Welcome}/>
    </Stack.Navigator>
  </NavigationContainer>;
}
