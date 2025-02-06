import React,{Fragment} from 'react';
import {View, Text} from 'react-native';
import Estilo from './estilo';

export default props => {
  return(
//exemplos de fragment no react js
    <>
    <Text style={Estilo.txtG}>{props.principal}</Text>
    <Text>{props.secundario}</Text>
 </>

    // <Fragment>
    //    <Text style={Estilo.txtG}>{props.principal}</Text>
    //    <Text>{props.secundario}</Text>
    // </Fragment>

    // <React.Fragment>
    //    <Text style={Estilo.txtG}>{props.principal}</Text>
    //    <Text>{props.secundario}</Text>
    // </React.Fragment>


  // <View>
  //   <Text style={Estilo.txtG}>{props.principal}</Text>
  //   <Text>{props.secundario}</Text>
  // </View>
);
};
