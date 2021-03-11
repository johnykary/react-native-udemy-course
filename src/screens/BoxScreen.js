/*
    Parent      |    Child
   -------------------------
  alignItems    |  flex
  justifyContent|  alignSelf -> overides alignItems
  flexDirection | 

  ...StyleSheet.absoluteFillObject -> position: 'absolute', top: 0, bottom: 0, right: 0, left:0

*/
import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";


const BoxScreen = () => {

  return (
    <View style = {styles.viewStyle}>
        <View style = {styles.viewOneStyle}/>
        <View style = {styles.viewTwoStyle}/>
        <View style = {styles.viewThreeStyle}/>
     </View>
  );
};

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOneStyle:{
        backgroundColor: 'red',
        height: 50,
        width:50,
    },
    viewTwoStyle:{
        height: 50,
        width:50,
        backgroundColor: 'green',
        borderColor: 'red',
        top: 50
    },
    viewThreeStyle:{
        height: 50,
        width:50,
        backgroundColor: 'blue',
        borderColor: 'red',
    },
    
});

export default BoxScreen;
