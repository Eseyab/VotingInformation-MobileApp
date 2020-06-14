import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ListView, FlatList, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Upcoming from './components/elections/UpcomingElections';
import Representatives from './components/reps/Representatives';


const Stack = createStackNavigator();



export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home}  />
      <Stack.Screen name="Upcoming Elections" component={Upcoming}  />
      <Stack.Screen name="Representatives" component={Representatives}  />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGrad:{
    flex: 1, 
    flexDirection: 'column',
    
    width: "100%",
    justifyContent: 'center', 
    alignItems: 'center',
  },
  title:{
    fontSize: 20,
  },
});
