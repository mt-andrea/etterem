import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import style from './const/style';
import SearchScreen from './screens/SearchScreen';
import DetailScreen from './screens/DetailScreen';

const Stack=createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Kereses'>
        <Stack.Screen name='Kereses' component={SearchScreen}/>
        <Stack.Screen name='Reszletek' component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

