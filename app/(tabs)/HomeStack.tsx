///HomeStack.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CabsList from './CabsList';
import CabDetail from './CabDetail';

// Define the types for the parameters in your navigator
type RootStackParamList = {
  'Cabs List': undefined;
  'Cab Detail': { cabId: string }; // Ensure this matches with what CabDetail expects
};

const Stack = createStackNavigator<RootStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Cabs List" component={CabsList} />
      <Stack.Screen name="Cab Detail" component={CabDetail} />
    </Stack.Navigator>
  );
}
