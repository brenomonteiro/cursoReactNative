import React,{Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import Estilo from '../estilo';
import Numero from './Numero';

export default class Mega extends Component{

  state = {
    qtdeNumeros: this.props.qtdeNumeros,
    numeros: [],
  };


  alterarQauantidadeNumero(qtde){
    this.setState({qtdeNumeros: +qtde});
  }

 gerarNumeroNaoContido = (nums: number[]) => {
  const novo = parseInt(Math.random() * 60) + 1;
  return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
};

gerarNumeros = () => {

  const numeros = Array(this.state.qtdeNumeros).fill().reduce(n => [...n,this.gerarNumeroNaoContido(n)],[]).sort((a, b) => a - b)

  this.setState({numeros})

}

exibirNumeros = () => {
  const nums = this.state.numeros;

  return nums.map(num=>{
    return <Numero key={num} num={num}/>;
  });
};


render(){
  return(
    <>
    <Text style={Estilo.txtG}>Gerador de Mega-Sena

    </Text>
    <TextInput
    keyboardType={'numeric'}
    style={{borderBottomWidth: 1}}
    placeholder='qnde de numeros'
    value={this.state.qtdeNumeros}
    onChangeText={texto=> this.alterarQauantidadeNumero(texto)}/>
     <Button
     title="gerar"
      onPress={this.gerarNumeros}/>
<Text>
  {this.state.numeros.join(',')}
</Text>

<View style={{
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center'
}}>
  {this.exibirNumeros()}
</View>

    </>
  );
}

};
