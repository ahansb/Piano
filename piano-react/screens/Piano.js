import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#fff',
    padding: 9,
    margin: 35,
    borderRadius: 50,
    borderWidth: 1,
  },
  btnText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
});

const Piano = props => {
  let colors= {
    colorC: "white",
    colorCs: "black",
    colorD: "white",
    colorDs: "black",
    colorE: "white",
    colorF: "white",
    colorFs: "black",
    colorG: "white",
    colorGs: "black",
    colorA: "white",
    colorAs: "black",
    colorB: "white",
  };

  let sound = {};
  const soundList = ["C", "Cs", "D", "Ds", "E", "F", "Fs", "G", "Gs", "A", "As", "B"]
  soundList.forEach(note => {
      sound[note] = new Audio("http://127.0.0.1:8887/audio/" +note + ".mp3");
  });

  function stroke(note) {     
    sound[note].play();           
  }



  return (
    <View >
      <View style={{ flex: 1, flexDirection: "column", alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
              <View
                  style={{ backgroundColor: "white", height: 100, width: 32, borderLeftWidth: 1, borderTopWidth: 1, }} >
              </View >
              <TouchableOpacity
                  onPress={() => stroke("Cs")}
                  style={{ backgroundColor: colors.colorCs, height: 100, width: 32, borderTopWidth: 1, borderLeftWidth: 1, }} >
              </TouchableOpacity >
              <View
                  style={{ backgroundColor: "white", height: 100, width: 16, borderTopWidth: 1, }} >
              </View >
              <TouchableOpacity
                  onPress={() => stroke("Ds")}
                  style={{ backgroundColor: colors.colorDs, height: 100, width: 32, borderTopWidth: 1, borderLeftWidth: 1, }} >
              </TouchableOpacity >
              <View
                  style={{ backgroundColor: "white", height: 100, width: 32, borderTopWidth: 1, }} >
              </View >
              <View
                  style={{ backgroundColor: "white", height: 100, width: 32, borderTopWidth: 1, borderLeftWidth: 1, }} >
              </View >
              <TouchableOpacity
                  onPress={() => stroke("Fs")}
                  style={{ backgroundColor: colors.colorFs, height: 100, width: 32, borderTopWidth: 1, }} >
              </TouchableOpacity >
              <View
                  style={{ backgroundColor: "white", height: 100, width: 16, borderTopWidth: 1, }} >
              </View >
              <TouchableOpacity
                  onPress={() => stroke("Gs")}
                  style={{ backgroundColor: colors.colorGs, height: 100, width: 32, borderTopWidth: 1, }} >
              </TouchableOpacity >
              <View
                  style={{ backgroundColor: "white", height: 100, width: 16, borderTopWidth: 1, }} >
              </View >
              <TouchableOpacity
                  onPress={() => stroke("As")}
                  style={{ backgroundColor: colors.colorAs, height: 100, width: 32, borderTopWidth: 1, }} >
              </TouchableOpacity >
              <View
                  style={{ backgroundColor: "white", height: 100, width: 32, borderRightWidth: 1, borderTopWidth: 1, }} >
              </View >

          </View>

          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>

              <TouchableOpacity
                  onPress={() => stroke("C")}             
                  style={{ backgroundColor: colors.colorC, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
              </TouchableOpacity >
              <TouchableOpacity
                  onPress={() => stroke("D")}
                  style={{ backgroundColor: colors.colorD, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
              </TouchableOpacity >
              <TouchableOpacity
                  onPress={() => stroke("E")}
                  style={{ backgroundColor: colors.colorE, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
              </TouchableOpacity >
              <TouchableOpacity
                  onPress={() => stroke("F")}
                  style={{ backgroundColor: colors.colorF, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
              </TouchableOpacity >
              <TouchableOpacity
                  onPress={() => stroke("G")}
                  style={{ backgroundColor: colors.colorG, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
              </TouchableOpacity >
              <TouchableOpacity
                  onPress={() => stroke("A")}
                  style={{ backgroundColor: colors.colorA, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
              </TouchableOpacity >
              <TouchableOpacity
                  onPress={() => stroke("B")}
                  style={{ backgroundColor: colors.colorB, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1, borderRightWidth: 1 }} >
              </TouchableOpacity >
          </View>
      </View>
      <TouchableOpacity 
            style={styles.btn}
            onPress={() => props.changeScreenParam('W')}>
              <Text style={styles.btnText}>
				        Back
              </Text>
          </TouchableOpacity>
    </View>
  );
};

export default Piano;
