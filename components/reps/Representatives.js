import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, CheckBox, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import RepScrollView from './RepScrollView';
import RepSearchPage from './RepSearchPage';
import Rep from './RepCardTemp';

export default function Representatives({navigation, route}) {

  const [representatives, setReps] = useState([])
  const rep_URL = 'https://www.googleapis.com/civicinfo/v2/representatives'
  const {apiKey} = route.params;

  const [showLocalResult, setLocal] = useState(false)
  const [showCountyResult, setCounty] = useState(false)
  const [showStateResult, setState] = useState(false)
  const [showFederalResult, setFederal] = useState(false)


  //get Data for representatives
  useEffect(() => { 
      const fetchData = async () => {
        let response = await fetch(
          rep_URL + '?' +'key=' + apiKey
        );
        let parseObject = await response.json();
          setReps(parseObject.elections)
      };
      fetchData();
    }, [] );

  const address = {
    line: '',
    city: '',
    state: '',
    zip: '',
  }  
  

          {/* <CheckBox 
          value={showLocal}
          onValueChange={()=> setLocal(!showLocal)}
          style= {styles.checkBox}
          /> */}

  //console.log(address.man === undefined ? 'hi' : 'no')

  return (
    <View style={styles.container}> 
      <View style={styles.textInputContainer} >
          <TextInput 
            style={styles.textInput}
            multiline={true}
            placeholder="Enter your address to find who represents you"
            placeholderTextColor="#abbabb"
          /> 
      </View>

    <View style={styles.searchParams} >
        <Text style={styles.govLvlText} > Show level of government</Text>
        <View style={styles.SwitchBoxContainer} >
            <Switch
            value={showLocalResult}
            onValueChange={()=> setLocal(previousState => !previousState)}
            />
            <Text> Show Local </Text>
        </View>
        <View style={styles.SwitchBoxContainer} >
            <Switch
            value={showCountyResult}
            onValueChange={()=> setCounty(previousState => !previousState)}
            />
            <Text> Show County </Text>
        </View>
        <View style={styles.SwitchBoxContainer} >
            <Switch
            value={showStateResult}
            onValueChange={()=> setState(previousState => !previousState)}
            />
            <Text> Show State </Text>
        </View>
        <View style={styles.SwitchBoxContainer} >
            <Switch
            value={showFederalResult}
            onValueChange={()=> setFederal(previousState => !previousState)}
            />
            <Text> Show Federal </Text>
        </View>
      </View>
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
     alignItems: 'center',
    // justifyContent: 'flex-start',
  },
  linearGrad:{
    flex: 1, 
    flexDirection: 'column',
    width: "100%",

  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderColor: 'black',
    borderBottomWidth: 1,
    paddingRight: 10,
    paddingBottom: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 10,
    minHeight: '3%',
    justifyContent: 'center',
  },
  searchParams:{
    alignItems: 'center',
  },
  govLvlText: {
    //flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  SwitchBoxContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  // checkBox: {
  //   justifyContent: 'center',
  //   alignSelf: "center",
  //   height: 20,
  //   width: 20,
  // },
});