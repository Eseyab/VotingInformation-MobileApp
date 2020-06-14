import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ListView, FlatList, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Upcoming from './elections/UpcomingElections';


export default function Home({navigation}, props) {

    const [representatives, setReps] = useState([])

    const apiKey = 'AIzaSyDi6wOJrjTk5P9Ovzp7ztfV29UwfTf7G58';

    return (
        <View style={styles.container}>
            <LinearGradient
            colors={['#eeeeee','#0df2c8']}
            style={styles.linearGrad}
            >
              <Text style={styles.title}> CIVICS INFORMATION</Text>
              
              <Button title='View Upcoming Elections'
              onPress={()=> navigation.navigate("Upcoming Elections", {
                  apiKey: apiKey
              })} />

              <Button title='View Representatives for your Area' style={{margin: 20}} 
              onPress={()=> navigation.navigate("Representatives", {
                apiKey: apiKey
            })}
              />
            </LinearGradient>
          </View>
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