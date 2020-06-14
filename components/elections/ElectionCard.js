import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';



export default function ElectionCard(props) {

    //console.log(props.name)


    // const derp = props.ocdDivisionId.match(/\/state:([a-z]+)/);
    // const place = props.ocdDivisionId.match(/\/place:([a-z]+)/);

    // if (derp) derp = derp[1];
    // if (place) place = place[1];


  return (
    <View style={styles.testing}>
         <LinearGradient
            colors={['#eeeeee','#0df2c8']}
            style={styles.linearGrad}
            >
        <Text style={styles.headerContainer} >
            {props.name}
        </Text>
        </LinearGradient>

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
    marginVertical: 15,
    //marginRight: 15,
    //padding: 20,
    borderWidth: 1,
    borderColor: '#0df2c8',
  },
  headerContainer:{
      fontSize: 20,
  }
});
