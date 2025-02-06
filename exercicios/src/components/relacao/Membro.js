import React from 'react';
import {Button, Text} from 'react-native';
import Estilo from '../estilo';
export default props =>{
        function gerarNumero(min, max){
          const fator = max - min + 1;
          return parseInt(Math.random() * fator) + min;
        }

        return (
         <Text style={Estilo.txtG}>
{props.nome} {props.sobrenome}
         </Text>

        );
};
