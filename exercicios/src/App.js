import React from 'react';

import { View, StyleSheet } from 'react-native';

import Primeiro from './components/Primeiro';

// import CompPadrao ,{ Comp1, Comp2} from './components/Multi';

// import Aleatorio from './components/Aleatorio';

// import MinMax  from './components/minmax';

// import Titulo from './components/Titulo';

// import Botao from './components/Botao';
// import Contador from './components/Contador';
// import Pai from './components/indireta/Pai';
// import ContadorV2 from './components/ContadorV2';

import Familia from './components/relacao/Familia';

import Membro from './components/relacao/Membro';
import ListaProduto from './components/produtos/ListaProduto';
import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
import DigiteSeuNome from './components/DigiteSeuNome';
import Quadrado from './components/Quadrado';
import FlexBoxV1 from './components/FlexBoxV1';
import FlexBoxV2 from './components/FlexBoxV2';
import FlexBoxV3 from './components/FlexBoxV3';
import FlexBoxV4 from './components/FlexBoxV4';
import Mega from './components/mega/Mega';

export default () =>(
  <View style = {style.App}>

<Mega qtdeNumeros={7}/>
    {
    /*<FlexBoxV4/><DigiteSeuNome/><ListaProdutosV2/><Familia>
    <Membro nome="Ana" sobrenome="silva"/>
    <Membro nome="Carlos" sobrenome="silva"/>
    </Familia> <ContadorV2/>

    <Contador inicial={100} passo={13}/>
     <Botao/>
    <Titulo principal="Cada produto" secundario="Tela de cadastro"/>
     <MinMax min="3" max="20"/>
    <Aleatorio  min={1} max={60}/>
    <Aleatorio  min={1} max={60}/>
    <Aleatorio  min={1} max={60}/>
    <Aleatorio  min={1} max={60}/>
    <Aleatorio  min={1} max={60}/>
    <Aleatorio  min={1} max={60}/> */}
    {/* <CompPadrao/>
    <Comp1/>
    <Comp2/>
    <Primeiro/> */}
  </View>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent:"center",
    alignItems:"center",
    padding: 20,
  },
});
