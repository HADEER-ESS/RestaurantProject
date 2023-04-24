import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// const createNativeStackNavigator = require('@react-navigation/native-stack');
import {NavigationContainer} from '@react-navigation/native';
// const NavigationContainer = require('@react-navigation/native');
import {QueryClientProvider, QueryClient} from 'react-query';
// const QueryClientProvider = require('react-query');
// const QueryClient = require('react-query');
import HomeScreen from './src/screens/HomeScreen';
// const HomeScreen = require('./src/screens/HomeScreen');
import DetailsScreen from './src/screens/DetailsScreen';
// const DetailsScreen = require('./src/screens/DetailsScreen');

const Stack = createNativeStackNavigator();

const App = () => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
