import {StyleSheet, Text, Dimensions, TouchableHighlight} from 'react-native';

const width = Dimensions.get('window').width / 4;
const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: width,
    width: width,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: ' center',
    borderWidth: 0,
    borderColor: '#888',
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#fa8231',
  },
  buttonDouble: {
    width: width * 2,
  },
  buttonTriple: {
    width: width * 3,
  },
});

export default props => {
  const stylesButton = [styles.button];
  if (props.double) {
    stylesButton.push(styles.buttonDouble);
  }
  if (props.triple) {
    stylesButton.push(styles.buttonTriple);
  }
  if (props.operation) {
    stylesButton.push(styles.operationButton);
  }
  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style={stylesButton}>{props.label} </Text>
    </TouchableHighlight>
  );
};
