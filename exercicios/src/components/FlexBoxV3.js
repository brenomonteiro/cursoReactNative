import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Estilo from './estilo';
import Quadrado from './Quadrado';
export default props =>{

        return (
          <View style={style.FlexV1}>

            <Quadrado/>
            <Quadrado color="#f00"/>
            <Quadrado color="#090"/>
            <Quadrado color="#009"/>

          </View>

        );
};


const style = StyleSheet.create({
FlexV1: {
  flexDirection:"row",
  justifyContent:"flex-end", //organiza no eixo principal

  alignItems:"center",
  height: 350,
  width: '100%',
  backgroundColor: '#000',
},
});
