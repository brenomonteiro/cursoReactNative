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
  flex:1,
  width: '100%',
  alignItems: "flex-start", // eixo x
  justifyContent:  "space-between", //eixo y
  backgroundColor: '#000',
},
});
