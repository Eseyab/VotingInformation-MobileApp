import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ListView, FlatList, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ElectionScrollView from './ElectionScrollView';


export default function Upcoming({navigation, route}, props) {

  const [elections, setElections] = useState([])
  const elections_URL = 'https://www.googleapis.com/civicinfo/v2/elections'
  const {apiKey} = route.params;

    //getData for elections
    useEffect(() => { 
      const fetchData = async () => {
        let response = await fetch(
          elections_URL + '?' +'key=' + apiKey
        );
        let parseObject = await response.json();
          setElections(parseObject.elections)
      };
      fetchData();
    }, [] );

    return (
        <View style={styles.container}>       
              <ElectionScrollView listOfElections={elections}/>
          </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
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