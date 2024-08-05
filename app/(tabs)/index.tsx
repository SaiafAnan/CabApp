// index.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack'; // Make sure the path is correct
import MyCabs from './MyCabs';     // Make sure the path is correct



// Create a Bottom Tab Navigator
const Tab = createBottomTabNavigator();

// Define the App component
export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="My Cab" component={MyCabs} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
