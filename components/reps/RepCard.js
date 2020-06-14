import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';



export default function RepCard(props) {

    //console.log(props.name)


  return (
    <View style={styles.testing}>
        <Text style={styles.headerContainer} >
            {props.name}
        </Text>

        <Text>
            Election ID: {props.id}
        </Text>

        <Text>
            Date: {props.date}
        </Text>

        <Text>
            OCD Identifier: {props.ocdDivisionId}
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    width: 315,
    height: 133,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  testing:{
    flex: 1,
    width: '100%',
    margin: 15,
    padding: 10,
  },
  headerContainer:{
      fontSize: 20,
  }
});
