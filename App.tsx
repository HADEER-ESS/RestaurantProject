/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {QueryClientProvider, QueryClient} from 'react-query';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';


const Stack = createNativeStackNavigator();

function App() {
  const client = new QueryClient() 
  return (
    <QueryClientProvider client={client}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Details' component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </QueryClientProvider>
  );
}


export default App;
