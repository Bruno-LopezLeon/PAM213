import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from './profile'; 
import Detalles from './detalles'; 

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true }} 
    >
      <Stack.Screen name="ProfileMain" component={Profile} options={{ title: 'Mi Perfil' }}/>
      <Stack.Screen name="Detalles" component={Detalles} options={{ title: 'Detalles' }}/>
    </Stack.Navigator>
  );
}