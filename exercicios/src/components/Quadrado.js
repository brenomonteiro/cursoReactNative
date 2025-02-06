import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Estilo from './estilo';
export default props =>{

  const lado = 50;
        return (
          <View style={{
            height: lado,
            width: lado,
            backgroundColor: props.color || '#000'
          }}>
<Text style={Estilo.txtG}></Text>

          </View>

        );
};
