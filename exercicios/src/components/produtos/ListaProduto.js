import React from 'react';
import {Text} from 'react-native';
import Estilo from '../estilo';
import produtos from './produtos';
export default props =>{

  function lista(){
    return produtos.map(p=> {
      return <Text key={p.id}>
      {p.id} {p.nome} tem valor de {p.preco}
    </Text>;
    });
  }
        return (
          <>
          <Text style={Estilo.txtG}>
            Lista de produtos
          </Text>
          {produtos.map(
            p =>{
              return <Text key={p.id}>
                {p.id} {p.nome} tem valor de {p.preco}
              </Text>;
            }
          )}
          </>

        );
};
