import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Estilo from './estilo';
import Quadrado from './Quadrado';
export default props =>{

        return (
          <View style={style.FlexV1}>
            <View style={style.v1}/>
            <View style={style.v2}/>


          </View>

        );
};


const style = StyleSheet.create({
FlexV1: {
  width: '100',
  flexGrow: 1,
  backgroundColor: '#000',
},
v1:{
backgroundColor:"#090",
flexGrow: 1,

},
v2:{
  backgroundColor:"#009",
  flexGrow: 1,


}
});
