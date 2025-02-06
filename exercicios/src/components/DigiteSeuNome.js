import React, {useState} from 'react';
import {Text, Button, View, TextInput} from 'react-native';
import Estilo from './estilo';

export default() => {
const [nome, setNome] = useState('Teste');

  return (
    <View>
      <Text>{nome}</Text>
      <TextInput
      placeholder="Digite seu Nome"
      value={nome}
      onChangeText={nome => setNome(nome)}/>
    </View>
  );
};
