import React from 'react';
import {FlatList, Text} from 'react-native';
import Estilo from '../estilo';
import produtos from './produtos';
export default props =>{

        return (
          <>
          <Text style={Estilo.txtG}>
            Lista de produtos v2
          </Text>
          <FlatList
          data={produtos}
          keyExtractor={i => i.id}
          renderItem={({item: p }) => {
            return <Text >
                            {p.id} {p.nome} tem valor de {p.preco}
                          </Text>;
          }}/>
          </>

        );
};
