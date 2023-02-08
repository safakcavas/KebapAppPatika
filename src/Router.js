import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './pages/WelcomeScrenn';
import MemberSign from './pages/MemberSign';
import MemberResult from './pages/MemberResult';

function Router() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          (options = {
            headerShown: false,
          })
        }>
        <Stack.Screen name="WelcomeScreen" component={Welcome} />
        <Stack.Screen name="MemberSignScreen" component={MemberSign} />
        <Stack.Screen name="MemberResult" component={MemberResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
