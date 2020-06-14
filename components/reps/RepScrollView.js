import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ElectionCard from '../elections/ElectionCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import moment from 'moment';

export default function RepScrollView(props){


  // function renderItem({ item, index }) {
  //   //Render election
  //   return (
  //     <RepCard
  //     name = {item.name}
  //     id = {item.id}
  //     date = {item.electionDay}
  //     ocdDivisionId = {item.ocdDivisionId}
  //     />
  //   );
  // }
  
//   if(props.listOfReps.length > 0){
//     return (
//       <SafeAreaView style={styles.container}>
//         <FlatList
//           data={props.listOfReps}
//           renderItem={renderItem}
//           showsVerticalScrollIndicator={false}
//           />
//       </SafeAreaView>
//     );
//   }else{
    return(<View/>)
  //}
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingTop: 15,
    },
  });
