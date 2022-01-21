import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Welcome = props => {
  return (
    <View style={styles.view}>
      <img src="http://127.0.0.1:8887/piano-royal.jpg" alt="piano"/>
      
       <TouchableOpacity 
            style={styles.btn}
            onPress={() => props.changeScreenParam('P')}>
              <Text style={styles.btnText}>
				        Play
              </Text>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#fff',
    padding: 9,
    margin: 5,
    borderRadius: 50,
    borderWidth: 1,
  },
  btnText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    width: 50
  },
  view: {
    justifyContent: 'center'
  }
});

export default Welcome;
