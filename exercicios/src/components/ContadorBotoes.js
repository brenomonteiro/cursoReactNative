import React from 'react';
import {Text,View, StyleSheet, Button} from 'react-native';
import Estilo from './estilo';


export default props =>{
        return (
          <>
          <Button title="+" onPress={props.inc}/>
          <Button title="-" onPress={props.dec}/>
          </>
        );
};

const style = StyleSheet.create({
  Display:{
    backgroundColor: '#000',
    padding: 20,
    width: 300,
  },
  DisplayText:{
    color: '#FFF',
  }
});
